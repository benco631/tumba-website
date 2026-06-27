"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/src/lib/content";

const initialForm = {
  name: "",
  businessName: "",
  businessType: "בר",
  city: "",
  phone: "",
  email: "",
  message: "",
};

const inputStyle = {
  background: "rgba(255,255,255,.05)",
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: 12,
  padding: "13px 15px",
  color: "#fff",
  fontSize: 15,
  outline: "none",
  width: "100%",
  fontFamily: "var(--font-rubik),sans-serif",
  transition: "border-color .2s, background .2s",
};

const labelStyle = {
  display: "flex" as const,
  flexDirection: "column" as const,
  gap: 7,
};

const labelTextStyle = { fontSize: 13.5, color: "#B9BEC9" };

export function ContactSection() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(124,92,246,.7)";
    e.currentTarget.style.background = "rgba(124,92,246,.06)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,.12)";
    e.currentTarget.style.background = "rgba(255,255,255,.05)";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent("בקשת פיילוט – Tumba");
    const body = encodeURIComponent(
      `שם מלא: ${form.name}\n` +
      `שם העסק: ${form.businessName}\n` +
      `סוג העסק: ${form.businessType}\n` +
      `עיר: ${form.city}\n` +
      `טלפון: ${form.phone}\n` +
      `אימייל: ${form.email}\n\n` +
      `הודעה:\n${form.message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "clamp(56px,8vw,96px) clamp(18px,4vw,34px)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(28px,4vw,52px)",
          alignItems: "start",
        }}
      >
        {/* Left: info */}
        <div>
          <div style={{ display: "inline-block", color: "#A78BFA", fontWeight: 600, fontSize: 14, letterSpacing: ".04em" }}>
            צור קשר
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
            דברו איתנו על פיילוט
          </h2>
          <p style={{ color: "#AEB4C0", fontSize: 17, margin: "16px 0 0", lineHeight: 1.6, maxWidth: 440 }}>
            השאירו פרטים ונחזור אליכם עם הצעת פיילוט מותאמת לעסק שלכם – פשוט, מהיר ובסיכון נמוך.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 11,
              marginTop: 28,
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.1)",
              borderRadius: 16,
              padding: "16px 20px",
              color: "#F4F5F7",
            }}
          >
            <span
              style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                background: "rgba(124,92,246,.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 5L2 7" />
              </svg>
            </span>
            <span>
              <span style={{ display: "block", fontSize: 12.5, color: "#8E94A1" }}>מייל ישיר</span>
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 600, fontSize: 16 }}>{CONTACT_EMAIL}</span>
            </span>
          </a>
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255,255,255,.035)",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 24,
            padding: "clamp(22px,3vw,32px)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 16 }}>
            <label style={labelStyle}>
              <span style={labelTextStyle}>שם מלא</span>
              <input name="name" type="text" value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="ישראל ישראלי" style={inputStyle} />
            </label>
            <label style={labelStyle}>
              <span style={labelTextStyle}>שם העסק</span>
              <input name="businessName" type="text" value={form.businessName} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="שם העסק" style={inputStyle} />
            </label>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 16 }}>
            <label style={labelStyle}>
              <span style={labelTextStyle}>סוג העסק</span>
              <select name="businessType" value={form.businessType} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} style={{ ...inputStyle, cursor: "pointer" }}>
                <option style={{ background: "#15171D" }}>בר</option>
                <option style={{ background: "#15171D" }}>מסעדה</option>
                <option style={{ background: "#15171D" }}>בית קפה</option>
                <option style={{ background: "#15171D" }}>אטרקציה</option>
                <option style={{ background: "#15171D" }}>אירועים</option>
                <option style={{ background: "#15171D" }}>מתחם בילוי</option>
                <option style={{ background: "#15171D" }}>אחר</option>
              </select>
            </label>
            <label style={labelStyle}>
              <span style={labelTextStyle}>עיר</span>
              <input name="city" type="text" value={form.city} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="תל אביב" style={inputStyle} />
            </label>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 16 }}>
            <label style={labelStyle}>
              <span style={labelTextStyle}>טלפון</span>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="050-0000000" style={inputStyle} />
            </label>
            <label style={labelStyle}>
              <span style={labelTextStyle}>אימייל</span>
              <input name="email" type="email" value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="name@business.com" style={inputStyle} />
            </label>
          </div>

          <label style={labelStyle}>
            <span style={labelTextStyle}>הודעה</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              rows={3}
              placeholder="ספרו לנו על העסק ועל ההטבה שתרצו להריץ בפיילוט"
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </label>

          <button
            type="submit"
            style={{
              marginTop: 4,
              padding: 15,
              border: "none",
              borderRadius: 100,
              background: "linear-gradient(135deg,var(--accent2),var(--accent))",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16.5,
              fontFamily: "var(--font-rubik),sans-serif",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(124,92,246,.38)",
              transition: "transform .2s",
            }}
            onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            דברו איתנו על פיילוט
          </button>
          <p style={{ fontSize: 12.5, color: "#7B8190", textAlign: "center", margin: 0 }}>
            השליחה תפתח את תוכנת המייל שלכם עם הפרטים שמילאתם.
          </p>
        </form>
      </div>
    </section>
  );
}
