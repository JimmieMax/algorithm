/**
 * Maximum Subarray Sum
 * @param array 
 * @returns {number}
 */
export default function maximumSubarraySum(array: number[]) {
    if (array === null || array.length === 0) {
      return 0;
    }
  let maximunSum = array[0];
  let previous = array[0];
  let current = 0;
  for(let i = 1; i < array.length; i++) {
    current = Math.max(previous + array[i], array[i]);
    previous = current;
    maximunSum = Math.max(maximunSum, current)
  }
  return maximunSum;
}
