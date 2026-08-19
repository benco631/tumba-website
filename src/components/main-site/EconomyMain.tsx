import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./main.module.css";

const ARROW = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

export function EconomyMain() {
  return (
    <section id="economy2" aria-labelledby="economy2-title" style={{ position: "relative", padding: "clamp(56px,8vw,122px) 0", background: "linear-gradient(180deg,transparent,#F0EBFF 42%,transparent)" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <svg viewBox="0 0 24 24" width="22" height="22" style={{ position: "absolute", top: "7%", insetInlineEnd: "9%", opacity: 0.26, animation: "tFloat 7.4s ease-in-out infinite" }}>
          <path d="M12 2 22 9 12 22 2 9z" fill="#22A6C9" />
        </svg>
        <svg viewBox="0 0 24 24" width="14" height="14" style={{ position: "absolute", bottom: "14%", insetInlineStart: "8%", opacity: 0.24, animation: "tFloat 9s ease-in-out infinite .7s" }}>
          <path d="M12 2 22 9 12 22 2 9z" fill="#0E7490" />
        </svg>
      </div>

      <div style={{ position: "relative", maxWidth: 1520, margin: "0 auto", padding: "0 clamp(18px,4vw,44px)" }}>
        <Reveal aria-hidden className={styles.mascotCorner} style={{ position: "absolute", top: -4, insetInlineStart: "clamp(6px,5vw,70px)", width: "clamp(88px,8vw,128px)", zIndex: 1, animation: "tFloat 7s ease-in-out infinite .3s" }}>
          <Image src="/main/tumbapp-boar-winking.webp" alt="" width={640} height={640} style={{ display: "block", width: "100%", height: "auto", filter: "drop-shadow(0 12px 20px rgba(217,146,43,.24))" }} />
        </Reveal>

        <Reveal style={{ textAlign: "center", maxWidth: 780, margin: "0 auto" }}>
          <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 14, letterSpacing: ".05em" }}>הכלכלה של TUMBAPP · משחקים יחד, מתקדמים יחד</div>
          <h2 id="economy2-title" style={{ fontSize: "clamp(30px,4vw,54px)", fontWeight: 800, letterSpacing: "-.02em", margin: "12px 0 0", lineHeight: 1.12 }}>כל הפעילות מתחברת לכלכלה אחת</h2>
          <p style={{ color: "#625A70", fontSize: "clamp(17px,1.15vw,20px)", margin: "16px 0 0", lineHeight: 1.65 }}>
            ב־TUMBAPP כל פעולה מקדמת אתכם: המשתמשים צוברים מטבעות ויהלומים אישיים, ובמקביל כל חברי הקבוצה תורמים ל־XP המשותף. כך הפעילות באפליקציה הופכת להטבות
            חברתיות, שדרוגים וחוויות אמיתיות בעולם שבחוץ.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(290px,100%),1fr))", gap: 20, marginTop: 46 }}>
          {/* Coins */}
          <Reveal className={styles.liftCard} style={{ position: "relative", background: "#FFFFFF", border: "1px solid rgba(217,146,43,.34)", borderRadius: 26, padding: 30, overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: -40, insetInlineStart: -40, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,146,43,.13), transparent 70%)" }} />
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 14 }}>
              <Image src="/media/tumbapp-coin.png" alt="" aria-hidden="true" width={512} height={512} style={{ width: 52, height: "auto", display: "block", filter: "drop-shadow(0 8px 20px rgba(232,163,61,.4))" }} />
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FFF8EC", border: "1px solid rgba(217,146,43,.34)", borderRadius: 100, padding: "5px 12px", fontSize: 12.5, fontWeight: 700, color: "#A8620A" }}>אישי</span>
            </div>
            <h3 style={{ position: "relative", fontSize: "clamp(20px,1.4vw,24px)", fontWeight: 800, margin: "18px 0 0", lineHeight: 1.3 }}>Coins — המטבע האישי והיומיומי</h3>
            <p style={{ position: "relative", color: "#625A70", fontSize: "clamp(15px,1vw,16.5px)", margin: "10px 0 0", lineHeight: 1.6 }}>
              משתמשים פעילים צוברים Coins בתדירות גבוהה יחסית. אפשר להשתמש בהם עבור הטבות וירטואליות וחברתיות שמשפיעות על החוויה באפליקציה ובקבוצה.
            </p>
            <ul style={{ position: "relative", listStyle: "none", padding: 0, margin: "18px 0 0", display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["עיצובים מיוחדים לאפליקציה", "פטור מלהיות הנהג", "בחירת מקום הבילוי", "תפקיד מנהל הקבוצה", "דאבל XP"].map((t) => (
                <li key={t} style={{ background: "#FFF8EC", border: "1px solid rgba(217,146,43,.28)", borderRadius: 100, padding: "7px 13px", fontSize: 13.5, color: "#241B35" }}>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Diamonds */}
          <Reveal className={styles.liftCard} style={{ position: "relative", background: "#FFFFFF", border: "1px solid rgba(34,166,201,.40)", borderRadius: 26, padding: 30, overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: -40, insetInlineStart: -40, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,166,201,.16), transparent 70%)" }} />
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 14 }}>
              <Image src="/media/tumbapp-diamond.webp" alt="" aria-hidden="true" width={560} height={560} style={{ width: 52, height: "auto", display: "block", filter: "drop-shadow(0 8px 20px rgba(34,166,201,.4))" }} />
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#E4F6FA", border: "1px solid rgba(34,166,201,.40)", borderRadius: 100, padding: "5px 12px", fontSize: 12.5, fontWeight: 700, color: "#0F6E87" }}>אישי · נדיר</span>
            </div>
            <h3 style={{ position: "relative", fontSize: "clamp(20px,1.4vw,24px)", fontWeight: 800, margin: "18px 0 0", lineHeight: 1.3 }}>יהלומים — נדירים ובעלי ערך</h3>
            <p style={{ position: "relative", color: "#625A70", fontSize: "clamp(15px,1vw,16.5px)", margin: "10px 0 0", lineHeight: 1.6 }}>
              יהלומים מתקבלים בתדירות נמוכה יותר ולכן הם נדירים ובעלי ערך גבוה יותר. בשילוב עם Coins, ניתן להשתמש בהם כדי לממש הטבות אמיתיות בבתי עסק משתתפים.
            </p>
            <ul style={{ position: "relative", listStyle: "none", padding: 0, margin: "18px 0 0", display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["הטבות במסעדות", "הטבות בברים", "אטרקציות ובילויים", "הצעות מיוחדות משותפים"].map((t) => (
                <li key={t} style={{ background: "#F0FAFC", border: "1px solid rgba(34,166,201,.32)", borderRadius: 100, padding: "7px 13px", fontSize: 13.5, color: "#241B35" }}>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Group XP */}
          <Reveal className={styles.liftCard} style={{ position: "relative", background: "#FFFFFF", border: "1px solid rgba(109,40,217,.34)", borderRadius: 26, padding: 30, overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: -40, insetInlineStart: -40, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(109,40,217,.13), transparent 70%)" }} />
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 52, height: 52, borderRadius: 16, background: "linear-gradient(135deg,#6D28D9,#4C1D95)", boxShadow: "0 8px 22px rgba(109,40,217,.34)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-outfit),sans-serif", fontWeight: 900, fontSize: 18, color: "#fff" }}>
                XP
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#EDE9FE", border: "1px solid rgba(109,40,217,.34)", borderRadius: 100, padding: "5px 12px", fontSize: 12.5, fontWeight: 700, color: "#4C1D95" }}>קבוצתי</span>
            </div>
            <h3 style={{ position: "relative", fontSize: "clamp(20px,1.4vw,24px)", fontWeight: 800, margin: "18px 0 0", lineHeight: 1.3 }}>XP — ההתקדמות של כל הקבוצה</h3>
            <p style={{ position: "relative", color: "#625A70", fontSize: "clamp(15px,1vw,16.5px)", margin: "10px 0 0", lineHeight: 1.6 }}>
              כל חברי הקבוצה תורמים יחד ל־XP המשותף. ככל שהקבוצה עולה ברמות, היא פותחת גישה להטבות טובות יותר, אפשרויות חדשות ומתנות נוספות לכל הקבוצה.
            </p>
            <div style={{ position: "relative", marginTop: 18, background: "#F5F3FF", border: "1px solid rgba(109,40,217,.2)", borderRadius: 16, padding: "14px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: "var(--font-outfit),sans-serif" }}>
                <span style={{ fontSize: 11.5, color: "#6D28D9", fontWeight: 700, letterSpacing: ".04em" }}>GROUP XP</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#241B35" }}>LVL 12</span>
              </div>
              <div style={{ marginTop: 9, height: 8, borderRadius: 100, background: "#E3DBFB", overflow: "hidden" }}>
                <div style={{ height: "100%", width: "68%", borderRadius: 100, background: "linear-gradient(90deg,#8B5CF6,#6D28D9)" }} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* how the systems connect */}
        <Reveal style={{ marginTop: 22, background: "#FFFFFF", border: "1px solid rgba(109,40,217,.14)", borderRadius: 26, padding: "clamp(22px,4vw,34px)" }}>
          <div className={styles.flowInner}>
            <h3 style={{ fontSize: "clamp(19px,2.4vw,26px)", fontWeight: 800, margin: "0 0 20px", letterSpacing: "-.01em" }}>איך הכול מתחבר</h3>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "linear-gradient(135deg,#EDE9FE,#F5F3FF)", border: "1px solid rgba(139,92,246,.3)", borderRadius: 100, padding: "11px 20px", fontWeight: 700, fontSize: 15.5, color: "#241B35" }}>
              <span aria-hidden="true" style={{ width: 9, height: 9, borderRadius: "50%", background: "#8B5CF6", boxShadow: "0 0 10px #8B5CF6" }} />
              פעילות באפליקציה
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 18 }}>
              <div className={styles.flowRow} style={{ background: "linear-gradient(to left,#FFF8EC,#F0FAFC)", border: "1px solid rgba(34,166,201,.28)", borderRadius: 18, padding: "16px 18px" }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: "#241B35" }}>Coins ויהלומים אישיים</span>
                <span className={styles.flowArrow} aria-hidden="true">{ARROW}</span>
                <span style={{ fontSize: 15, color: "#625A70" }}>מימוש הטבות ושדרוגים</span>
              </div>
              <div className={styles.flowRow} style={{ background: "#F5F3FF", border: "1px solid rgba(139,92,246,.3)", borderRadius: 18, padding: "16px 18px" }}>
                <span style={{ fontWeight: 700, fontSize: 15, color: "#241B35" }}>XP קבוצתי</span>
                <span className={styles.flowArrow} aria-hidden="true">{ARROW}</span>
                <span style={{ fontSize: 15, color: "#625A70" }}>עלייה ברמות</span>
                <span className={styles.flowArrow} aria-hidden="true">{ARROW}</span>
                <span style={{ fontSize: 15, color: "#625A70" }}>פתיחת הטבות טובות יותר</span>
              </div>
            </div>

            <p style={{ margin: "20px 0 0", background: "linear-gradient(135deg,#8B5CF6,#6D28D9)", color: "#FFFFFF", borderRadius: 18, padding: "16px 20px", fontWeight: 700, fontSize: "clamp(15px,2vw,17px)", lineHeight: 1.5 }}>
              הרמה הקבוצתית פותחת את ההטבה — המטבעות והיהלומים מאפשרים לממש אותה.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(230px,100%),1fr))", gap: 10 }}>
              <li style={{ display: "flex", alignItems: "center", gap: 10, background: "#FFF8EC", border: "1px solid rgba(217,146,43,.3)", borderRadius: 14, padding: "13px 15px", fontSize: 14, color: "#241B35" }}>
                <Image src="/media/tumbapp-coin.png" alt="" aria-hidden="true" width={512} height={512} style={{ width: 22, height: "auto", flex: "none" }} />
                <span><strong>Coins</strong> — אישיים ונצברים בתדירות גבוהה</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 10, background: "#F0FAFC", border: "1px solid rgba(34,166,201,.34)", borderRadius: 14, padding: "13px 15px", fontSize: 14, color: "#241B35" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" style={{ flex: "none" }}>
                  <path d="M12 2 22 9 12 22 2 9z" fill="#22A6C9" />
                  <path d="M12 2 7 9l5 13 5-13z" fill="#7FD3E5" />
                </svg>
                <span><strong>יהלומים</strong> — אישיים, נדירים ובעלי ערך גבוה</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 10, background: "#EDE9FE", border: "1px solid rgba(109,40,217,.3)", borderRadius: 14, padding: "13px 15px", fontSize: 14, color: "#241B35" }}>
                <span aria-hidden="true" style={{ flex: "none", width: 22, height: 22, borderRadius: 7, background: "linear-gradient(135deg,#6D28D9,#4C1D95)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-outfit),sans-serif", fontWeight: 900, fontSize: 10, color: "#fff" }}>XP</span>
                <span><strong>XP</strong> — משותף לכל הקבוצה</span>
              </li>
            </ul>

            <p style={{ margin: "16px 0 0", color: "#625A70", fontSize: 14.5, lineHeight: 1.6 }}>Coins ויהלומים הם אישיים לכל משתמש. XP ורמת הקבוצה משותפים לכל חברי הקבוצה.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
