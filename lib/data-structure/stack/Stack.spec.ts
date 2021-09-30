import Stack from "./Stack";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("Stack", () => {
  it("should create empty stack", () => {
    const stack = new Stack();
    expect(stack).not.to.be.null;
    expect(stack.list).not.to.be.null;
  });

  it("should peek data from stack", () => {
    const stack = new Stack();

    expect(stack.peek()).to.be.null;

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).to.equal(2);
    expect(stack.peek()).to.equal(2);
  });

  it("should check if stack is empty", () => {
    const stack = new Stack();

    expect(stack.isEmpty()).to.equal(true);

    stack.push(1);

    expect(stack.isEmpty()).to.equal(false);
  });

  it("should pop data from stack", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).to.equal(2);
    expect(stack.pop()).to.equal(1);
    expect(stack.pop()).to.be.undefined;
    expect(stack.isEmpty()).to.equal(true);
  });

  it("should be possible to push/pop objects", () => {
    const stack = new Stack();

    stack.push({ value: "test1", key: "key1" });
    stack.push({ value: "test2", key: "key2" });

    expect(stack.list).to.deep.equal([
      { value: "test1", key: "key1" },
      { value: "test2", key: "key2" },
    ]);
    expect(stack.pop().value).to.equal("test2");
    expect(stack.pop().value).to.equal("test1");
  });

  it("should be possible to convert stack to array", () => {
    const stack = new Stack();

    expect(stack.peek()).to.be.null;

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.list).to.deep.equal([1, 2, 3]);
  });
});
