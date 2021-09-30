import fibonacci from "./fibonacci";
import { expect } from "chai";
import { describe, it } from "mocha";

describe('fibonacci', () => {
  it("should fibonacci(num) to fibonacciResult", () => {
    expect(fibonacci(1)).to.equal(1);
    expect(fibonacci(2)).to.equal(1);
    expect(fibonacci(3)).to.equal(2);
    expect(fibonacci(4)).to.equal(3);
    expect(fibonacci(5)).to.equal(5);
    expect(fibonacci(10)).to.equal(55);
    expect(fibonacci(30)).to.equal(832040);
  });
})