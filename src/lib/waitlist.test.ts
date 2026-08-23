import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  validateWaitlistForm,
  readUtmParams,
  buildWaitlistPayload,
  submitWaitlist,
  type WaitlistPayload,
} from "./waitlist";

describe("validateWaitlistForm", () => {
  it("requires a full name", () => {
    const errors = validateWaitlistForm({ fullName: "", email: "a@b.com", phone: "", privacyAccepted: true });
    expect(errors.fullName).toBeTruthy();
  });

  it("requires at least email or phone", () => {
    const errors = validateWaitlistForm({ fullName: "Dana", email: "", phone: "", privacyAccepted: true });
    expect(errors.email).toBeTruthy();
    expect(errors.phone).toBeTruthy();
  });

  it("accepts email only", () => {
    const errors = validateWaitlistForm({ fullName: "Dana", email: "dana@mail.com", phone: "", privacyAccepted: true });
    expect(errors.email).toBeUndefined();
    expect(errors.phone).toBeUndefined();
  });

  it("accepts phone only", () => {
    const errors = validateWaitlistForm({ fullName: "Dana", email: "", phone: "050-1234567", privacyAccepted: true });
    expect(errors.email).toBeUndefined();
    expect(errors.phone).toBeUndefined();
  });

  it("rejects a malformed email", () => {
    const errors = validateWaitlistForm({ fullName: "Dana", email: "not-an-email", phone: "", privacyAccepted: true });
    expect(errors.email).toBeTruthy();
  });

  it("rejects a malformed phone", () => {
    const errors = validateWaitlistForm({ fullName: "Dana", email: "", phone: "abc", privacyAccepted: true });
    expect(errors.phone).toBeTruthy();
  });

  it("requires privacy acceptance", () => {
    const errors = validateWaitlistForm({ fullName: "Dana", email: "dana@mail.com", phone: "", privacyAccepted: false });
    expect(errors.privacyAccepted).toBeTruthy();
  });

  it("passes with a fully valid submission", () => {
    const errors = validateWaitlistForm({ fullName: "Dana", email: "dana@mail.com", phone: "", privacyAccepted: true });
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
});

describe("submitWaitlist", () => {
  const originalEnv = process.env.NEXT_PUBLIC_API_BASE_URL;

  beforeEach(() => {
    process.env.NEXT_PUBLIC_API_BASE_URL = "https://api.test.local";
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    process.env.NEXT_PUBLIC_API_BASE_URL = originalEnv;
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  const payload: WaitlistPayload = {
    fullName: "Dana",
    email: "dana@mail.com",
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

  it("classifies 409 as a conflict", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 409 }));
    const result = await submitWaitlist(payload);
    expect(result).toMatchObject({ ok: false, kind: "conflict" });
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

  it("never logs the payload contents (no PII in console output)", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 409 }));
    const errorSpy = vi.spyOn(console, "error");
    await submitWaitlist(payload);
    for (const call of errorSpy.mock.calls) {
      const joined = call.map(String).join(" ");
      expect(joined).not.toContain(payload.email as string);
      expect(joined).not.toContain(payload.fullName);
    }
  });
});
