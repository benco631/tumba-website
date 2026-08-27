// Shared client for the backend waitlist API, used by every lead form across
// the site (main "/", "/users", "/businesses"; the static website/ implements
// the same contract in vanilla JS — see website/index.html's submitForm).
//
// The API base URL and privacy-policy version are both read from public,
// build-time environment variables rather than hard-coded, so staging/
// production can point at different backends without a code change:
//   NEXT_PUBLIC_API_BASE_URL           real backend host — UNSET until one is
//                                       approved, see env.example
//   NEXT_PUBLIC_PRIVACY_POLICY_VERSION approved version sent with consent
// The consent-link URL itself is no longer env-driven — see
// src/components/shared/PrivacyPolicyLabel.tsx, which links directly to
// the real internal /privacy/waitlist route.
// Until the API base and privacy version are set, submission is intentionally kept unavailable
// (see submitWaitlist's "config" outcome) rather than posting to a guessed
// URL or claiming an unapproved policy version. See env.example.

import { validateAndNormalizePhone } from "./phone";

export type AudienceType = "USER" | "BUSINESS" | "INVESTOR";

export function getConfiguredPrivacyPolicyVersion(): string {
  return process.env.NEXT_PUBLIC_PRIVACY_POLICY_VERSION ?? "";
}

export type WaitlistFormInput = {
  fullName?: string;
  email: string;
  phone: string;
  audienceType: AudienceType;
  source: string;
  message?: string;
  businessName?: string;
  businessType?: string;
  city?: string;
  marketingConsent: boolean;
  privacyAccepted: boolean;
};

export type WaitlistPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  audienceType: AudienceType;
  source: string;
  message?: string;
  businessName?: string;
  businessType?: string;
  city?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  marketingConsent: boolean;
  privacyAccepted: boolean;
  privacyPolicyVersion: string;
};

export type FieldErrors = Partial<Record<"email" | "phone" | "privacyAccepted", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_VALIDATION_MESSAGE =
  "יש להזין מספר טלפון ישראלי תקין או מספר בינלאומי הכולל קידומת מדינה.";

/** Shared validation aligned with the confirmed backend phone contract. */
export function validateWaitlistForm(input: {
  email: string;
  phone: string;
  privacyAccepted: boolean;
}): FieldErrors {
  const errors: FieldErrors = {};
  const email = input.email.trim();
  const phone = input.phone.trim();

  if (!email && !phone) {
    errors.email = "נא להשאיר אימייל או טלפון";
    errors.phone = "נא להשאיר אימייל או טלפון";
  } else {
    if (email && !EMAIL_RE.test(email)) errors.email = "האימייל לא נראה תקין";
    if (phone && !validateAndNormalizePhone(phone).valid) {
      errors.phone = PHONE_VALIDATION_MESSAGE;
    }
  }

  if (!input.privacyAccepted) errors.privacyAccepted = "יש לאשר את מדיניות הפרטיות כדי להמשיך";

  return errors;
}

/** Reads utm_source/utm_medium/utm_campaign from the current URL, if present. No fingerprinting, no IP collection. */
export function readUtmParams(): Pick<WaitlistPayload, "utmSource" | "utmMedium" | "utmCampaign"> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const out: Pick<WaitlistPayload, "utmSource" | "utmMedium" | "utmCampaign"> = {};
  const source = params.get("utm_source");
  const medium = params.get("utm_medium");
  const campaign = params.get("utm_campaign");
  if (source) out.utmSource = source;
  if (medium) out.utmMedium = medium;
  if (campaign) out.utmCampaign = campaign;
  return out;
}

/** Every visible-but-optional field is included only when non-empty — never sent as "". */
export function buildWaitlistPayload(input: WaitlistFormInput, privacyPolicyVersion: string): WaitlistPayload {
  const fullName = input.fullName?.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const normalizedPhone = phone ? validateAndNormalizePhone(phone) : undefined;
  const message = input.message?.trim();
  const businessName = input.businessName?.trim();
  const businessType = input.businessType?.trim();
  const city = input.city?.trim();

  const payload: WaitlistPayload = {
    audienceType: input.audienceType,
    source: input.source,
    marketingConsent: input.marketingConsent,
    privacyAccepted: input.privacyAccepted,
    privacyPolicyVersion,
    ...readUtmParams(),
  };
  if (fullName) payload.fullName = fullName;
  if (email) payload.email = email;
  if (normalizedPhone?.valid) payload.phone = normalizedPhone.e164;
  if (message) payload.message = message;
  if (businessName) payload.businessName = businessName;
  if (businessType) payload.businessType = businessType;
  if (city) payload.city = city;
  return payload;
}

export type WaitlistErrorKind = "validation" | "conflict" | "rate_limit" | "network" | "server" | "config";

export type WaitlistResult = { ok: true } | { ok: false; kind: WaitlistErrorKind; message: string };

// 409 deliberately does not name which field conflicted ("email already
// registered", etc.) — that would let a submission be used to probe whether
// a specific email/phone is already in the system.
const MESSAGES: Record<WaitlistErrorKind, string> = {
  validation: "בדקו שהפרטים שהזנתם תקינים ונסו שוב.",
  conflict: "לא ניתן להשלים את ההרשמה כרגע. אם כבר נרשמתם בעבר, אין צורך לשלוח שוב.",
  rate_limit: "יותר מדי ניסיונות. נסו שוב בעוד כמה דקות.",
  network: "בעיית תקשורת. בדקו את החיבור לאינטרנט ונסו שוב.",
  server: "משהו השתבש אצלנו. נסו שוב בעוד רגע.",
  config: "שירות ההרשמה אינו זמין כרגע. נסו שוב מאוחר יותר.",
};

// 400/409/429 are expected application outcomes, not bugs — they must never
// be logged. Only genuinely unexpected failures (network/server/missing
// config) are worth a diagnostic, and even those never print in production.
const UNEXPECTED_KINDS = new Set<WaitlistErrorKind>(["network", "server", "config"]);

function statusToKind(status: number): WaitlistErrorKind {
  if (status === 409) return "conflict";
  if (status === 429) return "rate_limit";
  if (status === 400 || status === 422) return "validation";
  return "server";
}

/**
 * No monitoring/error-reporting service is wired up in this project. In
 * development this prints a minimal, non-PII diagnostic (kind + HTTP status
 * only, never the payload or response body); in production it is silent —
 * wiring a real monitoring path is a follow-up, not something to fake here.
 */
function reportUnexpected(kind: WaitlistErrorKind, status?: number) {
  if (!UNEXPECTED_KINDS.has(kind)) return;
  if (process.env.NODE_ENV === "production") return;
  console.warn("[waitlist] unexpected failure", kind, status ?? "");
}

/**
 * POSTs to {NEXT_PUBLIC_API_BASE_URL}/waitlist. Never throws — every outcome
 * (including a missing base URL, a network failure, or a non-2xx response)
 * resolves to a WaitlistResult with a safe, pre-written Hebrew message. Never
 * logs the payload or the raw response body, so no PII and no backend
 * implementation detail ever reaches the browser console; expected outcomes
 * (400/409/429) are never logged at all.
 */
export async function submitWaitlist(payload: WaitlistPayload): Promise<WaitlistResult> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base || !payload.privacyPolicyVersion) {
    reportUnexpected("config");
    return { ok: false, kind: "config", message: MESSAGES.config };
  }

  let res: Response;
  try {
    res = await fetch(`${base.replace(/\/+$/, "")}/waitlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    reportUnexpected("network");
    return { ok: false, kind: "network", message: MESSAGES.network };
  }

  if (res.ok) return { ok: true };

  const kind = statusToKind(res.status);
  reportUnexpected(kind, res.status);
  return { ok: false, kind, message: MESSAGES[kind] };
}
