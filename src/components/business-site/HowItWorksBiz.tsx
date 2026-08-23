import { Reveal } from "../main-site/Reveal";
import styles from "./business.module.css";

const STEPS = [
  { n: "1", title: "מצטרפים כעסק", text: "מגדירים את העסק, קהל היעד וסוגי ההטבות המתאימים לכם." },
  { n: "2", title: "יוצרים הטבה מתאימה", text: "לדוגמה: הנחה, שדרוג, מנה במתנה או הטבה קבוצתית." },
  { n: "3", title: "הקבוצות מגלות אתכם", text: "משתמשים רלוונטיים רואים את העסק כשהם מחפשים לאן לצאת." },
  { n: "4", title: "מממשים ומודדים", text: "הלקוח מציג קוד והמימוש מאומת דרך מערכת העסק." },
];

export function HowItWorksBiz() {
  return (
    <section id="biz-how" style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(40px,6vw,72px) clamp(18px,4vw,40px)" }}>
      <Reveal style={{ textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
        <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 13.5, letterSpacing: ".05em" }}>ארבעה צעדים פשוטים</div>
        <h2 style={{ fontSize: "clamp(24px,3.2vw,38px)", fontWeight: 800, letterSpacing: "-.02em", margin: "10px 0 0", lineHeight: 1.18 }}>
          כך Tumbapp מחברת בין הקבוצה לעסק
        </h2>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(210px,100%),1fr))", gap: 16, marginTop: 36 }}>
        {STEPS.map((s) => (
          <Reveal
            key={s.n}
            className={styles.liftCard}
            style={{ position: "relative", background: "var(--card)", border: "1px solid rgba(109,40,217,.12)", borderRadius: 18, padding: "22px 20px", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", top: -14, insetInlineStart: 12, fontFamily: "var(--font-outfit),sans-serif", fontWeight: 900, fontSize: 64, color: "rgba(139,92,246,.14)", lineHeight: 1 }}>
              {s.n}
            </div>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 30,
                  height: 30,
                  borderRadius: 9,
                  background: "linear-gradient(135deg,var(--acc2),var(--acc3))",
                  color: "#fff",
                  fontFamily: "var(--font-outfit),sans-serif",
                  fontWeight: 800,
                  fontSize: 13.5,
                }}
              >
                {s.n}
              </span>
              <h3 style={{ fontSize: 16.5, fontWeight: 700, margin: "14px 0 6px" }}>{s.title}</h3>
              <p style={{ color: "var(--ink2)", fontSize: 14, margin: 0, lineHeight: 1.55 }}>{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
