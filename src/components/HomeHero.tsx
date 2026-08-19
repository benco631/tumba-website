"use client";

import Link from "next/link";
import { PhoneFrame } from "./PhoneFrame";
import { LazyVideo } from "./LazyVideo";

export function HomeHero() {
  return (
    <section
      id="top"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "clamp(48px,7vw,120px) clamp(18px,4vw,34px) clamp(44px,6vw,96px)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "clamp(32px,5vw,64px)",
      }}
    >
      <div className="animate-fade-up" style={{ flex: "1 1 420px", minWidth: 300 }}>
        <div
          className="inline-flex items-center gap-2"
          style={{
            background: "var(--lav)",
            border: "1px solid rgba(139,92,246,.34)",
            color: "var(--acc3)",
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
              background: "var(--acc2)",
              boxShadow: "0 0 10px var(--acc2)",
              display: "inline-block",
            }}
            className="animate-pulse-glow"
          />
          לחבורה שלכם, לא לעסקים
        </div>

        <h1
          style={{
            fontSize: "clamp(34px,5.2vw,58px)",
            lineHeight: 1.1,
            fontWeight: 800,
            letterSpacing: "-.02em",
            margin: "22px 0 0",
            color: "var(--ink)",
          }}
        >
          החבורה שלכם.{" "}
          <span
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              background: "linear-gradient(120deg,var(--acc3),var(--acc))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            עכשיו זה משחק.
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(16px,2vw,18px)",
            color: "var(--ink2)",
            maxWidth: 560,
            margin: "14px 0 0",
            lineHeight: 1.6,
          }}
        >
          משימות יומיות, התערבויות, משחקים, דירוגים והטבות — כל מה שהופך חבורה רגילה לחבורה שאי אפשר לשכוח.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 22 }}>
          <Link
            href="#join"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "15px 28px",
              borderRadius: 100,
              background: "linear-gradient(135deg,var(--acc2),var(--acc))",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16.5,
              boxShadow: "0 10px 34px rgba(124,92,246,.42)",
              transition: "transform .2s, box-shadow .2s",
            }}
            onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            הצטרפו להשקה
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "scaleX(-1)" }}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <Link
            href="#video"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "15px 26px",
              borderRadius: 100,
              background: "#FFFFFF",
              border: "1px solid rgba(109,40,217,.16)",
              color: "var(--ink)",
              fontWeight: 600,
              fontSize: 16.5,
              transition: "background .2s",
            }}
            onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--lav)"; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "#FFFFFF"; }}
          >
            צפו בסרטון
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </Link>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 26, marginTop: 26 }}>
          <div>
            <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: 22, fontWeight: 700, color: "var(--ink)" }}>Coins</div>
            <div style={{ fontSize: 13.5, color: "var(--ink2)" }}>מטבע אישי לכל אחד</div>
          </div>
          <div style={{ width: 1, background: "rgba(109,40,217,.14)" }} />
          <div>
            <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: 22, fontWeight: 700, color: "var(--ink)" }}>XP</div>
            <div style={{ fontSize: 13.5, color: "var(--ink2)" }}>מקדם את כל הקבוצה</div>
          </div>
          <div style={{ width: 1, background: "rgba(109,40,217,.14)" }} />
          <div>
            <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontSize: 22, fontWeight: 700, color: "var(--ink)" }}>QR</div>
            <div style={{ fontSize: 13.5, color: "var(--ink2)" }}>מימוש הטבה בעסק</div>
          </div>
        </div>
      </div>

      <div style={{ flex: "1 1 280px", minWidth: 240, display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "min(260px,80%)" }}>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: -24,
              background: "radial-gradient(circle, rgba(139,92,246,.22), transparent 68%)",
              filter: "blur(24px)",
              zIndex: 0,
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }} className="animate-float">
            <PhoneFrame src="/media/screenshot-home.jpg" alt="מסך הבית של Tumbapp — Coins, רמה ומשימה יומית" width={1080} height={2292} priority size={260} />
          </div>

          <div style={{ position: "absolute", bottom: -6, insetInlineStart: -22, zIndex: 3, width: "min(96px,36%)" }}>
            <LazyVideo
              webm="/media/mascot/boar-wave.webm"
              mp4="/media/mascot/boar-wave.mp4"
              poster="/media/mascot/boar-wave-poster.jpg"
              alt="הקמע של Tumbapp מנופף לשלום"
              eager
              className="animate-float"
              style={{
                borderRadius: 20,
                overflow: "hidden",
                background: "#FFFFFF",
                border: "1px solid rgba(109,40,217,.12)",
                boxShadow: "0 14px 34px rgba(109,40,217,.14)",
                aspectRatio: "1 / 1",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
