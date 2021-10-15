import buildBinaryTree from "./buildBinaryTree";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("buildBinaryTree", () => {
  it("should buildBinaryTree(preorder: any[], inorder: any[]) to buildBinaryTreeResult", () => {
    const root = buildBinaryTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
    expect(root?.value).to.equal(3);
    expect(root?.left?.value).to.equal(9);
    expect(root?.left?.left).to.be.null;
    expect(root?.right?.value).to.equal(20);
    expect(root?.right?.left?.value).to.equal(15);
    expect(root?.right?.right?.value).to.equal(7);
    const root2 = buildBinaryTree([-1], [-1]);
    expect(root2?.value).to.equal(-1);
  });
});
