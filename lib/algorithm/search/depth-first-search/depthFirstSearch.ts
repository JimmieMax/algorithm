interface Node {
  value: any;
  children?: Node[];
}
/**
 * depthFirstSearch
 * @param children
 * @param results
 * @returns
 */
export default function depthFirstSearch(
  data: Node[],
  results: any[] = []
) {
  for (let i = 0; i < data.length; i++) {
    const child = data[i];
    results.push(child.value);
    child.children && depthFirstSearch(child.children, results);
  }
  return results;
}
