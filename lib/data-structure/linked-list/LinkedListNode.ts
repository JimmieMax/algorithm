export default class LinkedListNode {
  public value: any;
  public next: LinkedListNode | null;
  constructor(value: any, next: LinkedListNode | null = null) {
    this.value = value;
    this.next = next;
  }

  //   toString(callback: (value: any) => void) {
  //     return callback ? callback(this.value) : `${this.value}`;
  //   }
}
