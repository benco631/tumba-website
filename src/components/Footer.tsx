import Link from "next/link";
import { CONTACT_EMAIL } from "@/src/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Tumba</p>
          <p className="mt-1 text-sm text-slate-400">Social rewards for real-life groups</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <Link href="#solution" className="hover:text-white">How It Works</Link>
          <Link href="#businesses" className="hover:text-white">For Businesses</Link>
          <Link href="#economy" className="hover:text-white">Economy</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
      <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-2 border-t border-white/5 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Tumba. All rights reserved.</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate-300">
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
