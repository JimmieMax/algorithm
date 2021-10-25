interface PhoneLetter {
  [key: string]: string;
}
/**
 * Letter Combinations of a Phone Number
 * Question Description
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 * @param digits 
 * @returns 
 */
export default function letterCombinations(digits: string) {
  if (digits.length == 0) return [];
  const result: string[] = [];
  const map: PhoneLetter = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };
  const digitsLength = digits.length;
  if (!digitsLength) return [];
  if (digitsLength === 1) return map[digits].split("");
  let combination = "";
  function backtracking(index: number) {
    if (combination.length === digitsLength) {
      result.push(combination);
      return;
    }
    for (const letter of map[digits[index]]) {
      combination += letter;
      backtracking(index + 1);
      combination = combination.substr(0, combination.length - 1);
    }
  }
  backtracking(0);
  return result;
}
