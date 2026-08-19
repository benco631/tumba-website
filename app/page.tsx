import type { Metadata } from "next";
import { MainHeader } from "@/src/components/main-site/MainHeader";
import { MainHero } from "@/src/components/main-site/MainHero";
import { HowItWorksMain } from "@/src/components/main-site/HowItWorksMain";
import { EconomyMain } from "@/src/components/main-site/EconomyMain";
import { RewardJourney } from "@/src/components/main-site/RewardJourney";
import { NearbyMap } from "@/src/components/main-site/NearbyMap";
import { UsersMain } from "@/src/components/main-site/UsersMain";
import { BusinessesMain } from "@/src/components/main-site/BusinessesMain";
import { ContactMain } from "@/src/components/main-site/ContactMain";
import { MainFooter } from "@/src/components/main-site/MainFooter";
import { NeonWaves } from "@/src/components/main-site/NeonWaves";
import styles from "@/src/components/main-site/main.module.css";

const SITE_URL = "https://tumbapp.com";
const TITLE = "TUMBAPP – Play Together. Earn Together. Go Out Together.";
const DESCRIPTION =
  "TUMBAPP מחברת בין חברים באמצעות משימות, משחקים ופעילות קבוצתית. צוברים Coins ויהלומים, מעלים את ה־XP הקבוצתי ומממשים הטבות.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "TUMBAPP",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "TUMBAPP",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/icon.png"],
  },
};

export default function MainSitePage() {
  return (
    <div id="tumba2" className={styles.root}>
      {/* ambient glows */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
        <div style={{ position: "absolute", top: -160, insetInlineEnd: -140, width: 680, height: 680, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,.16), transparent 62%)", filter: "blur(24px)", animation: "tDrift 17s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: 600, insetInlineStart: -180, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(109,40,217,.12), transparent 64%)", filter: "blur(24px)", animation: "tDrift 21s ease-in-out infinite reverse" }} />
        <div style={{ position: "absolute", top: 2200, insetInlineEnd: -140, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,146,43,.10), transparent 66%)", filter: "blur(26px)", animation: "tDrift 24s ease-in-out infinite" }} />
      </div>

      <NeonWaves />

      <div style={{ position: "relative", zIndex: 1 }}>
        <MainHeader />
        <span id="top2" />
        <MainHero />
        <HowItWorksMain />
        <EconomyMain />
        <RewardJourney />
        <NearbyMap />
        <UsersMain />
        <BusinessesMain />
        <ContactMain />
        <MainFooter />
      </div>
    </div>
  );
}
