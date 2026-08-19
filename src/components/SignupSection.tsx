"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/src/lib/content";

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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedEmail && !trimmedPhone) {
      setError("נא להשאיר אימייל או מספר טלפון");
      return;
    }
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("האימייל לא נראה תקין");
      return;
    }
    setError("");

    // TODO: no waitlist backend/API exists yet in this project (confirmed by
    // searching the codebase — the only existing "submission" pattern
    // anywhere, on both tumbapp.com and the old ContactSection, is this same
    // mailto: handoff). Wire this to a real endpoint (serverless function,
    // Mailchimp/ConvertKit, Supabase, etc.) before launch so signups are
    // actually captured — right now this only opens the visitor's mail app.
    const subject = encodeURIComponent("הצטרפות להשקה — Tumbapp");
    const body = encodeURIComponent(
      `אימייל: ${trimmedEmail || "-"}\n` + `טלפון: ${trimmedPhone || "-"}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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

            {error && (
              <p role="alert" style={{ color: "#C0392B", fontSize: 13.5, margin: 0 }}>
                {error}
              </p>
            )}

            <button
              type="submit"
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
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(124,92,246,.38)",
                transition: "transform .2s",
              }}
              onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              אני רוצה להצטרף
            </button>
            <p style={{ fontSize: 12.5, color: "var(--ink2)", textAlign: "center", margin: 0 }}>
              השליחה תפתח את תוכנת המייל שלכם עם הפרטים שמילאתם.
            </p>
          </form>
        </div>

        <p
          style={{
            position: "relative",
            textAlign: "center",
            marginTop: 24,
            fontFamily: "var(--font-outfit),sans-serif",
            fontWeight: 600,
            letterSpacing: ".02em",
            fontSize: "clamp(14px,1.6vw,17px)",
            color: "var(--acc3)",
          }}
        >
          Play Together. Earn Together. Go Out Together.
        </p>
      </div>
    </section>
  );
}
