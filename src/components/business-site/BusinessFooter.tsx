import Image from "next/image";
import { WildTogether } from "../shared/WildTogether";

export function BusinessFooter() {
  return (
    <footer style={{ borderTop: "1px solid rgba(109,40,217,.12)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(28px,4vw,44px) clamp(18px,4vw,40px)", display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/media/tumbapp-logo.png" alt="Tumbapp" width={120} height={38} style={{ height: 30, width: "auto", display: "block" }} />
          <span style={{ fontSize: 13.5, color: "var(--ink2)" }}>Tumbapp לעסקים — קבוצות פעילות, קרוב אליכם.</span>
        </div>
        <WildTogether style={{ color: "var(--acc3)", fontSize: 14, fontWeight: 700, letterSpacing: ".02em" }} />
        <span style={{ color: "var(--ink2)", fontSize: 13 }}>© 2026 TUMBAPP. כל הזכויות שמורות.</span>
      </div>
    </footer>
  );
}
