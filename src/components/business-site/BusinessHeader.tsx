"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./business.module.css";

const NAV_LINKS = [
  { href: "#biz-how", label: "איך זה עובד" },
  { href: "#biz-benefits", label: "מה העסק מקבל" },
  { href: "#biz-who", label: "למי זה מתאים" },
  { href: "#biz-faq", label: "שאלות נפוצות" },
];

export function BusinessHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(18px)",
        background: "rgba(250,250,255,.85)",
        borderBottom: "1px solid rgba(109,40,217,.10)",
      }}
    >
      <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "14px clamp(18px,4vw,40px)", display: "flex", alignItems: "center", gap: 16 }}>
        {/* not a link to "/" — this page is intentionally isolated */}
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image
            src="/media/tumbapp-logo.png"
            alt="Tumbapp"
            width={120}
            height={38}
            style={{ height: "clamp(30px,2.2vw,34px)", width: "auto", display: "block" }}
          />
          <span
            style={{
              fontFamily: "var(--font-outfit),sans-serif",
              fontWeight: 800,
              fontSize: "clamp(20px,1.4vw,23px)",
              letterSpacing: "-.02em",
              background: "linear-gradient(120deg,var(--acc3),var(--acc))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Tumbapp <span style={{ color: "var(--ink2)", WebkitTextFillColor: "var(--ink2)", fontWeight: 600, fontSize: "0.6em" }}>לעסקים</span>
          </span>
        </span>

        <div className={styles.navLinks} style={{ alignItems: "center", gap: 2, marginInlineStart: "auto" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#biz-contact"
          className={`${styles.navCta} ${styles.ctaButton}`}
          style={{
            marginInlineStart: 8,
            alignItems: "center",
            gap: 7,
            padding: "10px 18px",
            borderRadius: 100,
            background: "linear-gradient(135deg,var(--acc2),var(--acc))",
            color: "#fff",
            fontWeight: 600,
            fontSize: 14.5,
            boxShadow: "0 8px 22px rgba(124,92,246,.4)",
          }}
        >
          בואו נדבר
        </a>

        <button
          className={styles.navToggle}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="תפריט"
          aria-expanded={menuOpen}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 12,
            background: "rgba(139,92,246,.10)",
            border: "1px solid rgba(139,92,246,.28)",
            color: "var(--acc3)",
            cursor: "pointer",
          }}
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div style={{ display: "flex", flexDirection: "column", gap: 2, padding: "8px clamp(18px,4vw,34px) 14px", borderTop: "1px solid rgba(109,40,217,.10)" }}>
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "var(--ink)", fontSize: 15.5, padding: "11px 6px", borderBottom: i < NAV_LINKS.length - 1 ? "1px solid rgba(109,40,217,.09)" : undefined }}
            >
              {l.label}
            </a>
          ))}
          <a href="#biz-contact" onClick={() => setMenuOpen(false)} style={{ color: "var(--acc3)", fontSize: 15.5, fontWeight: 700, padding: "11px 6px" }}>
            בואו נדבר
          </a>
        </div>
      )}
    </header>
  );
}
