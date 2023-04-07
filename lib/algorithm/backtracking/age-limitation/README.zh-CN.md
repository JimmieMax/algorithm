# 年龄限购

给定一个不含重复年龄限购规则的集合 limitRules 和一个年龄的集合 ，返回其是否可以满足限购规则

示例 1：

输入：canMatch([
          {
            min: 10,
            max: 20,
            maximum: 2,
          },
        ], [15])
输出：true
示例 2：

输入：canMatch([
          {
            min: 10,
            max: 30,
            maximum: 1,
          },
          {
            min: 10,
            max: 20,
            maximum: 1,
          },
        ],
        [15, 30])
输出：true
示例 3：

输入：canMatch(
        [
          {
            min: 10,
            max: 30,
            maximum: 2,
          },
          {
            min: 10,
            max: 20,
            maximum: 2,
          },
        ],
        [15, 30, 40]
      )
输出：false

提示：

limitRule.min 为该限购规则的最小年龄
limitRule.max 为该限购规则的最大年龄
limitRule.maximum 为该限购规则的最多匹配人数

时间复杂度：O(mn)
