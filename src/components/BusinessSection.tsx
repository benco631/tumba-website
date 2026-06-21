import { BUSINESS_CATEGORIES } from "@/src/lib/content";
import { SectionTitle } from "./SectionTitle";

export function BusinessSection() {
  return (
    <section id="businesses" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="For businesses"
          title="A smarter way to bring in groups — with lower risk."
          description="Tumba helps venues turn active group behavior into repeat visits, measurable engagement, and real-world foot traffic."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <ul className="space-y-4 text-slate-300">
              <li>• Reach active groups, not just individual customers.</li>
              <li>• Bring people together in real-world locations.</li>
              <li>• Start with a simple pilot.</li>
              <li>• Offer measurable benefits based on redemptions.</li>
              <li>• Use QR redemption inside the business.</li>
              <li>• Limit redemptions and control costs.</li>
              <li>• Offer benefits based on group Level.</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {BUSINESS_CATEGORIES.map((category) => (
              <div
                key={category}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/6 to-white/3 p-5 text-center text-white"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
