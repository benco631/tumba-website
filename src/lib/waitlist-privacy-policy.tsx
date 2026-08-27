import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { ReactNode } from "react";
import { renderMarkdownToBlocks } from "./privacy-policy";

export {
  WAITLIST_PRIVACY_CONTACT_EMAIL,
  WAITLIST_PRIVACY_POLICY_UPDATED_HE,
  WAITLIST_PRIVACY_POLICY_URL,
  WAITLIST_PRIVACY_POLICY_VERSION,
} from "./waitlist-privacy-policy-config";

export const WAITLIST_PRIVACY_POLICY_MARKDOWN = readFileSync(
  join(process.cwd(), "src", "lib", "waitlist-privacy-policy.md"),
  "utf8",
).trim();

export function renderWaitlistPrivacyPolicy(): ReactNode[] {
  return renderMarkdownToBlocks(WAITLIST_PRIVACY_POLICY_MARKDOWN);
}
