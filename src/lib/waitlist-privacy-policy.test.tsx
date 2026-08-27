import { readFileSync } from "node:fs";
import { join } from "node:path";
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import WaitlistPrivacyPage, {
  metadata,
} from "@/app/privacy/waitlist/page";
import PrivacyPage from "@/app/privacy/page";
import {
  WAITLIST_PRIVACY_CONTACT_EMAIL,
  WAITLIST_PRIVACY_POLICY_MARKDOWN,
  WAITLIST_PRIVACY_POLICY_UPDATED_HE,
  WAITLIST_PRIVACY_POLICY_URL,
  WAITLIST_PRIVACY_POLICY_VERSION,
} from "./waitlist-privacy-policy";

const normalize = (value: string | null) =>
  (value ?? "").replace(/\s+/g, " ").trim();

function directBlockText(container: ParentNode): string[] {
  return Array.from(container.children).map((element) =>
    normalize(element.textContent),
  );
}

describe("waitlist-scoped privacy policy (/privacy/waitlist)", () => {
  afterEach(cleanup);

  it("renders the public Hebrew policy with the literal draft's operator, version, and contact wording", () => {
    const { container } = render(<WaitlistPrivacyPage />);
    const article = container.querySelector("article")!;

    // Literal draft title - deliberately identical to the general policy's
    // own h1 (see "does not modify the general application policy page"
    // below for the consequence of that).
    expect(article.querySelector("h1")?.textContent).toBe(
      "מדיניות הפרטיות של Tumbapp",
    );
    expect(article.querySelectorAll("h1")).toHaveLength(1);
    expect(article.textContent).toContain(
      `גרסה מוצעת: ${WAITLIST_PRIVACY_POLICY_VERSION}`,
    );
    expect(WAITLIST_PRIVACY_POLICY_VERSION).toBe("2026-08-26");
    expect(article.textContent).toContain(
      `מועד עדכון אחרון: ${WAITLIST_PRIVACY_POLICY_UPDATED_HE}`,
    );
    // Literal draft wording (section 1 and section 15) - neutral, no
    // "עוסק מורשה" / dealer-registration / separate-trade-name language.
    expect(article.textContent).toContain(
      'מופעל על ידי בן גלעד קובריגרו (להלן: "מפעיל השירות"',
    );
    expect(article.textContent).toContain(
      "מפעיל השירות ובעל השליטה במידע: בן גלעד קובריגרו",
    );
    expect(article.textContent).toContain("מותג ושירות: Tumbapp");
    expect(article.textContent).not.toContain("עוסק מורשה");
    expect(article.textContent).not.toContain("שם מסחרי של Tumba");
    expect(article.textContent).toContain(WAITLIST_PRIVACY_CONTACT_EMAIL);
    expect(WAITLIST_PRIVACY_CONTACT_EMAIL).toBe("tumba@tumbaapp.com");
    expect(
      article.querySelector(
        `a[href="mailto:${WAITLIST_PRIVACY_CONTACT_EMAIL}"]`,
      ),
    ).not.toBeNull();
  });

  it("does not render the draft-only pre-publication warning banner", () => {
    const { container } = render(<WaitlistPrivacyPage />);
    // The real warning text ("טיוטה לאישור לפני פרסום...") is kept only as
    // a source comment (waitlist-privacy-policy-config.ts), never rendered.
    expect(container.textContent).not.toMatch(/טיוטה לאישור לפני פרסום/);
  });

  it("states 24-month retention from the last interaction, permitting either deletion or anonymization", () => {
    const { container } = render(<WaitlistPrivacyPage />);
    const text = container.textContent ?? "";
    expect(text).toContain("24 חודשים ממועד האינטראקציה");
    // Literal draft wording - permits EITHER deletion or anonymization,
    // not both. The backend's approved WaitlistRetentionService implements
    // permanent deletion, which is one of these two permitted outcomes -
    // there is no contradiction between this text and current backend
    // behavior. Anonymization simply isn't implemented; it was never
    // rejected, just not built. Adding it later (as an alternative or
    // addition to deletion) would need its own implementation and its own
    // compliance review - not required by anything deployed today.
    expect(text).toContain("יעבור תהליך של צמצום או אנונימיזציה");
  });

  it("textually distinguishes itself from the application-wide policy (no /privacy hyperlink in this literal draft)", () => {
    const { container } = render(<WaitlistPrivacyPage />);
    const article = container.querySelector("article")!;
    // The literal draft explains the scope gap in prose, not via a
    // hyperlink to /privacy - unlike the earlier reconstructed version,
    // it contains no such link. Asserting its absence here so a future
    // edit that adds one back does so deliberately, not by accident.
    expect(article.textContent).toContain(
      "מדיניות זו אינה מסדירה בשלב זה את מלוא עיבוד המידע באפליקציית Tumbapp",
    );
    expect(article.querySelector('a[href="/privacy"]')).toBeNull();
  });

  it("uses the literal draft's generic supplier categories in section 5, not named processors", () => {
    // The literal draft does not name AWS, GitHub Pages, or unpkg.com -
    // it uses generic categories. An earlier task asked for those to be
    // named explicitly, informed by the tracking audit; the literal-draft
    // replacement chosen for this task supersedes that for this page's
    // rendered text. Recorded here so the trade-off is explicit rather
    // than silently lost.
    const { container } = render(<WaitlistPrivacyPage />);
    const text = container.textContent ?? "";
    expect(text).toContain("ספקי אחסון אתרים, מחשוב ענן");
    expect(text).not.toContain("Amazon Web Services");
    expect(text).not.toContain("GitHub Pages");
    expect(text).not.toContain("unpkg.com");
  });

  it("distinguishes the website domain (tumbapp.com) from the email domain (tumbaapp.com)", () => {
    const { container } = render(<WaitlistPrivacyPage />);
    const text = container.textContent ?? "";
    expect(text).toContain("tumbapp.com");
    expect(WAITLIST_PRIVACY_CONTACT_EMAIL.endsWith("@tumbaapp.com")).toBe(
      true,
    );
  });

  it("does not implement an automated unsubscribe link or self-service privacy portal in code, even though section 8's wording is hedged", () => {
    // Section 8 (literal draft) says opt-out happens "via the removal
    // mechanism that will appear in the message, if it appears" - hedged,
    // conditional wording from the draft itself, not a concrete feature
    // claim. This test only asserts nothing is actually IMPLEMENTED, per
    // "do not invent an automated unsubscribe link or self-service portal".
    const { container } = render(<WaitlistPrivacyPage />);
    expect(container.querySelector("form")).toBeNull();
    expect(container.querySelector("[data-unsubscribe]")).toBeNull();
  });

  it("contains no form or script tag in the rendered page", () => {
    const { container } = render(<WaitlistPrivacyPage />);
    expect(container.querySelector("form")).toBeNull();
    expect(container.querySelectorAll("script")).toHaveLength(0);
  });

  it("introduces no actual cookie/storage-API code in the page or its render module", () => {
    // Checked against the *source* of the page and renderer, not the
    // rendered prose - the policy text legitimately names
    // localStorage/sessionStorage/cookies in Hebrew (general policy,
    // section 7) to disclaim using them, so asserting their absence from
    // rendered text would be backwards. This checks no actual
    // browser-storage API call was wired into the code that produces this
    // route.
    const pageSource = readFileSync(
      join(process.cwd(), "app", "privacy", "waitlist", "page.tsx"),
      "utf8",
    );
    const rendererSource = readFileSync(
      join(process.cwd(), "src", "lib", "waitlist-privacy-policy.tsx"),
      "utf8",
    );
    for (const source of [pageSource, rendererSource]) {
      expect(source).not.toMatch(
        /localStorage\.|sessionStorage\.|document\.cookie|indexedDB/,
      );
    }
  });

  it("has canonical, indexable metadata pointing at /privacy/waitlist", () => {
    expect(metadata.alternates).toEqual({
      canonical: WAITLIST_PRIVACY_POLICY_URL,
    });
    expect(WAITLIST_PRIVACY_POLICY_URL).toBe(
      "https://tumbapp.com/privacy/waitlist",
    );
    expect(metadata.robots).toEqual({ index: true, follow: true });
    expect(WAITLIST_PRIVACY_POLICY_MARKDOWN).not.toMatch(
      /\[(?:TODO|TBD|PLACEHOLDER)[^\]]*\]/i,
    );
  });

  it("keeps the Next and static waitlist-policy legal-copy blocks identical", () => {
    const { container } = render(<WaitlistPrivacyPage />);
    const nextBlocks = directBlockText(container.querySelector("article")!);
    const staticHtml = readFileSync(
      join(process.cwd(), "website", "privacy", "waitlist", "index.html"),
      "utf8",
    );
    const staticDocument = new DOMParser().parseFromString(
      staticHtml,
      "text/html",
    );
    const staticArticle = staticDocument.querySelector("article")!;

    expect(directBlockText(staticArticle)).toEqual(nextBlocks);
    expect(staticDocument.querySelector("form")).toBeNull();
    expect(staticDocument.querySelectorAll("script")).toHaveLength(0);
    expect(
      staticDocument.querySelector(
        `a[href="mailto:${WAITLIST_PRIVACY_CONTACT_EMAIL}"]`,
      ),
    ).not.toBeNull();
  });

  it("does not modify the general application policy page (even though the literal draft reuses its exact title)", () => {
    const { container: waitlistContainer } = render(<WaitlistPrivacyPage />);
    // Captured before cleanup() unmounts this render - reading from
    // waitlistContainer afterward would see an emptied DOM.
    const waitlistH1 = waitlistContainer.querySelector("h1")?.textContent;
    const waitlistH2Count = waitlistContainer.querySelectorAll("h2").length;
    cleanup();

    const { container: generalContainer } = render(<PrivacyPage />);
    expect(generalContainer.querySelector("h1")?.textContent).toBe(
      "מדיניות הפרטיות של Tumbapp",
    );
    expect(Array.from(generalContainer.querySelectorAll("h2"))).toHaveLength(
      16,
    );
    // The literal draft's own h1 is byte-identical to the general policy's
    // h1 ("מדיניות הפרטיות של Tumbapp") - not a bug introduced here, but a
    // real property of the source draft worth keeping visible rather than
    // asserting the two differ (they used to, under the earlier
    // reconstructed text). Distinctness is verified by content/section
    // count instead, which genuinely differ (15 sections here vs. 16 on
    // the general policy, and substantively different section text).
    expect(waitlistH1).toBe(generalContainer.querySelector("h1")?.textContent);
    expect(waitlistH2Count).toBe(15);
  });
});
