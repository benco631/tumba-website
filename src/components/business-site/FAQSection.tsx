"use client";

import { useState } from "react";
import { Reveal } from "../main-site/Reveal";
import styles from "./business.module.css";

// Answers are grounded only in content already confirmed elsewhere in this
// repo (the QR-redemption flow, the "שליטה מלאה בהטבה ובעלות" business pill,
// the day-limited PILOT_BENEFITS example). Where nothing is confirmed, the
// answer says so plainly instead of inventing terms — see final report.
const FAQ = [
  {
    q: "כמה עולה להצטרף?",
    a: "התנאים המסחריים נקבעים יחד עם העסק במסגרת שיחת ההיכרות, בהתאם לסוג העסק וההטבה שתבחרו.",
  },
  {
    q: "מי קובע את ההטבה?",
    a: "העסק. Tumbapp נותנת שליטה מלאה בהטבה ובבעלות עליה — אתם בוחרים מה להציע ומתי.",
  },
  {
    q: "איך מתבצע המימוש?",
    a: "הלקוח מגיע לעסק ומציג קוד, שנסרק במקום כדי לאמת ולממש את ההטבה — בדיוק כמו בתהליך שמוצג באפליקציית Tumbapp.",
  },
  {
    q: "האם אפשר להגביל את מספר המימושים?",
    a: "התנאים נקבעים יחד עם העסק במסגרת שיחת ההיכרות.",
  },
  {
    q: "האם אפשר לבחור ימים ושעות?",
    a: "כן — אפשר להגדיר הטבה שרלוונטית לימים או לשעות מסוימים, למשל כדי לעודד הגעה בימים חלשים.",
  },
  {
    q: "איזה מידע העסק מקבל?",
    a: "בזמן המימוש העסק רואה אישור מימוש וגודל הקבוצה שהגיעה. פרטים נוספים ומעקב מותאם נסגרים יחד איתכם בשיחת ההיכרות.",
  },
  {
    q: "האם ניתן לשנות או להפסיק הטבה?",
    a: "כן — ההטבה נשארת בבעלות ובשליטת העסק, וניתן לעדכן או להפסיק אותה בתיאום מולנו.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="biz-faq" style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(40px,6vw,72px) clamp(18px,4vw,40px)" }}>
      <Reveal style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(24px,3.2vw,36px)", fontWeight: 800, letterSpacing: "-.02em", margin: 0, lineHeight: 1.18 }}>שאלות נפוצות</h2>
      </Reveal>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 30 }}>
        {FAQ.map((item, i) => {
          const open = openIndex === i;
          const buttonId = `biz-faq-btn-${i}`;
          const panelId = `biz-faq-panel-${i}`;
          return (
            <Reveal key={item.q}>
              <h3 style={{ margin: 0 }}>
                <button
                  type="button"
                  id={buttonId}
                  className={styles.faqButton}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span>{item.q}</span>
                  <svg
                    className={`${styles.faqIcon} ${open ? styles.faqIconOpen : ""}`}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </h3>
              <div className={`${styles.faqPanelWrap} ${open ? styles.faqPanelWrapOpen : ""}`}>
                <div className={styles.faqPanelInner}>
                  <div id={panelId} role="region" aria-labelledby={buttonId} className={styles.faqPanel}>
                    {item.a}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
