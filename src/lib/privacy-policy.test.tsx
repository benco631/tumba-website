import { readFileSync } from "node:fs";
import { join } from "node:path";
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import PrivacyPage, { metadata } from "@/app/privacy/page";
import { Footer } from "@/src/components/Footer";
import { BusinessFooter } from "@/src/components/business-site/BusinessFooter";
import { MainFooter } from "@/src/components/main-site/MainFooter";
import {
  PRIVACY_CONTACT_EMAIL,
  PRIVACY_POLICY_MARKDOWN,
  PRIVACY_POLICY_UPDATED_HE,
  PRIVACY_POLICY_URL,
  PRIVACY_POLICY_VERSION,
} from "./privacy-policy";

const normalize = (value: string | null) =>
  (value ?? "").replace(/\s+/g, " ").trim();

function directBlockText(container: ParentNode): string[] {
  return Array.from(container.children).map((element) =>
    normalize(element.textContent),
  );
}

describe("approved privacy policy", () => {
  afterEach(cleanup);

  it("renders the public Hebrew policy with approved identity and contact details", () => {
    const { container } = render(<PrivacyPage />);
    const article = container.querySelector("article")!;
    expect(article.querySelector("h1")?.textContent).toBe(
      "מדיניות הפרטיות של Tumbapp",
    );
    expect(article.textContent).toContain(`גרסה: ${PRIVACY_POLICY_VERSION}`);
    expect(article.textContent).toContain(
      `מועד עדכון אחרון: ${PRIVACY_POLICY_UPDATED_HE}`,
    );
    expect(article.textContent).toContain(
      "המיזם Tumbapp מופעל על ידי בן גלעד קובריגרו",
    );
    expect(article.textContent).toContain(
      "מפעיל האתר והמיזם: בן גלעד קובריגרו",
    );
    expect(article.textContent).not.toContain("עוסק מורשה");
    expect(article.textContent).not.toContain("שם מסחרי של Tumba");
    expect(article.textContent).toContain(PRIVACY_CONTACT_EMAIL);
    expect(
      article.querySelector(`a[href="mailto:${PRIVACY_CONTACT_EMAIL}"]`),
    ).not.toBeNull();
    expect(article.querySelectorAll("h1")).toHaveLength(1);
    expect(Array.from(article.querySelectorAll("h2"))).toHaveLength(16);
    expect(Array.from(article.querySelectorAll("h2"), (heading) => heading.textContent)).toEqual(
      Array.from({ length: 16 }, (_, index) =>
        expect.stringMatching(new RegExp(`^${index + 1}\\.`)),
      ),
    );
  });

  it("has canonical, indexable metadata without placeholders", () => {
    expect(metadata.alternates).toEqual({ canonical: PRIVACY_POLICY_URL });
    expect(metadata.robots).toEqual({ index: true, follow: true });
    expect(PRIVACY_POLICY_MARKDOWN).not.toMatch(/\[(?:TODO|TBD|PLACEHOLDER)[^\]]*\]/i);
  });

  it("contains no postal address, actual phone number, form, or tracking code", () => {
    const { container } = render(<PrivacyPage />);
    const text = normalize(container.textContent);
    expect(text).not.toMatch(/רחוב|ת\.ד\.|מיקוד|כתובת למשלוח|כתובת משרד/);
    expect(text).not.toMatch(/(?:\+972|0(?:5\d|[23489]))[- ()]*\d{6,8}/);
    expect(container.querySelector("form")).toBeNull();
    expect(container.querySelectorAll("script")).toHaveLength(0);
  });

  it("keeps the Next and static legal-copy blocks identical", () => {
    const { container } = render(<PrivacyPage />);
    const nextBlocks = directBlockText(container.querySelector("article")!);
    const staticHtml = readFileSync(
      join(process.cwd(), "website", "privacy", "index.html"),
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
      staticDocument.querySelector(`a[href="mailto:${PRIVACY_CONTACT_EMAIL}"]`),
    ).not.toBeNull();
  });

  it("connects every React footer to /privacy with visible focus styling", () => {
    const { container } = render(
      <>
        <Footer />
        <MainFooter />
        <BusinessFooter />
      </>,
    );
    const links = Array.from(
      container.querySelectorAll<HTMLAnchorElement>(".footer-privacy-link"),
    );
    expect(links).toHaveLength(3);
    expect(links.every((link) => link.getAttribute("href") === "/privacy")).toBe(
      true,
    );

    const globalCss = readFileSync(
      join(process.cwd(), "app", "globals.css"),
      "utf8",
    );
    expect(globalCss).toContain(".footer-privacy-link:focus-visible");
  });
});
