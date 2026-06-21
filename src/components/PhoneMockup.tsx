export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] rounded-[2rem] border border-white/10 bg-slate-950/90 p-3 shadow-2xl shadow-violet-900/20">
      <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
      <div className="rounded-[1.6rem] bg-gradient-to-b from-slate-900 to-slate-950 p-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
              Group
            </p>
            <h3 className="mt-1 text-base font-semibold text-white">Summer Crew</h3>
          </div>
          <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-200">
            Lv 12
          </span>
        </div>

        <div className="mt-4 rounded-2xl bg-white/5 p-4">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>XP</span>
            <span>68%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-slate-800">
            <div className="h-2 w-[68%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-violet-500/15 to-fuchsia-500/10 p-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
              Coins
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">240</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
              Today
            </p>
            <p className="mt-2 text-sm font-semibold text-white">3 missions</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-white/5 p-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
            Daily challenge
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            Vote for this week’s meetup spot
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-violet-200">
            Unlocked benefit
          </p>
          <p className="mt-2 text-sm font-semibold text-white">10% off at the café</p>
        </div>
      </div>
    </div>
  );
}
