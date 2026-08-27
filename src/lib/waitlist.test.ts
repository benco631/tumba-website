import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  validateWaitlistForm,
  readUtmParams,
  buildWaitlistPayload,
  submitWaitlist,
  type WaitlistPayload,
} from "./waitlist";

describe("validateWaitlistForm", () => {
  it("does not require fullName", () => {
    const errors = validateWaitlistForm({ email: "a@b.com", phone: "", privacyAccepted: true });
    expect(errors).not.toHaveProperty("fullName");
    expect(errors).toEqual({});
  });

  it("requires at least email or phone", () => {
    const errors = validateWaitlistForm({ email: "", phone: "", privacyAccepted: true });
    expect(errors.email).toBeTruthy();
    expect(errors.phone).toBeTruthy();
  });

  it("accepts email only", () => {
    const errors = validateWaitlistForm({ email: "dana@mail.com", phone: "", privacyAccepted: true });
    expect(errors.email).toBeUndefined();
    expect(errors.phone).toBeUndefined();
  });

  it("accepts phone only", () => {
    const errors = validateWaitlistForm({ email: "", phone: "0544567890", privacyAccepted: true });
    expect(errors.email).toBeUndefined();
    expect(errors.phone).toBeUndefined();
  });

  it("rejects a malformed email", () => {
    const errors = validateWaitlistForm({ email: "not-an-email", phone: "", privacyAccepted: true });
    expect(errors.email).toBeTruthy();
  });

  it("rejects a malformed phone", () => {
    const errors = validateWaitlistForm({ email: "", phone: "abc", privacyAccepted: true });
    expect(errors.phone).toBeTruthy();
  });

  it("accepts a space-grouped valid international phone number", () => {
    const errors = validateWaitlistForm({ email: "", phone: "+972 54 456 7890", privacyAccepted: true });
    expect(errors.phone).toBeUndefined();
  });

  it("accepts a valid non-Israeli international phone number", () => {
    const errors = validateWaitlistForm({ email: "", phone: "+1 202 555 0123", privacyAccepted: true });
    expect(errors.phone).toBeUndefined();
  });

  it("rejects a phone with too few digits", () => {
    const errors = validateWaitlistForm({ email: "", phone: "+1 23", privacyAccepted: true });
    expect(errors.phone).toBeTruthy();
  });

  it("rejects semantic and structural phone failures", () => {
    const errors = validateWaitlistForm({ email: "", phone: "0544567890 trailing", privacyAccepted: true });
    expect(errors.phone).toBeTruthy();
  });

  it("requires privacy acceptance", () => {
    const errors = validateWaitlistForm({ email: "dana@mail.com", phone: "", privacyAccepted: false });
    expect(errors.privacyAccepted).toBeTruthy();
  });

  it("passes with a fully valid submission", () => {
    const errors = validateWaitlistForm({ email: "dana@mail.com", phone: "", privacyAccepted: true });
    expect(errors).toEqual({});
  });
});

describe("readUtmParams", () => {
  const originalLocation = window.location;

  afterEach(() => {
    Object.defineProperty(window, "location", { value: originalLocation, writable: true });
  });

  it("returns an empty object when no utm params are present", () => {
    Object.defineProperty(window, "location", { value: new URL("https://tumbapp.com/"), writable: true });
    expect(readUtmParams()).toEqual({});
  });

  it("reads utm_source/utm_medium/utm_campaign from the URL", () => {
    Object.defineProperty(window, "location", {
      value: new URL("https://tumbapp.com/?utm_source=ig&utm_medium=cpc&utm_campaign=launch"),
      writable: true,
    });
    expect(readUtmParams()).toEqual({ utmSource: "ig", utmMedium: "cpc", utmCampaign: "launch" });
  });

  it("omits only the missing utm keys", () => {
    Object.defineProperty(window, "location", {
      value: new URL("https://tumbapp.com/?utm_source=ig"),
      writable: true,
    });
    expect(readUtmParams()).toEqual({ utmSource: "ig" });
  });
});

describe("buildWaitlistPayload", () => {
  it("builds the exact contract shape, omitting empty email/phone", () => {
    const payload = buildWaitlistPayload(
      {
        fullName: " Dana Levi ",
        email: " dana@mail.com ",
        phone: "",
        audienceType: "USER",
        source: "users-landing-page",
        marketingConsent: true,
        privacyAccepted: true,
      },
      "1.0",
    );
    expect(payload).toEqual({
      fullName: "Dana Levi",
      email: "dana@mail.com",
      audienceType: "USER",
      source: "users-landing-page",
      marketingConsent: true,
      privacyAccepted: true,
      privacyPolicyVersion: "1.0",
    } satisfies Partial<WaitlistPayload>);
    expect(payload.phone).toBeUndefined();
  });

  it("includes message when the contact-form message field is filled in", () => {
    const payload = buildWaitlistPayload(
      {
        fullName: "Dana",
        email: "dana@mail.com",
        phone: "",
        message: "  Looking forward to the pilot  ",
        audienceType: "USER",
        source: "main-website",
        marketingConsent: false,
        privacyAccepted: true,
      },
      "1.0",
    );
    expect(payload.message).toBe("Looking forward to the pilot");
  });

  it("includes businessName/businessType/city when provided", () => {
    const payload = buildWaitlistPayload(
      {
        fullName: "Owner",
        email: "owner@biz.com",
        phone: "",
        businessName: "Cool Cafe",
        businessType: "בית קפה",
        city: "תל אביב",
        audienceType: "BUSINESS",
        source: "businesses-landing-page",
        marketingConsent: false,
        privacyAccepted: true,
      },
      "1.0",
    );
    expect(payload.businessName).toBe("Cool Cafe");
    expect(payload.businessType).toBe("בית קפה");
    expect(payload.city).toBe("תל אביב");
  });

  it("never sends empty strings for the optional visible fields", () => {
    const payload = buildWaitlistPayload(
      {
        fullName: "   ",
        email: "dana@mail.com",
        phone: "",
        message: "   ",
        businessName: "",
        businessType: undefined,
        city: "  ",
        audienceType: "USER",
        source: "users-landing-page",
        marketingConsent: false,
        privacyAccepted: true,
      },
      "1.0",
    );
    expect(payload).not.toHaveProperty("message");
    expect(payload).not.toHaveProperty("fullName");
    expect(payload).not.toHaveProperty("businessName");
    expect(payload).not.toHaveProperty("businessType");
    expect(payload).not.toHaveProperty("city");
  });

  it("normalizes displayed phone formatting to canonical E.164", () => {
    const payload = buildWaitlistPayload(
      {
        email: "",
        phone: "  (054) 456-7890  ",
        audienceType: "USER",
        source: "users-landing-page",
        marketingConsent: false,
        privacyAccepted: true,
      },
      "1.0",
    );
    expect(payload.phone).toBe("+972544567890");
  });
});

describe("submitWaitlist", () => {
  const originalEnv = process.env.NEXT_PUBLIC_API_BASE_URL;

  beforeEach(() => {
    process.env.NEXT_PUBLIC_API_BASE_URL = "https://api.test.local";
    vi.stubEnv("NODE_ENV", "test"); // treated as non-production: dev diagnostics may fire
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    process.env.NEXT_PUBLIC_API_BASE_URL = originalEnv;
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  const payload: WaitlistPayload = {
    fullName: "Dana",
    email: "dana@mail.com",
    phone: "+972544567890",
    message: "Private pilot note",
    audienceType: "USER",
    source: "users-landing-page",
    marketingConsent: false,
    privacyAccepted: true,
    privacyPolicyVersion: "1.0",
  };

  it("returns ok:true on a 2xx response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, status: 201 }));
    const result = await submitWaitlist(payload);
    expect(result).toEqual({ ok: true });
  });

  it("posts to {base}/waitlist with the JSON payload", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });
    vi.stubGlobal("fetch", fetchMock);
    await submitWaitlist(payload);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.test.local/waitlist",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }),
    );
  });

  it("classifies 409 as a conflict with generic wording (no specific field named as duplicate)", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 409 }));
    const result = await submitWaitlist(payload);
    expect(result).toMatchObject({ ok: false, kind: "conflict" });
    if (!result.ok) {
      expect(result.message).not.toMatch(/האימייל|הטלפון|כתובת/); // no specific field named
      expect(result.message).not.toContain(payload.email as string);
    }
  });

  it("classifies 429 as a rate limit", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 429 }));
    const result = await submitWaitlist(payload);
    expect(result).toMatchObject({ ok: false, kind: "rate_limit" });
  });

  it("classifies 400 as validation", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 400 }));
    const result = await submitWaitlist(payload);
    expect(result).toMatchObject({ ok: false, kind: "validation" });
  });

  it("classifies 500 as a server error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));
    const result = await submitWaitlist(payload);
    expect(result).toMatchObject({ ok: false, kind: "server" });
  });

  it("classifies a thrown fetch error as network", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));
    const result = await submitWaitlist(payload);
    expect(result).toMatchObject({ ok: false, kind: "network" });
  });

  it("returns kind:config and never calls fetch when the base URL is missing", async () => {
    process.env.NEXT_PUBLIC_API_BASE_URL = "";
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const result = await submitWaitlist(payload);
    expect(result).toMatchObject({ ok: false, kind: "config" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("remains inert when the privacy-policy version is unavailable", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const result = await submitWaitlist({
      ...payload,
      privacyPolicyVersion: "",
    });
    expect(result).toMatchObject({ ok: false, kind: "config" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  describe("console output for expected outcomes (400/409/429)", () => {
    it.each([400, 409, 429])("never calls console.error or console.warn for a %i response", async (status) => {
      vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status }));
      await submitWaitlist(payload);
      expect(console.error).not.toHaveBeenCalled();
      expect(console.warn).not.toHaveBeenCalled();
    });
  });

  describe("console output for unexpected outcomes (network/server/config)", () => {
    it("never calls console.error (no raw output) for a network failure", async () => {
      vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("fail")));
      await submitWaitlist(payload);
      expect(console.error).not.toHaveBeenCalled();
    });

    it("may warn (dev-only) for a network failure outside production", async () => {
      vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("fail")));
      await submitWaitlist(payload);
      expect(console.warn).toHaveBeenCalled();
    });

    it("stays silent (no warn) for a network failure when NODE_ENV=production", async () => {
      vi.stubEnv("NODE_ENV", "production");
      vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("fail")));
      await submitWaitlist(payload);
      expect(console.warn).not.toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
    });

    it("stays silent (no warn) for a 500 when NODE_ENV=production", async () => {
      vi.stubEnv("NODE_ENV", "production");
      vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));
      await submitWaitlist(payload);
      expect(console.warn).not.toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
    });

    it("stays silent (no warn) for missing config when NODE_ENV=production", async () => {
      vi.stubEnv("NODE_ENV", "production");
      process.env.NEXT_PUBLIC_API_BASE_URL = "";
      await submitWaitlist(payload);
      expect(console.warn).not.toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
    });
  });

  it("never logs the payload contents in any diagnostic (no PII in console output)", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("fail")));
    await submitWaitlist(payload);
    const allCalls = [...(console.error as ReturnType<typeof vi.fn>).mock.calls, ...(console.warn as ReturnType<typeof vi.fn>).mock.calls];
    for (const call of allCalls) {
      const joined = call.map(String).join(" ");
      expect(joined).not.toContain(payload.email as string);
      expect(joined).not.toContain(payload.phone as string);
      expect(joined).not.toContain(payload.fullName as string);
      expect(joined).not.toContain(payload.message as string);
    }
  });
});
