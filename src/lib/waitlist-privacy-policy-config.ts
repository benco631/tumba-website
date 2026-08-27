// Proposed values, not yet approved for production use. The source draft
// (tumbapp-privacy-policy-he-draft.md) carries this warning, deliberately
// NOT rendered on the public page (see app/privacy/waitlist/page.tsx) -
// kept here instead, verbatim, so the blocker stays visible to whoever
// next touches this file:
//
//   "טיוטה לאישור לפני פרסום. יש להשלים את בדיקת כלי המעקב, העוגיות
//   וספקי האחסון הפעילים באתר, ולקבל בדיקה משפטית ישראלית לפני שימוש
//   בגרסה זו כמדיניות מחייבת."
//
// Section 7's retention wording permits EITHER deletion or anonymization
// ("אנונימיזציה") after 24 months - not both required. The backend's
// approved WaitlistRetentionService implements permanent deletion, which
// is one of those two permitted outcomes, so there is no contradiction
// between this policy text and the current backend behavior. Anonymization
// is simply not implemented - it was never built, not rejected or in
// tension with anything. Adding an anonymization path in the future (as an
// alternative or addition to deletion) would need its own implementation
// and its own compliance review before shipping; it is not required by
// anything currently deployed.
//
// Do NOT wire WAITLIST_PRIVACY_POLICY_VERSION into a real env default
// until legal has signed off and the backend's PRIVACY_POLICY_VERSION is
// updated to match exactly.
export const WAITLIST_PRIVACY_POLICY_VERSION = "2026-08-26";
export const WAITLIST_PRIVACY_POLICY_UPDATED_HE = "26 באוגוסט 2026";
export const WAITLIST_PRIVACY_POLICY_URL = "https://tumbapp.com/privacy/waitlist";
export const WAITLIST_PRIVACY_CONTACT_EMAIL = "tumba@tumbaapp.com";
