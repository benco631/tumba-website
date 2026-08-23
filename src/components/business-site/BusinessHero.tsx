"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "../main-site/Reveal";
import styles from "./business.module.css";

const VIDEO_SRC = "/media/promo/tumbapp-promo.mp4";

function HeroVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handlePlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  };

  return (
    <div style={{ position: "relative", width: "min(280px,72vw)" }}>
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: -22, background: "radial-gradient(circle, rgba(139,92,246,.18), transparent 68%)", filter: "blur(24px)" }}
      />
      <div
        ref={wrapRef}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "9 / 16",
          borderRadius: 32,
          padding: 10,
          background: "linear-gradient(160deg,#3B3363,#1E1733)",
          border: "1px solid rgba(255,255,255,.14)",
          boxShadow: "0 24px 54px rgba(109,40,217,.20)",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 24, overflow: "hidden", background: "linear-gradient(160deg,#453A72,#221A3A)" }}>
          {inView && (
            <video
              ref={videoRef}
              controls={playing}
              playsInline
              preload="metadata"
              aria-label="סרטון האפליקציה של Tumbapp"
              style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
              onEnded={() => setPlaying(false)}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          )}
          {!playing && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="הפעילו את סרטון האפליקציה של Tumbapp"
              style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, border: "none", cursor: "pointer", background: "transparent" }}
            >
              <span
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,var(--acc2),var(--acc))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 28px rgba(139,92,246,.55)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" style={{ marginInlineStart: 3 }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>צפו באפליקציה</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function BusinessHero() {
  return (
    <section
      id="top"
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "clamp(44px,7vw,84px) clamp(18px,4vw,40px) clamp(48px,6vw,80px)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "clamp(32px,4vw,64px)",
      }}
    >
      <Reveal as="div" className="order-1 md:order-2" style={{ flex: "1 1 440px", minWidth: "min(300px,100%)" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--lav)",
            border: "1px solid rgba(139,92,246,.34)",
            color: "var(--acc3)",
            padding: "7px 15px",
            borderRadius: 100,
            fontSize: 13.5,
            fontWeight: 600,
          }}
        >
          <span className={styles.pulseDot} style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--acc2)", boxShadow: "0 0 10px var(--acc2)" }} />
          Tumbapp לעסקים
        </div>

        <h1 style={{ fontSize: "clamp(30px,4.4vw,50px)", lineHeight: 1.14, fontWeight: 800, letterSpacing: "-.02em", margin: "20px 0 0", color: "var(--ink)" }}>
          הלקוחות הבאים שלכם כבר מחפשים לאן לצאת
        </h1>

        <p style={{ fontSize: "clamp(16px,1.4vw,19px)", color: "var(--ink2)", maxWidth: 500, margin: "18px 0 0", lineHeight: 1.65 }}>
          Tumbapp מחברת מסעדות, ברים, בתי קפה ואטרקציות לקבוצות חברים פעילות — בדיוק ברגע שבו הן מחליטות איפה לבלות.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 28 }}>
          <a
            href="#biz-contact"
            className={styles.ctaButton}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "15px 28px",
              borderRadius: 100,
              background: "linear-gradient(135deg,var(--acc2),var(--acc))",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16.5,
              boxShadow: "0 10px 32px rgba(124,92,246,.45)",
            }}
          >
            בואו נדבר על שיתוף פעולה
          </a>
          <a
            href="#biz-how"
            className={styles.ghostButton}
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
            }}
          >
            איך זה עובד?
          </a>
        </div>

        <p style={{ marginTop: 26, fontSize: 13.5, color: "var(--ink2)", fontWeight: 500 }}>חשיפה ממוקדת • מימוש פשוט • ליווי אישי</p>
      </Reveal>

      <Reveal as="div" className="order-2 md:order-1" style={{ flex: "1 1 300px", minWidth: "min(260px,100%)", display: "flex", justifyContent: "center" }}>
        <HeroVideo />
      </Reveal>
    </section>
  );
}
