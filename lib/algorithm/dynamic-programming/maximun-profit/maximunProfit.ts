/**
 * 
 * @param prices 
 * @returns {number}
 */
export default function maximunProfit(prices: number[]) {
  let result = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const profit = currentPrice - minPrice;
    if (currentPrice < minPrice) minPrice = currentPrice;
    if (result < profit) result = profit;
  }
  return result;
}
