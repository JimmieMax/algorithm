import guessProbability from "./threeDoors";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("threeDoors", () => {
  it("should guessProbability(time) to ?", () => {
    console.log(guessProbability(1000));
    const result = guessProbability(1000);
    expect(result.changeWinTime > result.noneChangeWinTime).to.be.true;
  });
});
