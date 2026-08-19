import Image from "next/image";

const LINKS = [
  { href: "#how2", label: "איך זה עובד" },
  { href: "#economy2", label: "הכלכלה" },
  { href: "#map2", label: "מפת ההטבות" },
  { href: "#business2", label: "לעסקים" },
  { href: "#contact2", label: "צור קשר" },
];

export function MainFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(109,40,217,.12)" }}>
      <div style={{ maxWidth: 1520, margin: "0 auto", padding: "clamp(36px,5vw,60px) clamp(18px,4vw,44px)", display: "flex", flexWrap: "wrap", gap: 26, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <Image src="/media/tumbapp-logo.png" alt="TUMBAPP" width={120} height={38} style={{ height: 36, width: "auto", display: "block" }} />
          <span style={{ fontFamily: "var(--font-outfit),sans-serif", fontWeight: 800, fontSize: 24, background: "linear-gradient(120deg,var(--acc3),var(--acc))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
            TUMBAPP
          </span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px" }}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "#625A70", fontSize: 14.5 }}>
              {l.label}
            </a>
          ))}
        </div>
        <span style={{ color: "#625A70", fontSize: 13.5 }}>© 2026 TUMBAPP. כל הזכויות שמורות.</span>
      </div>
    </footer>
  );
}
