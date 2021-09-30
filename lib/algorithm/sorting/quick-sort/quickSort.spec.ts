import quickSort from './quickSort'
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('quickSort', () => {
  it('should quickSort(numbers) to quickSortResult', () => {
    expect(quickSort([3, 4, 9, 0, 3])).to.deep.equal([0, 3, 3, 4, 9])
  })
})
