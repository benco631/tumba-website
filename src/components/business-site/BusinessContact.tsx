"use client";

import { useState } from "react";
import { Reveal } from "../main-site/Reveal";
import { CONTACT_EMAIL } from "@/src/lib/content";
import { buildWaitlistPayload, validateWaitlistForm } from "@/src/lib/waitlist";
import { useWaitlistSubmit } from "@/src/lib/useWaitlistSubmit";
import styles from "./business.module.css";

const PRIVACY_POLICY_VERSION = process.env.NEXT_PUBLIC_PRIVACY_POLICY_VERSION ?? "";

const BUSINESS_TYPES = ["מסעדה", "בית קפה", "בר / פאב", "חדר בריחה", "באולינג / קריוקי", "קולנוע / מתחם בילוי", "הופעות / אירועים", "אטרקציה / פעילות קבוצתית", "אחר"];

type FormState = {
  name: string;
  business: string;
  type: string;
  city: string;
  phone: string;
  email: string;
  note: string;
  marketingConsent: boolean;
  privacyAccepted: boolean;
};
type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  business: "",
  type: BUSINESS_TYPES[0],
  city: "",
  phone: "",
  email: "",
  note: "",
  marketingConsent: false,
  privacyAccepted: false,
};

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontSize: 13, color: "var(--ink2)" }}>{label}</span>
      {children}
      {error && (
        <span id={`${id}-error`} role="alert" style={{ color: "#C0392B", fontSize: 12.5 }}>
          {error}
        </span>
      )}
    </label>
  );
}

export function BusinessContact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const { state, errorMessage, submit, isSubmitting } = useWaitlistSubmit();

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const setChecked = (key: "marketingConsent" | "privacyAccepted") => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.checked }));

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.business.trim()) next.business = "נא למלא שם עסק";
    const shared = validateWaitlistForm({
      fullName: form.name,
      email: form.email,
      phone: form.phone,
      privacyAccepted: form.privacyAccepted,
    });
    if (shared.fullName) next.name = shared.fullName;
    if (shared.email) next.email = shared.email;
    if (shared.phone) next.phone = shared.phone;
    if (shared.privacyAccepted) next.privacyAccepted = shared.privacyAccepted;
    return next;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const payload = buildWaitlistPayload(
      {
        fullName: form.name,
        email: form.email,
        phone: form.phone,
        audienceType: "BUSINESS",
        source: "businesses-landing-page",
        marketingConsent: form.marketingConsent,
        privacyAccepted: form.privacyAccepted,
      },
      PRIVACY_POLICY_VERSION,
    );
    await submit(payload);
  };

  return (
    <section id="biz-contact" style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(40px,6vw,80px) clamp(18px,4vw,40px)" }}>
      <Reveal
        style={{
          position: "relative",
          background: "linear-gradient(150deg,var(--lav),var(--offw))",
          border: "1px solid rgba(139,92,246,.30)",
          borderRadius: 28,
          padding: "clamp(26px,4.5vw,48px)",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{ position: "absolute", top: -110, insetInlineStart: -60, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,.16),transparent 65%)", filter: "blur(12px)" }}
        />
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(280px,100%),1fr))", gap: "clamp(24px,4vw,44px)", alignItems: "start" }}>
          <div>
            <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 13.5, letterSpacing: ".05em" }}>בואו נכיר</div>
            <h2 style={{ fontSize: "clamp(26px,3.4vw,38px)", fontWeight: 800, letterSpacing: "-.02em", margin: "10px 0 0", lineHeight: 1.18 }}>
              רוצים להביא קבוצות חדשות לעסק?
            </h2>
            <p style={{ color: "var(--ink2)", fontSize: 15.5, margin: "12px 0 0", lineHeight: 1.6, maxWidth: 400 }}>
              השאירו פרטים וניצור איתכם קשר לשיחת היכרות קצרה וללא התחייבות.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 22, background: "#FFFFFF", border: "1px solid rgba(109,40,217,.14)", borderRadius: 14, padding: "12px 16px", color: "var(--ink)" }}
            >
              <span style={{ width: 32, height: 32, borderRadius: 9, background: "var(--lav)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--acc3)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-10 5L2 7"></path>
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 600, fontSize: 14.5 }}>{CONTACT_EMAIL}</span>
            </a>
          </div>

          {state === "success" ? (
            <div
              role="status"
              style={{ background: "#FFFFFF", border: "1px solid rgba(18,161,80,.34)", borderRadius: 20, padding: "clamp(24px,4vw,32px)", textAlign: "center" }}
            >
              <p style={{ fontWeight: 700, fontSize: 17, margin: 0, color: "var(--ink)" }}>הפרטים התקבלו בהצלחה! 🎉</p>
              <p style={{ color: "var(--ink2)", fontSize: 14.5, margin: "8px 0 0" }}>ניצור איתכם קשר בקרוב לשיחת היכרות.</p>
            </div>
          ) : (
          <form onSubmit={onSubmit} noValidate style={{ background: "#FFFFFF", border: "1px solid rgba(109,40,217,.12)", borderRadius: 20, padding: "clamp(18px,3vw,26px)", display: "flex", flexDirection: "column", gap: 13 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(140px,100%),1fr))", gap: 13 }}>
              <Field id="biz-name" label="שם מלא" error={errors.name}>
                <input
                  id="biz-name"
                  type="text"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="ישראל ישראלי"
                  className={`${styles.formField} ${errors.name ? styles.formFieldError : ""}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "biz-name-error" : undefined}
                  autoComplete="name"
                />
              </Field>
              <Field id="biz-business" label="שם העסק" error={errors.business}>
                <input
                  id="biz-business"
                  type="text"
                  value={form.business}
                  onChange={set("business")}
                  placeholder="שם העסק שלכם"
                  className={`${styles.formField} ${errors.business ? styles.formFieldError : ""}`}
                  aria-invalid={!!errors.business}
                  aria-describedby={errors.business ? "biz-business-error" : undefined}
                  autoComplete="organization"
                />
              </Field>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(140px,100%),1fr))", gap: 13 }}>
              <Field id="biz-type" label="סוג העסק">
                <select id="biz-type" value={form.type} onChange={set("type")} className={styles.formField}>
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="biz-city" label="עיר">
                <input id="biz-city" type="text" value={form.city} onChange={set("city")} placeholder="תל אביב" className={styles.formField} autoComplete="address-level2" />
              </Field>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(140px,100%),1fr))", gap: 13 }}>
              <Field id="biz-phone" label="מספר טלפון" error={errors.phone}>
                <input
                  id="biz-phone"
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="050-0000000"
                  className={`${styles.formField} ${errors.phone ? styles.formFieldError : ""}`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "biz-phone-error" : undefined}
                  autoComplete="tel"
                />
              </Field>
              <Field id="biz-email" label="כתובת אימייל" error={errors.email}>
                <input
                  id="biz-email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="name@business.com"
                  className={`${styles.formField} ${errors.email ? styles.formFieldError : ""}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "biz-email-error" : undefined}
                  autoComplete="email"
                />
              </Field>
            </div>

            <Field id="biz-note" label="הערה קצרה">
              <textarea id="biz-note" rows={3} value={form.note} onChange={set("note")} placeholder="ספרו לנו קצת על העסק" className={styles.formField} style={{ resize: "vertical" }} />
            </Field>

            <label htmlFor="biz-privacy" style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--ink2)", cursor: "pointer" }}>
              <input id="biz-privacy" type="checkbox" checked={form.privacyAccepted} onChange={setChecked("privacyAccepted")} style={{ marginTop: 2 }} required />
              <span>קראתי ואני מאשר/ת את מדיניות הפרטיות</span>
            </label>
            {errors.privacyAccepted && (
              <p role="alert" style={{ color: "#C0392B", fontSize: 12.5, margin: 0 }}>{errors.privacyAccepted}</p>
            )}
            <label htmlFor="biz-marketing" style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--ink2)", cursor: "pointer" }}>
              <input id="biz-marketing" type="checkbox" checked={form.marketingConsent} onChange={setChecked("marketingConsent")} style={{ marginTop: 2 }} />
              <span>אשמח לקבל עדכונים ומבצעים בדוא&quot;ל</span>
            </label>

            {state === "error" && (
              <p role="alert" style={{ color: "#C0392B", fontSize: 12.5, margin: 0 }}>{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.ctaButton}
              style={{ marginTop: 2, padding: 15, border: "none", borderRadius: 100, background: "linear-gradient(135deg,var(--acc2),var(--acc))", color: "#fff", fontWeight: 700, fontSize: 16, fontFamily: "Rubik,sans-serif", cursor: isSubmitting ? "default" : "pointer", opacity: isSubmitting ? 0.7 : 1, boxShadow: "0 10px 28px rgba(124,92,246,.4)" }}
            >
              {isSubmitting ? "שולח..." : "תאמו איתנו שיחת היכרות"}
            </button>

          </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
