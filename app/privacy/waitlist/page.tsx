import type { Metadata } from "next";
import Link from "next/link";
import {
  WAITLIST_PRIVACY_POLICY_URL,
  renderWaitlistPrivacyPolicy,
} from "@/src/lib/waitlist-privacy-policy";
import styles from "../privacy.module.css";

const TITLE = "מדיניות הפרטיות של Tumbapp — אתר ורשימת המתנה";
const DESCRIPTION =
  "מדיניות הפרטיות של אתר Tumbapp, עמודי הנחיתה ורשימת ההמתנה — נפרדת ממדיניות הפרטיות של האפליקציה.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: WAITLIST_PRIVACY_POLICY_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: WAITLIST_PRIVACY_POLICY_URL,
    siteName: "Tumbapp",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// Reuses app/privacy's own stylesheet deliberately - same visual language,
// not a redesign. This page is the website/waitlist-scoped policy; the
// general application policy at /privacy is untouched and unrelated to
// this route (see waitlist-privacy-policy.md section 1 for the explicit
// scope distinction shown to the reader).
export default function WaitlistPrivacyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="חזרה לאתר Tumbapp">
          TUMBAPP
        </Link>
      </header>
      <article className={styles.policy}>{renderWaitlistPrivacyPolicy()}</article>
      <footer className={styles.footer}>
        <Link href="/">חזרה לאתר Tumbapp</Link>
      </footer>
    </main>
  );
}
