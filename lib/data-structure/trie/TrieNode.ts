export default class TrieNode {
  keys;
  end: boolean;
  constructor() {
    this.keys = new Map();
    this.end = false;
  }
  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }
}
``