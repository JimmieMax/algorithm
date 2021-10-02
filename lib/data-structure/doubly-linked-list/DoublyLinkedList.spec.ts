import DoublyLinkedList from "./DoublyLinkedList";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("DoublyLinkedList", () => {
  it("should create empty linked list", () => {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.head).to.be.null;
  });

  it("should append node to linked list", () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.head).to.be.null;
    expect(linkedList.tail).to.be.null;

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.head?.next?.value).to.eql(2);
    expect(linkedList.tail?.previous?.value).to.eql(1);
    expect(linkedList.getValues()).to.eql([1, 2]);
  });

  it("should prepend node to linked list", () => {
    const linkedList = new DoublyLinkedList();

    linkedList.prepend(2);
    expect(linkedList.head?.value).to.eql(2);
    expect(linkedList.tail?.value).to.eql(2);

    linkedList.append(1);
    linkedList.prepend(3);

    expect(linkedList.head?.next?.next?.previous).to.eql(linkedList.head?.next);
    expect(linkedList.tail?.previous?.next).to.eql(linkedList.tail);
    expect(linkedList.tail?.previous?.value).to.eql(2);
    expect(linkedList.getValues()).to.eql([3, 2, 1]);
  });

  it("should create linked list from array", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

    expect(linkedList.getValues()).to.eql([1, 1, 2, 3, 3, 3, 4, 5]);
  });

  it("should delete node by value from linked list", () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.delete(5)).to.be.null;

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.head?.value).to.eql(1);
    expect(linkedList.tail?.value).to.eql(5);

    const deletedNode = linkedList.delete(3);
    expect(deletedNode?.value).to.eql(3);
    expect(linkedList.tail?.previous?.previous?.value).to.eql(2);
    expect(linkedList.getValues()).to.eql([1, 1, 2, 4, 5]);

    linkedList.delete(3);
    expect(linkedList.getValues()).to.eql([1, 1, 2, 4, 5]);

    linkedList.delete(1);
    expect(linkedList.getValues()).to.eql([2, 4, 5]);

    expect(linkedList.head?.value).to.equal(2);
    expect(linkedList.head?.next?.next).to.eql(linkedList.tail);
    expect(linkedList.tail?.previous?.previous).to.eql(linkedList.head);
    expect(linkedList.tail?.value).to.equal(5);

    linkedList.delete(5);
    expect(linkedList.getValues()).to.eql([2, 4]);

    expect(linkedList.head?.value).to.equal(2);
    expect(linkedList.tail?.value).to.equal(4);

    linkedList.delete(4);
    expect(linkedList.getValues()).to.eql([2]);

    expect(linkedList.head?.value).to.equal(2);
    expect(linkedList.tail?.value).to.equal(2);
    expect(linkedList.head).to.eql(linkedList.tail);

    linkedList.delete(2);
    expect(linkedList.getValues()).to.eql([]);
  });

  it("should delete linked list tail", () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.deleteTail()).to.be.null;

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head?.value).to.equal(1);
    expect(linkedList.tail?.value).to.equal(3);

    const deletedNode1 = linkedList.deleteTail();

    expect(deletedNode1?.value).to.eql(3);
    expect(linkedList.getValues()).to.eql([1, 2]);
    expect(linkedList.head?.value).to.equal(1);
    expect(linkedList.tail?.value).to.equal(2);

    const deletedNode2 = linkedList.deleteTail();

    expect(deletedNode2?.value).to.eql(2);
    expect(linkedList.getValues()).to.eql([1]);
    expect(linkedList.head?.value).to.equal(1);
    expect(linkedList.tail?.value).to.equal(1);

    const deletedNode3 = linkedList.deleteTail();

    expect(deletedNode3?.value).to.eql(1);
    expect(linkedList.getValues()).to.eql([]);
    expect(linkedList.head).to.be.null;
    expect(linkedList.tail).to.be.null;
  });

  it("should delete linked list head", () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.deleteHead()).to.be.null;

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.head?.value).to.equal(1);
    expect(linkedList.tail?.value).to.equal(2);

    const deletedNode1 = linkedList.deleteHead();

    expect(deletedNode1?.value).to.eql(1);
    expect(linkedList.head?.previous).to.be.null;
    expect(linkedList.getValues()).to.eql([2]);
    expect(linkedList.head?.value).to.equal(2);
    expect(linkedList.tail?.value).to.equal(2);

    const deletedNode2 = linkedList.deleteHead();

    expect(deletedNode2?.value).to.eql(2);
    expect(linkedList.getValues()).to.eql([]);
    expect(linkedList.head).to.be.null;
    expect(linkedList.tail).to.be.null;
  });

  it("should be possible to store objects in the list and to print them out", () => {
    const linkedList = new DoublyLinkedList();

    const nodeValue1 = {
      value: 1,
      key: "key1",
    };
    const nodeValue2 = {
      value: 2,
      key: "key2",
    };

    linkedList.append(nodeValue1).prepend(nodeValue2);
    expect(linkedList.getValues()).to.eql([
      {
        value: 2,
        key: "key2",
      },
      {
        value: 1,
        key: "key1",
      },
    ]);
  });

  it("should find node by value", () => {
    const linkedList = new DoublyLinkedList();

    expect(
      linkedList.find({
        value: 5,
      })
    ).to.be.null;

    linkedList.append(1);
    expect(linkedList.find(1)?.value).to.eql(1);

    linkedList.append(2).append(3);

    expect(
      linkedList.find({
        value: 5,
      })
    ).to.be.null;
  });

  it("should reverse linked list", () => {
    const linkedList = new DoublyLinkedList();

    // Add test values to linked list.
    linkedList.append(1).append(2).append(3).append(4);

    expect(linkedList.getValues()).to.eql([1, 2, 3, 4]);
    expect(linkedList.head?.value).to.eql(1);
    expect(linkedList.tail?.value).to.eql(4);

    // Reverse linked list.
    linkedList.reverse();

    expect(linkedList.getValues()).to.eql([4, 3, 2, 1]);

    expect(linkedList.head?.previous).to.be.null;
    expect(linkedList.head?.value).to.eql(4);
    expect(linkedList.head?.next?.value).to.eql(3);
    expect(linkedList.head?.next?.next?.value).to.eql(2);
    expect(linkedList.head?.next?.next?.next?.value).to.eql(1);

    expect(linkedList.tail?.next).to.be.null;
    expect(linkedList.tail?.value).to.eql(1);
    expect(linkedList.tail?.previous?.value).to.eql(2);
    expect(linkedList.tail?.previous?.previous?.value).to.eql(3);
    expect(linkedList.tail?.previous?.previous?.previous?.value).to.eql(4);

    // Reverse linked list back to initial state.
    linkedList.reverse();

    expect(linkedList.getValues()).to.eql([1, 2, 3, 4]);

    expect(linkedList.head?.previous).to.be.null;
    expect(linkedList.head?.value).to.eql(1);
    expect(linkedList.head?.next?.value).to.eql(2);
    expect(linkedList.head?.next?.next?.value).to.eql(3);
    expect(linkedList.head?.next?.next?.next?.value).to.eql(4);

    expect(linkedList.tail?.next).to.be.null;
    expect(linkedList.tail?.value).to.eql(4);
    expect(linkedList.tail?.previous?.value).to.eql(3);
    expect(linkedList.tail?.previous?.previous?.value).to.eql(2);
    expect(linkedList.tail?.previous?.previous?.previous?.value).to.eql(1);
  });
});
