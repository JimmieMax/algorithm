interface Used {
  [key: number]: boolean;
}

export default function permute(nums: number[]) {
  const used: Used = {};
  const result: number[][] = [];
  const path: number[] = [];
  function backtracking() {
    if (path.length == nums.length) {
      result.push([...path]); // 拷贝一份path，加入解集res
      return; // 结束当前递归分支
    }
    for (const num of nums) {
      if (used[num]) continue; // 使用过的，跳过
      path.push(num); // 选择当前的数，加入path
      used[num] = true; // 记录一下 使用了
      backtracking(); // 基于选了当前的数，递归
      path.pop(); // 上一句的递归结束，回溯，将最后选的数pop出来
      used[num] = false;
    }
  }
  backtracking();
  return result;
}
