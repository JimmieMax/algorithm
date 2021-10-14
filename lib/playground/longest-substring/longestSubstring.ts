/**
 * longestSubstring
 * Question description
 * Keys: window move
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param originalString
 * @returns
 */
export default function longestSubstring(originalString: string): number {
  // 哈希集合，记录每个字符是否出现过
  const hashTable = new Set();
  const originalStringLength = originalString.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rightKey = -1,
    longestLength = 0;
  for (let i = 0; i < originalStringLength; i++) {
    if (i != 0) {
      // 左指针向右移动一格，移除一个字符
      hashTable.delete(originalString[i - 1]);
    }
    while (
      rightKey + 1 < originalStringLength &&
      !hashTable.has(originalString[rightKey + 1])
    ) {
      // 不断地移动右指针
      hashTable.add(originalString[rightKey + 1]);
      ++rightKey;
    }
    // 第 i 到 rightKey 个字符是一个极长的无重复字符子串
    longestLength = Math.max(longestLength, rightKey - i + 1);
  }
  return longestLength;
}
