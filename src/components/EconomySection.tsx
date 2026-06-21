import { ECONOMY_POINTS } from "@/src/lib/content";
import { SectionTitle } from "./SectionTitle";

export function EconomySection() {
  return (
    <section id="economy" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Economy"
          title="Coins are personal. XP and Levels belong to the group."
          description="This distinction keeps the experience fair, social, and clear for both users and partners."
        />
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/25">
          <div className="grid gap-px bg-white/5 md:grid-cols-4">
            <div className="bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Aspect</p>
            </div>
            <div className="bg-slate-950/80 p-6 text-sm font-semibold text-white">
              Ownership
            </div>
            <div className="bg-slate-950/80 p-6 text-sm font-semibold text-white">
              How it is used
            </div>
            <div className="bg-slate-950/80 p-6 text-sm font-semibold text-white">
              Why it matters
            </div>
            {ECONOMY_POINTS.map((item) => (
              <div key={item.title} className="contents">
                <div className="bg-slate-950/80 p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <div className="bg-slate-950/80 p-6 text-sm text-slate-300">
                  {item.title === "Coins" ? "Personal to each user" : "Shared by the whole group"}
                </div>
                <div className="bg-slate-950/80 p-6">
                  <ul className="space-y-2 text-sm text-slate-300">
                    {item.details.map((detail) => (
                      <li key={`${item.title}-${detail}`}>• {detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-950/80 p-6 text-sm leading-6 text-slate-300">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 p-8 text-slate-100">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-200">Example</p>
          <p className="mt-3 text-lg leading-7">
            If a group reaches <span className="font-semibold text-white">Level 10</span>, it can unlock a 10% discount.
            If it reaches <span className="font-semibold text-white">Level 50</span>, it can unlock stronger benefits such as 50% off a selected item, 1+1 offers, or VIP-style perks.
          </p>
        </div>
      </div>
    </section>
  );
}
