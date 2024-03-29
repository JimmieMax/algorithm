# Heap Sort

## 思想

> 将初始待排序关键字序列 (R1, R2 .... Rn) 构建成大顶堆，此堆为初始的无序区；
> 将堆顶元素 R[1] 与最后一个元素 R[n] 交换，此时得到新的无序区 (R1, R2, ..... Rn-1) 和新的有序区 (Rn) ，且满足 R[1, 2 ... n-1] <= R[n]。
> 由于交换后新的堆顶 R[1] 可能违反堆的性质，因此需要对当前无序区 (R1, R2 ...... Rn-1) 调整为新堆，然后再次将 R[1] 与无序区最后一个元素交换，得到新的无序区 (R1, R2 .... Rn-2) 和新的有序区 (Rn-1, Rn)。不断重复此过程，直到有序区的元素个数为 n - 1，则整个排序过程完成。

## 动画

![Heap Sort](https://camo.githubusercontent.com/84cfe29671dfcc66fb4da136fd34b6c02ef9dc057f882a4cc19957971cc5238f/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d373934366162366566363234633138342e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Heap sort**    | n&nbsp;log(n)   | n&nbsp;log(n)      | n&nbsp;log(n)      | 1         | No        |           |