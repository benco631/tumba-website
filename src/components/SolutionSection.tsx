import { SectionTitle } from "./SectionTitle";

const steps = [
  {
    title: "Create or join a group",
    text: "Invite friends, teammates, classmates, or community members into a private circle.",
  },
  {
    title: "Complete daily missions",
    text: "Answer questions, vote, complete social tasks, and start daily challenges.",
  },
  {
    title: "Earn Coins and XP",
    text: "Each user gets personal Coins while the whole group grows together through shared XP.",
  },
  {
    title: "Unlock better benefits",
    text: "As the group level rises, stronger partner rewards become available.",
  },
  {
    title: "Redeem in real life",
    text: "Visit a partner venue, scan a QR code, and turn activity into an actual experience.",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="How it works"
          title="Make everyday group activity feel like a game."
          description="Tumba turns simple moments into shared progress, rewards, and real-world benefits."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-white/3 p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-semibold text-white">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
