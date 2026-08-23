"use client";

import { useState } from "react";
import { BrandSlogan } from "@/src/components/shared/WildTogether";
import { buildWaitlistPayload, validateWaitlistForm, type FieldErrors } from "@/src/lib/waitlist";
import { useWaitlistSubmit } from "@/src/lib/useWaitlistSubmit";

const PRIVACY_POLICY_VERSION = process.env.NEXT_PUBLIC_PRIVACY_POLICY_VERSION ?? "";

const inputStyle: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid rgba(109,40,217,.14)",
  borderRadius: 12,
  padding: "13px 15px",
  color: "var(--ink)",
  fontSize: 15,
  outline: "none",
  width: "100%",
  fontFamily: "var(--font-rubik),sans-serif",
  transition: "border-color .2s, background .2s",
};

const labelStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 7 };
const labelTextStyle: React.CSSProperties = { fontSize: 13.5, color: "var(--ink2)" };

function focusInput(e: React.FocusEvent<HTMLInputElement>) {
  e.currentTarget.style.borderColor = "rgba(139,92,246,.65)";
  e.currentTarget.style.background = "var(--soft)";
}
function blurInput(e: React.FocusEvent<HTMLInputElement>) {
  e.currentTarget.style.borderColor = "rgba(109,40,217,.14)";
  e.currentTarget.style.background = "#FFFFFF";
}

export function SignupSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const { state, errorMessage, submit, isSubmitting } = useWaitlistSubmit();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const errors = validateWaitlistForm({ fullName, email, phone, privacyAccepted });
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const payload = buildWaitlistPayload(
      {
        fullName,
        email,
        phone,
        audienceType: "USER",
        source: "users-landing-page",
        marketingConsent,
        privacyAccepted,
      },
      PRIVACY_POLICY_VERSION,
    );
    await submit(payload);
  };

  return (
    <section id="join" style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(44px,6vw,88px) clamp(18px,4vw,34px)" }}>
      <div
        style={{
          position: "relative",
          background: "linear-gradient(150deg,var(--lav),var(--offw))",
          border: "1px solid rgba(139,92,246,.30)",
          borderRadius: 28,
          padding: "clamp(30px,5vw,68px)",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -120,
            insetInlineStart: -70,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(139,92,246,.16),transparent 65%)",
            filter: "blur(12px)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
            gap: "clamp(28px,4vw,52px)",
            alignItems: "start",
          }}
        >
          <div>
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
              החבורה שלכם עומדת להשתנות
            </h2>
            <p style={{ color: "var(--ink2)", fontSize: 16.5, margin: "14px 0 0", lineHeight: 1.6, maxWidth: 420 }}>
              הצטרפו לפני כולם וקבלו עדכון ברגע ש־Tumbapp עולה לאוויר.
            </p>
          </div>

          {state === "success" ? (
            <div
              role="status"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(18,161,80,.34)",
                borderRadius: 20,
                padding: "clamp(24px,4vw,32px)",
                textAlign: "center",
                color: "var(--ink)",
              }}
            >
              <p style={{ fontWeight: 700, fontSize: 17, margin: 0 }}>נרשמתם בהצלחה! 🎉</p>
              <p style={{ color: "var(--ink2)", fontSize: 14.5, margin: "8px 0 0" }}>נעדכן אתכם ברגע ש־Tumbapp עולה לאוויר.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(109,40,217,.12)",
                borderRadius: 20,
                padding: "clamp(18px,3vw,24px)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <label style={labelStyle}>
                <span style={labelTextStyle}>שם מלא</span>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onFocus={focusInput}
                  onBlur={blurInput}
                  placeholder="ישראל ישראלי"
                  style={inputStyle}
                  autoComplete="name"
                />
                {fieldErrors.fullName && (
                  <span role="alert" style={{ color: "#C0392B", fontSize: 12.5 }}>{fieldErrors.fullName}</span>
                )}
              </label>

              <label style={labelStyle}>
                <span style={labelTextStyle}>אימייל</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={focusInput}
                  onBlur={blurInput}
                  placeholder="name@mail.com"
                  style={inputStyle}
                  autoComplete="email"
                />
              </label>

              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ink2)", fontSize: 13 }}>
                <span style={{ flex: 1, height: 1, background: "rgba(109,40,217,.14)" }} />
                או
                <span style={{ flex: 1, height: 1, background: "rgba(109,40,217,.14)" }} />
              </div>

              <label style={labelStyle}>
                <span style={labelTextStyle}>טלפון</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onFocus={focusInput}
                  onBlur={blurInput}
                  placeholder="050-0000000"
                  style={inputStyle}
                  autoComplete="tel"
                />
              </label>

              {(fieldErrors.email || fieldErrors.phone) && (
                <p role="alert" style={{ color: "#C0392B", fontSize: 13.5, margin: 0 }}>
                  {fieldErrors.email || fieldErrors.phone}
                </p>
              )}

              <label style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--ink2)", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  style={{ marginTop: 2 }}
                  required
                />
                <span>קראתי ואני מאשר/ת את מדיניות הפרטיות</span>
              </label>
              {fieldErrors.privacyAccepted && (
                <p role="alert" style={{ color: "#C0392B", fontSize: 13.5, margin: 0 }}>{fieldErrors.privacyAccepted}</p>
              )}

              <label style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--ink2)", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  style={{ marginTop: 2 }}
                />
                <span>אשמח לקבל עדכונים ומבצעים בדוא&quot;ל</span>
              </label>

              {state === "error" && (
                <p role="alert" style={{ color: "#C0392B", fontSize: 13.5, margin: 0 }}>{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  marginTop: 4,
                  padding: 15,
                  border: "none",
                  borderRadius: 100,
                  background: "linear-gradient(135deg,var(--acc2),var(--acc))",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16.5,
                  fontFamily: "var(--font-rubik),sans-serif",
                  cursor: isSubmitting ? "default" : "pointer",
                  opacity: isSubmitting ? 0.7 : 1,
                  boxShadow: "0 10px 30px rgba(124,92,246,.38)",
                  transition: "transform .2s, opacity .2s",
                }}
                onMouseOver={(e) => { if (!isSubmitting) (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                {isSubmitting ? "שולח..." : "אני רוצה להצטרף"}
              </button>
            </form>
          )}
        </div>

        <p
          style={{
            position: "relative",
            textAlign: "center",
            marginTop: 24,
            fontWeight: 600,
            letterSpacing: ".02em",
            fontSize: "clamp(14px,1.6vw,17px)",
            color: "var(--acc3)",
          }}
        >
          <BrandSlogan />
        </p>
      </div>
    </section>
  );
}
