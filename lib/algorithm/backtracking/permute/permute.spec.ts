import permute from "./permute";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("Backtracking: permute", () => {
  it("should permute(IPAddress) to permuteResult", () => {
    expect(permute([1])).to.eql([[1]]);
    expect(permute([1, 0])).to.eql([
      [1, 0],
      [0, 1],
    ]);
    expect(permute([1, 2, 3])).to.eql([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
});
