import { describe, expect, it } from "vitest";
import { validateAndNormalizePhone } from "./phone";

describe("validateAndNormalizePhone", () => {
  it.each([
    ["0544567890", "+972544567890"],
    ["054-456-7890", "+972544567890"],
    ["(054) 456-7890", "+972544567890"],
    ["+972 54 456 7890", "+972544567890"],
    ["+1 202 555 0123", "+12025550123"],
    ["  0544567890  ", "+972544567890"],
  ])("accepts and normalizes %s", (input, e164) => {
    expect(validateAndNormalizePhone(input)).toEqual({ valid: true, e164 });
  });

  it.each([
    "0544567890abc",
    "054+4567890",
    "++972544567890",
    "+972+544567890",
    "(054 456-7890",
    "054) 456-7890",
    "(05)(4)4567890",
    "050123",
    "+972501234567",
  ])("rejects %s safely", (input) => {
    expect(validateAndNormalizePhone(input)).toEqual({ valid: false });
  });
});
