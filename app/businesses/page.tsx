import type { Metadata } from "next";
import { BusinessHeader } from "@/src/components/business-site/BusinessHeader";
import { BusinessHero } from "@/src/components/business-site/BusinessHero";
import { ProblemSolution } from "@/src/components/business-site/ProblemSolution";
import { HowItWorksBiz } from "@/src/components/business-site/HowItWorksBiz";
import { BenefitsGrid } from "@/src/components/business-site/BenefitsGrid";
import { WhyGroups } from "@/src/components/business-site/WhyGroups";
import { WhoItsFor } from "@/src/components/business-site/WhoItsFor";
import { PilotInvite } from "@/src/components/business-site/PilotInvite";
import { FAQSection } from "@/src/components/business-site/FAQSection";
import { BusinessContact } from "@/src/components/business-site/BusinessContact";
import { BusinessFooter } from "@/src/components/business-site/BusinessFooter";
import { SideWaves } from "@/src/components/shared/SideWaves";
import styles from "@/src/components/business-site/business.module.css";

const TITLE = "Tumbapp לעסקים | הלקוחות הבאים שלכם כבר מחפשים לאן לצאת";
const DESCRIPTION = "Tumbapp מחברת מסעדות, ברים, בתי קפה ואטרקציות לקבוצות חברים פעילות — בדיוק ברגע שבו הן מחליטות איפה לבלות.";

// Unlisted public page: reachable by direct URL, intentionally excluded from
// indexing and from every visitor-facing nav/footer/sitemap on the other
// routes. noindex is not authentication — anyone with the link can open it.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  alternates: { canonical: "https://tumbapp.com/businesses" },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://tumbapp.com/businesses",
    siteName: "Tumbapp",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/icon.png"],
  },
};

export default function BusinessesPage() {
  return (
    <div className={styles.root}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -140, insetInlineStart: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,.14), transparent 62%)", filter: "blur(24px)" }} />
        <div style={{ position: "absolute", top: 900, insetInlineEnd: -150, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(109,40,217,.10), transparent 64%)", filter: "blur(24px)" }} />
      </div>

      <SideWaves intensity="restrained" />

      <div style={{ position: "relative", zIndex: 1 }}>
        <BusinessHeader />
        <BusinessHero />
        <ProblemSolution />
        <HowItWorksBiz />
        <BenefitsGrid />
        <WhyGroups />
        <WhoItsFor />
        <PilotInvite />
        <FAQSection />
        <BusinessContact />
        <BusinessFooter />
      </div>
    </div>
  );
}
