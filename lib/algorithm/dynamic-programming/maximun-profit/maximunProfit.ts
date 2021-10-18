/**
 * maximunProfit
 * @param prices 
 * @returns {number}
 */
export default function maximunProfit(prices: number[]) {
  if (prices === null || prices.length < 2) {
    return 0;
  }
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const profit = currentPrice - minPrice;
    if (currentPrice < minPrice) minPrice = currentPrice;
    if (maxProfit < profit) maxProfit = profit;
  }
  return maxProfit;
}
