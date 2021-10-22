import BinaryTreeNode from "../../BinaryTreeNode";

/**
 * breadthFirstSearch
 * @param root 
 * @returns 
 */
export default function breadthFirstSearch(root: BinaryTreeNode | null) {
  if(root === null) return [];
  const results: any[] = [];
  const queue = [root];
  while (queue.length > 0) {
    [...queue].forEach((current) => {
      results.push(current.value);
      queue.shift();
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    });
  }
  return results;
}
