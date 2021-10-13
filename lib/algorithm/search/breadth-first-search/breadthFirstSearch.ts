interface Node {
  value: any;
  children?: Node[];
}
/**
 * breadthFirstSearch
 * @param data 
 * @returns 
 */
export default function breadthFirstSearch(data: Node[]) {
  let results: any[] = [];
  let queue = data;
  while (queue.length > 0) {
    [...queue].forEach((child) => {
      results.push(child.value);
      queue.shift();
      child.children && queue.push(...child.children);
    });
  }
  return results;
}
