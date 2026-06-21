export function AppMockup() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-fuchsia-950/25 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/5 to-cyan-400/10" />
      <div className="relative rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Today</p>
            <h3 className="mt-1 text-xl font-semibold text-white">Community pulse</h3>
          </div>
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-200">
            Lv 14
          </span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-xs text-slate-400">Coins</p>
            <p className="mt-1 text-2xl font-semibold text-white">320</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-xs text-slate-400">XP</p>
            <p className="mt-1 text-2xl font-semibold text-white">4,820</p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-violet-500/15 to-fuchsia-500/10 p-4">
            <p className="text-xs text-slate-400">Benefits</p>
            <p className="mt-1 text-2xl font-semibold text-white">3 unlocked</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white">Weekly mission</p>
            <span className="text-xs text-violet-200">4/5 done</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-slate-800">
            <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" />
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {[
            "Post your plan for Friday",
            "Vote on the next meetup",
            "Claim your challenge reward",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-950/60 px-4 py-3"
            >
              <span className="text-sm text-slate-200">{item}</span>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200">
                Ready
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
