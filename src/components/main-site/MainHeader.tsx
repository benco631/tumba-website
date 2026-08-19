"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./main.module.css";

const NAV_LINKS = [
  { href: "#how2", label: "איך זה עובד" },
  { href: "#economy2", label: "הכלכלה" },
  { href: "#map2", label: "מפת ההטבות" },
  { href: "#users2", label: "למשתמשים" },
  { href: "#business2", label: "לעסקים" },
  { href: "#journey2", label: "מסלול הטבות" },
];

export function MainHeader() {
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
      <nav style={{ maxWidth: 1520, margin: "0 auto", padding: "15px clamp(18px,4vw,44px)", display: "flex", alignItems: "center", gap: 16 }}>
        <a href="#top2" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image
            src="/media/tumbapp-logo.png"
            alt="TUMBAPP"
            width={120}
            height={38}
            style={{ height: "clamp(34px,2.4vw,38px)", width: "auto", display: "block", filter: "drop-shadow(0 0 14px rgba(124,92,246,.5))" }}
          />
          <span
            style={{
              fontFamily: "var(--font-outfit),sans-serif",
              fontWeight: 800,
              fontSize: "clamp(25px,1.6vw,28px)",
              letterSpacing: "-.02em",
              background: "linear-gradient(120deg,var(--acc3),var(--acc))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            TUMBAPP
          </span>
        </a>
        <div className={styles.navLinks} style={{ alignItems: "center", gap: 4, marginInlineStart: "auto" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact2"
          className={`${styles.navCta} ${styles.ctaButton}`}
          style={{
            marginInlineStart: 8,
            alignItems: "center",
            gap: 7,
            padding: "11px 20px",
            borderRadius: 100,
            background: "linear-gradient(135deg,var(--acc2),var(--acc))",
            color: "#fff",
            fontWeight: 600,
            fontSize: 15,
            boxShadow: "0 8px 28px rgba(124,92,246,.45)",
          }}
        >
          הצטרפו לפיילוט
        </a>
        <button
          className={styles.navToggle}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="תפריט"
          aria-expanded={menuOpen}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            borderRadius: 12,
            background: "rgba(139,92,246,.10)",
            border: "1px solid rgba(139,92,246,.28)",
            color: "#6D28D9",
            cursor: "pointer",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div style={{ display: "flex", flexDirection: "column", gap: 2, padding: "8px clamp(18px,4vw,34px) 16px", borderTop: "1px solid rgba(109,40,217,.10)" }}>
          {NAV_LINKS.filter((l) => l.href !== "#journey2").map((l, i, arr) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "#241B35", fontSize: 16, padding: "12px 6px", borderBottom: i < arr.length - 1 ? "1px solid rgba(109,40,217,.09)" : undefined }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact2" onClick={() => setMenuOpen(false)} style={{ color: "#241B35", fontSize: 16, padding: "12px 6px" }}>
            צור קשר
          </a>
        </div>
      )}
    </header>
  );
}
