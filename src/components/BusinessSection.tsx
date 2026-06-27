"use client";

const dotStyle = {
  flex: "none" as const,
  marginTop: 7,
  width: 7,
  height: 7,
  borderRadius: "50%",
  background: "var(--accent2)",
  display: "inline-block",
};

const itemStyle = { fontSize: 15.5, color: "#D2D6DE", display: "flex", gap: 11 };

const categories = [
  {
    label: "ברים",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 22h14M6 2l6 9 6-9M12 11v11" />
      </svg>
    ),
  },
  {
    label: "מסעדות",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 2v20M16 2c-1.7 0-3 2-3 5s1.3 4 3 4v11" />
      </svg>
    ),
  },
  {
    label: "בתי קפה",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zM6 1v3M10 1v3M14 1v3" />
      </svg>
    ),
  },
  {
    label: "אטרקציות",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.1 8.6 22 9.3 17 14 18.2 21 12 17.6 5.8 21 7 14 2 9.3 8.9 8.6 12 2" />
      </svg>
    ),
  },
  {
    label: "אירועים",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "מתחמי בילוי",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="11" x2="10" y2="11" />
        <line x1="8" y1="9" x2="8" y2="13" />
        <line x1="15" y1="12" x2="15.01" y2="12" />
        <line x1="18" y1="10" x2="18.01" y2="10" />
        <rect x="2" y="6" width="20" height="12" rx="6" />
      </svg>
    ),
  },
];

export function BusinessSection() {
  return (
    <section
      id="business"
      style={{
        position: "relative",
        padding: "clamp(60px,8vw,104px) 0",
        marginTop: 20,
        background: "linear-gradient(180deg,transparent,rgba(124,92,246,.05),transparent)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 clamp(18px,4vw,34px)" }}>
        <div style={{ maxWidth: 760 }}>
          <div style={{ display: "inline-block", color: "#A78BFA", fontWeight: 600, fontSize: 14, letterSpacing: ".04em" }}>
            לעסקים
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
            דרך חכמה יותר להביא קבוצות לעסק – בסיכון נמוך יותר.
          </h2>
          <p style={{ color: "#AEB4C0", fontSize: 17, margin: "18px 0 0", lineHeight: 1.6 }}>
            במקום לרדוף אחרי לקוחות בודדים, Tumba מביאה קבוצות פעילות שכבר מחפשות סיבה להיפגש – והמימוש נמדד עד הסריקה האחרונה.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 18,
            marginTop: 42,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,.035)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 20,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={itemStyle}><span style={dotStyle} />הגעה לקבוצות פעילות, לא רק ללקוחות בודדים</div>
            <div style={itemStyle}><span style={dotStyle} />יצירת תנועה אמיתית לעסק</div>
            <div style={itemStyle}><span style={dotStyle} />התחלה עם פיילוט פשוט</div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,.035)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 20,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={itemStyle}><span style={dotStyle} />הטבות מדידות לפי מימושים</div>
            <div style={itemStyle}><span style={dotStyle} />מימוש דרך QR בתוך העסק</div>
            <div style={itemStyle}><span style={dotStyle} />אפשרות להגביל מימושים ולשלוט בעלויות</div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,.035)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 20,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={itemStyle}><span style={dotStyle} />הצעת הטבות לפי Level קבוצתי</div>
            <div style={itemStyle}><span style={dotStyle} />נאמנות שנבנית סביב חוויה משותפת</div>
            <div style={itemStyle}><span style={dotStyle} />שליטה מלאה בהטבה ובתנאים</div>
          </div>
        </div>

        <p style={{ color: "#9DA3AF", fontSize: 15, margin: "34px 0 16px" }}>
          מתאים לברים, מסעדות, בתי קפה, אטרקציות, חדרי בריחה, באולינג, אירועים ומתחמי בילוי:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: 14,
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.label}
              style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 18,
                padding: "22px 18px",
                textAlign: "center",
                transition: "transform .2s, border-color .2s",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,92,246,.4)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.08)";
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  margin: "0 auto 12px",
                  borderRadius: 13,
                  background: "rgba(124,92,246,.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cat.icon}
              </div>
              <div style={{ fontWeight: 600, fontSize: 15.5 }}>{cat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
