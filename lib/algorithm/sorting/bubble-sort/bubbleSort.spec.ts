import bubbleSort from "./bubbleSort";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("bubbleSort", () => {
  it("should bubbleSort(number[]) to bubbleSorted  result", () => {
    expect(bubbleSort([1, 7, 4, 8, 6])).to.deep.equal([1, 4, 6, 7, 8]);
  });
});
