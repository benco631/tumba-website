const steps = [
  { num: "01", title: "פותחים קבוצה", text: "יוצרים או מצטרפים לקבוצה פרטית – חברים, צוות, תנועת נוער או חברים מהצבא.", color: "var(--accent2)", bg: "rgba(124,92,246,.12)" },
  { num: "02", title: "מבצעים משימות יומיות", text: "אתגרים, שאלות, הצבעות ומשימות חברתיות ששומרות על מעורבות יום-יום.", color: "var(--accent2)", bg: "rgba(124,92,246,.12)" },
  { num: "03", title: "צוברים Coins אישיים", text: "כל משתתף מרוויח Coins אישיים על פעילות, השתתפות והשלמת אתגרים.", color: "var(--orange)", bg: "rgba(245,163,92,.12)" },
  { num: "04", title: "הקבוצה עולה Levels", text: "הפעילות המשותפת צוברת XP לקבוצה כולה ומעלה אותה ב-Levels.", color: "var(--accent2)", bg: "rgba(124,92,246,.12)" },
  { num: "05", title: "פותחים הטבות טובות יותר", text: "Levels גבוהים יותר פותחים לקבוצה הטבות חזקות ושווי יותר מעסקים שותפים.", color: "var(--accent2)", bg: "rgba(124,92,246,.12)" },
  { num: "06", title: "ממשים בעולם האמיתי", text: "המשתמשים ממשים הטבות אצל עסקים שותפים – בסריקת QR פשוטה במקום.", color: "#fff", bg: "linear-gradient(135deg,var(--accent2),var(--accent))", featured: true },
];

export function SolutionSection() {
  return (
    <section
      id="how"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "clamp(56px,8vw,96px) clamp(18px,4vw,34px)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "inline-block", color: "#A78BFA", fontWeight: 600, fontSize: 14, letterSpacing: ".04em" }}>
          איך זה עובד
        </div>
        <h2
          style={{
            fontSize: "clamp(28px,3.8vw,42px)",
            fontWeight: 800,
            letterSpacing: "-.02em",
            margin: "12px 0 0",
            lineHeight: 1.15,
          }}
        >
          מקבוצה רגילה לקהילה פעילה – בכמה צעדים
        </h2>
        <p style={{ color: "#AEB4C0", fontSize: 17, margin: "16px 0 0" }}>
          כל פעולה בקבוצה מתורגמת ל-Coins אישיים ול-XP קבוצתי שמקדם את כולם.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: 18,
          marginTop: 46,
        }}
      >
        {steps.map((step) => (
          <div
            key={step.num}
            style={{
              background: step.featured
                ? "linear-gradient(150deg,rgba(124,92,246,.16),rgba(124,92,246,.03))"
                : "rgba(255,255,255,.035)",
              border: step.featured
                ? "1px solid rgba(124,92,246,.3)"
                : "1px solid rgba(255,255,255,.08)",
              borderRadius: 20,
              padding: 26,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-outfit),sans-serif",
                fontWeight: 800,
                fontSize: 15,
                color: step.color,
                background: step.bg,
                width: 38,
                height: 38,
                borderRadius: 11,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {step.num}
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: "16px 0 6px" }}>{step.title}</h3>
            <p style={{ color: step.featured ? "#C7CBD4" : "#9DA3AF", fontSize: 14.5, margin: 0, lineHeight: 1.55 }}>
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
