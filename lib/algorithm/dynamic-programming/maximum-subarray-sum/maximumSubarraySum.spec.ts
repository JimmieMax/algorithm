import maximumSubarraySum from "./maximumSubarraySum";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("Dynamic Porgramming: maximumSubarraySum", () => {
  it("should maximumSubarraySum(numbers) to maximumSubarraySumResult", () => {
    expect(maximumSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.equal(6);
    expect(maximumSubarraySum([-2, 1, -3, 4, -3, 2, -1, 1, -5, 4])).to.equal(4);
  });
});
