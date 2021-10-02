import selectionSort from "./selectionSort";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("selectionSort", () => {
  it("should selectionSort(num) to selectionSortResult", () => {
    expect(selectionSort([2, 4, 0, 7, 2, 3])).to.deep.equal([0, 2, 2, 3, 4, 7]);
  });
});
