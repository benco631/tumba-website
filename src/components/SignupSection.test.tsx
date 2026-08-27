import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { SignupSection } from "./SignupSection";
import { ContactMain } from "./main-site/ContactMain";
import { BusinessContact } from "./business-site/BusinessContact";

describe("SignupSection waitlist submission", () => {
  const originalBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const originalPolicyVersion =
    process.env.NEXT_PUBLIC_PRIVACY_POLICY_VERSION;

  beforeEach(() => {
    process.env.NEXT_PUBLIC_API_BASE_URL = "https://api.test.local";
    process.env.NEXT_PUBLIC_PRIVACY_POLICY_VERSION = "2026-08-23";
    window.matchMedia = vi.fn().mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }) as unknown as typeof window.matchMedia;
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    process.env.NEXT_PUBLIC_API_BASE_URL = originalBaseUrl;
    process.env.NEXT_PUBLIC_PRIVACY_POLICY_VERSION = originalPolicyVersion;
    cleanup();
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("submits the actual React form with canonical E.164 and no blank fullName", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 201 });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    const { container } = render(<SignupSection />);

    await user.type(
      container.querySelector<HTMLInputElement>("#signup-phone")!,
      "(054) 456-7890",
    );
    await user.click(
      container.querySelector<HTMLInputElement>("#signup-privacy")!,
    );
    fireEvent.submit(container.querySelector("form")!);

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    const body = JSON.parse(init.body as string) as Record<string, unknown>;
    expect(body).toMatchObject({
      phone: "+972544567890",
      audienceType: "USER",
      source: "users-landing-page",
      marketingConsent: false,
      privacyAccepted: true,
      privacyPolicyVersion: "2026-08-23",
    });
    expect(body).not.toHaveProperty("fullName");
    expect(console.error).not.toHaveBeenCalled();
    expect(console.warn).not.toHaveBeenCalled();
  });

  it("blocks invalid phone input and identifies the field accessibly", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    const { container } = render(<SignupSection />);
    const phone = container.querySelector<HTMLInputElement>("#signup-phone")!;

    await user.type(phone, "0544567890 trailing");
    await user.click(
      container.querySelector<HTMLInputElement>("#signup-privacy")!,
    );
    fireEvent.submit(container.querySelector("form")!);

    await waitFor(() => expect(phone.getAttribute("aria-invalid")).toBe("true"));
    expect(phone.getAttribute("aria-describedby")).toBe(
      "signup-contact-error",
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("links every React form to the waitlist-scoped policy (not the general app policy) without toggling consent", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <>
        <SignupSection />
        <ContactMain />
        <BusinessContact />
      </>,
    );
    const consents = ["signup-privacy", "main-privacy", "biz-privacy"].map(
      (id) => container.querySelector<HTMLInputElement>(`#${id}`)!,
    );
    const links = Array.from(
      container.querySelectorAll<HTMLAnchorElement>(".privacy-policy-link"),
    );

    expect(links).toHaveLength(3);
    expect(
      links.every((link) => link.getAttribute("href") === "/privacy/waitlist"),
    ).toBe(true);
    // Not "#" and not the general app policy - each is a real, distinct route.
    expect(links.every((link) => link.getAttribute("href") !== "#")).toBe(true);
    expect(
      links.every((link) => link.getAttribute("href") !== "/privacy"),
    ).toBe(true);
    expect(links.every((link) => link.tabIndex === 0)).toBe(true);
    expect(consents.every((consent) => !consent.checked)).toBe(true);
    for (let index = 0; index < links.length; index++) {
      links[index].addEventListener("click", (event) => event.preventDefault(), {
        once: true,
      });
      await user.click(links[index]);
      expect(consents[index].checked).toBe(false);
    }
  });

  it("submits the main / form with canonical phone and its message", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 201 });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    const { container } = render(<ContactMain />);

    await user.type(
      container.querySelector<HTMLInputElement>("#main-phone")!,
      "+1 202 555 0123",
    );
    await user.type(
      container.querySelector<HTMLTextAreaElement>("#main-message")!,
      "Main route note",
    );
    await user.click(
      container.querySelector<HTMLInputElement>("#main-privacy")!,
    );
    fireEvent.submit(container.querySelector("form")!);

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(JSON.parse(init.body as string)).toMatchObject({
      phone: "+12025550123",
      message: "Main route note",
      audienceType: "USER",
      source: "main-website",
    });
  });

  it("submits /businesses with canonical phone and all business fields", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 201 });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    const { container } = render(<BusinessContact />);

    await user.type(
      container.querySelector<HTMLInputElement>("#biz-business")!,
      "Synthetic Cafe",
    );
    await user.type(
      container.querySelector<HTMLInputElement>("#biz-city")!,
      "Test City",
    );
    await user.type(
      container.querySelector<HTMLInputElement>("#biz-phone")!,
      "054-456-7890",
    );
    await user.type(
      container.querySelector<HTMLTextAreaElement>("#biz-note")!,
      "Synthetic business note",
    );
    await user.click(
      container.querySelector<HTMLInputElement>("#biz-privacy")!,
    );
    fireEvent.submit(container.querySelector("form")!);

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const [, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(JSON.parse(init.body as string)).toMatchObject({
      phone: "+972544567890",
      businessName: "Synthetic Cafe",
      city: "Test City",
      message: "Synthetic business note",
      audienceType: "BUSINESS",
      source: "businesses-landing-page",
    });
  });
});
