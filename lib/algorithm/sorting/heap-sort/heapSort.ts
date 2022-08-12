// 堆排序
export default function heapSort(array: number[]) {
	console.time('堆排序耗时');
	// 初始化大顶堆，从第一个非叶子结点开始
	for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
		heapify(array, i, array.length);
	}
	// 排序，每一次 for 循环找出一个当前最大值，数组长度减一
	for (let i = Math.floor(array.length - 1); i > 0; i--) {
		// 根节点与最后一个节点交换
		swap(array, 0, i);
		// 从根节点开始调整，并且最后一个结点已经为当前最大值，不需要再参与比较，所以第三个参数为 i，即比较到最后一个结点前一个即可
		heapify(array, 0, i);
	}
	console.timeEnd('堆排序耗时');
	return array;
};

// 交换两个节点
const swap = (array: number[], i: number, j: number) => {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};

// 将 i 结点以下的堆整理为大顶堆，注意这一步实现的基础实际上是：
// 假设结点 i 以下的子堆已经是一个大顶堆，heapify 函数实现的
// 功能是实际上是：找到 结点 i 在包括结点 i 的堆中的正确位置。
// 后面将写一个 for 循环，从第一个非叶子结点开始，对每一个非叶子结点
// 都执行 heapify 操作，所以就满足了结点 i 以下的子堆已经是一大顶堆
const heapify = (array: number[], i: number, length: number) => {
	let temp = array[i]; // 当前父节点
	// j < length 的目的是对结点 i 以下的结点全部做顺序调整
	for (let j = 2 * i + 1; j < length; j = 2 * j + 1) {
		temp = array[i]; // 将 array[i] 取出，整个过程相当于找到 array[i] 应处于的位置
		if (j + 1 < length && array[j] < array[j + 1]) {
			j++; // 找到两个孩子中较大的一个，再与父节点比较
		}
		if (temp < array[j]) {
			swap(array, i, j); // 如果父节点小于子节点:交换；否则跳出
			i = j; // 交换后，temp 的下标变为 j
		} else {
			break;
		}
	}
};