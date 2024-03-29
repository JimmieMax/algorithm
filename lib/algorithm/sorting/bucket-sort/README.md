# Bucket Sort

## 思想

> 将要排序的数据分到有限数量的几个有序的桶里。
> 每个桶里的数据再单独进行排序（一般用插入排序或者快速排序）。
> 桶内排完序之后，再把每个桶里的数据按照顺序依次取出，组成的序列就是有序的了。

## 动画

![Bucket Sort](https://camo.githubusercontent.com/561f96bab17964846692d0dfe032c7475c5b9d96b7b23dad99ab571b746cfc3c/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d393630323161373931313830656261302e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bucket sort**    | n   | n&nbsp;log(n)      | n      | 1         | No        |           |