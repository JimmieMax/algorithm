import longestSubstring from "./longestSubstring";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("longestSubstring", () => {
  it("should longestSubstring(string) to longestSubstringResult", () => {
    expect(longestSubstring('')).to.equal(0);
    expect(longestSubstring('aaaaa')).to.equal(1);
    expect(longestSubstring('abcda')).to.equal(4);
    expect(longestSubstring('abcabc')).to.equal(3);
  });
});
