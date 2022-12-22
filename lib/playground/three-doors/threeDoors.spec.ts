import guessProbability from "./threeDoors";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("threeDoors", () => {
  it("should guessProbability(time) to ?", () => {
    console.log(guessProbability(100));
    const result = guessProbability(100);
    expect(result.changeWinTime > result.noneChangeWinTime).to.be.true;
  });
});
