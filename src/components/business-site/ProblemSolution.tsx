import { Reveal } from "../main-site/Reveal";
import styles from "./business.module.css";

const CARDS = [
  {
    title: "קהל עם כוונת יציאה",
    text: "חשיפה לקבוצות שכבר מחפשות מקום לבילוי משותף.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--acc3)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M19 8v6M22 11h-6"></path>
      </svg>
    ),
  },
  {
    title: "הטבות שמביאות לקוחות",
    text: "בונים הצעה אטרקטיבית שמעניקה לקבוצה סיבה אמיתית להגיע.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--acc3)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12v10H4V12"></path>
        <path d="M2 7h20v5H2z"></path>
        <path d="M12 22V7"></path>
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
      </svg>
    ),
  },
  {
    title: "מימוש פשוט ומדיד",
    text: "מאמתים את ההטבה באמצעות QR ועוקבים אחר המימושים.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--acc3)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"></rect>
        <rect x="14" y="3" width="7" height="7" rx="1"></rect>
        <rect x="3" y="14" width="7" height="7" rx="1"></rect>
        <path d="M14 14h3v3h-3zM20 14h1M14 20h1M20 20h1"></path>
      </svg>
    ),
  },
];

export function ProblemSolution() {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(40px,6vw,72px) clamp(18px,4vw,40px)" }}>
      <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
        <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 13.5, letterSpacing: ".05em" }}>פרסום שמוביל לביקור אמיתי</div>
        <h2 style={{ fontSize: "clamp(24px,3.2vw,38px)", fontWeight: 800, letterSpacing: "-.02em", margin: "10px 0 0", lineHeight: 1.18 }}>
          לא עוד פרסום רחב לקהל שלא בהכרח מתכוון להגיע
        </h2>
        <p style={{ color: "var(--ink2)", fontSize: "clamp(15px,1.05vw,17px)", margin: "14px 0 0", lineHeight: 1.6 }}>
          במקום להציג מודעה לאלפי אנשים אקראיים, Tumbapp חושפת את העסק לקבוצות שכבר משחקות יחד, צוברות תגמולים ומחפשות מקום לצאת אליו.
        </p>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(230px,100%),1fr))", gap: 16, marginTop: 36 }}>
        {CARDS.map((c) => (
          <Reveal
            key={c.title}
            className={styles.liftCard}
            style={{ background: "var(--card)", border: "1px solid rgba(109,40,217,.12)", borderRadius: 20, padding: "24px 22px" }}
          >
            <div style={{ width: 46, height: 46, borderRadius: 14, background: "var(--lav)", border: "1px solid rgba(139,92,246,.30)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {c.icon}
            </div>
            <h3 style={{ fontSize: 17.5, fontWeight: 700, margin: "16px 0 6px" }}>{c.title}</h3>
            <p style={{ color: "var(--ink2)", fontSize: 14.5, margin: 0, lineHeight: 1.55 }}>{c.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
