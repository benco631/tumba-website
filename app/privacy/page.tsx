import type { Metadata } from "next";
import Link from "next/link";
import {
  PRIVACY_POLICY_URL,
  renderPrivacyPolicy,
} from "@/src/lib/privacy-policy";
import styles from "./privacy.module.css";

const TITLE = "מדיניות הפרטיות של Tumbapp";
const DESCRIPTION =
  "מדיניות הפרטיות של Tumbapp: איזה מידע נאסף, כיצד משתמשים בו, שומרים עליו ומהן זכויות המשתמשים.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PRIVACY_POLICY_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: PRIVACY_POLICY_URL,
    siteName: "Tumbapp",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="חזרה לאתר Tumbapp">
          TUMBAPP
        </Link>
      </header>
      <article className={styles.policy}>{renderPrivacyPolicy()}</article>
      <footer className={styles.footer}>
        <Link href="/">חזרה לאתר Tumbapp</Link>
      </footer>
    </main>
  );
}
