"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./main.module.css";

const FILLS: Record<string, string> = { "10": "22%", "25": "55%", "50": "100%" };

const LEVELS = [
  { level: "10", width: "clamp(97px,30vw,175px)", badgeSize: 48, badgeFontSize: 16, badgeBg: "var(--lav)", badgeBorder: "1px solid rgba(139,92,246,.32)", badgeColor: "var(--acc3)", title: "Level 10", desc: "הטבות ראשונות לקבוצה", gold: false },
  { level: "25", width: "clamp(110px,32vw,193px)", badgeSize: 55, badgeFontSize: 17, badgeBg: "linear-gradient(135deg,var(--acc2),var(--acc3))", badgeBorder: undefined, badgeColor: "#fff", title: "Level 25", desc: "הטבות טובות יותר", gold: false },
  { level: "50", width: "clamp(129px,36vw,250px)", badgeSize: 48, badgeFontSize: 16, badgeBg: "linear-gradient(135deg,#FFEBC2,#D9922B)", badgeBorder: "1px solid rgba(217,146,43,.45)", badgeColor: "#7A4C0E", title: "Level 50", desc: "ההטבות השוות ביותר", gold: true },
];

export function RewardJourney() {
  const [selected, setSelected] = useState("25");

  return (
    <section id="journey2" style={{ position: "relative", maxWidth: 1520, margin: "0 auto", padding: "clamp(36px,5.7vw,60px) clamp(18px,4vw,44px)" }}>
      <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
        <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 14, letterSpacing: ".05em" }}>מסלול ההטבות</div>
        <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", fontWeight: 800, letterSpacing: "-.02em", margin: "10px 0 0", lineHeight: 1.15 }}>ככל שהקבוצה עולה — ההטבות נהיות שוות יותר</h2>
        <p style={{ color: "#625A70", fontSize: "clamp(14.5px,1.05vw,16px)", margin: "10px 0 0", lineHeight: 1.55 }}>הקבוצה צוברת XP, עולה ברמות ופותחת הטבות טובות יותר לאורך הדרך.</p>
      </Reveal>

      <Reveal style={{ maxWidth: 780, margin: "30px auto 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 9 }}>
          <div style={{ width: LEVELS[0].width, display: "flex", justifyContent: "center" }}>
            <div className={styles.mascotFloat10} style={{ position: "relative" }}>
              <Image src="/main/boar-level-10.webp" alt="הקמע של Tumbapp ברמה 10" width={340} height={340} style={{ display: "block", width: "clamp(85px,11.5vw,146px)", height: "auto", filter: "drop-shadow(0 10px 16px rgba(109,40,217,.18))" }} />
            </div>
          </div>
          <div style={{ width: LEVELS[1].width, display: "flex", justifyContent: "center" }}>
            <div className={styles.animatePowerPulse} style={{ position: "relative" }}>
              <Image src="/main/boar-level-25.webp" alt="הקמע של Tumbapp ברמה 25, גרסה שרירית" width={420} height={420} style={{ display: "block", width: "clamp(108px,14.5vw,184px)", height: "auto", filter: "drop-shadow(0 12px 20px rgba(109,40,217,.22))" }} />
            </div>
          </div>
          <div style={{ width: LEVELS[2].width, display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <div aria-hidden="true" className={styles.auraFlame} style={{ position: "absolute", inset: "8%", borderRadius: "50%", background: "radial-gradient(circle, rgba(217,146,43,.34), rgba(139,92,246,.18) 55%, transparent 72%)", filter: "blur(14px)", zIndex: 0 }} />
              <div aria-hidden="true" className={styles.auraLightning} style={{ position: "absolute", inset: "14% 26%", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,247,214,.9), rgba(255,214,120,.4) 45%, transparent 75%)", filter: "blur(6px)", zIndex: 0 }} />
              <div className={styles.powerPulseL50} style={{ position: "relative", zIndex: 1 }}>
                <Image src="/main/boar-level-50.webp" alt="הקמע של Tumbapp ברמה 50, גרסה עוצמתית עם הילה" width={550} height={550} style={{ display: "block", width: "clamp(136px,17.3vw,232px)", height: "auto", filter: "drop-shadow(0 14px 24px rgba(217,146,43,.28))" }} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", gap: 9, marginTop: 8 }}>
          {LEVELS.map((lv) => {
            const active = selected === lv.level;
            return (
              <button
                key={lv.level}
                type="button"
                aria-pressed={active}
                onClick={() => setSelected(lv.level)}
                className={`${styles.levelCard} ${active ? (lv.gold ? styles.levelCardActiveGold : styles.levelCardActive) : styles.levelCardInactive}`}
                style={{ width: lv.width }}
              >
                <span style={{ width: lv.badgeSize, height: lv.badgeSize, borderRadius: "50%", background: lv.badgeBg, border: lv.badgeBorder, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-outfit),sans-serif", fontWeight: 800, fontSize: lv.badgeFontSize, color: lv.badgeColor }}>
                  {lv.level}
                </span>
                <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 700, fontSize: 14.5, color: "#241B35" }}>{lv.title}</span>
                <span style={{ fontSize: 13, color: "#625A70", textAlign: "center", lineHeight: 1.35 }}>{lv.desc}</span>
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: "var(--font-outfit),sans-serif" }}>
            <span style={{ fontSize: 11, color: "#6D28D9", fontWeight: 600, letterSpacing: ".04em" }}>GROUP XP</span>
            <span style={{ fontSize: 12.5, fontWeight: 800, color: "#241B35" }}>Level {selected}</span>
          </div>
          <div style={{ marginTop: 6, height: 7, borderRadius: 100, background: "#EDE9FE", overflow: "hidden" }}>
            <div style={{ height: "100%", width: FILLS[selected], borderRadius: 100, background: "linear-gradient(90deg,var(--acc2),var(--acc))", transition: "width .9s cubic-bezier(.2,.7,.2,1)" }} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
