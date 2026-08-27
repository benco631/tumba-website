"use client";

// This component is used only by the three lead-capture forms
// (SignupSection, BusinessContact, ContactMain) - all three collect
// website/waitlist leads, so they link to the website/waitlist-scoped
// policy (/privacy/waitlist), never the general application policy
// (/privacy). It's a real internal Next.js route now, so this links to it
// directly by relative path - no env var needed just to make the link
// clickable (there was previously a NEXT_PUBLIC_PRIVACY_POLICY_URL
// override; it had no real documented use beyond pointing at a URL this
// route now provides directly, so it was removed rather than kept as dead
// configuration surface).
const WAITLIST_PRIVACY_POLICY_PATH = "/privacy/waitlist";

/**
 * Render this link next to (and never inside) the checkbox's label. A link
 * nested in a label can activate the checkbox through the label's default
 * action even when click propagation is stopped.
 */
export function PrivacyPolicyLabel() {
  return (
    <a
      className="privacy-policy-link"
      href={WAITLIST_PRIVACY_POLICY_PATH}
      onClick={(e) => e.stopPropagation()}
      style={{ color: "inherit", textDecoration: "underline" }}
    >
      מדיניות הפרטיות
    </a>
  );
}
