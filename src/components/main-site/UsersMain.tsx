import Image from "next/image";
import { Reveal } from "./Reveal";
import { LazyVideo } from "../LazyVideo";
import styles from "./main.module.css";

export function UsersMain() {
  return (
    <section id="users2" style={{ maxWidth: 1520, margin: "0 auto", padding: "clamp(56px,8vw,122px) clamp(18px,4vw,44px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(36px,5vw,64px)" }}>
      <Reveal style={{ flex: "1 1 300px", minWidth: "min(280px,100%)", display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "min(300px,88vw)" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: -26, background: "radial-gradient(circle, rgba(139,92,246,.20), transparent 68%)", filter: "blur(26px)" }} />
          <div style={{ position: "relative", borderRadius: 40, padding: 11, background: "linear-gradient(160deg,#453A72,#221A3A)", border: "1px solid rgba(255,255,255,.16)", boxShadow: "0 26px 60px rgba(109,40,217,.18)", animation: "tFloat 7s ease-in-out infinite" }}>
            <Image src="/main/screen-bets.jpg" alt="הימורים חברתיים על Coins בקבוצה" width={1080} height={2278} style={{ display: "block", width: "100%", height: "auto", borderRadius: 30, border: "1px solid rgba(255,255,255,.06)" }} />
          </div>
          <div className={styles.mascotIdle} style={{ position: "absolute", bottom: -30, insetInlineStart: -62, zIndex: 4, width: "min(128px,32%)", animation: "tFloat 7.4s ease-in-out infinite .8s" }}>
            <LazyVideo
              webm="/main/mascot/boar-idle.webm"
              mp4="/main/mascot/boar-idle.mp4"
              poster="/main/mascot/boar-idle-poster.jpg"
              alt="הקמע של TUMBAPP נח ומצפצף בעיניים"
              className={styles.mascotWrap}
            />
          </div>
        </div>
      </Reveal>

      <Reveal style={{ flex: "1 1 420px", minWidth: "min(300px,100%)" }}>
        <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 14, letterSpacing: ".05em" }}>למשתמשים</div>
        <h2 style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 800, letterSpacing: "-.02em", margin: "12px 0 0", lineHeight: 1.13 }}>יותר כיף עם החברים האמיתיים שלך</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 28 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ flex: "none", width: 42, height: 42, borderRadius: 13, background: "#EDE9FE", border: "1px solid rgba(139,92,246,.30)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"></path>
              </svg>
            </span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "clamp(17px,1.2vw,19.5px)" }}>פעילות קבוצתית יומית</div>
              <div style={{ color: "#625A70", fontSize: 14.5, marginTop: 3 }}>כל יום משהו חדש — סיבה אמיתית להיכנס ולהשתתף.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ flex: "none", width: 42, height: 42, borderRadius: 13, background: "#FFF1E3", border: "1px solid rgba(217,146,43,.34)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="#C2620E">
                <path d="M13.5 0.7s.9 2.6.9 4.7c0 2-1.3 3.7-3.4 3.7-2.1 0-3.6-1.7-3.6-3.7l0-.4C5.4 7.4 4 10.5 4 13.7 4 18.3 7.6 22 12 22s8-3.7 8-8.3c0-5.6-4.2-9.5-6.5-13z"></path>
              </svg>
            </span>
            <div>
              <div style={{ fontWeight: 700, fontSize: "clamp(17px,1.2vw,19.5px)" }}>Streaks, משחקונים, הצבעות ומשימות</div>
              <div style={{ color: "#625A70", fontSize: 14.5, marginTop: 3 }}>רצף יומי ששומר על הקבוצה חיה — ותחרות בריאה בפנים.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <Image src="/media/tumbapp-coin.png" alt="" width={512} height={512} style={{ flex: "none", width: 42, height: "auto", display: "block", filter: "drop-shadow(0 6px 16px rgba(232,163,61,.4))" }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: "clamp(17px,1.2vw,19.5px)" }}>פרסים והטבות אמיתיות מעסקים</div>
              <div style={{ color: "#625A70", fontSize: 14.5, marginTop: 3 }}>רמת הקבוצה פותחת את ההטבה, וה-Coins והיהלומים מממשים אותה — בבר, בפיצרייה ובקפה שלידך.</div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal style={{ flex: "1 1 100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginTop: "clamp(10px,2vw,22px)" }}>
        <div className={styles.groupWrap} style={{ position: "relative", width: "min(560px,100%)", background: "#F5F3FF" }}>
          <LazyVideo
            webm="/main/mascot/boar-group.webm"
            mp4="/main/mascot/boar-group.mp4"
            poster="/main/mascot/boar-group-poster.webp"
            alt="קבוצת חזירי הבר הסגולים של TUMBAPP משחקים יחד"
            aspectRatio="3 / 2"
          />
        </div>
        <p style={{ color: "#625A70", fontSize: "clamp(15.5px,1.02vw,17px)", margin: "16px 0 0", maxWidth: 560, lineHeight: 1.6 }}>
          משימות, משחקים, צחוקים ורגעים משותפים — כל הקבוצה במקום אחד.
        </p>
      </Reveal>
    </section>
  );
}
