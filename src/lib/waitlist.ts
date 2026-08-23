// Shared client for the backend waitlist API, used by every lead form across
// the site (main "/", "/users", "/businesses"; the static website/ implements
// the same contract in vanilla JS — see website/index.html's submitForm).
//
// The API base URL and privacy-policy version are both read from public,
// build-time environment variables rather than hard-coded, so staging/
// production can point at different backends without a code change:
//   NEXT_PUBLIC_API_BASE_URL          e.g. https://api.tumbaapp.com
//   NEXT_PUBLIC_PRIVACY_POLICY_VERSION the version string the backend expects
// See env.example for both.

export type AudienceType = "USER" | "BUSINESS" | "INVESTOR";

export type WaitlistFormInput = {
  fullName: string;
  email: string;
  phone: string;
  audienceType: AudienceType;
  source: string;
  marketingConsent: boolean;
  privacyAccepted: boolean;
};

export type WaitlistPayload = {
  fullName: string;
  email?: string;
  phone?: string;
  audienceType: AudienceType;
  source: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  marketingConsent: boolean;
  privacyAccepted: boolean;
  privacyPolicyVersion: string;
};

export type FieldErrors = Partial<Record<"fullName" | "email" | "phone" | "privacyAccepted", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Loose on purpose: accepts spaces/dashes/parens/+ and 7-15 digits, matching
// the range of formats already used across the existing "050-0000000"-style
// placeholders without rejecting valid international numbers.
const PHONE_RE = /^[0-9()+\-\s]{7,20}$/;
const PHONE_DIGITS_RE = /\d{7,}/;

/** Mirrors the backend's own validation so the user sees the same errors before a round-trip. */
export function validateWaitlistForm(input: {
  fullName: string;
  email: string;
  phone: string;
  privacyAccepted: boolean;
}): FieldErrors {
  const errors: FieldErrors = {};
  const fullName = input.fullName.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();

  if (!fullName) errors.fullName = "נא למלא שם מלא";

  if (!email && !phone) {
    errors.email = "נא להשאיר אימייל או טלפון";
    errors.phone = "נא להשאיר אימייל או טלפון";
  } else {
    if (email && !EMAIL_RE.test(email)) errors.email = "האימייל לא נראה תקין";
    if (phone && (!PHONE_RE.test(phone) || !PHONE_DIGITS_RE.test(phone))) errors.phone = "מספר הטלפון לא נראה תקין";
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

export function buildWaitlistPayload(input: WaitlistFormInput, privacyPolicyVersion: string): WaitlistPayload {
  const email = input.email.trim();
  const phone = input.phone.trim();
  const payload: WaitlistPayload = {
    fullName: input.fullName.trim(),
    audienceType: input.audienceType,
    source: input.source,
    marketingConsent: input.marketingConsent,
    privacyAccepted: input.privacyAccepted,
    privacyPolicyVersion,
    ...readUtmParams(),
  };
  if (email) payload.email = email;
  if (phone) payload.phone = phone;
  return payload;
}

export type WaitlistErrorKind = "validation" | "conflict" | "rate_limit" | "network" | "server" | "config";

export type WaitlistResult = { ok: true } | { ok: false; kind: WaitlistErrorKind; message: string };

const MESSAGES: Record<WaitlistErrorKind, string> = {
  validation: "בדקו שהפרטים שהזנתם תקינים ונסו שוב.",
  conflict: "הפרטים האלו כבר רשומים אצלנו — נעדכן אתכם בקרוב.",
  rate_limit: "יותר מדי ניסיונות. נסו שוב בעוד כמה דקות.",
  network: "בעיית תקשורת. בדקו את החיבור לאינטרנט ונסו שוב.",
  server: "משהו השתבש אצלנו. נסו שוב בעוד רגע.",
  config: "שירות ההרשמה אינו זמין כרגע. נסו שוב מאוחר יותר.",
};

function statusToKind(status: number): WaitlistErrorKind {
  if (status === 409) return "conflict";
  if (status === 429) return "rate_limit";
  if (status === 400 || status === 422) return "validation";
  return "server";
}

/**
 * POSTs to {NEXT_PUBLIC_API_BASE_URL}/waitlist. Never throws — every outcome
 * (including a missing base URL, a network failure, or a non-2xx response)
 * resolves to a WaitlistResult with a safe, pre-written Hebrew message. Never
 * logs the payload or the raw response body, so no PII and no backend
 * implementation detail ever reaches the browser console.
 */
export async function submitWaitlist(payload: WaitlistPayload): Promise<WaitlistResult> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) {
    console.error("[waitlist] NEXT_PUBLIC_API_BASE_URL is not configured");
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
    console.error("[waitlist] network error");
    return { ok: false, kind: "network", message: MESSAGES.network };
  }

  if (res.ok) return { ok: true };

  const kind = statusToKind(res.status);
  console.error("[waitlist] submission rejected", res.status);
  return { ok: false, kind, message: MESSAGES[kind] };
}
