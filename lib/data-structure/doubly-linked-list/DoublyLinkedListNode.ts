export default class DoublyLinkedListNode {
  public value;
  public next: DoublyLinkedListNode | null;
  public previous: DoublyLinkedListNode | null;
  constructor(
    value: any,
    next: DoublyLinkedListNode | null | undefined = null,
    previous: DoublyLinkedListNode | null | undefined = null
  ) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}
