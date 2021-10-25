import longestPalindrome from "./longestPalindrome";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("longestPalindrome", () => {
  it("should longestPalindrome(string) to longestPalindromeResult", () => {
    expect(longestPalindrome("babad")).to.equal("bab");
    expect(longestPalindrome("cbbd")).to.equal("bb");
    expect(longestPalindrome("a")).to.equal("a");
    expect(longestPalindrome("ac")).to.equal("a");
    expect(longestPalindrome("aaaaaaaaaaa")).to.equal("aaaaaaaaaaa");
  });
});
