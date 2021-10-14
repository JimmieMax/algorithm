import matrixPathSearch from "./matrixPathSearch";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("matrixPathSearch", () => {
  it("should matrixPathSearch(string) to matrixPathSearchResult", () => {
    const matrix = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(matrixPathSearch(matrix, "ABCCED")).to.be.true;
    // 保证回头不会被计入
    expect(matrixPathSearch(matrix, "ABCCCE")).to.be.false;
  });
});
