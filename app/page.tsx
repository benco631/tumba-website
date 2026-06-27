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
    <main className="min-h-screen bg-[#08090C] text-[#F4F5F7]">
      <div className="relative overflow-hidden">
        <div aria-hidden="true" style={{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden",zIndex:0}}>
          <div className="animate-drift" style={{position:"absolute",top:-180,right:-120,width:620,height:620,borderRadius:"50%",background:"radial-gradient(circle, rgba(124,92,246,.28), transparent 62%)",filter:"blur(20px)"}} />
          <div style={{position:"absolute",top:520,left:-160,width:540,height:540,borderRadius:"50%",background:"radial-gradient(circle, rgba(91,63,214,.22), transparent 64%)",filter:"blur(20px)",animation:"tDrift 20s ease-in-out infinite reverse"}} />
          <div style={{position:"absolute",top:1500,right:-120,width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle, rgba(167,139,250,.16), transparent 66%)",filter:"blur(22px)",animation:"tDrift 22s ease-in-out infinite"}} />
        </div>
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
