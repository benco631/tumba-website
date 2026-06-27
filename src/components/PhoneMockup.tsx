export function PhoneMockup() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: -30,
          background: "radial-gradient(circle, rgba(124,92,246,.35), transparent 68%)",
          filter: "blur(24px)",
          zIndex: 0,
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: 300,
          borderRadius: 42,
          padding: 13,
          background: "linear-gradient(160deg,#23262F,#121419)",
          border: "1px solid rgba(255,255,255,.1)",
          boxShadow: "0 40px 90px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.08)",
        }}
      >
        <div
          style={{
            borderRadius: 31,
            overflow: "hidden",
            background: "#0C0E13",
            border: "1px solid rgba(255,255,255,.06)",
          }}
        >
          {/* Status bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 20px 6px",
              fontSize: 13,
              color: "#9aa0ad",
              fontFamily: "var(--font-outfit),sans-serif",
            }}
          >
            <span style={{ fontWeight: 600 }}>9:41</span>
            <span style={{ width: 46, height: 5, background: "#2a2e38", borderRadius: 100, display: "inline-block" }} />
            <span style={{ fontWeight: 600 }}>5G</span>
          </div>

          <div style={{ padding: "6px 16px 20px" }}>
            {/* Group header */}
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginTop: 6 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  background: "linear-gradient(135deg,var(--accent2),var(--accent3))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontFamily: "var(--font-outfit),sans-serif",
                  fontSize: 18,
                  color: "#fff",
                }}
              >
                ח
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 15.5 }}>החבר׳ה מהצבא</div>
                <div style={{ fontSize: 12, color: "#8a90a0" }}>7 חברים · פעילים היום</div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  background: "rgba(245,163,92,.14)",
                  padding: "5px 9px",
                  borderRadius: 100,
                  border: "1px solid rgba(245,163,92,.3)",
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--orange)", display: "inline-block" }} />
                <span style={{ fontSize: 12, color: "var(--orange)", fontWeight: 600, fontFamily: "var(--font-outfit),sans-serif" }}>5 Streak</span>
              </div>
            </div>

            {/* Level + XP */}
            <div
              style={{
                marginTop: 16,
                background: "linear-gradient(150deg,rgba(124,92,246,.16),rgba(124,92,246,.04))",
                border: "1px solid rgba(124,92,246,.26)",
                borderRadius: 18,
                padding: 15,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontSize: 12.5, color: "#bdb2e8" }}>רמת קבוצה</div>
                <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 800, fontSize: 15, color: "#fff" }}>Level 12</div>
              </div>
              <div style={{ marginTop: 9, height: 9, borderRadius: 100, background: "rgba(255,255,255,.08)", overflow: "hidden" }}>
                <div
                  className="animate-fill"
                  style={{
                    height: "100%",
                    width: "68%",
                    borderRadius: 100,
                    background: "linear-gradient(90deg,var(--accent2),var(--accent))",
                    boxShadow: "0 0 12px rgba(124,92,246,.7)",
                  }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 7, fontSize: 11.5, color: "#9aa0ad", fontFamily: "var(--font-outfit),sans-serif" }}>
                <span>3,420 / 5,000 XP</span>
                <span>Level 13</span>
              </div>
            </div>

            {/* Coins */}
            <div style={{ marginTop: 11, display: "flex", gap: 9 }}>
              <div
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 15,
                  padding: 12,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11.5, color: "#8a90a0" }}>
                  <span
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg,#FFD08A,var(--orange))",
                      display: "inline-block",
                    }}
                  />
                  הארנק שלי
                </div>
                <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 800, fontSize: 19, marginTop: 4 }}>
                  240 <span style={{ fontSize: 12, color: "var(--orange)" }}>Coins</span>
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 15,
                  padding: 12,
                }}
              >
                <div style={{ fontSize: 11.5, color: "#8a90a0" }}>מקום בקבוצה</div>
                <div style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 800, fontSize: 19, marginTop: 4 }}>
                  #2 <span style={{ fontSize: 12, color: "#8a90a0" }}>השבוע</span>
                </div>
              </div>
            </div>

            {/* Daily challenge */}
            <div
              style={{
                marginTop: 11,
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.08)",
                borderRadius: 15,
                padding: 13,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontSize: 12.5, color: "#8a90a0" }}>האתגר היומי</div>
                <div style={{ fontSize: 11, color: "var(--accent2)", fontWeight: 600, fontFamily: "var(--font-outfit),sans-serif" }}>+50 XP</div>
              </div>
              <div style={{ fontWeight: 600, fontSize: 14, marginTop: 5 }}>העלו תמונה משותפת מהמפגש האחרון</div>
              <button
                style={{
                  marginTop: 11,
                  width: "100%",
                  padding: 10,
                  border: "none",
                  borderRadius: 11,
                  background: "linear-gradient(135deg,var(--accent2),var(--accent))",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 13.5,
                  cursor: "pointer",
                }}
              >
                לבצע המשימה
              </button>
            </div>

            {/* Unlocked benefit */}
            <div
              style={{
                marginTop: 11,
                display: "flex",
                alignItems: "center",
                gap: 11,
                background: "linear-gradient(135deg,rgba(76,195,138,.14),rgba(76,195,138,.03))",
                border: "1px solid rgba(76,195,138,.3)",
                borderRadius: 15,
                padding: 12,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 11,
                  background: "rgba(76,195,138,.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#4CC38A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>נפתחה הטבה: 1+1 על שתייה</div>
                <div style={{ fontSize: 11.5, color: "#8a90a0" }}>מימוש ב-QR · בר השכונה</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
