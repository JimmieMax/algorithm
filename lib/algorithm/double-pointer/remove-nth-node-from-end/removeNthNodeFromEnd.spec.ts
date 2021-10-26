import removeNthNodeFromEnd from "./removeNthNodeFromEnd";
import { expect } from "chai";
import { describe, it } from "mocha";
import LinkedList from "../../../data-structure/linked-list/LinkedList";
import LinkedListNode from "../../../data-structure/linked-list/LinkedListNode";

describe("Double Pointer: removeNthNodeFromEnd", () => {
  it("should removeNthNodeFromEnd(head, n) to removeNthNodeFromEndResult", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    const newLinkedListHead = removeNthNodeFromEnd(
      linkedList?.head as LinkedListNode,
      2
    );
    expect(newLinkedListHead?.value).to.equal(1);
    expect(newLinkedListHead?.next?.value).to.equal(2);
    expect(newLinkedListHead?.next?.next?.value).to.equal(3);
    expect(newLinkedListHead?.next?.next?.next?.value).to.equal(5);
  });
});
