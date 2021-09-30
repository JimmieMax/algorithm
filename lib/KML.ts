export default class KMP {
    public readonly pattern: string;
    public next: number[];

    constructor(pattern: string) {
        this.pattern = pattern;
        this.next = this.calNext(pattern);
    }
    /**
     * 计算字符串的next数组
     * @param {*} pattern 模式字符串
     * @returns next数组，next数组的值对应模式字符串中从0到m各个子字符串中的相同无重叠的最大前、后缀子字符串
     */
     private calNext(pattern: string) {
        const M = pattern.length;
        const next: number[] = [];
        next[0] = -1; // 第一个子字符串只有一个字符，不存在相同前后缀子字符串
        let i = 0,
            j = -1; // j代表相同的无重叠的最大前后子字符串的长度减1，-1表示不存在相同子串
        // 构建状态转移图（稍改的更紧凑了）
        while (i < M) {
            if (j === -1) {
                i++;
                j++;
                next[i] = 0; // 初始化为0
            } else if (pattern[i] === pattern[j]) {
                i++;
                j++;
                next[i] = j;
            } else {
                i++;
                next[i] = 0;
                j = next[j]
            }
        }
        return next;
    }

    public search(text: string) {
        const next = this.next;
        const pattern = this.pattern;
        let i = 0,
            j = 0;
        let N = text.length;
        let M = pattern.length;
        while (i < N && j < M) {
            if (j === -1 || text[i] === pattern[j]) {
                i++;
                j++;
            } else {
                j = next[j];
            }
        }
        if (j === M) {
            return i - j;
        } else {
            return -1; // 未找到匹配字符
        }
    }
}
