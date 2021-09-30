export default function bruteForce(text: string, word: string) {
  let i = 0; // i 表示主串 text 中当前位置下标
  let j = 0; // j 表示子串 word 中当前位置下标
  while (i < text.length && j < word.length) {
    // i 或 j 其中一个到达尾部则终止搜索
    if (text[i] === word[j]) {
      // 若相等则继续进行下一个元素匹配
      i++;
      j++;
    } else {
      // 若匹配失败则 j 回溯到第一个元素重新匹配
      i = i - j + 1; // 将 i 重新回溯到上次匹配首位的下一个元素
      j = 0;
    }
  }
  if (j >= word.length) {
    return i - j;
  } else {
    return -1;
  }
}
