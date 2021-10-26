import LinkedListNode from "../../../data-structure/linked-list/LinkedListNode";
/**
 * removeNthNodeFromEnd
 * Keyword: double pointer
 * Question Description:
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * @param head 
 * @param n 
 * @returns 
 */
export default function removeNthNodeFromEnd(head: LinkedListNode, n: number) {
  let ret = new LinkedListNode(0, head);
  let slow: LinkedListNode | null = ret;
  let fast: LinkedListNode | null = ret;
  while (n--) {
    fast = (fast as LinkedListNode).next;
  }
  if (!fast) {
    return ret.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = (slow as LinkedListNode).next;
  }
  (slow as LinkedListNode).next = (
    (slow as LinkedListNode).next as LinkedListNode
  ).next;
  return ret.next;
}
