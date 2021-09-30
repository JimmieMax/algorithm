export class BinaryTreeNode {
  public value: number;
  //左孩子
  public left: BinaryTreeNode | null;
  //右孩子
  public right: BinaryTreeNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
