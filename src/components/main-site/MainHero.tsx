"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { LazyVideo } from "../LazyVideo";
import styles from "./main.module.css";

export function MainHero() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const section = scene.closest("section");
    if (!section) return;
    scene.style.transition = "transform .35s ease-out";
    scene.style.transformStyle = "preserve-3d";
    const onMove = (e: PointerEvent) => {
      if (window.innerWidth < 900) return;
      const r = section.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      scene.style.transform = `rotateY(${(x * 7).toFixed(2)}deg) rotateX(${(-y * 5).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      scene.style.transform = "";
    };
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section
      style={{
        maxWidth: 1520,
        margin: "0 auto",
        padding: "clamp(52px,7vw,104px) clamp(18px,4vw,44px) clamp(60px,8vw,120px)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "clamp(36px,4vw,72px)",
      }}
    >
      <Reveal style={{ flex: "1 1 520px", minWidth: "min(300px,100%)" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#EDE9FE",
            border: "1px solid rgba(139,92,246,.34)",
            color: "#6D28D9",
            padding: "clamp(7px,.6vw,10px) clamp(15px,1.2vw,20px)",
            borderRadius: 100,
            fontSize: "clamp(13.5px,.95vw,16px)",
            fontWeight: 500,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--acc2)", boxShadow: "0 0 10px var(--acc2)", animation: "tPulse 2.2s infinite" }} />
          אפליקציה אמיתית · פיילוט פעיל
        </div>
        <h1 style={{ fontSize: "clamp(36px,5.6vw,76px)", lineHeight: 1.06, fontWeight: 900, letterSpacing: "-.025em", margin: "22px 0 0" }}>
          הופכים כל קבוצה
          <br />
          <span
            style={{
              background: "linear-gradient(120deg,var(--acc3),var(--acc) 55%,var(--acc3))",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              animation: "tShimmer 6s linear infinite",
            }}
          >
            למשחק עם פרסים אמיתיים
          </span>
        </h1>
        <p style={{ fontSize: "clamp(17px,2vw,23px)", color: "#625A70", maxWidth: 540, margin: "22px 0 0", lineHeight: 1.65 }}>
          TUMBAPP מחברת בין קבוצות חברים, משימות יומיות, <span style={{ color: "var(--goldink)", fontWeight: 600 }}>Coins</span>,{" "}
          <span style={{ color: "var(--acc3)", fontWeight: 600 }}>יהלומים</span>, <span style={{ color: "var(--acc3)", fontWeight: 600 }}>XP</span> והטבות
          מעסקים — באפליקציה אחת שמחזירה קבוצות לפעול יחד.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
          <a
            href="#contact2"
            className={styles.ctaButton}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "clamp(16px,1.15vw,20px) clamp(30px,2.3vw,40px)",
              borderRadius: 100,
              background: "linear-gradient(135deg,var(--acc2),var(--acc))",
              color: "#fff",
              fontWeight: 700,
              fontSize: "clamp(17px,1.15vw,20px)",
              boxShadow: "0 12px 38px rgba(124,92,246,.5)",
            }}
          >
            הצטרפו לפיילוט
          </a>
          <a
            href="#business2"
            className={styles.ghostButton}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "clamp(16px,1.15vw,20px) clamp(28px,2.2vw,38px)",
              borderRadius: 100,
              background: "#FFFFFF",
              border: "1px solid rgba(109,40,217,.16)",
              color: "#241B35",
              fontWeight: 600,
              fontSize: "clamp(17px,1.15vw,20px)",
            }}
          >
            שיתוף פעולה לעסקים
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image
              src="/media/tumbapp-coin.png"
              alt=""
              width={512}
              height={512}
              style={{ width: "clamp(38px,2.9vw,48px)", height: "clamp(38px,2.9vw,48px)", display: "block", filter: "drop-shadow(0 4px 14px rgba(246,196,83,.45))" }}
            />
            <div>
              <div style={{ fontWeight: 700, fontSize: "clamp(15px,1.05vw,17.5px)" }}>Coins אישיים</div>
              <div style={{ fontSize: "clamp(12.5px,.9vw,14.5px)", color: "#625A70" }}>מטבע לכל משתמש</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: "clamp(38px,2.9vw,48px)",
                height: "clamp(38px,2.9vw,48px)",
                borderRadius: 12,
                background: "linear-gradient(135deg,var(--acc2),var(--acc3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-outfit),sans-serif",
                fontWeight: 800,
                color: "#fff",
                fontSize: 13,
                boxShadow: "0 4px 16px rgba(124,92,246,.5)",
              }}
            >
              XP
            </span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "clamp(15px,1.05vw,17.5px)" }}>XP קבוצתי</div>
              <div style={{ fontSize: "clamp(12.5px,.9vw,14.5px)", color: "#625A70" }}>התקדמות של כולם</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                width: "clamp(38px,2.9vw,48px)",
                height: "clamp(38px,2.9vw,48px)",
                borderRadius: 12,
                background: "#E3F9ED",
                border: "1px solid rgba(18,161,80,.34)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#12A150" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                <path d="M14 14h3v3h-3zM20 14h1M14 20h1M20 20h1"></path>
              </svg>
            </span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "clamp(15px,1.05vw,17.5px)" }}>מימוש ב-QR</div>
              <div style={{ fontSize: "clamp(12.5px,.9vw,14.5px)", color: "#625A70" }}>הטבות בעולם האמיתי</div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal style={{ flex: "1 1 480px", minWidth: "min(300px,100%)", display: "flex", justifyContent: "center", perspective: 1400 }}>
        <div ref={sceneRef} className={styles.heroScene} style={{ position: "relative", width: "min(calc(480px * var(--ps)),100%)", height: "calc(620px * var(--ps))" }}>
          <div style={{ position: "absolute", top: "12%", right: "6%", width: "80%", height: "76%", background: "radial-gradient(ellipse, rgba(139,92,246,.22), transparent 66%)", filter: "blur(34px)" }} />

          <div style={{ position: "absolute", top: "calc(56px * var(--ps))", right: "calc(-8px * var(--ps))", width: "calc(214px * var(--ps))", transform: "rotate(9deg) rotateY(-12deg)", animation: "tFloatR 7.5s ease-in-out infinite", "--rot": "9deg", zIndex: 1 } as React.CSSProperties}>
            <div style={{ borderRadius: "calc(34px * var(--ps))", padding: "calc(9px * var(--ps))", background: "linear-gradient(160deg,#3B3363,#1E1733)", border: "1px solid rgba(255,255,255,.14)", boxShadow: "0 22px 50px rgba(109,40,217,.20)" }}>
              <Image src="/main/screen-bets.jpg" alt="מסך הימורים חברתיים ב-TUMBAPP" width={1080} height={2278} style={{ display: "block", width: "100%", height: "auto", borderRadius: 26, border: "1px solid rgba(255,255,255,.06)" }} />
            </div>
          </div>

          <div style={{ position: "absolute", top: "calc(96px * var(--ps))", left: "calc(-6px * var(--ps))", width: "calc(206px * var(--ps))", transform: "rotate(-10deg) rotateY(12deg)", animation: "tFloatR 8.5s ease-in-out infinite .6s", "--rot": "-10deg", zIndex: 1 } as React.CSSProperties}>
            <div style={{ borderRadius: "calc(34px * var(--ps))", padding: "calc(9px * var(--ps))", background: "linear-gradient(160deg,#3B3363,#1E1733)", border: "1px solid rgba(255,255,255,.14)", boxShadow: "0 22px 50px rgba(109,40,217,.20)" }}>
              <Image src="/main/screen-shop-map.jpg" alt="חנות ההטבות ומפת עסקים ב-TUMBAPP" width={1080} height={2270} style={{ display: "block", width: "100%", height: "auto", borderRadius: 26, border: "1px solid rgba(255,255,255,.06)" }} />
            </div>
          </div>

          <div style={{ position: "absolute", top: 0, right: "50%", transform: "translateX(50%)", width: "calc(248px * var(--ps))", animation: "tFloat 6.5s ease-in-out infinite", zIndex: 3 }}>
            <div style={{ borderRadius: "calc(40px * var(--ps))", padding: "calc(11px * var(--ps))", background: "linear-gradient(160deg,#453A72,#221A3A)", border: "1px solid rgba(255,255,255,.18)", boxShadow: "0 32px 74px rgba(109,40,217,.24), 0 0 44px rgba(139,92,246,.14), inset 0 1px 0 rgba(255,255,255,.14)" }}>
              <Image src="/main/screen-home.jpg" alt="מסך הבית של TUMBAPP — Coins, רמה ומשחק יומי" width={1080} height={2292} priority style={{ display: "block", width: "100%", height: "auto", borderRadius: 30, border: "1px solid rgba(255,255,255,.06)" }} />
            </div>
            <div style={{ position: "absolute", inset: "11px 11px auto", height: "46%", borderRadius: "30px 30px 0 0", background: "linear-gradient(165deg, rgba(255,255,255,.14), transparent 46%)", pointerEvents: "none" }} />
          </div>

          <div style={{ position: "absolute", top: "calc(18px * var(--ps))", left: "10%", zIndex: 4, animation: "tFloat 5.5s ease-in-out infinite" }}>
            <Image src="/media/tumbapp-coin.png" alt="" width={512} height={512} style={{ width: "calc(72px * var(--ps))", height: "auto", display: "block", filter: "drop-shadow(0 14px 30px rgba(232,163,61,.45))" }} />
          </div>
          <div style={{ position: "absolute", bottom: "calc(196px * var(--ps))", left: "7%", zIndex: 0, animation: "tFloat 6.8s ease-in-out infinite 1.2s" }}>
            <Image src="/media/tumbapp-coin.png" alt="" width={512} height={512} style={{ width: "calc(44px * var(--ps))", height: "auto", display: "block", filter: "drop-shadow(0 10px 22px rgba(232,163,61,.4)) brightness(.94)" }} />
          </div>

          <div style={{ position: "absolute", bottom: "calc(4px * var(--ps))", left: "calc(-10px * var(--ps))", zIndex: 5, width: "min(calc(152px * var(--ps)),34%)", animation: "tFloat 6.2s ease-in-out infinite .4s" }}>
            <LazyVideo
              webm="/main/mascot/boar-wave.webm"
              mp4="/main/mascot/boar-wave.mp4"
              poster="/main/mascot/boar-wave-poster.jpg"
              alt="הקמע של TUMBAPP מנופף לשלום"
              eager
              className={styles.mascotWrap}
            />
          </div>
          <div style={{ position: "absolute", top: "calc(120px * var(--ps))", right: "2%", zIndex: 0, animation: "tFloat 7.6s ease-in-out infinite 2s" }}>
            <Image src="/media/tumbapp-coin.png" alt="" width={512} height={512} style={{ width: "calc(34px * var(--ps))", height: "auto", display: "block", filter: "drop-shadow(0 8px 18px rgba(232,163,61,.35)) brightness(.88)" }} />
          </div>

          <div style={{ position: "absolute", bottom: "calc(56px * var(--ps))", right: "4%", zIndex: 4, animation: "tFloat 7s ease-in-out infinite .9s" }}>
            <div
              style={{
                background: "rgba(255,255,255,.95)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(139,92,246,.30)",
                borderRadius: 16,
                padding: "12px 16px",
                boxShadow: "0 12px 30px rgba(109,40,217,.16)",
                animation: "tGlow 4s ease-in-out infinite",
                minWidth: "min(calc(170px * var(--ps)),100%)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: "var(--font-outfit),sans-serif" }}>
                <span style={{ fontSize: 11.5, color: "#6D28D9", fontWeight: 600 }}>GROUP XP</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#241B35" }}>LVL 12</span>
              </div>
              <div style={{ marginTop: 8, height: 8, borderRadius: 100, background: "#EDE9FE", overflow: "hidden" }}>
                <div style={{ height: "100%", width: "68%", borderRadius: 100, background: "linear-gradient(90deg,var(--acc2),var(--acc))", boxShadow: "0 0 12px rgba(124,92,246,.8)", animation: "tFill 1.8s ease-out" }} />
              </div>
            </div>
          </div>

          <div style={{ position: "absolute", top: "calc(190px * var(--ps))", right: "-2%", zIndex: 4, animation: "tFloat 6s ease-in-out infinite 1.6s" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.95)", backdropFilter: "blur(10px)", border: "1px solid rgba(217,146,43,.38)", borderRadius: 100, padding: "9px 15px", boxShadow: "0 10px 26px rgba(109,40,217,.15)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#C2620E">
                <path d="M13.5 0.7s.9 2.6.9 4.7c0 2-1.3 3.7-3.4 3.7-2.1 0-3.6-1.7-3.6-3.7l0-.4C5.4 7.4 4 10.5 4 13.7 4 18.3 7.6 22 12 22s8-3.7 8-8.3c0-5.6-4.2-9.5-6.5-13z" />
              </svg>
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 800, fontSize: 14, color: "#B45309" }}>5 STREAK</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
