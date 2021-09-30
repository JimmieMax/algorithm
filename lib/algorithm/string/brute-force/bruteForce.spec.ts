import bruteForce from './bruteForce'
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('bruteForce', () => {
  it('should bruteForce(numbers) to bruteForceResult', () => {
    expect(bruteForce('ababcabcdfabcde', 'abcd')).to.equal(5);
  })
})
