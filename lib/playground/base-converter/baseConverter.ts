/**
 * Base Converter
 * @param originalNumber 
 * @param base 
 * @returns {number} converted number
 */
export default function baseConverter(originalNumber: number, base: number) {
    if(!(base >= 1 && base <=16)) {
        return NaN;
    }
  const stack = [];
  let ret = ''; // 十六进制中需要依次对应A~F
  const digits = "0123456789ABCDEF";
  while (originalNumber > 0) {
    stack.push(originalNumber % base);
    originalNumber = Math.floor(originalNumber / base);
  }
  while (stack.length) {
    ret += digits[stack.pop() as number];
  }
  return ret;
}
