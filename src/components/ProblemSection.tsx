import { SectionTitle } from "./SectionTitle";

export function ProblemSection() {
  return (
    <section id="problem" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Why it matters"
          title="Groups are easy to create, hard to keep active."
          description="Most communities lose momentum because there is no daily reason to return together. Businesses also struggle to attract repeat groups without a measurable, low-risk approach."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">For users and groups</h3>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li>• Groups are created but often become inactive quickly.</li>
              <li>• It is hard to keep people engaged over time.</li>
              <li>• Most apps do not give groups a real reason to come back every day.</li>
              <li>• Friend groups want shared experiences, games, and real benefits.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">For businesses</h3>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li>• It is hard to bring groups of customers consistently.</li>
              <li>• Traditional advertising is often expensive and hard to measure.</li>
              <li>• Generic discounts do not always create loyalty.</li>
              <li>• Businesses need a low-risk way to attract groups and repeat visits.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
