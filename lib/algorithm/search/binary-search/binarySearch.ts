export default function binarySearch(sortedArray: number[], target: number) {
  let startIndex = 0,
    endIndex = sortedArray.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.round((startIndex + endIndex) / 2);
    if (sortedArray[middleIndex] === target) return middleIndex;
    if (sortedArray[middleIndex] > target) endIndex = middleIndex - 1;
    else startIndex = middleIndex + 1;
  }
  return -1;
}
