import maximunProfit from "./maximunProfit";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("maximunProfit", () => {
  it("should maximunProfit(num[]) to maximunProfitResult", () => {
    expect(maximunProfit([7,1,5,3,6,4])).to.equal(5);
    expect(maximunProfit([1,2,3,3,4])).to.equal(3);
  });
});
