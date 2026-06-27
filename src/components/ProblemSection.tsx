export function ProblemSection() {
  const cardStyle = {
    background: "rgba(255,255,255,.035)",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: 24,
    padding: 30,
    backdropFilter: "blur(12px)",
  };

  const dotStyle = (color: string) => ({
    flex: "none" as const,
    marginTop: 7,
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: color,
    display: "inline-block",
  });

  const itemStyle = {
    display: "flex",
    gap: 11,
    color: "#C7CBD4",
    fontSize: 15.5,
    lineHeight: 1.5,
  };

  return (
    <section
      id="problem"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "clamp(56px,8vw,96px) clamp(18px,4vw,34px)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "inline-block", color: "#A78BFA", fontWeight: 600, fontSize: 14, letterSpacing: ".04em" }}>
          הבעיה
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
          קבוצות נפתחות בקלות – אבל קשה לשמור אותן פעילות
        </h2>
        <p style={{ color: "#AEB4C0", fontSize: 17, margin: "16px 0 0" }}>
          אותה בעיה נראית משני צדדים: מהמשתמשים ומהעסקים.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 22,
          marginTop: 46,
        }}
      >
        <div style={cardStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 13,
                background: "rgba(124,92,246,.16)",
                border: "1px solid rgba(124,92,246,.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 style={{ fontSize: 21, fontWeight: 700, margin: 0 }}>למשתמשים ולקבוצות</h3>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: "22px 0 0", display: "flex", flexDirection: "column", gap: 15 }}>
            <li style={itemStyle}><span style={dotStyle("var(--accent2)")} />קבוצות נפתחות אבל הרבה פעמים הופכות ללא פעילות מהר.</li>
            <li style={itemStyle}><span style={dotStyle("var(--accent2)")} />קשה לשמור על מעורבות לאורך זמן.</li>
            <li style={itemStyle}><span style={dotStyle("var(--accent2)")} />רוב האפליקציות לא נותנות לקבוצה סיבה אמיתית לחזור כל יום.</li>
            <li style={itemStyle}><span style={dotStyle("var(--accent2)")} />קבוצות חברים מחפשות חוויות משותפות, משחקיות והטבות אמיתיות.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 13,
                background: "rgba(245,163,92,.14)",
                border: "1px solid rgba(245,163,92,.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A35C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l1-5h16l1 5" />
                <path d="M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
                <path d="M9 21v-6h6v6" />
              </svg>
            </div>
            <h3 style={{ fontSize: 21, fontWeight: 700, margin: 0 }}>לעסקים</h3>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: "22px 0 0", display: "flex", flexDirection: "column", gap: 15 }}>
            <li style={itemStyle}><span style={dotStyle("var(--orange)")} />קשה להביא קבוצות לקוחות באופן קבוע.</li>
            <li style={itemStyle}><span style={dotStyle("var(--orange)")} />פרסום רגיל יכול להיות יקר וקשה למדידה.</li>
            <li style={itemStyle}><span style={dotStyle("var(--orange)")} />הנחות כלליות לא תמיד יוצרות נאמנות.</li>
            <li style={itemStyle}><span style={dotStyle("var(--orange)")} />עסקים צריכים דרך פשוטה ובעלת סיכון נמוך למשוך קבוצות וביקורים חוזרים.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
