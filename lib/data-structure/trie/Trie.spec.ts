import Trie from './Trie';
import { expect } from "chai";
import { describe, it } from "mocha";

describe('Trie', () => {

  it('should add words to trie', () => {
    const trie = new Trie();

    trie.add('cat');

    expect(trie.root.keys.has('c')).to.be.true;
    expect(trie.root.keys.get('c').keys.has('a')).to.be.true;

    trie.add('car');
    // expect(trie.root.toString()).toBe('*:c');
    // expect(trie.root.getChild('c').toString()).toBe('c:a');
    // expect(trie.root.getChild('c').getChild('a').toString()).toBe('a:t,r');
    // expect(trie.root.getChild('c').getChild('a').getChild('t').toString()).toBe('t*');
  });

//   it('should delete words from trie', () => {
//     const trie = new Trie();

//     trie.add('carpet');
//     trie.add('car');
//     trie.add('cat');
//     trie.add('cart');
//     expect(trie.doesExist('carpet')).to.be.true;;
//     expect(trie.doesExist('car')).to.be.true;;
//     expect(trie.doesExist('cart')).to.be.true;;
//     expect(trie.doesExist('cat')).to.be.true;;

//     // Try to delete not-existing word first.
//     trie.deleteWord('carpool');
//     expect(trie.doesExist('carpet')).to.be.true;;
//     expect(trie.doesExist('car')).to.be.true;;
//     expect(trie.doesExist('cart')).to.be.true;;
//     expect(trie.doesExist('cat')).to.be.true;;

//     trie.deleteWord('carpet');
//     expect(trie.doesExist('carpet')).toEqual(false);
//     expect(trie.doesExist('car')).toEqual(true);
//     expect(trie.doesExist('cart')).to.be.true;;
//     expect(trie.doesExist('cat')).to.be.true;;

//     trie.deleteWord('cat');
//     expect(trie.doesExist('car')).toEqual(true);
//     expect(trie.doesExist('cart')).to.be.true;;
//     expect(trie.doesExist('cat')).toBe(false);

//     trie.deleteWord('car');
//     expect(trie.doesExist('car')).toEqual(false);
//     expect(trie.doesExist('cart')).to.be.true;;

//     trie.deleteWord('cart');
//     expect(trie.doesExist('car')).toEqual(false);
//     expect(trie.doesExist('cart')).toBe(false);
//   });

//   it('should suggests next characters', () => {
//     const trie = new Trie();

//     trie.add('cat');
//     trie.add('cats');
//     trie.add('car');
//     trie.add('caption');

//     expect(trie.suggestNextCharacters('ca')).toEqual(['t', 'r', 'p']);
//     expect(trie.suggestNextCharacters('cat')).toEqual(['s']);
//     expect(trie.suggestNextCharacters('cab')).toBeNull();
//   });

  it('should check if word exists', () => {
    const trie = new Trie();

    trie.add('cat');
    trie.add('cats');
    trie.add('carpet');
    trie.add('car');
    trie.add('caption');

    expect(trie.doesExist('cat')).to.be.true;;
    expect(trie.doesExist('cats')).to.be.true;;
    expect(trie.doesExist('carpet')).to.be.true;;
    expect(trie.doesExist('car')).to.be.true;;
    expect(trie.doesExist('cap')).to.be.false;
    expect(trie.doesExist('call')).to.be.false;
  });
});
