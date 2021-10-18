import BinaryTreeNode from "./BinaryTreeNode";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("BinaryTreeNode", () => {
  it("should BinaryTreeNode", () => {
    const binaryTreeRoot = new BinaryTreeNode(0);
    binaryTreeRoot.left = new BinaryTreeNode(5);
    binaryTreeRoot.right = new BinaryTreeNode(10);
    expect(binaryTreeRoot.value).to.equal(0);
    expect(binaryTreeRoot.left.value).to.equal(5);
    expect(binaryTreeRoot.right.value).to.equal(10);
  });
});
