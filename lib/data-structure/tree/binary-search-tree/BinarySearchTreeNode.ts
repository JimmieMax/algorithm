import BinaryTreeNode from "../binary-tree/BinaryTreeNode";

export default class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value: number) {
    super(value);
  }
  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  find(value: number): BinarySearchTreeNode | null {
    // Check the root.
    if (this.value === value) {
      return this;
    }
    if (value < this.value && this.left) {
      // Check left nodes.
      return (this.left as BinarySearchTreeNode).find(value);
    }
    if (value > this.value && this.right) {
      // Check right nodes.
      return (this.right as BinarySearchTreeNode).find(value);
    }
    return null;
  }
}
