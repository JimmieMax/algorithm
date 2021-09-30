import LinkedList from "./LinkedList";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("LinkedList", () => {
  it("should append node to linked list", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).to.be.null;
    expect(linkedList.tail).to.be.null;
    linkedList.append(1);
    expect(linkedList.tail?.next).to.be.null;
  });

  it("should prepend node to linked list", () => {
    const linkedList = new LinkedList();
    linkedList.prepend(2);
    expect(linkedList.head?.value).to.equal(2);
    expect(linkedList.tail?.value).to.equal(2);
  });

  it("should delete node by value from linked list", () => {
    const linkedList = new LinkedList();

    expect(linkedList.delete(5)).to.be.null;

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.head?.value).to.equal(1);
    expect(linkedList.tail?.value).to.equal(5);

    const deletedNode = linkedList.delete(3);
    expect(deletedNode?.value).to.equal(3);
    expect(linkedList.toString()).to.equal("1,1,2,4,5");

    linkedList.delete(3);
    expect(linkedList.toString()).to.equal("1,1,2,4,5");

    linkedList.delete(1);
    expect(linkedList.toString()).to.equal("2,4,5");

    expect(linkedList.head?.value).to.equal(2);
    expect(linkedList.tail?.value).to.equal(5);

    linkedList.delete(5);
    expect(linkedList.toString()).to.equal("2,4");

    expect(linkedList.head?.value).to.equal(2);
    expect(linkedList.tail?.value).to.equal(4);

    linkedList.delete(4);
    expect(linkedList.toString()).to.equal("2");

    expect(linkedList.head?.value).to.equal(2);
    expect(linkedList.tail?.value).to.equal(2);

    linkedList.delete(2);
    expect(linkedList.toString()).to.equal("");
  });

  it("should delete linked list tail", () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head?.value).to.equal(1);
    expect(linkedList.tail?.value).to.equal(3);

    const deletedNode1 = linkedList.deleteTail();

    expect(deletedNode1?.value).to.equal(3);
    expect(linkedList.toString()).to.equal("1,2");
    expect(linkedList.head?.value).to.equal(1);
    expect(linkedList.tail?.value).to.equal(2);

    const deletedNode2 = linkedList.deleteTail();

    expect(deletedNode2?.value).to.equal(2);
    expect(linkedList.toString()).to.equal("1");
    expect(linkedList.head?.value).to.equal(1);
    expect(linkedList.tail?.value).to.equal(1);

    const deletedNode3 = linkedList.deleteTail();

    expect(deletedNode3?.value).to.equal(1);
    expect(linkedList.toString()).to.equal("");
    expect(linkedList.head).to.be.null;
    expect(linkedList.tail).to.be.null;
  });

  it("should delete linked list head", () => {
    const linkedList = new LinkedList();

    expect(linkedList.deleteHead()).to.be.null;

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.head?.value).to.equal(1);
    expect(linkedList.tail?.value).to.equal(2);

    const deletedNode1 = linkedList.deleteHead();

    expect(deletedNode1?.value).to.equal(1);
    expect(linkedList.toString()).to.equal("2");
    expect(linkedList.head?.value).to.equal(2);
    expect(linkedList.tail?.value).to.equal(2);

    const deletedNode2 = linkedList.deleteHead();

    expect(deletedNode2?.value).to.equal(2);
    expect(linkedList.toString()).to.equal("");
    expect(linkedList.head).to.be.null;
    expect(linkedList.tail).to.be.null;
  });

  it("should find node by value", () => {
    const linkedList = new LinkedList();

    expect(linkedList.find(5)).to.be.null;

    linkedList.append(1);
    expect(linkedList.find(1)).to.exist;
    const data = { count: 3 };
    linkedList.append(2).append(data);

    const node = linkedList.find(2);

    expect(node?.value).to.equal(2);
    expect(linkedList.find(data)?.value).to.deep.equal({ count: 3 });
  });

  //   it("should find node by callback", () => {
  //     const linkedList = new LinkedList();

  //     linkedList
  //       .append({ value: 1, key: "test1" })
  //       .append({ value: 2, key: "test2" })
  //       .append({ value: 3, key: "test3" });

  //     const node = linkedList.find({
  //       callback: (value) => value.key === "test2",
  //     });

  //     expect(node).to.equalDefined();
  //     expect(node.value.value).to.equal(2);
  //     expect(node.value.key).to.equal("test2");
  //     expect(
  //       linkedList.find({ callback: (value) => value.key === "test5" })
  //     ).to.be.null;
  //   });

    it("should create linked list from array", () => {
      const linkedList = new LinkedList();
      linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

      expect(linkedList.toString()).to.equal("1,1,2,3,3,3,4,5");
    });

  //   it("should find node by means of custom compare function", () => {
  //     const comparatorFunction = (a, b) => {
  //       if (a.customValue === b.customValue) {
  //         return 0;
  //       }

  //       return a.customValue < b.customValue ? -1 : 1;
  //     };

  //     const linkedList = new LinkedList(comparatorFunction);

  //     linkedList
  //       .append({ value: 1, customValue: "test1" })
  //       .append({ value: 2, customValue: "test2" })
  //       .append({ value: 3, customValue: "test3" });

  //     const node = linkedList.find({
  //       value: { value: 2, customValue: "test2" },
  //     });

  //     expect(node).to.equalDefined();
  //     expect(node.value.value).to.equal(2);
  //     expect(node.value.customValue).to.equal("test2");
  //     expect(linkedList.find({ value: 2, customValue: "test5" })).to.be.null;
  //   });

  //   it("should find preferring callback over compare function", () => {
  //     const greaterThan = (value, compareTo) => (value > compareTo ? 0 : 1);

  //     const linkedList = new LinkedList(greaterThan);
  //     linkedList.fromArray([1, 2, 3, 4, 5]);

  //     let node = linkedList.find({ value: 3 });
  //     expect(node.value).to.equal(4);

  //     node = linkedList.find({ callback: (value) => value < 3 });
  //     expect(node.value).to.equal(1);
  //   });

    it("should convert to array", () => {
      const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      expect(linkedList.toArray().join(",")).to.equal("1,2,3");
    });

    it("should reverse linked list", () => {
      const linkedList = new LinkedList();

      // Add test values to linked list.
      linkedList.append(1).append(2).append(3);

      expect(linkedList.toString()).to.equal("1,2,3");
      expect(linkedList.head?.value).to.equal(1);
      expect(linkedList.tail?.value).to.equal(3);

      // Reverse linked list.
      linkedList.reverse();
      expect(linkedList.toString()).to.equal("3,2,1");
      expect(linkedList.head?.value).to.equal(3);
      expect(linkedList.tail?.value).to.equal(1);

      // Reverse linked list back to initial state.
      linkedList.reverse();
      expect(linkedList.toString()).to.equal("1,2,3");
      expect(linkedList.head?.value).to.equal(1);
      expect(linkedList.tail?.value).to.equal(3);
    });
});
