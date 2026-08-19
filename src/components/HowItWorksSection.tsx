const steps = [
  {
    n: 1,
    title: "פותחים קבוצה",
    text: "יוצרים את החבורה ומזמינים את החברים.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--acc3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    n: 2,
    title: "משחקים יחד",
    text: "משתתפים במשימות, משחקים, הצבעות והתערבויות.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--acc3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    n: 3,
    title: "מתקדמים ומרוויחים",
    text: "צוברים XP, Coins ו־Diamonds.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12v10H4V12" />
        <path d="M2 7h20v5H2z" />
        <path d="M12 22V7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
  {
    n: 4,
    title: "יוצאים יחד",
    text: "משתמשים בהטבות ובוחרים את המקום הבא של החבורה.",
    featured: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "clamp(44px,6vw,90px) clamp(18px,4vw,34px)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em" }}>איך זה עובד</div>
        <h2
          style={{
            fontSize: "clamp(26px,3.5vw,38px)",
            fontWeight: 800,
            letterSpacing: "-.02em",
            margin: "10px 0 0",
            lineHeight: 1.15,
            color: "var(--ink)",
          }}
        >
          פותחים קבוצה. משחקים. יוצאים יחד.
        </h2>
      </div>

      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(220px,100%),1fr))",
          gap: 18,
          marginTop: 40,
        }}
      >
        {/* connecting path — desktop only, RTL-aware (flows right-to-left) */}
        <div
          aria-hidden="true"
          className="hidden md:block"
          style={{
            position: "absolute",
            top: 36,
            insetInline: "12%",
            height: 2,
            background: "repeating-linear-gradient(to left, rgba(139,92,246,.35) 0 10px, transparent 10px 18px)",
            zIndex: 0,
          }}
        />

        {steps.map((step) => (
          <div
            key={step.n}
            style={{
              position: "relative",
              zIndex: 1,
              background: step.featured ? "linear-gradient(150deg,var(--lav),var(--soft))" : "#FFFFFF",
              border: step.featured ? "1px solid rgba(139,92,246,.38)" : "1px solid rgba(109,40,217,.12)",
              borderRadius: 20,
              padding: "24px 22px",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: step.featured ? "linear-gradient(135deg,var(--acc2),var(--acc3))" : "linear-gradient(135deg,var(--lav),var(--soft))",
                border: step.featured ? "none" : "1px solid rgba(139,92,246,.3)",
                boxShadow: step.featured ? "0 8px 22px rgba(124,92,246,.45)" : undefined,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {step.icon}
            </div>
            <div
              style={{
                marginTop: 10,
                fontFamily: "var(--font-outfit),sans-serif",
                fontWeight: 800,
                fontSize: 12,
                color: "var(--acc3)",
                opacity: 0.7,
              }}
            >
              שלב {step.n}
            </div>
            <h3 style={{ fontSize: 16.5, fontWeight: 700, margin: "3px 0 4px", color: "var(--ink)" }}>{step.title}</h3>
            <p style={{ color: "var(--ink2)", fontSize: 13.5, margin: 0, lineHeight: 1.45 }}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
