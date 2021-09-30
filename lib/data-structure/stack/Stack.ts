
export default class Stack {
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
     * @return {*}
     */
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.list[this.list.length - 1];
    }
  
    /**
     * @param {*} value
     */
    push(value: any) {
      this.list.push(value);
    }
  
    /**
     * @return {*}
     */
    pop() {
      return this.list.pop();
    }
  
    /**
     * @return {number}
     */
     size() {
      return this.list.length;
    }

    clear() {
        this.list = [];
    }
  }