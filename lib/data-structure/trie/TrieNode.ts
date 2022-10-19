export default class TrieNode {
  keys;
  isComplete: boolean;
  constructor() {
    this.keys = new Map();
    this.isComplete = false;
  }
  setEnd() {
    this.isComplete = true;
  }

  isEnd() {
    return this.isComplete;
  }
}