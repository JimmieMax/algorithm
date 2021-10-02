import BinaryTreeNode from "../binary-tree/BinaryTreeNode";

export default class BinarySearchTree {
  root: BinaryTreeNode | null;
  constructor() {
    this.root = null;
  }
  /**
   * insert
   * @param value
   * @returns
   */
  insert(value: number): BinaryTreeNode {
    let current = this.root;
    if (current === null) {
      this.root = new BinaryTreeNode(value);
      return this.root;
    } else {
      while (current.value !== value) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new BinaryTreeNode(value);
            return current.left;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new BinaryTreeNode(value);
            return current.right;
          } else {
            current = current.right;
          }
        }
      }
      return current;
    }
  }
  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  find(value: number): BinaryTreeNode | null {
    let current = this.root;
    if (current === null) return null;
    while (current !== null) {
      if (current.value > value && current.left) {
        // Check left nodes.
        current = current.left;
      } else if (current.value < value && current.right) {
        // Check right nodes.
        current = current.right;
      } else if (current.value === value) {
        return current;
      }
    }
    return null;
  }

  remove(value: number) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node: BinaryTreeNode | null, value: number) {
    if (node == null) {
      return null;
    }
    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      } else if (node.left == null) {
        return node.right;
      } else if (node.right == null) {
        return node.left;
      } else {
        const minNode = this.findMin(node.right);
        node.value = minNode.value;
        node.right = this.removeNode(node.right, minNode.value);
        return node;
      }
    }
  }

  findMin(node: BinaryTreeNode | null = this.root) {
    let current = node;
    while (current?.left !== null) {
      current = (current as BinaryTreeNode).left;
    }
    return current;
  }

  findMax(node: BinaryTreeNode | null = this.root) {
    let current = node;
    while (current?.right !== null) {
      current = (current as BinaryTreeNode).right;
    }
    return current;
  }
}
