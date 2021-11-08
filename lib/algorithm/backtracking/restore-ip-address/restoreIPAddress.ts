/**
 * restoreIPAddress
 * Question Description:
 * Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s. You can return them in any order.
 * A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots and cannot have leading zeros. 
 * For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses. 
 * @param ipAddress 
 * @returns 
 */
export default function restoreIPAddress(ipAddress: string) {
  const results: string[] = [];
  let ipAddressLength = ipAddress.length;
  if (ipAddressLength < 4 || ipAddressLength > 12) return [];
  let combination: string[] = [];
  function backtracking(index: number) {
    if (combination.length === 4) {
      if (index === ipAddressLength) results.push(combination.join("."));
      return;
    }
    for (let subIndex = 0; subIndex < 3; subIndex++) {
      if (index + subIndex + 1 > ipAddressLength) return;
      if (subIndex > 0 && ipAddress[index] === "0") return;
      const current = ipAddress.substr(index, subIndex + 1); // 当前选择切出的片段
      if (subIndex + 1 === 3 && Number(current) > 255) return; // 不能超过255
      combination.push(current);
      backtracking(index + subIndex + 1);
      combination.pop();
    }
  }
  backtracking(0);
  return results;
}
