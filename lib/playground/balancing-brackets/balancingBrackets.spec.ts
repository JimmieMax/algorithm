import balancingBrackets from './balancingBrackets'
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('balancingBrackets', () => {
  it('should balancingBrackets(textWithBrackets) to balancingBracketsResult', () => {
    expect(balancingBrackets('{[a]}')).to.be.true;
    expect(balancingBrackets('{[a()][)]}')).to.be.false;
    expect(balancingBrackets('{c}[a](b)')).to.be.true;
  })
})
