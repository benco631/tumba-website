"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./main.module.css";

const PILLS = [
  { text: "פיילוטים בסיכון נמוך", highlight: false },
  { text: "מימוש הטבות ב-QR", highlight: false },
  { text: "פעילות מדידה וברורה", highlight: false },
  { text: "שימור וביקורים חוזרים", highlight: false },
  { text: "הטבות לפי Level קבוצתי", highlight: false },
  { text: "שליטה מלאה בהטבה ובעלות", highlight: true },
];

const QR_COPY: Record<string, [string, string]> = {
  "1": ["הקבוצה מגיעה לעסק", "הטבה פעילה מחכה במקום"],
  "2": ["סורקים QR", "סריקה מהירה בתוך העסק"],
  "3": ["ההטבה מומשה", "קבוצה · 6 אנשים"],
};

const QR_LABELS: Record<string, string> = { "1": "1 · מגיעים לעסק", "2": "2 · סורקים QR", "3": "3 · ההטבה מומשה" };

export function BusinessesMain() {
  const [step, setStep] = useState("1");
  const [title, sub] = QR_COPY[step];

  return (
    <section id="business2" style={{ position: "relative", padding: "clamp(60px,8vw,126px) 0", background: "linear-gradient(180deg,transparent,#F0EBFF,transparent)" }}>
      <div style={{ maxWidth: 1520, margin: "0 auto", padding: "0 clamp(18px,4vw,44px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(36px,5vw,64px)" }}>
        <Reveal style={{ flex: "1 1 420px", minWidth: "min(300px,100%)" }}>
          <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 14, letterSpacing: ".05em" }}>לעסקים</div>
          <h2 style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 800, letterSpacing: "-.02em", margin: "12px 0 0", lineHeight: 1.13 }}>מביאים קבוצות של לקוחות. לא רק יחידים.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))", gap: 14, marginTop: 28 }}>
            {PILLS.map((p) => (
              <div
                key={p.text}
                className={styles.liftCard}
                style={
                  p.highlight
                    ? { background: "linear-gradient(135deg,#EDE9FE,#F5F3FF)", border: "1px solid rgba(139,92,246,.38)", borderRadius: 16, padding: "16px 18px", fontSize: 15, color: "#fff", fontWeight: 600 }
                    : { background: "#FFFFFF", border: "1px solid rgba(109,40,217,.12)", borderRadius: 16, padding: "16px 18px", fontSize: 15, color: "#241B35", fontWeight: 500 }
                }
              >
                {p.text}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginTop: 30 }}>
            <a
              href="#contact2"
              className={styles.ctaButton}
              style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "clamp(15px,1.1vw,19px) clamp(28px,2.2vw,38px)", borderRadius: 100, background: "linear-gradient(135deg,var(--acc2),var(--acc))", color: "#fff", fontWeight: 700, fontSize: "clamp(16px,1.1vw,18.5px)", boxShadow: "0 10px 32px rgba(124,92,246,.45)" }}
            >
              דברו איתנו על שיתוף פעולה
            </a>
            <Reveal aria-hidden style={{ width: "clamp(72px,7vw,108px)", flex: "none", animation: "tFloat 6.2s ease-in-out infinite .4s" }}>
              <Image src="/main/tumbapp-boar-front.webp" alt="" width={640} height={640} style={{ display: "block", width: "100%", height: "auto", filter: "drop-shadow(0 10px 18px rgba(109,40,217,.22))" }} />
            </Reveal>
          </div>
        </Reveal>

        <Reveal style={{ flex: "1 1 340px", minWidth: "min(280px,100%)", display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "min(460px,92vw)" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: -26, background: "radial-gradient(circle, rgba(139,92,246,.18), transparent 68%)", filter: "blur(26px)" }} />
            <div style={{ position: "relative", borderRadius: 26, overflow: "hidden", border: "1px solid rgba(139,92,246,.30)", boxShadow: "0 26px 60px rgba(109,40,217,.16)", animation: "tFloat 7.5s ease-in-out infinite .5s" }}>
              <Image src="/main/qr-redeem-business.png" alt="מימוש הטבה בסריקת QR בעסק שותף" width={1200} height={896} style={{ display: "block", width: "100%", height: "auto" }} />
            </div>
            <div style={{ position: "absolute", bottom: 96, insetInlineEnd: -14, animation: "tFloat 6s ease-in-out infinite 1s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9, background: "rgba(255,255,255,.95)", backdropFilter: "blur(10px)", border: "1px solid rgba(18,161,80,.34)", borderRadius: 14, padding: "11px 15px", boxShadow: "0 10px 26px rgba(109,40,217,.15)" }}>
                <span style={{ width: 30, height: 30, borderRadius: 9, background: "#E3F9ED", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#12A150" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <div style={{ fontFamily: "var(--font-outfit),sans-serif" }}>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: "#241B35" }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: "#625A70" }}>{sub}</div>
                </div>
              </div>
            </div>
            <div style={{ position: "relative", display: "flex", gap: 8, marginTop: 14 }}>
              {(["1", "2", "3"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  aria-pressed={step === k}
                  onClick={() => setStep(k)}
                  className={`${styles.qrStep} ${step === k ? styles.qrStepActive : ""}`}
                >
                  {QR_LABELS[k]}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
