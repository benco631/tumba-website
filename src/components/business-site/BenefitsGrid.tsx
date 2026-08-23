import { Reveal } from "../main-site/Reveal";
import styles from "./business.module.css";

const BENEFITS = [
  {
    text: "חשיפה ממוקדת לקבוצות חברים",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--acc3)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
    ),
  },
  {
    text: "לקוחות חדשים עם סיבה להגיע",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--acc3)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    text: "עידוד הגעה בימים ובשעות חלשים",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--acc3)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 3"></path>
      </svg>
    ),
  },
  {
    text: "שליטה בתנאי ההטבה והמימוש",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--acc3)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
  {
    text: "מעקב אחר מימושים וביצועים",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--acc3)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"></path>
        <path d="M18 17V9M13 17V5M8 17v-4"></path>
      </svg>
    ),
  },
  {
    text: "ליווי אישי לאורך שיתוף הפעולה",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--acc3)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
  },
];

export function BenefitsGrid() {
  return (
    <section id="biz-benefits" style={{ position: "relative", padding: "clamp(40px,6vw,72px) 0", background: "linear-gradient(180deg,transparent,var(--lav) 45%,transparent)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(18px,4vw,40px)" }}>
        <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 13.5, letterSpacing: ".05em" }}>מה יוצא לכם מזה?</div>
          <h2 style={{ fontSize: "clamp(24px,3.2vw,38px)", fontWeight: 800, letterSpacing: "-.02em", margin: "10px 0 0", lineHeight: 1.18 }}>
            יותר מקידום — ערוץ שמחבר אתכם לקבוצות פעילות
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))", gap: 14, marginTop: 32 }}>
          {BENEFITS.map((b) => (
            <Reveal
              key={b.text}
              className={styles.liftCard}
              style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--card)", border: "1px solid rgba(109,40,217,.12)", borderRadius: 16, padding: "16px 18px" }}
            >
              <span style={{ flex: "none", width: 38, height: 38, borderRadius: 11, background: "var(--lav)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {b.icon}
              </span>
              <span style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink)" }}>{b.text}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
