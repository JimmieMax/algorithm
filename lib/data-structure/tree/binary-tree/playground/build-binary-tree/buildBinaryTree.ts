import BinaryTreeNode from "../../BinaryTreeNode";

/**
 * buildBinaryTree
 * Definition for a binary tree node.
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
export default function buildBinaryTree(
  preorder: any[],
  inorder: any[]
): BinaryTreeNode | null {
  if (preorder.length === 0) return null;
  const current = new BinaryTreeNode(preorder[0]);
  const index = inorder.indexOf(preorder[0]);
  current.left = buildBinaryTree(
    preorder.slice(1, index + 1),
    inorder.slice(0, index)
  );
  current.right = buildBinaryTree(
    preorder.slice(index + 1),
    inorder.slice(index + 1)
  );
  return current;
}
