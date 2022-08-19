# Counting Sort

## 思想

> 找出待排序的数组中最大和最小的元素。
> 统计数组中每个值为 i 的元素出现的次数，存入新数组 countArr 的第 i 项。
> 对所有的计数累加（从 countArr 中的第一个元素开始，每一项和前一项相加）。
> 反向填充目标数组：将每个元素 i 放在新数组的第 countArr[i] 项，每放一个元素就将 countArr[i] 减去 1 。
关键在于理解最后反向填充时的操作。

## 动画

![Counting Sort](https://camo.githubusercontent.com/0fa291c15cedb28ff24528ddfcc5586f844109c7a4c42bb30f67326a23323dfa/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d343362323666323630643930356337372e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Counting sort**        | n+k   | n+k       | n+k       | log(n)    | No        |  Quicksort is usually done in-place with O(log(n)) stack space |