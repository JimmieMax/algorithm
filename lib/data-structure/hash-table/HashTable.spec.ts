import HashTable from './HashTable';
import { expect } from "chai";
import { describe, it } from "mocha";

describe('HashTable', () => {
  it('should create hash table of certain size', () => {
    const defaultHashTable = new HashTable();
    expect(defaultHashTable.buckets.length).to.eql(32);

    const biggerHashTable = new HashTable(64);
    expect(biggerHashTable.buckets.length).to.eql(64);
  });

  it('should generate proper hash for specified keys', () => {
    const hashTable = new HashTable();

    expect(hashTable.hash('a')).to.eql(1);
    expect(hashTable.hash('b')).to.eql(2);
    expect(hashTable.hash('abc')).to.eql(6);
  });

  it('should set, read and delete data with collisions', () => {
    const hashTable = new HashTable(3);

    expect(hashTable.hash('a')).to.eql(1);
    expect(hashTable.hash('b')).to.eql(2);
    expect(hashTable.hash('c')).to.eql(0);
    expect(hashTable.hash('d')).to.eql(1);

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth');
    hashTable.set('d', 'ocean');

    expect(hashTable.has('x')).to.eql(false);
    expect(hashTable.has('b')).to.eql(true);
    expect(hashTable.has('c')).to.eql(true);

    expect(hashTable.get('a')).to.eql('sky');
    expect(hashTable.get('d')).to.eql('ocean');

    hashTable.delete('a');

    expect(hashTable.delete('not-existing')).to.be.null;

    expect(hashTable.get('d')).to.eql('ocean');

    hashTable.set('d', 'ocean-new');
    expect(hashTable.get('d')).to.eql('ocean-new');
  });

  it('should be possible to add objects to hash table', () => {
    const hashTable = new HashTable();

    hashTable.set('objectKey', { prop1: 'a', prop2: 'b' });

    const object = hashTable.get('objectKey');
    expect(object?.prop1).to.eql('a');
    expect(object?.prop2).to.eql('b');
  });

  it('should track actual keys', () => {
    const hashTable = new HashTable(3);

    hashTable.set('a', 'sky-old');
    hashTable.set('a', 'sky');
    hashTable.set('b', 'sea');
    hashTable.set('c', 'earth');
    hashTable.set('d', 'ocean');

    expect(hashTable.has('a')).to.eql(true);
    expect(hashTable.has('x')).to.eql(false);

    hashTable.delete('a');

    expect(hashTable.has('a')).to.eql(false);
    expect(hashTable.has('b')).to.eql(true);
    expect(hashTable.has('x')).to.eql(false);
  });
});
