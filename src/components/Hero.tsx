"use client";

import Link from "next/link";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section
      id="top"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "clamp(56px,8vw,104px) clamp(18px,4vw,34px) clamp(40px,6vw,72px)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "clamp(36px,5vw,64px)",
      }}
    >
      <div className="animate-fade-up" style={{ flex: "1 1 420px", minWidth: 300 }}>
        <div
          className="inline-flex items-center gap-2"
          style={{
            background: "rgba(124,92,246,.12)",
            border: "1px solid rgba(124,92,246,.32)",
            color: "#CDBFFF",
            padding: "7px 15px",
            borderRadius: 100,
            fontSize: 13.5,
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--accent2)",
              boxShadow: "0 0 10px var(--accent2)",
              display: "inline-block",
            }}
            className="animate-pulse-glow"
          />
          אפליקציית תגמולים חברתית לקבוצות
        </div>

        <h1
          style={{
            fontSize: "clamp(34px,5.2vw,58px)",
            lineHeight: 1.08,
            fontWeight: 800,
            letterSpacing: "-.02em",
            margin: "22px 0 0",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              background: "linear-gradient(120deg,#fff,var(--accent2))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Tumba
          </span>{" "}
          הופכת קבוצות אמיתיות לקהילות פעילות – עם משימות,{" "}
          <span style={{ color: "var(--orange)" }}>Coins</span>,{" "}
          <span style={{ color: "var(--accent2)" }}>XP</span> והטבות בעולם האמיתי.
        </h1>

        <p
          style={{
            fontSize: "clamp(16px,2vw,19px)",
            color: "#AEB4C0",
            maxWidth: 560,
            margin: "22px 0 0",
            lineHeight: 1.65,
          }}
        >
          אפליקציית תגמולים חברתית לקבוצות חברים, צוותים וקהילות – שמשלבת אתגרים יומיים,
          התקדמות קבוצתית והטבות מעסקים שותפים כדי לגרום לאנשים להיפגש, לשחק ולחזור שוב.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
          <Link
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "15px 28px",
              borderRadius: 100,
              background: "linear-gradient(135deg,var(--accent2),var(--accent))",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16.5,
              boxShadow: "0 10px 34px rgba(124,92,246,.42)",
              transition: "transform .2s, box-shadow .2s",
            }}
            onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            אני עסק ורוצה להצטרף
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "scaleX(-1)" }}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link
            href="#how"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "15px 26px",
              borderRadius: 100,
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.13)",
              color: "#F4F5F7",
              fontWeight: 600,
              fontSize: 16.5,
              transition: "background .2s",
            }}
            onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.1)"; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.05)"; }}
          >
            איך זה עובד?
          </Link>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 26, marginTop: 38 }}>
          <div>
            <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: 24, fontWeight: 700, color: "#fff" }}>QR</div>
            <div style={{ fontSize: 13.5, color: "#8E94A1" }}>מימוש פשוט בעסק</div>
          </div>
          <div style={{ width: 1, background: "rgba(255,255,255,.1)" }} />
          <div>
            <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: 24, fontWeight: 700, color: "#fff" }}>Levels</div>
            <div style={{ fontSize: 13.5, color: "#8E94A1" }}>פותחים הטבות לקבוצה</div>
          </div>
          <div style={{ width: 1, background: "rgba(255,255,255,.1)" }} />
          <div>
            <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: 24, fontWeight: 700, color: "#fff" }}>Streak</div>
            <div style={{ fontSize: 13.5, color: "#8E94A1" }}>שומר על מעורבות יומית</div>
          </div>
        </div>
      </div>

      <div style={{ flex: "1 1 320px", minWidth: 290, display: "flex", justifyContent: "center" }}>
        <div className="animate-float">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
