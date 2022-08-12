import bucketSort from './bucketSort'
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('bucketSort', () => {
  it('should bucketSort(numbers) to bucketSortResult', () => {
    expect(bucketSort([3, 4, 9, 0, 3])).to.deep.equal([0, 3, 3, 4, 9])
  })
})
