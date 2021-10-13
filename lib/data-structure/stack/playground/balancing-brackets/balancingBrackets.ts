/**
 * BalancingBrackets use the data structure of Stack
 * @keywords [Stack]
 * @param textWithBrackets
 * @returns {boolean}
 */
export default function balancingBrackets(textWithBrackets: string) {
  const leftBrackets = "([{";
  const rightBrackets = ")]}";
  let i = 0;
  let brackets = "";
  while (i <= textWithBrackets.length) {
    const currentString = textWithBrackets[i];
    if (leftBrackets.includes(currentString)) {
      brackets += currentString;
    } else if (rightBrackets.includes(currentString)) {
      const lastBracket = brackets[brackets.length - 1];
      if (
        leftBrackets.indexOf(lastBracket) ===
          rightBrackets.indexOf(currentString) &&
        brackets.length
      ) {
        brackets = brackets.slice(0, brackets.length - 1);
      } else {
        return false;
      }
    }
    i++;
  }
  if (brackets.length) {
    return false;
  } else {
    return true;
  }
}
