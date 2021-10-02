import insertionSort from "./insertionSort";
import { expect } from "chai";
import { describe, it } from "mocha";

describe('insertionSort', () => {
  it("should insertionSort(num) to insertionSortResult", () => {
    expect(insertionSort([3, 4, 9, 0, 3])).to.deep.equal([0, 3, 3, 4, 9])
  });
})