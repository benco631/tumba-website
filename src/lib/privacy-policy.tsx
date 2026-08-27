import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { ReactNode } from "react";

export {
  PRIVACY_CONTACT_EMAIL,
  PRIVACY_POLICY_UPDATED_HE,
  PRIVACY_POLICY_URL,
  PRIVACY_POLICY_VERSION,
} from "./privacy-policy-config";

export const PRIVACY_POLICY_MARKDOWN = readFileSync(
  join(process.cwd(), "src", "lib", "privacy-policy.md"),
  "utf8",
).trim();

function renderInline(text: string): ReactNode[] {
  const tokenPattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(tokenPattern)) {
    const index = match.index ?? 0;
    if (index > cursor) nodes.push(text.slice(cursor, index));
    const token = match[0];

    if (token.startsWith("**")) {
      nodes.push(<strong key={`${index}-strong`}>{renderInline(token.slice(2, -2))}</strong>);
    } else if (token.startsWith("`")) {
      nodes.push(<code key={`${index}-code`}>{token.slice(1, -1)}</code>);
    } else {
      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
      if (link) {
        nodes.push(
          <a key={`${index}-link`} href={link[2]}>
            {link[1]}
          </a>,
        );
      }
    }
    cursor = index + token.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

/**
 * Generic markdown-to-JSX renderer, extracted so other policy documents
 * (e.g. the waitlist-specific policy at /privacy/waitlist) can reuse the
 * exact same heading/list/paragraph/inline rules without duplicating them.
 * renderPrivacyPolicy() below is unchanged in behavior - it's now just this
 * function applied to PRIVACY_POLICY_MARKDOWN.
 */
export function renderMarkdownToBlocks(markdown: string): ReactNode[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: ReactNode[] = [];

  for (let index = 0; index < lines.length; ) {
    const line = lines[index];
    if (!line.trim()) {
      index++;
      continue;
    }

    const heading = /^(#{1,3})\s+(.+)$/.exec(line);
    if (heading) {
      const content = renderInline(heading[2]);
      if (heading[1].length === 1) blocks.push(<h1 key={`h-${index}`}>{content}</h1>);
      if (heading[1].length === 2) blocks.push(<h2 key={`h-${index}`}>{content}</h2>);
      if (heading[1].length === 3) blocks.push(<h3 key={`h-${index}`}>{content}</h3>);
      index++;
      continue;
    }

    if (line.startsWith("* ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].startsWith("* ")) {
        items.push(lines[index].slice(2));
        index++;
      }
      blocks.push(
        <ul key={`ul-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>{renderInline(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    const paragraphLines: string[] = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^#{1,3}\s/.test(lines[index]) &&
      !lines[index].startsWith("* ")
    ) {
      paragraphLines.push(lines[index]);
      index++;
    }
    blocks.push(
      <p key={`p-${index}`}>
        {paragraphLines.map((paragraphLine, lineIndex) => (
          <span key={lineIndex}>
            {lineIndex > 0 && <br />}
            {renderInline(paragraphLine)}
          </span>
        ))}
      </p>,
    );
  }

  return blocks;
}

export function renderPrivacyPolicy(): ReactNode[] {
  return renderMarkdownToBlocks(PRIVACY_POLICY_MARKDOWN);
}
