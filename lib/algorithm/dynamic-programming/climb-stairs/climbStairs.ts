/**
 * Climb Stairs 
 * Question descript:
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @keyword [Dynamic Programming]
 * @param n 
 * @returns {number}
 */
export default function climbStairs(n: number) {
  let current = 1;
  let previous = 1;
  let counter = n - 1;
  while (counter) {
    [previous, current] = [current, previous + current];
    counter--;
  }
  return current;
}
