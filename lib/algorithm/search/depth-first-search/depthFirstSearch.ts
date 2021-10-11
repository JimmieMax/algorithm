interface Node {
  value: any;
  children?: Node[];
}

export default function depthFirstSearch(
  children: Node[],
  results: any[] = []
) {
  if (children) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      results.push(child.value);
      child.children && depthFirstSearch(child.children, results);
    }
  }
  return results;
}
