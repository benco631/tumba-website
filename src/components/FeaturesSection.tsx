import Image from "next/image";
import { PhoneFrame } from "./PhoneFrame";

type Screenshot = { src: string; width: number; height: number; alt: string };

function PhonePair({
  primary,
  secondary,
  reverse,
}: {
  primary: Screenshot;
  secondary: Screenshot;
  reverse?: boolean;
}) {
  return (
    <div style={{ position: "relative", width: "min(280px,72vw)" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -28,
          background: "radial-gradient(circle, rgba(139,92,246,.20), transparent 68%)",
          filter: "blur(24px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 20,
          [reverse ? "insetInlineStart" : "insetInlineEnd"]: -18,
          zIndex: 1,
          width: "60%",
          transform: `rotate(${reverse ? -7 : 7}deg)`,
        }}
        className="animate-float"
      >
        <PhoneFrame src={secondary.src} alt={secondary.alt} width={secondary.width} height={secondary.height} size={168} />
      </div>
      <div style={{ position: "relative", zIndex: 2 }} className="animate-float">
        <PhoneFrame src={primary.src} alt={primary.alt} width={primary.width} height={primary.height} size={230} />
      </div>
    </div>
  );
}

function CoinDiamond() {
  return (
    <div style={{ position: "relative", width: "min(340px,76vw)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -20,
          background: "radial-gradient(circle, rgba(139,92,246,.16), transparent 70%)",
          filter: "blur(28px)",
        }}
      />
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: 4, width: "100%" }}>
        <div style={{ position: "relative", zIndex: 2, width: "58%" }} className="animate-float">
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 10,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(217,146,43,.35), transparent 70%)",
              filter: "blur(20px)",
            }}
            className="animate-pulse-glow"
          />
          <div className="animate-sway">
            <Image
              src="/media/tumbapp-coin-3d.png"
              alt="מטבע Coin של Tumbapp"
              width={1254}
              height={1254}
              style={{ position: "relative", width: "100%", height: "auto", filter: "drop-shadow(0 18px 34px rgba(217,146,43,.35))" }}
            />
          </div>
        </div>
        <div
          style={{ position: "relative", zIndex: 1, width: "48%", marginInlineStart: -28, marginTop: 30 }}
          className="animate-float"
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 10,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(139,92,246,.32), transparent 70%)",
              filter: "blur(20px)",
            }}
            className="animate-pulse-glow"
          />
          <div className="animate-sway" style={{ animationDuration: "9s", animationDelay: "1.2s" }}>
            <Image
              src="/media/tumbapp-diamond-3d.png"
              alt="יהלום Diamond של Tumbapp"
              width={1254}
              height={1254}
              style={{ position: "relative", width: "100%", height: "auto", filter: "drop-shadow(0 18px 34px rgba(109,40,217,.32))" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureRow({
  eyebrow,
  title,
  description,
  reverse,
  visual,
}: {
  eyebrow: string;
  title: string;
  description: string;
  reverse?: boolean;
  visual: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "clamp(28px,4vw,56px)",
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      <div style={{ flex: "1 1 360px", minWidth: 280 }}>
        <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 13.5, letterSpacing: ".04em" }}>{eyebrow}</div>
        <h3 style={{ fontSize: "clamp(21px,2.6vw,28px)", fontWeight: 800, letterSpacing: "-.01em", margin: "10px 0 0", color: "var(--ink)" }}>
          {title}
        </h3>
        <p style={{ color: "var(--ink2)", fontSize: 16, margin: "12px 0 0", lineHeight: 1.65, maxWidth: 440 }}>
          {description}
        </p>
      </div>
      <div style={{ flex: "1 1 260px", minWidth: 220, display: "flex", justifyContent: "center" }}>
        {visual}
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "clamp(48px,6vw,88px) clamp(18px,4vw,34px)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
        <div style={{ color: "var(--acc3)", fontWeight: 600, fontSize: 14, letterSpacing: ".04em" }}>מה מקבלים</div>
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
          כל מה שהחבורה צריכה במקום אחד
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(44px,6vw,72px)", marginTop: 48 }}>
        <FeatureRow
          eyebrow="משחקים ובין חברים"
          title="משחקים, משימות והתערבויות בין חברים"
          description="משתתפים במשימות יומיות, מצביעים, פותחים התערבויות והופכים את הצחוקים של החבורה למשחק משותף."
          visual={
            <PhonePair
              primary={{ src: "/media/screenshot-arena.jpg", width: 1080, height: 2400, alt: "מסך הזירה — התערבות חברתית פעילה על Coins בין ארגנטינה לברזיל" }}
              secondary={{ src: "/media/screenshot-home.jpg", width: 1080, height: 2292, alt: "מסך הבית של Tumbapp עם המשימה היומית" }}
            />
          }
        />

        <FeatureRow
          eyebrow="קבוצה ויציאות"
          title="מתקדמים יחד ויוצאים יחד"
          description="צוברים XP, שומרים על רצף קבוצתי, מצביעים לאן יוצאים ופותחים הטבות ככל שהחבורה מתקדמת."
          reverse
          visual={
            <PhonePair
              reverse
              primary={{ src: "/media/screenshot-where-to.jpg", width: 1080, height: 2400, alt: "מסך 'לאן הערב' — מצביעים יחד לאן יוצאים" }}
              secondary={{ src: "/media/screenshot-achievements.jpg", width: 1080, height: 2400, alt: "מסך הישגים עם רצף קבוצתי ו-XP" }}
            />
          }
        />

        <FeatureRow
          eyebrow="הכלכלה של Tumbapp"
          title="מרוויחים Coins ו־Diamonds"
          description="צוברים מטבעות דרך הפעילות באפליקציה ומשתמשים בהם בפרסים, יתרונות והטבות בבתי עסק."
          visual={<CoinDiamond />}
        />
      </div>
    </section>
  );
}
