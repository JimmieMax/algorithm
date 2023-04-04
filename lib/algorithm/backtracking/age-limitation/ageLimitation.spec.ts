import canMatch from "./ageLimitation";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("Backtracking: ageLimitation", () => {
  it("should canMatch(limitRules, ages) to ?", () => {
    expect(
      canMatch(
        [
          {
            min: 10,
            max: 20,
            maximum: 2,
          },
        ],
        [15]
      )
    ).to.be.true;
  });
  it("should canMatch(limitRules, [15, 30]) to ?", () => {
    expect(
      canMatch(
        [
          {
            min: 10,
            max: 30,
            maximum: 1,
          },
          {
            min: 10,
            max: 20,
            maximum: 1,
          },
        ],
        [15, 30]
      )
    ).to.be.true;
  });
  it("should canMatch(limitRules, [15, 30, 40]) to false", () => {
    expect(
      canMatch(
        [
          {
            min: 10,
            max: 30,
            maximum: 2,
          },
          {
            min: 10,
            max: 20,
            maximum: 2,
          },
        ],
        [15, 30, 40]
      )
    ).to.be.false;
  });
  it("should canMatch(limitRules, [16, 17, 22, 23, 12]) to true", () => {
    expect(
      canMatch(
        [
          {
            min: 10,
            max: 20,
            maximum: 1,
          },
          {
            min: 15,
            max: 25,
            maximum: 2,
          },
          {
            min: 20,
            max: 30,
            maximum: 2,
          },
        ],
        [16, 17, 22, 23, 12]
      )
    ).to.be.true;
  });
});
