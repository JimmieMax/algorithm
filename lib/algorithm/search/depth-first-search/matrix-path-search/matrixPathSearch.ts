/**
 * matrixPathSearch
 * @param {character[][]} matrix
 * @param {string} word
 * @return {boolean}
 */
export default function matrixPathSearch(matrix: string[][], word: string) {
  const row = matrix.length;
  const col = matrix[0].length;

  const dfs = function (
    i: number,
    j: number,
    matrix: string[][],
    k: number
  ): boolean {
    if (i < 0 || i >= row || j < 0 || j > col || matrix[i][j] !== word[k])
      return false; // 判断不符合条件
    if (k === word.length - 1) return true; // word遍历完了
    matrix[i][j] = ""; // 锁上，因为后续的递归是4个方向上的，无法保证上一个方向的值
    const res =
      dfs(i - 1, j, matrix, k + 1) ||
      dfs(i + 1, j, matrix, k + 1) ||
      dfs(i, j - 1, matrix, k + 1) ||
      dfs(i, j + 1, matrix, k + 1);
    matrix[i][j] = word[k]; // 恢复现场
    return res;
  };
  // 遍历整个matrix，找到初始位置点
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (dfs(i, j, matrix, 0)) return true;
    }
  }
  // 没找到
  return false;
}
