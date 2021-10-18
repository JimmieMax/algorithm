import { expect } from "chai";
import { describe, it } from "mocha";
import isSameTree from "./isSameTree";
import BinaryTreeNode from "../../../../data-structure/tree/binary-tree/BinaryTreeNode";

describe("isSameTree", () => {
  it("should isSameTree(string) to isSameTreeResult", () => {
    const A = new BinaryTreeNode(0);
    A.left = new BinaryTreeNode(5);
    A.right = new BinaryTreeNode(10);
    const B = new BinaryTreeNode(0);
    B.left = new BinaryTreeNode(5);
    expect(isSameTree(A, B)).to.be.false;
    B.right = new BinaryTreeNode(10);
    expect(isSameTree(A, B)).to.be.true;
  });
});
