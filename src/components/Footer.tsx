import Link from "next/link";
import Image from "next/image";
import { CONTACT_EMAIL, NAV_LINKS } from "@/src/lib/content";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(109,40,217,.12)", marginTop: 30 }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "clamp(30px,4vw,56px) clamp(18px,4vw,34px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 32,
        }}
      >
        <div style={{ maxWidth: 300 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src="/media/tumbapp-logo.png" alt="Tumbapp" width={894} height={848} style={{ height: 36, width: "auto", display: "block" }} />
            <span
              style={{
                fontFamily: "var(--font-outfit),sans-serif",
                fontWeight: 800,
                fontSize: 24,
                background: "linear-gradient(120deg,var(--acc3),var(--acc))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Tumbapp
            </span>
          </div>
          <p style={{ color: "var(--ink2)", fontSize: 14.5, margin: "12px 0 0", lineHeight: 1.6 }}>
            הופכים כל חבורה למשחק — משימות, התערבויות, XP והטבות מעסקים שותפים.
          </p>
        </div>

        <div>
          <div style={{ fontSize: 13, color: "var(--ink2)", fontWeight: 600, letterSpacing: ".04em", marginBottom: 14 }}>
            ניווט
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} style={{ color: "var(--ink)", fontSize: 14.5 }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, color: "var(--ink2)", fontWeight: 600, letterSpacing: ".04em", marginBottom: 14 }}>
            קשר
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link href="#join" style={{ color: "var(--ink)", fontSize: 14.5 }}>הצטרפו להשקה</Link>
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--ink)", fontSize: 14.5 }}>{CONTACT_EMAIL}</a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(109,40,217,.10)" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "20px clamp(18px,4vw,34px)",
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: "var(--ink2)", fontSize: 13.5 }}>© 2026 Tumbapp. כל הזכויות שמורות.</span>
          <span style={{ color: "var(--ink2)", fontSize: 13.5 }}>נבנה לחבורות אמיתיות.</span>
        </div>
      </div>
    </footer>
  );
}
