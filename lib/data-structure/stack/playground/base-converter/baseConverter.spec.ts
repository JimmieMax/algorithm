import baseConverter from "./baseConverter";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("baseConverter", () => {
  it("should baseConverter(number, base) to baseConverterResult", () => {
    expect(baseConverter(100345, 2)).to.equal('11000011111111001');
    expect(baseConverter(135, 7)).to.equal('252');
    expect(baseConverter(100345, 8)).to.equal('303771');
    expect(baseConverter(100345, 16)).to.equal('187F9');
  });
});
