export default class Queue {
  public list: any[];

  constructor() {
    this.list = [];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return !this.list.length;
  }

  /**
   * Read the element at the front of the queue without removing it.
   * @return {*}
   */
  peek() {
    if (!this.list[0]) {
      return null;
    }

    return this.list[0];
  }

  /**
   * @param {*} value
   */
  enqueue(value: any) {
    this.list.push(value);
  }

  /**
   * @return {*}
   */
  dequeue() {
    return this.list.shift();
  }

  clear() {
      this.list = [];
  }
}
