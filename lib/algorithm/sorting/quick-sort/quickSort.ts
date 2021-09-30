export default function quickSort(originalArray: number[]): number[] {
  // Clone original array to prevent it from modification.
  const array = [...originalArray];
  // If array has less than or equal to one elements then it is already sorted.
  if (array.length <= 1) {
    return array;
  }
  // Init left and right arrays.
  const leftArray = [];
  const rightArray = [];
  // Take the first element of array as a pivot.
  const pivot = array.shift();
  const centerArray = [pivot];
  // Split all array elements between left, center and right arrays.
  while (array.length) {
    const current = array.shift();
    if (current === pivot) {
      centerArray.push(current);
    } else if ((current as number) < (pivot as number)) {
      leftArray.push(current);
    } else {
      rightArray.push(current);
    }
  }
  // Sort left and right arrays.
  const leftArraySorted = quickSort(leftArray as number[]);
  const rightArraySorted = quickSort(rightArray as number[]);
  // Let's now join sorted left array with center array and with sorted right array.
  return leftArraySorted.concat(centerArray as number[], rightArraySorted);
}
