import BinarySearchTree from './BinarySearchTree';
import { expect } from "chai";
import { describe, it } from "mocha";

describe('BinarySearchTree', () => {
  it('should create binary search tree', () => {
    const bst = new BinarySearchTree();

    expect(bst.root).to.be.null;
  });

  it('should insert values', () => {
    const bst = new BinarySearchTree();

    const insertedNode1 = bst.insert(10);
    const insertedNode2 = bst.insert(20);
    bst.insert(5);

    // expect(bst.toString()).to.equal('5,10,20');
    expect(insertedNode1.value).to.equal(10);
    expect(insertedNode2.value).to.equal(20);
  });

  it('should find values', () => {
    const bst = new BinarySearchTree();

    const insertedNode10 = bst.insert(10);
    const insertedNode20 = bst.insert(20);
    const insertedNode5 = bst.insert(5);

    expect(bst.find(10)).to.eql(insertedNode10);
    expect(bst.find(20)).to.eql(insertedNode20);
    expect(bst.find(5)).to.eql(insertedNode5);
  });

  it('should findMin/findMax', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    const insertedNode20 = bst.insert(20);
    const insertedNode5 = bst.insert(5);

    expect(bst.findMin()).to.eql(insertedNode5);
    expect(bst.findMax()).to.eql(insertedNode20);
  });
  it('should remove nodes', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(11);
    bst.insert(4);
    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.findMin().value).to.equal(4);

    bst.remove(4);
    expect(bst.findMin().value).to.equal(5);

    expect(bst.findMax().value).to.equal(20);
    bst.remove(20);
    expect(bst.findMax()?.value).to.equal(11);
  });

  it('should max depth', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(-10);
    bst.insert(20);
    bst.insert(-20);
    bst.insert(25);
    bst.insert(6);

    expect(bst.maxDepth()).to.equal(3);

    bst.insert(4);
    expect(bst.maxDepth()).to.equal(4);
  });

  it('should min depth', () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(-10);
    bst.insert(20);
    bst.insert(-20);
    bst.insert(6);

    expect(bst.minDepth()).to.equal(2);

    bst.remove(20);
    expect(bst.minDepth()).to.equal(1);
  });
});
