import Image from "next/image";
import { Reveal } from "./Reveal";
import { LazyVideo } from "../LazyVideo";

const FEATURES = [
  {
    label: "עסקים קרובים",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
  {
    label: "הטבות זמינות",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12v10H4V12"></path>
        <path d="M2 7h20v5H2z"></path>
        <path d="M12 22V7"></path>
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
      </svg>
    ),
  },
  {
    label: "סינון לפי קטגוריה",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
      </svg>
    ),
  },
  {
    label: "פרטי ההטבה במקום אחד",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2"></rect>
        <path d="M7 9h6M7 13h10"></path>
      </svg>
    ),
  },
];

export function NearbyMap() {
  return (
    <section id="map2" aria-labelledby="map2-title" style={{ maxWidth: 1520, margin: "0 auto", padding: "clamp(56px,8vw,122px) clamp(18px,4vw,44px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(36px,5vw,64px)" }}>
      <Reveal style={{ flex: "1 1 420px", minWidth: "min(300px,100%)" }}>
        <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 14, letterSpacing: ".05em" }}>הטבות ממש לידכם</div>
        <h2 id="map2-title" style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 800, letterSpacing: "-.02em", margin: "12px 0 0", lineHeight: 1.13 }}>פותחים את המפה ומגלים איפה אפשר לממש</h2>
        <p style={{ color: "#625A70", fontSize: "clamp(17px,1.15vw,20px)", margin: "16px 0 0", lineHeight: 1.65 }}>
          המפה של TUMBAPP מציגה בתי עסק משתתפים והטבות זמינות באזור שלכם. תוכלו לגלות מסעדות, ברים, בתי קפה ואטרקציות קרובות, לבדוק אילו הטבות פתוחות עבורכם ולבחור
          יחד לאן יוצאים.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: "26px 0 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,100%),1fr))", gap: 12 }}>
          {FEATURES.map((f) => (
            <li key={f.label} style={{ display: "flex", alignItems: "center", gap: 11, background: "#FFFFFF", border: "1px solid rgba(109,40,217,.12)", borderRadius: 16, padding: "14px 16px", fontSize: 14.5, fontWeight: 600, color: "#241B35" }}>
              <span aria-hidden="true" style={{ flex: "none", width: 36, height: 36, borderRadius: 11, background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {f.icon}
              </span>
              {f.label}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal style={{ flex: "1 1 380px", minWidth: "min(280px,100%)", display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "min(520px,100%)" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: -24, background: "radial-gradient(circle, rgba(139,92,246,.18), transparent 68%)", filter: "blur(26px)" }} />
          <Reveal aria-hidden style={{ position: "absolute", bottom: -22, insetInlineEnd: -20, zIndex: 3, width: "clamp(96px,11vw,150px)", animation: "tFloat 6.8s ease-in-out infinite .2s" }}>
            <Image src="/main/tumbapp-boar-standing.webp" alt="" width={640} height={640} style={{ display: "block", width: "100%", height: "auto", filter: "drop-shadow(0 12px 20px rgba(109,40,217,.24))" }} />
          </Reveal>
          <div style={{ position: "relative", borderRadius: 26, overflow: "hidden", background: "#FFFFFF", border: "1px solid rgba(109,40,217,.14)", boxShadow: "0 22px 54px rgba(109,40,217,.16)" }}>
            <LazyVideo
              webm="/main/nearby-map.webm"
              mp4="/main/nearby-map.mp4"
              poster="/main/nearby-map-poster.webp"
              alt="הדגמה מונפשת של מפת TUMBAPP: סימוני בתי עסק משתתפים נפתחים סביב המיקום שלכם וכרטיס הטבה נפתח מאחד מהם"
              aspectRatio="4 / 3"
              objectFit="cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
