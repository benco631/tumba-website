const checkIcon = (
  <svg width="18" height="18" style={{ flex: "none", marginTop: 2 }} viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const visionPoints = [
  "שימור משתמשים חברתי",
  "תגמולים מבוססי קבוצות",
  "מרקטפלייס של עסקים שותפים",
  "מימושים מדידים בעולם האמיתי",
];

export function VisionSection() {
  return (
    <section
      id="vision"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "clamp(56px,8vw,96px) clamp(18px,4vw,34px)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(150deg,rgba(124,92,246,.14),rgba(91,63,214,.04))",
          border: "1px solid rgba(124,92,246,.26)",
          borderRadius: 28,
          padding: "clamp(28px,5vw,56px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -100,
            insetInlineStart: -60,
            width: 340,
            height: 340,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(167,139,250,.22),transparent 65%)",
            filter: "blur(10px)",
          }}
        />
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-block", color: "#A78BFA", fontWeight: 600, fontSize: 14, letterSpacing: ".04em" }}>
            חזון ומשקיעים
          </div>
          <h2
            style={{
              fontSize: "clamp(26px,3.6vw,42px)",
              fontWeight: 800,
              letterSpacing: "-.02em",
              margin: "14px 0 0",
              lineHeight: 1.18,
              maxWidth: 840,
            }}
          >
            <span style={{ fontFamily: "var(--font-outfit),sans-serif" }}>Tumba</span>{" "}
            יכולה להפוך לשכבת המעורבות החברתית בין קבוצות לעסקים מקומיים.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: 14,
              marginTop: 30,
            }}
          >
            {visionPoints.map((point) => (
              <div key={point} style={{ display: "flex", gap: 11, color: "#D2D6DE", fontSize: 15.5 }}>
                {checkIcon}
                {point}
              </div>
            ))}
          </div>

          <p style={{ color: "#AEB4C0", fontSize: 15.5, margin: "26px 0 0", lineHeight: 1.6, maxWidth: 760 }}>
            המודל ניתן להרחבה לבתי ספר, תנועות נוער, חברים מהצבא, מקומות עבודה, קמפוסים, אירועים וקהילות – כל מקום שבו קבוצה רוצה להיפגש ולחזור שוב.
          </p>

          <div
            style={{
              marginTop: 30,
              padding: "22px 24px",
              borderRadius: 18,
              background: "rgba(8,9,12,.5)",
              border: "1px solid rgba(255,255,255,.1)",
            }}
          >
            <div style={{ fontSize: 12.5, color: "#8E94A1", letterSpacing: ".05em", marginBottom: 6 }}>החזון</div>
            <div
              style={{
                fontSize: "clamp(18px,2.4vw,24px)",
                fontWeight: 700,
                lineHeight: 1.4,
                background: "linear-gradient(120deg,#fff,var(--accent2))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              להפוך את Tumba לשכבת המשחקיות וההטבות של קבוצות בעולם האמיתי.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
