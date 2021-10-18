import BinaryTreeNode from "../../../../data-structure/tree/binary-tree/BinaryTreeNode";

export default function isSameTree(
  p: BinaryTreeNode | null,
  q: BinaryTreeNode | null
): boolean {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  if (p.value != q.value) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
