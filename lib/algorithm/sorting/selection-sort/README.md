# Selection Sort

## 思路

> 选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。

## 步骤

1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
3. 重复第二步，直到所有元素均排序完毕。

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

![Selection Sort](https://camo.githubusercontent.com/4666a4666d3bcd69f4fef7f3d7611173e50e6c541b3acde24e1a75da0e532c7b/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d323764646662363336656162666630332e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |           |