import { LazyVideo } from "./LazyVideo";

const points = [
  { text: "תמיד יש משהו חדש לעשות", color: "var(--acc3)", bg: "var(--lav)", border: "rgba(139,92,246,.28)" },
  { text: "כל חבר יכול להשתתף בדרך שלו", color: "var(--gemink)", bg: "#F0FAFC", border: "rgba(34,166,201,.32)" },
  { text: "מקבלים תגמול על אירוח, נהיגה ותרומה לחבורה", color: "var(--goldink)", bg: "#FFF8EC", border: "rgba(217,146,43,.3)" },
  { text: "הופכים בדיחות והתערבויות לזיכרונות", color: "var(--acc3)", bg: "var(--lav)", border: "rgba(139,92,246,.28)" },
];

export function RealWorldSection() {
  return (
    <section
      id="benefits"
      style={{
        position: "relative",
        padding: "clamp(56px,7vw,128px) 0",
        background: "linear-gradient(180deg,transparent,var(--soft) 42%,transparent)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 clamp(18px,4vw,34px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(28px,4vw,48px)",
        }}
      >
        <div style={{ flex: "1 1 340px", minWidth: 260 }}>
          <h2
            style={{
              fontSize: "clamp(26px,3.5vw,38px)",
              fontWeight: 800,
              letterSpacing: "-.02em",
              margin: 0,
              lineHeight: 1.15,
              color: "var(--ink)",
            }}
          >
            לא עוד אפליקציה שמשאירה אתכם במסך
          </h2>
          <p style={{ color: "var(--ink2)", fontSize: 16.5, margin: "14px 0 0", lineHeight: 1.6, maxWidth: 480 }}>
            Tumbapp נועדה לגרום לחברים לדבר יותר, לצחוק יותר ולהיפגש יותר. הפעילות מתחילה באפליקציה — אבל הפרס האמיתי הוא מה שקורה מחוץ לה.
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexWrap: "wrap", gap: 9 }}>
            {points.map((p) => (
              <li
                key={p.text}
                style={{
                  background: p.bg,
                  border: `1px solid ${p.border}`,
                  color: "var(--ink)",
                  borderRadius: 100,
                  padding: "9px 15px",
                  fontSize: 13.5,
                  fontWeight: 600,
                }}
              >
                {p.text}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: "1 1 220px", minWidth: 200, display: "flex", justifyContent: "center" }}>
          <LazyVideo
            webm="/media/mascot/boar-group.webm"
            mp4="/media/mascot/boar-group.mp4"
            poster="/media/mascot/boar-group-poster.webp"
            alt="קבוצת חזירי הבר הסגולים של Tumbapp משחקים יחד"
            style={{
              width: "min(400px,100%)",
              aspectRatio: "3 / 2",
              background: "var(--soft)",
              borderRadius: 24,
              overflow: "hidden",
              maskImage: "radial-gradient(ellipse 96% 96% at 50% 50%, #000 68%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 96% 96% at 50% 50%, #000 68%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
