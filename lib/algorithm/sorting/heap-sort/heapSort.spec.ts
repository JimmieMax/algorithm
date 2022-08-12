import heapSort from './heapSort'
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('heapSort', () => {
  it('should heapSort(numbers) to heapSortResult', () => {
    expect(heapSort([3, 4, 9, 0, 3])).to.deep.equal([0, 3, 3, 4, 9])
  })
})
