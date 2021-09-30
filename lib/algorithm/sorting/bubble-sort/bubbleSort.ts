export default function bubbleSort(originalArray: number[]) {
  const array = [...originalArray];
  const arrayLength = array.length;
  for (let outer = arrayLength; outer >= 2; outer--) {
    for (let inner = 0; inner <= outer - 1; inner++) {
      if (array[inner] > array[inner + 1]) {
        [array[inner], array[inner + 1]] = [array[inner + 1], array[inner]];
      }
    }
  }
  return array;
}
