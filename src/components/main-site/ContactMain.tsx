"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { LazyVideo } from "../LazyVideo";
import { CONTACT_EMAIL } from "@/src/lib/content";
import { buildWaitlistPayload, getConfiguredPrivacyPolicyVersion, validateWaitlistForm, type AudienceType, type FieldErrors } from "@/src/lib/waitlist";
import { useWaitlistSubmit } from "@/src/lib/useWaitlistSubmit";
import styles from "./main.module.css";

const WHO_OPTIONS: { label: string; audience: AudienceType }[] = [
  { label: "קבוצה שרוצה להצטרף", audience: "USER" },
  { label: "עסק שמעוניין בשיתוף פעולה", audience: "BUSINESS" },
  { label: "משקיע / אחר", audience: "INVESTOR" },
];

export function ContactMain() {
  const [fullName, setFullName] = useState("");
  const [who, setWho] = useState(WHO_OPTIONS[0].label);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const { state, errorMessage, submit, isSubmitting } = useWaitlistSubmit();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const errors = validateWaitlistForm({ email, phone, privacyAccepted });
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const audienceType = WHO_OPTIONS.find((o) => o.label === who)?.audience ?? "USER";
    const payload = buildWaitlistPayload(
      { fullName, email, phone, message, audienceType, source: "main-website", marketingConsent, privacyAccepted },
      getConfiguredPrivacyPolicyVersion(),
    );
    await submit(payload);
  };

  return (
    <section id="contact2" style={{ maxWidth: 1520, margin: "0 auto", padding: "clamp(56px,8vw,122px) clamp(18px,4vw,44px)" }}>
      <Reveal style={{ position: "relative", background: "linear-gradient(150deg,#EDE9FE,#FAFAFF)", border: "1px solid rgba(139,92,246,.30)", borderRadius: 30, padding: "clamp(28px,5vw,56px)", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: -120, insetInlineStart: -70, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,.16),transparent 65%)", filter: "blur(12px)" }} />
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))", gap: "clamp(28px,4vw,52px)", alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "clamp(30px,3.8vw,50px)", fontWeight: 800, letterSpacing: "-.02em", margin: 0, lineHeight: 1.15 }}>רוצים להיות מהקבוצות הראשונות?</h2>
            <p style={{ color: "#625A70", fontSize: 17.5, margin: "14px 0 0", fontWeight: 500 }}>רוצים להביא קבוצות אליכם?</p>
            <p style={{ color: "#625A70", fontSize: "clamp(15.5px,1.02vw,17px)", margin: "14px 0 0", lineHeight: 1.6, maxWidth: 440 }}>
              השאירו פרטים ונחזור אליכם — פיילוט פשוט, מדיד ובסיכון נמוך, בין אם אתם קבוצה או עסק.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 11, marginTop: 26, background: "#FFFFFF", border: "1px solid rgba(109,40,217,.14)", borderRadius: 16, padding: "15px 20px", color: "#241B35" }}
            >
              <span style={{ width: 38, height: 38, borderRadius: 11, background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-10 5L2 7"></path>
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 600, fontSize: 16 }}>{CONTACT_EMAIL}</span>
            </a>

            <div style={{ marginTop: 28, width: "min(168px,42%)" }}>
              <LazyVideo
                webm="/main/mascot/boar-celebration.webm"
                mp4="/main/mascot/boar-celebration.mp4"
                poster="/main/mascot/boar-celebration-poster.jpg"
                alt="הקמע של TUMBAPP חוגג בקפיצת שמחה"
                className={styles.mascotWrap}
              />
            </div>
          </div>

          {state === "success" ? (
            <div
              role="status"
              style={{ background: "#FFFFFF", border: "1px solid rgba(18,161,80,.34)", borderRadius: 22, padding: "clamp(24px,4vw,32px)", textAlign: "center" }}
            >
              <p style={{ fontWeight: 700, fontSize: 18, margin: 0 }}>נרשמתם בהצלחה! 🎉</p>
              <p style={{ color: "#625A70", fontSize: 15, margin: "8px 0 0" }}>נחזור אליכם בקרוב.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate style={{ background: "#FFFFFF", border: "1px solid rgba(109,40,217,.12)", borderRadius: 22, padding: "clamp(20px,3vw,28px)", backdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(140px,100%),1fr))", gap: 14 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 13, color: "#625A70" }}>שם מלא</span>
                  <input
                    id="main-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="ישראל ישראלי"
                    className={styles.formField}
                    maxLength={200}
                  />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 13, color: "#625A70" }}>אני...</span>
                  <select value={who} onChange={(e) => setWho(e.target.value)} className={styles.formField}>
                    {WHO_OPTIONS.map((o) => (
                      <option key={o.label}>{o.label}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(140px,100%),1fr))", gap: 14 }}>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 13, color: "#625A70" }}>טלפון</span>
                  <input id="main-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="050-0000000" className={styles.formField} aria-invalid={!!fieldErrors.phone} aria-describedby={fieldErrors.phone ? "main-contact-error" : undefined} />
                </label>
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 13, color: "#625A70" }}>אימייל</span>
                  <input id="main-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@mail.com" className={styles.formField} aria-invalid={!!fieldErrors.email} aria-describedby={fieldErrors.email ? "main-contact-error" : undefined} />
                </label>
              </div>
              {(fieldErrors.email || fieldErrors.phone) && (
                <p id="main-contact-error" role="alert" style={{ color: "#C0392B", fontSize: 13, margin: 0 }}>{fieldErrors.email || fieldErrors.phone}</p>
              )}
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 13, color: "#625A70" }}>הודעה</span>
                <textarea id="main-message" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="ספרו לנו קצת עליכם" className={styles.formField} style={{ resize: "vertical" }} />
              </label>

              <label style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#625A70", cursor: "pointer" }}>
                <input id="main-privacy" type="checkbox" checked={privacyAccepted} onChange={(e) => setPrivacyAccepted(e.target.checked)} style={{ marginTop: 2 }} required />
                <span>קראתי ואני מאשר/ת את מדיניות הפרטיות</span>
              </label>
              {fieldErrors.privacyAccepted && (
                <p role="alert" style={{ color: "#C0392B", fontSize: 13, margin: 0 }}>{fieldErrors.privacyAccepted}</p>
              )}
              <label style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#625A70", cursor: "pointer" }}>
                <input type="checkbox" checked={marketingConsent} onChange={(e) => setMarketingConsent(e.target.checked)} style={{ marginTop: 2 }} />
                <span>אשמח לקבל עדכונים ומבצעים בדוא&quot;ל</span>
              </label>

              {state === "error" && (
                <p role="alert" style={{ color: "#C0392B", fontSize: 13, margin: 0 }}>{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.ctaButton}
                style={{ marginTop: 2, padding: 15, border: "none", borderRadius: 100, background: "linear-gradient(135deg,var(--acc2),var(--acc))", color: "#fff", fontWeight: 700, fontSize: "clamp(16.5px,1.15vw,19px)", fontFamily: "Rubik,sans-serif", cursor: isSubmitting ? "default" : "pointer", opacity: isSubmitting ? 0.7 : 1, boxShadow: "0 10px 30px rgba(124,92,246,.4)" }}
              >
                {isSubmitting ? "שולח..." : "דברו איתנו על פיילוט"}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
