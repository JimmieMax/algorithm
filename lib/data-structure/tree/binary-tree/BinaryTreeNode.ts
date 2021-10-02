export default class BinaryTreeNode {
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
  /**
   * @return {number}
   */
  get leftHeight(): number {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  /**
   * @return {number}
   */
  get rightHeight(): number {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  /**
   * @return {number}
   */
  get height(): number {
    return Math.max(this.leftHeight, this.rightHeight);
  }
}
