import countingSort from './countingSort'
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('countingSort', () => {
  it('should countingSort(numbers) to countingSortResult', () => {
    expect(countingSort([3, 4, 9, 0, 3])).to.deep.equal([0, 3, 3, 4, 9])
  })
})
