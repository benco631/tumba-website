import { Reveal } from "../main-site/Reveal";
import styles from "./business.module.css";

const CATEGORIES = ["מסעדות", "בתי קפה", "ברים ופאבים", "חדרי בריחה", "באולינג וקריוקי", "קולנוע ומתחמי בילוי", "הופעות ואירועים", "אטרקציות ופעילויות קבוצתיות"];

export function WhoItsFor() {
  return (
    <section id="biz-who" style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(40px,6vw,72px) clamp(18px,4vw,40px)" }}>
      <Reveal style={{ textAlign: "center", maxWidth: 620, margin: "0 auto" }}>
        <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 13.5, letterSpacing: ".05em" }}>שותפים שמתאימים לחוויה</div>
        <h2 style={{ fontSize: "clamp(24px,3.2vw,38px)", fontWeight: 800, letterSpacing: "-.02em", margin: "10px 0 0", lineHeight: 1.18 }}>
          למי Tumbapp מתאימה?
        </h2>
      </Reveal>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginTop: 30 }}>
        {CATEGORIES.map((c) => (
          <Reveal as="span" key={c} className={styles.chip}>
            {c}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
