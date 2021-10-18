import { expect } from "chai";
import { describe, it } from "mocha";
import isSubStructure from "./isSubStructure";
import BinaryTreeNode from "../../../../data-structure/tree/binary-tree/BinaryTreeNode";

describe("isSubStructure", () => {
  it("should isSubStructure(string) to isSubStructureResult", () => {
    const A = new BinaryTreeNode(0);
    A.left = new BinaryTreeNode(5);
    A.right = new BinaryTreeNode(10);
    const B = new BinaryTreeNode(0);
    B.left = new BinaryTreeNode(5);
    expect(isSubStructure(A, B)).to.be.true;
    B.right = new BinaryTreeNode(15);
    expect(isSubStructure(A, B)).to.be.false;
  });
});
