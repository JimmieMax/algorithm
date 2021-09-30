import insertSort from "./insertSort";
import { expect } from "chai";
import { describe, it } from "mocha";

describe('insertSort', () => {
  it("should insertSort(num) to insertSortResult", () => {
    expect(insertSort([3, 4, 9, 0, 3])).to.deep.equal([0, 3, 3, 4, 9])
  });
})