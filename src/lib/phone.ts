import { parsePhoneNumberFromString } from "libphonenumber-js/max";

export type PhoneValidationResult =
  | { valid: true; e164: string }
  | { valid: false };

function hasAllowedStructure(phone: string): boolean {
  if (!/^[+0-9() -]+$/.test(phone)) return false;
  if (
    phone.includes("+") &&
    (!phone.startsWith("+") || phone.indexOf("+", 1) !== -1)
  ) {
    return false;
  }

  let parenthesesDepth = 0;
  let pairCount = 0;
  for (const character of phone) {
    if (character === "(") {
      if (parenthesesDepth !== 0) return false;
      parenthesesDepth = 1;
      pairCount++;
    } else if (character === ")") {
      if (parenthesesDepth !== 1) return false;
      parenthesesDepth = 0;
    }
  }

  return parenthesesDepth === 0 && pairCount <= 1;
}

/**
 * Validates waitlist phone input without allowing libphonenumber's text
 * extraction behavior. Israeli national input uses IL as its default country;
 * an explicit leading + keeps its own international country calling code.
 */
export function validateAndNormalizePhone(input: string): PhoneValidationResult {
  const phone = input.trim();
  if (!phone || !hasAllowedStructure(phone)) return { valid: false };

  try {
    const parsed = parsePhoneNumberFromString(phone, "IL");
    return parsed?.isValid()
      ? { valid: true, e164: parsed.number }
      : { valid: false };
  } catch {
    return { valid: false };
  }
}
