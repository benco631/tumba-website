"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "@/src/lib/content";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backdropFilter: "blur(16px)",
        background: "rgba(250,250,255,.85)",
        borderBottom: "1px solid rgba(109,40,217,.10)",
      }}
    >
      <nav
        className="mx-auto flex items-center gap-4"
        style={{ maxWidth: 1180, padding: "14px clamp(18px,4vw,34px)" }}
      >
        <Link href="#top" className="flex items-center gap-2 shrink-0">
          <Image
            src="/media/tumbapp-logo.png"
            alt="Tumbapp"
            width={894}
            height={848}
            priority
            style={{ height: 32, width: "auto", display: "block", filter: "drop-shadow(0 0 12px rgba(139,92,246,.35))" }}
          />
          <span
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 800,
              fontSize: 24,
              letterSpacing: "-.02em",
              background: "linear-gradient(120deg,var(--acc3),var(--acc))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Tumbapp
          </span>
        </Link>

        <div
          id="tumba-navlinks"
          className="hidden md:flex items-center gap-1"
          style={{ marginInlineStart: "auto" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors rounded-xl"
              style={{
                color: "var(--ink2)",
                fontSize: 15,
                fontWeight: 500,
                padding: "9px 13px",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(139,92,246,.10)";
                (e.currentTarget as HTMLElement).style.color = "var(--acc3)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--ink2)";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#join"
          className="hidden md:inline-flex items-center gap-2"
          style={{
            marginInlineStart: 8,
            padding: "11px 20px",
            borderRadius: 100,
            background: "linear-gradient(135deg,var(--acc2),var(--acc))",
            color: "#fff",
            fontWeight: 600,
            fontSize: 15,
            boxShadow: "0 8px 26px rgba(124,92,246,.4)",
          }}
        >
          הצטרפו להשקה
        </Link>

        <button
          type="button"
          aria-label="תפריט"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center"
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: "rgba(139,92,246,.10)",
            border: "1px solid rgba(139,92,246,.24)",
            color: "var(--acc3)",
            cursor: "pointer",
            marginInlineStart: "auto",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div
          className="flex flex-col gap-0.5 md:hidden"
          style={{ padding: "8px clamp(18px,4vw,34px) 16px", borderTop: "1px solid rgba(109,40,217,.09)" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: "var(--ink)",
                fontSize: 16,
                fontWeight: 500,
                padding: "12px 6px",
                borderBottom: "1px solid rgba(109,40,217,.09)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#join"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center mt-3"
            style={{
              padding: "13px 20px",
              borderRadius: 100,
              background: "linear-gradient(135deg,var(--acc2),var(--acc))",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            הצטרפו להשקה
          </Link>
        </div>
      )}
    </header>
  );
}
