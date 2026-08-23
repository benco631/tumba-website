import { Reveal } from "../main-site/Reveal";
import styles from "./business.module.css";

// Note: no existing approved content in this repo confirms the pilot is
// free of charge or commitment-free, so that claim is intentionally omitted
// here rather than invented. See final report.
export function PilotInvite() {
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(40px,6vw,72px) clamp(18px,4vw,40px)" }}>
      <Reveal
        style={{
          position: "relative",
          background: "linear-gradient(150deg,var(--lav),var(--offw))",
          border: "1px solid rgba(139,92,246,.30)",
          borderRadius: 26,
          padding: "clamp(28px,5vw,48px)",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{ position: "absolute", top: -100, insetInlineStart: -60, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,.16),transparent 65%)", filter: "blur(12px)" }}
        />
        <div style={{ position: "relative" }}>
          <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 13.5, letterSpacing: ".05em" }}>הזדמנות להצטרף מוקדם</div>
          <h2 style={{ fontSize: "clamp(24px,3.4vw,38px)", fontWeight: 800, letterSpacing: "-.02em", margin: "10px auto 0", lineHeight: 1.18, maxWidth: 560 }}>
            הצטרפו לעסקים הראשונים של Tumbapp
          </h2>
          <p style={{ color: "var(--ink2)", fontSize: "clamp(15px,1.05vw,17px)", margin: "14px auto 0", lineHeight: 1.65, maxWidth: 520 }}>
            אנחנו מזמינים מספר מצומצם של עסקים להשתתף בפיילוט הראשוני, לקבל ליווי אישי ולהשפיע על הדרך שבה המערכת תעבוד עבור בתי עסק.
          </p>
          <a
            href="#biz-contact"
            className={styles.ctaButton}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              marginTop: 24,
              padding: "15px 30px",
              borderRadius: 100,
              background: "linear-gradient(135deg,var(--acc2),var(--acc))",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16.5,
              boxShadow: "0 10px 30px rgba(124,92,246,.4)",
            }}
          >
            אני רוצה לשמוע עוד
          </a>
        </div>
      </Reveal>
    </section>
  );
}
