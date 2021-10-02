import TrieNode from "./TrieNode";

export default class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  add(word: string) {
    let currentNode = this.root;
    let i = 0;
    while (i < word.length) {
      let character = word[i];
      if (!currentNode.keys.has(character)) {
        const newTreeNode = new TrieNode();
        currentNode.keys.set(character, newTreeNode);
        currentNode = newTreeNode;
      } else {
        currentNode = currentNode.keys.get(character);
      }
      i++;
    }
    currentNode.setEnd();
  }
  /**
   * Check if complete word exists in Trie.
   *
   * @param {string} word
   * @return {boolean}
   */
  doesWordExist(word: string) {
    let currentNode = this.root;
    let i = 0;
    while (i < word.length) {
      let character = word[i];
      if (currentNode.keys.has(character)) {
        currentNode = currentNode.keys.get(character);
      } else {
        return false;
      }
      i++;
    }
    if (currentNode.isEnd()) {
      return true;
    } else {
      return false;
    }
  }
}
