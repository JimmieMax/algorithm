import selectSort from "./selectSort";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("selectSort", () => {
  it("should selectSort(num) to selectSortResult", () => {
    expect(selectSort([2, 4, 0, 7, 2, 3])).to.deep.equal([0, 2, 2, 3, 4, 7]);
  });
});
