
export default function countingSort(array: number[]) {
  let len = array.length,
    result = [],
    countArr: number[] = [],
    max = array[0],
    min = max;
  console.time("计数排序耗时");
  for (let i = 0; i < len; i++) {
    // 获取最小，最大 值
    min = min <= array[i] ? min : array[i];
    max = max >= array[i] ? max : array[i];
    countArr[array[i]] = countArr[array[i]] ? countArr[array[i]] + 1 : 1;
  }
  console.log("countArr :", countArr);
  // 从最小值 -> 最大值,将计数逐项相加
  for (let j = min; j < max; j++) {
    countArr[j + 1] = (countArr[j + 1] || 0) + (countArr[j] || 0);
  }
  console.log("countArr 2:", countArr);
  // countArr 中,下标为 array 数值，数据为 array 数值出现次数；反向填充数据进入 result 数据
  for (let k = len - 1; k >= 0; k--) {
    // result[位置] = array 数据
    result[countArr[array[k]] - 1] = array[k];
    // 减少 countArr 数组中保存的计数
    countArr[array[k]]--;
    // console.log("array[k]:", array[k], 'countArr[array[k]] :', countArr[array[k]],)
    console.log("result:", result);
  }
  console.timeEnd("计数排序耗时");
  return result;
}
