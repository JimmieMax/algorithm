/**
 * longestPalindrome
 * Question Description
 * Given a string s, return the longest palindromic substring in s.
 * @param originalString
 * @returns
 */
export default function longestPalindrome(originalString: string) {
  if (originalString.length < 2) {
    return originalString;
  }
  let palindromicSubstring = "";
  function find(left: number, right: number) {
    while (
      left >= 0 &&
      right < originalString.length &&
      originalString[left] == originalString[right]
    ) {
      left--;
      right++;
    }
    // 注意此处left,right的值循环完后  是恰好不满足循环条件的时刻
    // 此时left到right的距离为right-left+1，但是left right两个边界不能取 所以应该取left+1到right-1的区间  长度是right-left-1
    if (right - left - 1 > palindromicSubstring.length) {
      // slice也要取[left+1,right-1]这个区间
      palindromicSubstring = originalString.slice(left + 1, right);
    }
  }
  for (let i = 0; i < originalString.length; i++) {
    // 回文子串长度是奇数
    find(i, i);
    // 回文子串长度是偶数
    find(i, i + 1);
  }
  return palindromicSubstring;
}
