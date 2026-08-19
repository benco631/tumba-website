"use client";

import { useRef } from "react";
import { Reveal } from "./Reveal";
import { LazyVideo } from "../LazyVideo";
import styles from "./main.module.css";

const CONTACT_EMAIL = "tumba@tumbapp.com";

export function ContactMain() {
  const nameRef = useRef<HTMLInputElement>(null);
  const whoRef = useRef<HTMLSelectElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "פנייה מהאתר — TUMBAPP";
    const body =
      `שם מלא: ${nameRef.current?.value ?? ""}\n` +
      `אני: ${whoRef.current?.value ?? ""}\n` +
      `טלפון: ${phoneRef.current?.value ?? ""}\n` +
      `אימייל: ${emailRef.current?.value ?? ""}\n\n` +
      `הודעה:\n${msgRef.current?.value ?? ""}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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

          <form onSubmit={onSubmit} style={{ background: "#FFFFFF", border: "1px solid rgba(109,40,217,.12)", borderRadius: 22, padding: "clamp(20px,3vw,28px)", backdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(140px,100%),1fr))", gap: 14 }}>
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 13, color: "#625A70" }}>שם מלא</span>
                <input ref={nameRef} type="text" placeholder="ישראל ישראלי" className={styles.formField} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 13, color: "#625A70" }}>אני...</span>
                <select ref={whoRef} className={styles.formField} defaultValue="קבוצה שרוצה להצטרף">
                  <option>קבוצה שרוצה להצטרף</option>
                  <option>עסק שמעוניין בשיתוף פעולה</option>
                  <option>משקיע / אחר</option>
                </select>
              </label>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(140px,100%),1fr))", gap: 14 }}>
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 13, color: "#625A70" }}>טלפון</span>
                <input ref={phoneRef} type="tel" placeholder="050-0000000" className={styles.formField} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 13, color: "#625A70" }}>אימייל</span>
                <input ref={emailRef} type="email" placeholder="name@mail.com" className={styles.formField} />
              </label>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 13, color: "#625A70" }}>הודעה</span>
              <textarea ref={msgRef} rows={3} placeholder="ספרו לנו קצת עליכם" className={styles.formField} style={{ resize: "vertical" }} />
            </label>
            <button
              type="submit"
              className={styles.ctaButton}
              style={{ marginTop: 2, padding: 15, border: "none", borderRadius: 100, background: "linear-gradient(135deg,var(--acc2),var(--acc))", color: "#fff", fontWeight: 700, fontSize: "clamp(16.5px,1.15vw,19px)", fontFamily: "Rubik,sans-serif", cursor: "pointer", boxShadow: "0 10px 30px rgba(124,92,246,.4)" }}
            >
              דברו איתנו על פיילוט
            </button>
            <p style={{ fontSize: 12, color: "#625A70", textAlign: "center", margin: 0 }}>השליחה תפתח את תוכנת המייל שלכם עם הפרטים.</p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
