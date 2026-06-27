import Link from "next/link";
import { CONTACT_EMAIL } from "@/src/lib/content";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,.07)", marginTop: 30 }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "clamp(40px,5vw,60px) clamp(18px,4vw,34px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 32,
        }}
      >
        <div style={{ maxWidth: 300 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <img src="/tumba-logo.svg" alt="Tumba" style={{ height: 40, width: "auto", display: "block" }} />
            <span
              style={{
                fontFamily: "var(--font-outfit),sans-serif",
                fontWeight: 800,
                fontSize: 26,
                background: "linear-gradient(120deg,#fff,var(--accent2))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Tumba
            </span>
          </div>
          <p style={{ color: "#9DA3AF", fontSize: 14.5, margin: "12px 0 0", lineHeight: 1.6 }}>
            שכבת המשחקיות וההטבות של קבוצות בעולם האמיתי – משימות, Coins, XP והטבות מעסקים שותפים.
          </p>
        </div>

        <div>
          <div style={{ fontSize: 13, color: "#7B8190", fontWeight: 600, letterSpacing: ".04em", marginBottom: 14 }}>
            ניווט
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link href="#how" style={{ color: "#C7CBD4", fontSize: 14.5 }}>איך זה עובד</Link>
            <Link href="#business" style={{ color: "#C7CBD4", fontSize: 14.5 }}>לעסקים</Link>
            <Link href="#economy" style={{ color: "#C7CBD4", fontSize: 14.5 }}>כלכלה באפליקציה</Link>
            <Link href="#pilot" style={{ color: "#C7CBD4", fontSize: 14.5 }}>פיילוט</Link>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, color: "#7B8190", fontWeight: 600, letterSpacing: ".04em", marginBottom: 14 }}>
            קשר
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Link href="#contact" style={{ color: "#C7CBD4", fontSize: 14.5 }}>הצטרפו לפיילוט</Link>
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#C7CBD4", fontSize: 14.5 }}>{CONTACT_EMAIL}</a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
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
          <span style={{ color: "#7B8190", fontSize: 13.5 }}>© 2026 Tumba. כל הזכויות שמורות.</span>
          <span style={{ color: "#7B8190", fontSize: 13.5 }}>נבנה לקבוצות אמיתיות ולעסקים מקומיים.</span>
        </div>
      </div>
    </footer>
  );
}
