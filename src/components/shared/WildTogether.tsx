/**
 * The "WILD Together" brand phrase.
 *
 * Typography contract (shared by every placement across all routes):
 * - "WILD" renders in Rafika (--font-rafika), and nothing else does.
 * - Every other Latin word renders in Open Sauce Sans (--font-outfit).
 * - dir="ltr" + unicode-bidi isolation keeps the English phrase in correct
 *   word order when it sits inside an RTL Hebrew page.
 */

const LTR: React.CSSProperties = { direction: "ltr", unicodeBidi: "isolate" };

/**
 * Just the "WILD" word — Rafika, uppercase. Rafika's cap height is smaller
 * per em than Open Sauce Sans', so a small optical bump keeps the two words
 * visually the same size in the phrase. em-based, so it scales with whatever
 * font-size the placement sets.
 */
function Wild() {
  return (
    <span style={{ fontFamily: "var(--font-rafika), cursive", fontWeight: 400, fontSize: "1.12em" }}>
      WILD
    </span>
  );
}

/** Compact brand signature: "WILD Together". */
export function WildTogether({
  style,
  className,
}: {
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <span
      lang="en"
      dir="ltr"
      className={className}
      style={{ ...LTR, fontFamily: "var(--font-outfit), sans-serif", ...style }}
    >
      <Wild /> Together
    </span>
  );
}

/** Full slogan: "Play Together. Earn Together. WILD Together." */
export function BrandSlogan({
  style,
  className,
}: {
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <span
      lang="en"
      dir="ltr"
      className={className}
      style={{ ...LTR, fontFamily: "var(--font-outfit), sans-serif", ...style }}
    >
      Play Together. Earn Together. <Wild /> Together.
    </span>
  );
}
