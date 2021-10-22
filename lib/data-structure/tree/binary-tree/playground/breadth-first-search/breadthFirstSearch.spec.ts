import breadthFirstSearch from "./breadthFirstSearch";
import { expect } from "chai";
import { describe, it } from "mocha";
import BinaryTreeNode from "../../BinaryTreeNode";

describe("BinaryTreeNode breadthFirstSearch", () => {
  it("should breadthFirstSearch", () => {
    const binaryTreeRoot = new BinaryTreeNode(0);
    binaryTreeRoot.left = new BinaryTreeNode(5);
    binaryTreeRoot.left.left = new BinaryTreeNode(6);
    binaryTreeRoot.left.left.right = new BinaryTreeNode(8);
    binaryTreeRoot.right = new BinaryTreeNode(10);
    expect(breadthFirstSearch(binaryTreeRoot)).to.eql([0, 5, 10, 6, 8]);
  });
});
