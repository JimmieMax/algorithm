
# Insertion Sort

## 思想

> 一般人打扑克牌，整理牌的时候，都是按牌的大小（从小到大或者从大到小）整理牌的，那每摸一张新牌，就扫描自己的牌，把新牌插入到相应的位置。
> 插入排序的工作原理：通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

## 步骤

1. 从第一个元素开始，该元素可以认为已经被排序；
2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；
3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；
4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；
5. 将新元素插入到该位置后；
6. 重复步骤 2 ~ 5。

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

## 动画

![Insertion Sort](https://camo.githubusercontent.com/43073411424d4d09258bb167a865492b41f4c478f2947fb5a9349398b085f326/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d386261313137353036333732653937652e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |