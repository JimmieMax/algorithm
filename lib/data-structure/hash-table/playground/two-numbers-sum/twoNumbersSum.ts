/**
 * twoNumbersSum
 * Time Complexity O(n)
 * Question Description:
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param numbers 
 * @param target 
 * @returns 
 */
 export default function twoNumbersSum(
    numbers: number[],
    target: number
  ): number[] {
    const numberMap = new Map();
    const length = numbers.length;
    for (let i = 0; i < length; i++) {
      const one = numbers[i];
      const theOther = target - one;
      if (numberMap.has(theOther)) {
        return [numberMap.get(theOther), i];
      } else {
        numberMap.set(one, i);
      }
    }
    return [];
  }
  