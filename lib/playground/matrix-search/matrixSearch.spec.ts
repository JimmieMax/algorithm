import matrixSearch from "./matrixSearch";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("matrixSearch", () => {
  it("should matrixSearch(matrix) to matrixSearchResult", () => {
    const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ];
    expect(matrixSearch(matrix, 1)).to.be.true;
    expect(matrixSearch(matrix, -1)).to.be.false;
    expect(matrixSearch(matrix, 10)).to.be.true;
    expect(matrixSearch(matrix, 11)).to.be.true;
    expect(matrixSearch(matrix, 20)).to.be.false;
    expect(matrixSearch(matrix, 25)).to.be.false;
    expect(matrixSearch(matrix, 19)).to.be.true;
  });
});
