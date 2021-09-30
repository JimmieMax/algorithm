export class TreeNode {
  public value: number;
  //左孩子
  public left: TreeNode | null;
  //右孩子
  public right: TreeNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function maxDeath(node: TreeNode | null): number {
  if (node == null) {
    return 0;
  }
  const left = maxDeath(node.left);
  const right = maxDeath(node.right);
  return Math.max(left, right) + 1;
}
