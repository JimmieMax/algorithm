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
interface AgeItem {
  total: number;
  matched: number;
  matchedRules: RuleItem[];
}
interface RuleItem {
  rule: LimitRule;
  matched: number;
  matchedAges: AgeItem[];
}
function getRuleMatchedQueue(limitRules: LimitRule[], ages: number[]) {
  const queue: RuleItem[] = [];
  const ageMap: Record<string, AgeItem> = {};
  ages.forEach((age) => {
    const ageItem = ageMap[age];
    if (ageItem) {
      ageItem.total++;
    } else {
      ageMap[age] = {
        total: 1,
        matched: 0,
        matchedRules: [],
      };
    }
  });
  const ruleMap: Record<string, RuleItem> = {};
  limitRules.forEach((limitRule) => {
    const { min, max } = limitRule;
    const minAge = !min ? 0 : min;
    const maxAge = !max ? Infinity : max;
    const ruleKey = `${minAge}-${maxAge}`;
    const matchedAges: AgeItem[] = [];
    ruleMap[ruleKey] = {
      rule: limitRule,
      matched: 0,
      matchedAges,
    };
    Object.keys(ageMap).forEach((age) => {
      const ageItem = ageMap[age];
      const currentAge = Number(age);
      if (currentAge >= minAge && currentAge <= maxAge) {
        ageItem.matchedRules.push(ruleMap[ruleKey]);
        matchedAges.push(ageItem);
      }
    });
    queue.push(ruleMap[ruleKey]);
  });
  return queue.sort((a, b) => a.matchedAges.length - b.matchedAges.length);
}

export default function canMatch(
  limitRules: LimitRule[],
  ages: number[]
): boolean {
  if (limitRules.length === 0) return false;
  const matchedQueue = getRuleMatchedQueue(limitRules, ages);
  let matchedCount = 0;
  matchedQueue.forEach((ruleItem) => {
    const { matchedAges, rule } = ruleItem;
    const filterMatchedAges: AgeItem[] = [];
    matchedAges.forEach((age) => {
      age.matchedRules = age.matchedRules.filter(
        (ruleItem) => ruleItem.rule.maximum > ruleItem.matched
      );
      if (age.matchedRules.length > 0) {
        filterMatchedAges.push(age);
      }
    });
    filterMatchedAges
      .sort((a, b) => a.matchedRules.length - b.matchedRules.length)
      .forEach((age) => {
        const rest = rule.maximum - ruleItem.matched;
        const toMatch = age.total - age.matched;
        if (rest > 0 && toMatch > 0) {
          const less = rest >= toMatch ? toMatch : rest;
          ruleItem.matched += less;
          age.matched += less;
          matchedCount += less;
        }
      });
  });
  return matchedCount === ages.length;
}
