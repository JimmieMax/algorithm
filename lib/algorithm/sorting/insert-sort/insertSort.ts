export default function insertSort(originalArray: number[]) {
  const array = [...originalArray];
  // Go through all array elements...
  for (let i = 1; i < array.length; i++) {
    let currentIndex = i;
    // Check if previous element is greater than current element.
    // If so, swap the two elements.
    while (
      array[currentIndex - 1] !== undefined &&
      array[currentIndex] < array[currentIndex - 1]
    ) {
      // Swap the elements.
      [array[currentIndex - 1], array[currentIndex]] = [
        array[currentIndex],
        array[currentIndex - 1],
      ];
      // Shift current index left.
      currentIndex--;
    }
  }

  return array;
}
