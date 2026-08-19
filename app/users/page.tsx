import type { Metadata } from "next";
import { Header } from "@/src/components/Header";
import { HomeHero } from "@/src/components/HomeHero";
import { PromoVideoSection } from "@/src/components/PromoVideoSection";
import { FeaturesSection } from "@/src/components/FeaturesSection";
import { HowItWorksSection } from "@/src/components/HowItWorksSection";
import { RealWorldSection } from "@/src/components/RealWorldSection";
import { SignupSection } from "@/src/components/SignupSection";
import { Footer } from "@/src/components/Footer";

const TITLE = "Tumbapp | החבורה שלכם, עכשיו בתוך משחק";
const DESCRIPTION = "משימות, משחקים, התערבויות, XP והטבות לחבורות. משחקים יחד, מתקדמים יחד ויוצאים יחד עם Tumbapp.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["Tumbapp", "חבורה", "משחק חברתי", "התערבויות", "קבוצות חברים"],
  alternates: { canonical: "https://tumbapp.com/users" },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://tumbapp.com/users",
    siteName: "Tumbapp",
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

export default function UsersLandingPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--offw)", color: "var(--ink)" }}>
      <div className="relative overflow-hidden">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 }}>
          <div className="animate-drift" style={{ position: "absolute", top: -160, right: -140, width: 640, height: 640, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,.16), transparent 62%)", filter: "blur(24px)" }} />
          <div style={{ position: "absolute", top: 560, left: -170, width: 540, height: 540, borderRadius: "50%", background: "radial-gradient(circle, rgba(109,40,217,.12), transparent 64%)", filter: "blur(24px)", animation: "tDrift 21s ease-in-out infinite reverse" }} />
          <div style={{ position: "absolute", top: 1900, right: -140, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,146,43,.10), transparent 66%)", filter: "blur(26px)", animation: "tDrift 24s ease-in-out infinite" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Header />
          <HomeHero />
        </div>
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <PromoVideoSection />
        <FeaturesSection />
        <HowItWorksSection />
        <RealWorldSection />
        <SignupSection />
        <Footer />
      </div>
    </main>
  );
}
