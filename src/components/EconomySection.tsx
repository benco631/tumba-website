export function EconomySection() {
  const checkIcon = (color: string) => (
    <svg width="18" height="18" style={{ flex: "none", marginTop: 2 }} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const itemStyle = { display: "flex", gap: 11, color: "#D2D6DE", fontSize: 15.5 };

  return (
    <section
      id="economy"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "clamp(56px,8vw,96px) clamp(18px,4vw,34px)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "inline-block", color: "#A78BFA", fontWeight: 600, fontSize: 14, letterSpacing: ".04em" }}>
          כלכלה באפליקציה
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
          Coins לעומת XP &amp; Levels
        </h2>
        <p style={{ color: "#AEB4C0", fontSize: 17, margin: "16px 0 0" }}>
          שתי שכבות שמניעות אחת את השנייה: התקדמות אישית והתקדמות קבוצתית. זו כלכלת מעורבות ותגמולים – לא מסחר בכסף אמיתי.
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
        {/* Coins */}
        <div
          style={{
            background: "linear-gradient(160deg,rgba(245,163,92,.12),rgba(245,163,92,.02))",
            border: "1px solid rgba(245,163,92,.28)",
            borderRadius: 24,
            padding: 30,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#FFD08A,var(--orange))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-outfit),sans-serif",
                fontWeight: 800,
                color: "#3a2410",
                boxShadow: "0 6px 20px rgba(245,163,92,.4)",
                fontSize: 20,
              }}
            >
              ₵
            </div>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>Coins</h3>
              <div style={{ fontSize: 13.5, color: "var(--orange)", fontWeight: 500 }}>המטבע האישי</div>
            </div>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: "22px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
            <li style={itemStyle}>{checkIcon("#F5A35C")}אישיים לכל משתמש</li>
            <li style={itemStyle}>{checkIcon("#F5A35C")}משמשים למימוש הטבות</li>
            <li style={itemStyle}>{checkIcon("#F5A35C")}מתקבלים מפעילות, משימות, השתתפות ואתגרים</li>
            <li style={itemStyle}>{checkIcon("#F5A35C")}נשמרים בארנק אישי לפי קבוצה</li>
          </ul>
        </div>

        {/* XP / Levels */}
        <div
          style={{
            background: "linear-gradient(160deg,rgba(124,92,246,.16),rgba(124,92,246,.03))",
            border: "1px solid rgba(124,92,246,.3)",
            borderRadius: 24,
            padding: 30,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "linear-gradient(135deg,var(--accent2),var(--accent3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-outfit),sans-serif",
                fontWeight: 800,
                color: "#fff",
                boxShadow: "0 6px 20px rgba(124,92,246,.45)",
                fontSize: 14,
              }}
            >
              XP
            </div>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>XP / Levels</h3>
              <div style={{ fontSize: 13.5, color: "var(--accent2)", fontWeight: 500 }}>ההתקדמות הקבוצתית</div>
            </div>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: "22px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
            <li style={itemStyle}>{checkIcon("#A78BFA")}שייכים לכל הקבוצה</li>
            <li style={itemStyle}>{checkIcon("#A78BFA")}משקפים פעילות קבוצתית</li>
            <li style={itemStyle}>{checkIcon("#A78BFA")}פותחים הטבות חדשות וטובות יותר</li>
            <li style={itemStyle}>{checkIcon("#A78BFA")}יוצרים התקדמות משותפת וגאוות קבוצה</li>
          </ul>
        </div>
      </div>

      {/* Level ladder */}
      <div
        style={{
          marginTop: 24,
          background: "rgba(255,255,255,.035)",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: 24,
          padding: "clamp(24px,4vw,38px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#A78BFA",
              background: "rgba(124,92,246,.12)",
              padding: "5px 12px",
              borderRadius: 100,
            }}
          >
            דוגמה
          </span>
          <span style={{ color: "#9DA3AF", fontSize: 14.5 }}>ככל שה-Level עולה – ההטבה משתדרגת</span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: 16,
            marginTop: 22,
            alignItems: "end",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 18,
              padding: 18,
            }}
          >
            <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 800, fontSize: 18, color: "#fff" }}>Level 10</div>
            <div style={{ height: 5, borderRadius: 100, background: "linear-gradient(90deg,var(--accent2),var(--accent))", width: "35%", margin: "12px 0" }} />
            <div style={{ fontSize: 15, color: "#D2D6DE", fontWeight: 500 }}>הטבה בסיסית – למשל 10% הנחה</div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 18,
              padding: 18,
            }}
          >
            <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 800, fontSize: 18, color: "#fff" }}>Level 25</div>
            <div style={{ height: 5, borderRadius: 100, background: "linear-gradient(90deg,var(--accent2),var(--accent))", width: "62%", margin: "12px 0" }} />
            <div style={{ fontSize: 15, color: "#D2D6DE", fontWeight: 500 }}>הטבות חזקות יותר וקבועות</div>
          </div>
          <div
            style={{
              background: "linear-gradient(150deg,rgba(124,92,246,.2),rgba(124,92,246,.04))",
              border: "1px solid rgba(124,92,246,.4)",
              borderRadius: 18,
              padding: 18,
              boxShadow: "0 12px 40px rgba(124,92,246,.18)",
            }}
          >
            <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 800, fontSize: 18, color: "#fff" }}>Level 50</div>
            <div style={{ height: 5, borderRadius: 100, background: "linear-gradient(90deg,var(--accent2),var(--accent))", width: "100%", margin: "12px 0" }} />
            <div style={{ fontSize: 15, color: "#fff", fontWeight: 600 }}>50% על מוצר, 1+1 או הטבות VIP</div>
          </div>
        </div>
      </div>
    </section>
  );
}
