import climbStairs from './climbStairs'
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('climbStairs', () => {
  it('should climbStairs(number) to climbStairsResult', () => {
    expect(climbStairs(1)).to.equal(1);
    expect(climbStairs(2)).to.equal(2);
    expect(climbStairs(3)).to.equal(3);
    expect(climbStairs(4)).to.equal(5);
    expect(climbStairs(5)).to.equal(8);
    expect(climbStairs(6)).to.equal(13);
  })
})
