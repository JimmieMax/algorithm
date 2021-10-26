import cuttingRope from "./cuttingRope";
import { expect } from "chai";
import { describe, it } from "mocha";

describe('Greedy: cuttingRope', () => {
  it("should cuttingRope(num) to cuttingRopeResult", () => {
    expect(cuttingRope(2)).to.equal(1);
    expect(cuttingRope(3)).to.equal(2);
    expect(cuttingRope(10)).to.equal(36);
  });
})