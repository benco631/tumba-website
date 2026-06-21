import { BusinessSection } from "@/src/components/BusinessSection";
import { ContactSection } from "@/src/components/ContactSection";
import { EconomySection } from "@/src/components/EconomySection";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { PilotSection } from "@/src/components/PilotSection";
import { ProblemSection } from "@/src/components/ProblemSection";
import { SolutionSection } from "@/src/components/SolutionSection";
import { VisionSection } from "@/src/components/VisionSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,33,182,0.18),transparent_18%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.08),transparent_16%)]" />
        <Header />
        <Hero />
      </div>
      <ProblemSection />
      <SolutionSection />
      <EconomySection />
      <BusinessSection />
      <PilotSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
