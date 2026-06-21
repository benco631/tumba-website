import { CTAButton } from "./CTAButton";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.16),transparent_22%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.08),transparent_18%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10 animate-fade-up">
          <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-sm text-violet-100">
            Social rewards for real groups
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Tumba turns real-life groups into active communities with challenges,
            Coins, XP, and real-world rewards.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A social rewards app for friend groups, teams, and communities —
            combining daily challenges, group progression, and partner benefits to
            bring people together in the real world.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#businesses">I’m a business</CTAButton>
            <CTAButton href="#solution" variant="secondary">
              See how it works
            </CTAButton>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
            <span>Daily missions</span>
            <span>•</span>
            <span>Group XP</span>
            <span>•</span>
            <span>Partner rewards</span>
          </div>
        </div>
        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="animate-float">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
