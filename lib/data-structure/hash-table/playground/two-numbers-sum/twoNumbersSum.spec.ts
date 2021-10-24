import twoNumbersSum from "./twoNumbersSum";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("twoNumbersSum", () => {
  it("should twoNumbersSum", () => {
    expect(twoNumbersSum([2, 7, 11, 15], 18)).to.eql([1, 2]);
    expect(twoNumbersSum([2, 7, 19, 15, -3], 4)).to.eql([1, 4]);
  });
});
