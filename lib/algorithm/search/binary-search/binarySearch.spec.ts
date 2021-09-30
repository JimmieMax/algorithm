import binarySearch from "./binarySearch";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("binarySearch", () => {
  it("should binarySearch(sortedArray, target) to linked search result", () => {
    expect(binarySearch([1, 3, 4, 6, 7, 9], 4)).to.equal(2);
  });
});
