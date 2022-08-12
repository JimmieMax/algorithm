import shellSort from './shellSort'
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('shellSort', () => {
  it('should shellSort(numbers) to shellSortResult', () => {
    expect(shellSort([3, 4, 9, 0, 3])).to.deep.equal([0, 3, 3, 4, 9])
  })
})
