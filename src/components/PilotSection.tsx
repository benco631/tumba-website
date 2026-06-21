import { PILOT_BENEFITS } from "@/src/lib/content";
import { SectionTitle } from "./SectionTitle";

export function PilotSection() {
  return (
    <section id="pilot" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Pilot"
          title="Start with a simple, measurable, low-risk pilot."
          description="A small launch can help you test benefits, measure activity, and decide what works best."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">Pilot flow</p>
            <ol className="mt-5 space-y-4 text-slate-200">
              <li>1. Choose a starter benefit</li>
              <li>2. Set redemption limits</li>
              <li>3. Place a QR code inside the business</li>
              <li>4. Groups arrive and redeem benefits</li>
              <li>5. Measure activity and decide whether to continue</li>
            </ol>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Suggested pilot benefits</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {PILOT_BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
