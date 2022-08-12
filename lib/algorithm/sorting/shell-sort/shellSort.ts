export default function shellSort (arr: number[]) {
	let len = arr.length,
		temp,
		gap = 1;
	console.time('希尔排序耗时');
	while (gap < len / 3) {
		//动态定义间隔序列
		gap = gap * 3 + 1;
	}
	for (gap; gap > 0; gap = Math.floor(gap / 3)) {
		for (let i = gap; i < len; i++) {
			temp = arr[i];
			let j = i - gap;
			for (; j >= 0 && arr[j] > temp; j -= gap) {
				arr[j + gap] = arr[j];
			}
			arr[j + gap] = temp;
			console.log('arr  :', arr);
		}
	}
	console.timeEnd('希尔排序耗时');
	return arr;
};