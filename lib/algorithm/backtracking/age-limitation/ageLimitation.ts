/**
 * limitRule 为不重复的规则集合
 * ages 为待匹配人的年龄
 * return 是否可以匹配
 */
interface LimitRule {
  min?: number;
  max?: number;
  maximum: number;
}
export default function canMatch(
  limitRules: LimitRule[],
  ages: number[]
): boolean {
  let matchedCount = 0;
  const ruleMap: Record<
    string,
    { minAge: number; maxAge: number; maximum: number; matched: number }
  > = {};
  debugger
  limitRules.forEach((limitRule) => {
    const { min, max, maximum } = limitRule;
    const minAge = !min ? 0 : min;
    const maxAge = !max ? Infinity : max;
    const ruleKey = `${minAge}-${maxAge}`;
    ruleMap[ruleKey] = {
      minAge,
      maxAge,
      maximum,
      matched: 0,
    };
  });
  const total = ages.length;
  function backtracking(index: number) {
    if (matchedCount === total) {
      return;
    }
    const currentAge = ages[index];
    for (const ruleKey in ruleMap) {
      const rule = ruleMap[ruleKey];
      const { minAge, maxAge, maximum, matched } = rule;
      if (currentAge >= minAge && currentAge <= maxAge && maximum > matched) {
        rule.matched++;
        matchedCount++;
        backtracking(index + 1);
        if(matchedCount === total) return;
        rule.matched--;
        matchedCount--;
      }
    }
  }
  backtracking(0);
  return matchedCount === total;
}
