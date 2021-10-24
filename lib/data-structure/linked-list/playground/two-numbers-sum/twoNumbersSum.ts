import LinkedListNode from "../../LinkedListNode";

/**
 * twoNumbersSum
 * Question Description
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * @param l1
 * @param l2
 * @returns
 */
export default function twoNumbersSum(l1: LinkedListNode, l2: LinkedListNode) {
  let addOne = 0;
  let current1: LinkedListNode | null = l1;
  let current2: LinkedListNode | null = l2;
  let head = new LinkedListNode(0);
  let current = head;
  while (current1 || current2 || addOne) {
    const sum =
      (current1 ? current1.value : 0) +
      (current2 ? current2.value : 0) +
      addOne;
    addOne = sum > 9 ? 1 : 0;
    current.value = sum % 10;
    current1 = current1 ? current1.next : null;
    current2 = current2 ? current2.next : null;
    if (current1 || current2 || addOne) {
      current.next = new LinkedListNode(0);
      current = current.next;
    }
  }
  return head;
}
