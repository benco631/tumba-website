import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./main.module.css";

const STEPS = [
  {
    n: "1",
    numColor: "rgba(139,92,246,.16)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M19 8v6M22 11h-6"></path>
      </svg>
    ),
    title: "יוצרים קבוצה",
    body: "חברים, כיתה, צוות, מחלקה או קהילה — קבוצה פרטית בכמה שניות.",
    bg: "#FFFFFF",
  },
  {
    n: "2",
    numColor: "rgba(139,92,246,.16)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"></path>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
    title: "משלימים משימות ואתגרים",
    body: "משחקונים יומיים, שאלות, הצבעות, הימורים חברתיים ו-Streaks.",
    bg: "#FFFFFF",
  },
  {
    n: "3",
    numColor: "rgba(184,117,20,.30)",
    icon: <Image src="/media/tumbapp-coin.png" alt="מטבע TUMBAPP" width={512} height={512} style={{ width: 54, height: "auto", display: "block", filter: "drop-shadow(0 8px 20px rgba(232,163,61,.4))" }} />,
    title: "צוברים Coins, יהלומים ו-XP",
    body: "Coins ויהלומים אישיים לכל משתמש, ו-XP קבוצתי שמקדם את כולם יחד.",
    bg: "#FFFFFF",
  },
  {
    n: "4",
    numColor: "rgba(109,40,217,.16)",
    icon: (
      <div style={{ width: 52, height: 52, borderRadius: 16, background: "linear-gradient(135deg,var(--acc2),var(--acc3))", boxShadow: "0 8px 24px rgba(124,92,246,.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12v10H4V12"></path>
          <path d="M2 7h20v5H2z"></path>
          <path d="M12 22V7"></path>
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
        </svg>
      </div>
    ),
    title: "פותחים הטבות אמיתיות",
    body: "רמת הקבוצה פותחת הטבות מעסקים אמיתיים — והמימוש נעשה עם Coins ויהלומים, בסריקת QR.",
    bg: "linear-gradient(150deg,#EDE9FE,#F5F3FF)",
  },
];

export function HowItWorksMain() {
  return (
    <section id="how2" style={{ position: "relative", maxWidth: 1520, margin: "0 auto", padding: "clamp(56px,8vw,122px) clamp(18px,4vw,44px)" }}>
      <Reveal aria-hidden style={{ position: "absolute", top: 2, insetInlineEnd: "clamp(10px,6vw,90px)", width: "clamp(96px,9vw,140px)", zIndex: 1, animation: "tFloat 6.5s ease-in-out infinite" }} className={styles.mascotCorner}>
        <Image src="/main/tumbapp-boar-running.webp" alt="" width={640} height={640} style={{ display: "block", width: "100%", height: "auto", filter: "drop-shadow(0 14px 22px rgba(109,40,217,.22))" }} />
      </Reveal>

      <Reveal style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
        <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 14, letterSpacing: ".05em" }}>איך זה עובד</div>
        <h2 style={{ fontSize: "clamp(30px,4vw,54px)", fontWeight: 800, letterSpacing: "-.02em", margin: "12px 0 0", lineHeight: 1.12 }}>ארבעה צעדים — וקבוצה שלא מפסיקה לשחק</h2>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))", gap: 18, marginTop: 50 }}>
        {STEPS.map((s) => (
          <Reveal key={s.n} className={styles.liftCard} style={{ position: "relative", background: s.bg, border: s.n === "4" ? "1px solid rgba(139,92,246,.38)" : "1px solid rgba(109,40,217,.12)", borderRadius: 22, padding: "28px 24px", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -18, insetInlineStart: 14, fontFamily: "var(--font-outfit),sans-serif", fontWeight: 900, fontSize: 88, color: s.numColor, lineHeight: 1 }}>{s.n}</div>
            {s.n === "3" || s.n === "4" ? (
              s.icon
            ) : (
              <div style={{ width: 52, height: 52, borderRadius: 16, background: "linear-gradient(135deg,#EDE9FE,#F5F3FF)", border: "1px solid rgba(139,92,246,.32)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {s.icon}
              </div>
            )}
            <h3 style={{ fontSize: "clamp(19px,1.32vw,22px)", fontWeight: 700, margin: "18px 0 6px" }}>{s.title}</h3>
            <p style={{ color: "#625A70", fontSize: "clamp(14.5px,.98vw,16.5px)", margin: 0, lineHeight: 1.55 }}>{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
