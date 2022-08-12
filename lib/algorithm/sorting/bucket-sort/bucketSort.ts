import quickSort from "../quick-sort/quickSort";
// 桶排序
export default function bucketSort(array: number[], bucketSize?: number): number[] {
  if (array.length === 0) {
    return array;
  }

  console.time("桶排序耗时");
  let i = 0;
  let minValue = array[0];
  let maxValue = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]; //输入数据的最小值
    } else if (array[i] > maxValue) {
      maxValue = array[i]; //输入数据的最大值
    }
  }

  //桶的初始化
  const DEFAULT_BUCKET_SIZE = 5; //设置桶的默认数量为 5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  //利用映射函数将数据分配到各个桶中
  for (i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }

  array.length = 0;
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = quickSort(buckets[i]); //对每个桶进行排序，这里使用了快速排序
    for (var j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j]);
    }
  }
  console.timeEnd("桶排序耗时");

  return array;
};