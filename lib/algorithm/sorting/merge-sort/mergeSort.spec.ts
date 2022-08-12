import mergeSort from './mergeSort'
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('mergeSort', () => {
  it('should mergeSort(numbers) to mergeSortResult', () => {
    expect(mergeSort([3, 4, 9, 0, 3])).to.deep.equal([0, 3, 3, 4, 9])
  })
})
