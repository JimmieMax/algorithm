/**
 * Maximum Subarray Sum
 * @param numbers
 * @returns {number}
 */
export default function maximumSubarraySum(numbers: number[]) {
  if (numbers === null || numbers.length === 0) {
    return 0;
  }
  let maximunSum = numbers[0];
  let previous = numbers[0];
  let current = 0;
  for (let i = 1; i < numbers.length; i++) {
    current = Math.max(previous + numbers[i], numbers[i]);
    previous = current;
    maximunSum = Math.max(maximunSum, current);
  }
  return maximunSum;
}
