import { SectionTitle } from "./SectionTitle";

export function VisionSection() {
  return (
    <section id="vision" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/3 p-10">
        <SectionTitle
          eyebrow="Vision"
          title="The vision: make Tumba the gamification and rewards layer for real-life groups."
          description="Tumba can become a social engagement layer between groups and local businesses, combining retention, group-based rewards, and measurable offline activity."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Social retention",
            "Group-based rewards",
            "Partner marketplace",
            "Measurable offline redemptions",
            "Schools and campuses",
            "Workplaces and communities",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-slate-950/60 p-4 text-center text-sm text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
