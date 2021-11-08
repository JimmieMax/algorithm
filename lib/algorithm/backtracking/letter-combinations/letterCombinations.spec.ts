import letterCombinations from "./letterCombinations";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("Backtracking: letterCombinations", () => {
  it("should letterCombinations(PhoneNumber) to letterCombinationsResult", () => {
    expect(letterCombinations("23")).to.eql([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ]);
    expect(letterCombinations("")).to.eql([]);
    expect(letterCombinations("2")).to.eql(["a", "b", "c"]);
  });
});
