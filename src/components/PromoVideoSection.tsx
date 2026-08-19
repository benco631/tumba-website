"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * public/media/promo/tumbapp-promo.mp4 — H.264/AAC, 720x1280, ~63s, ~10.9MB
 * (re-encoded from the original 1080x1920 ~107MB source for web delivery).
 * The clip is never mounted until this section scrolls into view, and even
 * then only `preload="metadata"` loads until the visitor presses play.
 */
const VIDEO_SRC = "/media/promo/tumbapp-promo.mp4";

export function PromoVideoSection() {
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
    <section
      id="video"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "clamp(40px,6vw,88px) clamp(18px,4vw,34px)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "clamp(28px,4vw,56px)",
      }}
    >
      <div className="order-1 md:order-2" style={{ flex: "1 1 380px", minWidth: 280 }}>
        <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em" }}>
          הכירו את Tumbapp
        </div>
        <h2
          style={{
            fontSize: "clamp(24px,3.2vw,34px)",
            fontWeight: 800,
            letterSpacing: "-.02em",
            margin: "10px 0 0",
            lineHeight: 1.15,
            color: "var(--ink)",
          }}
        >
          תכירו את Tumbapp
        </h2>
        <p style={{ color: "var(--ink2)", fontSize: 16, margin: "10px 0 0", lineHeight: 1.55, maxWidth: 420 }}>
          כל הצחוקים, האתגרים, ההתערבויות והיציאות של החבורה — במקום אחד.
        </p>
      </div>

      <div className="order-2 md:order-1" style={{ flex: "1 1 220px", minWidth: 180, display: "flex", justifyContent: "center" }}>
        <div
          ref={wrapRef}
          style={{
            position: "relative",
            width: "min(240px,58vw)",
            aspectRatio: "9 / 16",
            borderRadius: 34,
            padding: 10,
            background: "linear-gradient(160deg,#3B3363,#1E1733)",
            border: "1px solid rgba(255,255,255,.14)",
            boxShadow: "0 26px 60px rgba(109,40,217,.20)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: 26,
              overflow: "hidden",
              background: "linear-gradient(160deg,#453A72,#221A3A)",
            }}
          >
            {inView && (
              <video
                ref={videoRef}
                controls={playing}
                playsInline
                preload="metadata"
                aria-label="סרטון פרומו של Tumbapp"
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
                aria-label="הפעילו את סרטון הפרומו של Tumbapp"
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  border: "none",
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                <Image src="/media/tumbapp-logo.png" alt="" width={894} height={848} aria-hidden style={{ height: 40, width: "auto", opacity: 0.9 }} />
                <span
                  style={{
                    width: 62,
                    height: 62,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,var(--acc2),var(--acc))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(139,92,246,.55)",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" style={{ marginInlineStart: 3 }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span style={{ color: "#fff", fontSize: 13.5, fontWeight: 600 }}>צפו בסרטון · 63 שניות</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
