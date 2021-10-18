import BinaryTreeNode from "../../../../data-structure/tree/binary-tree/BinaryTreeNode";

/**
 * isSubStructure
 * @param {BinaryTreeNode} A
 * @param {BinaryTreeNode} B
 * @return {boolean}
 */
export default function isSubStructure(
  A: BinaryTreeNode | null,
  B: BinaryTreeNode | null
): boolean {
  //A为空直接返回，且(约定空树不是任意一个树的子结构，因此B也不能为空)
  if (A === null || B === null) return false;
  // 以 A，B为根结点
  const dfs = (A: BinaryTreeNode | null, B: BinaryTreeNode | null): boolean => {
    if (B === null) return true;
    if (A === null) return false;
    if (A.value === B.value)
      return dfs(A.left, B.left) && dfs(A.right, B.right);
    else return false;
  };
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B); // 当前节点，左孩子，右孩子
}
