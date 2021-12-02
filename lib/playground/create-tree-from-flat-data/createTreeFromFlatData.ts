interface ListNode {
  id: number;
  parentId?: number;
  children?: ListNode[];
  [key: string]: any;
}
interface Map {
  [key: number]: number;
}
export default function createTreeFromFlatData(list: ListNode[]) {
  let map: Map = {},
    node,
    tree = [],
    i;
  for (i = 0; i < list.length; i++) {
    map[list[i].id] = i; // initialize the map
  }
  for (i = 0; i < list.length; i++) {
    node = list[i];
    if (node.parentId) {
      // if you have dangling branches check that map[node.parentId] exists
      const parent = list[map[node.parentId]];
      if (parent) {
        if (parent.children) {
          parent.children.push(node);
        } else {
          parent.children = [node];
        }
      } else {
        // input error
        return null;
      }
    } else {
      tree.push(node);
    }
  }
  return tree;
}
