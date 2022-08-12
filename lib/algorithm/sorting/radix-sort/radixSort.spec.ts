import radixSort from './radixSort'
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('radixSort', () => {
  it('should radixSort(numbers) to radixSortResult', () => {
    expect(radixSort([3, 4, 9, 0, 3])).to.deep.equal([0, 3, 3, 4, 9])
  })
})
