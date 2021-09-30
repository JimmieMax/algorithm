/**
 * Calculate fibonacci number at specific position using Dynamic Programming approach.
 *
 * @param n
 * @return {number}
 */
export default function fibonacci(n: number) {
  let current = 1;
  let previous = 0;
  let counter = n - 1;
  while (counter) {
    [previous, current] = [ current, current + previous]
    counter--;
  }
  return current;
}
