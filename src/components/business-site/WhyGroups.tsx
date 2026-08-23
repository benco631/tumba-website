import { Reveal } from "../main-site/Reveal";
import { LazyVideo } from "../LazyVideo";
import { WildTogether } from "../shared/WildTogether";
import styles from "./business.module.css";

export function WhyGroups() {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(40px,6vw,72px) clamp(18px,4vw,40px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(28px,4vw,52px)" }}>
      <Reveal style={{ flex: "1 1 380px", minWidth: "min(280px,100%)" }}>
        <h2 style={{ fontSize: "clamp(24px,3.2vw,38px)", fontWeight: 800, letterSpacing: "-.02em", margin: 0, lineHeight: 1.2 }}>
          לקוח אחד מגלה אתכם — קבוצה שלמה מגיעה
        </h2>
        <p style={{ color: "var(--ink2)", fontSize: "clamp(15px,1.05vw,17px)", margin: "16px 0 0", lineHeight: 1.65, maxWidth: 480 }}>
          ההטבות ב־Tumbapp נועדו לעודד יציאות קבוצתיות. במקום למשוך רק משתמש יחיד, העסק מקבל הזדמנות לארח כמה חברים יחד ולהפוך ביקור ראשון לחוויה שחוזרים אליה.
        </p>
        <p style={{ margin: "18px 0 0", fontSize: "clamp(14.5px,1.15vw,16.5px)", fontWeight: 700, letterSpacing: ".01em", color: "var(--acc3)" }}>
          <WildTogether />
        </p>
      </Reveal>

      <Reveal style={{ flex: "1 1 260px", minWidth: "min(220px,100%)", display: "flex", justifyContent: "center" }}>
        <div className={styles.float} style={{ width: "min(280px,70vw)" }}>
          <LazyVideo
            webm="/main/mascot/boar-group.webm"
            mp4="/main/mascot/boar-group.mp4"
            poster="/main/mascot/boar-group-poster.webp"
            alt="קבוצת חברים חוגגת יחד עם הקמע של Tumbapp"
            aspectRatio="3 / 2"
            style={{ borderRadius: 20, overflow: "hidden" }}
          />
        </div>
      </Reveal>
    </section>
  );
}
