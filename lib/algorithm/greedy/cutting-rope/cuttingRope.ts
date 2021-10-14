/**
 * @param {number} num num > 1
 * @return {number}
 */
export default function cuttingRope(num: number): number {
  if (num === 2) return 1;
  if (num === 3) return 2;
  // n的含义：n能拆成的3的个数
  const n = Math.floor(num / 3);
  const remainder = num % 3;
  // n是3的倍数
  if (remainder === 0) return Math.pow(3, n);
  // n是 3k + 1，例如7。拆成3、3、1。由于有1对结果无法有贡献，所以最后的3、1换成4
  if (remainder === 1) return Math.pow(3, n - 1) * 4;
  return Math.pow(3, n) * 2;
}
