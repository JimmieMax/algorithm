import { expect } from "chai";
import { describe, it } from "mocha";
import LinkedListNode from "../../LinkedListNode";
import LinkedList from "../../LinkedList";
import twoNumbersSum from "./twoNumbersSum";

describe("LinkedListNode: twoNumbersSum", () => {
  it("should twoNumbersSum([2,4,3], [5,6,4])", () => {
    const l1 = new LinkedList();
    l1.append(2);
    l1.append(4);
    l1.append(3);
    const l2 = new LinkedList();
    l2.append(5);
    l2.append(6);
    l2.append(4);
    const sumListHead = twoNumbersSum(
      l1.head as LinkedListNode,
      l2.head as LinkedListNode
    );
    expect(sumListHead.value).to.equal(7);
    expect(sumListHead.next?.value).to.equal(0);
    expect(sumListHead.next?.next?.value).to.equal(8);
  });
  it("should twoNumbersSum([9,9,9,9], [9,9])", () => {
    const l1 = new LinkedList();
    l1.append(9);
    l1.append(9);
    l1.append(9);
    l1.append(9);
    const l2 = new LinkedList();
    l2.append(9);
    l2.append(9);
    const sumListHead = twoNumbersSum(
      l1.head as LinkedListNode,
      l2.head as LinkedListNode
    );
    expect(sumListHead.value).to.equal(8);
    expect(sumListHead.next?.value).to.equal(9);
    expect(sumListHead.next?.next?.value).to.equal(0);
    expect(sumListHead.next?.next?.next?.value).to.equal(0);
    expect(sumListHead.next?.next?.next?.next?.value).to.equal(1);
  });
});
