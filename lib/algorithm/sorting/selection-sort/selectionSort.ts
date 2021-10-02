export default function selectionSort(originalArray: number[]) {
  // Clone original array to prevent its modification.
  const array = [...originalArray];
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    // Find minimum element in the rest of array.
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // If new minimum element has been found then swap it with current i-th element.
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}
