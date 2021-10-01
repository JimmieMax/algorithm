interface Node {
  key: string;
  value: any;
}

export default class HashTable {
  static DEFAULT_HASH_TABLE_SIZE = 32;
  private keys: { [key: string]: number };
  public buckets;
  constructor(hashTableSize = HashTable.DEFAULT_HASH_TABLE_SIZE) {
    this.keys = {};
    this.buckets = Array(hashTableSize).fill([]);
  }
  hash(key: string) {
    // For simplicity reasons we will just use character codes sum of all characters of the key
    // to calculate the hash.
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );
    // Reduce hash number so it would fit hash table size.
    return hash % this.buckets.length;
  }
  set(key: string, value: any) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketList: Node[] = this.buckets[keyHash];
    const node = bucketList.find((element) => element.key === key);

    if (!node) {
      // Insert new node.
      bucketList.push({ key, value });
    } else {
      // Update value of existing node.
      node.value = value;
    }
  }
  /**
   * @param {string} key
   * @return {*}
   */
  delete(key: string) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketList: Node[] = this.buckets[keyHash];
    const nodeIndex = bucketList.findIndex((element) => element.key === key);
    if (nodeIndex > -1) {
      return bucketList.splice(nodeIndex, 1);
    }
    return null;
  }
  /**
   * @param {string} key
   * @return {*}
   */
  get(key: string) {
    const bucketList: Node[] = this.buckets[this.hash(key)];
    const node = bucketList.find((element) => element.key === key);

    return node ? node.value : undefined;
  }
  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key: string) {
    return Object.hasOwnProperty.call(this.keys, key);
  }
}
