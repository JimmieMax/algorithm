import knuthMorrisPratt from "./knuthMorrisPratt";
import { expect } from "chai";
import { describe, it } from "mocha";

describe('knuthMorrisPratt', () => {
  it("should knuthMorrisPratt(text, word) to knuthMorrisPrattResult", () => {
    expect(knuthMorrisPratt('', '')).to.equal(0);
    expect(knuthMorrisPratt('a', '')).to.equal(0);
    expect(knuthMorrisPratt('a', 'a')).to.equal(0);
    expect(knuthMorrisPratt('aaabc', 'aab')).to.equal(1);
    expect(knuthMorrisPratt('aaaaaaabc', 'aab')).to.equal(5);
    expect(knuthMorrisPratt('abcbcglx', 'abca')).to.equal(-1);
    expect(knuthMorrisPratt('abcxabcdabxabcdabcdabcy', 'abcdabcy')).to.equal(15);
    expect(knuthMorrisPratt('abcxabcdabxabcdabcdabcy', 'abcdabca')).to.equal(-1);
    expect(knuthMorrisPratt('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')).to.equal(12);
    expect(knuthMorrisPratt('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')).to.equal(11);
  });
})