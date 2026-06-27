const pilotSteps = [
  { n: 1, label: "בוחרים הטבה התחלתית" },
  { n: 2, label: "מגדירים מגבלות מימוש" },
  { n: 3, label: "מציבים QR בתוך העסק" },
  { n: 4, label: "קבוצות מגיעות וממשות" },
  { n: 5, label: "מודדים ומחליטים אם להמשיך", featured: true },
];

const benefits = [
  "10% הנחה לקבוצות Level 10+",
  "1+1 על מוצר מסוים",
  "הטבה לימים חלשים (ראשון–שלישי)",
  "הטבת יום הולדת קבוצתית",
  "הטבה לקבוצות של 5 אנשים ומעלה",
];

export function PilotSection() {
  return (
    <section
      id="pilot"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "clamp(56px,8vw,96px) clamp(18px,4vw,34px)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto" }}>
        <div style={{ display: "inline-block", color: "#A78BFA", fontWeight: 600, fontSize: 14, letterSpacing: ".04em" }}>
          פיילוט
        </div>
        <h2
          style={{
            fontSize: "clamp(28px,3.8vw,44px)",
            fontWeight: 800,
            letterSpacing: "-.02em",
            margin: "12px 0 0",
            lineHeight: 1.13,
          }}
        >
          מתחילים בפיילוט פשוט, מהיר ובסיכון נמוך.
        </h2>
        <p style={{ color: "#AEB4C0", fontSize: 17, margin: "16px 0 0" }}>
          בלי התחייבות ארוכה – מגדירים הטבה, מגבילים מימושים, ומודדים את התוצאה.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
          gap: 16,
          marginTop: 46,
        }}
      >
        {pilotSteps.map((step) => (
          <div
            key={step.n}
            style={{
              background: step.featured
                ? "linear-gradient(150deg,rgba(124,92,246,.18),rgba(124,92,246,.03))"
                : "rgba(255,255,255,.035)",
              border: step.featured
                ? "1px solid rgba(124,92,246,.32)"
                : "1px solid rgba(255,255,255,.08)",
              borderRadius: 20,
              padding: 24,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-outfit),sans-serif",
                fontWeight: 800,
                fontSize: 30,
                color: step.featured ? "#fff" : "var(--accent2)",
                opacity: step.featured ? 0.7 : 0.5,
              }}
            >
              {step.n}
            </div>
            <div style={{ fontWeight: 600, fontSize: 16, marginTop: 8 }}>{step.label}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 30,
          background: "rgba(255,255,255,.035)",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: 24,
          padding: "clamp(24px,4vw,36px)",
        }}
      >
        <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 18px" }}>הטבות פיילוט מומלצות</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {benefits.map((b) => (
            <span
              key={b}
              style={{
                background: "rgba(124,92,246,.12)",
                border: "1px solid rgba(124,92,246,.28)",
                color: "#D8CEFF",
                padding: "11px 18px",
                borderRadius: 100,
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
