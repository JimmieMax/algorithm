import { expect } from "chai";
import { describe, it } from "mocha";
import { maxDeath, TreeNode } from "../lib/BinaryTree";
import KML from "../lib/KML";
// import { ListNode, LinkList } from "../lib/LinkList";

describe("KML", () => {
  const kmp = new KML("aaaca");
  it("kmp.next.toString() should return '-1, 0, 1, 2, 0, 2'", () => {
    expect(kmp.next.toString()).to.equal([-1, 0, 1, 2, 0, 2].toString());
  });
  it("kmp.search('caaaaabddasd') should return 3", () => {
    expect(kmp.search("caaaaacabddasd")).to.equal(3);
  });
});

// describe("Link List", () => {
//   const linkList = new LinkList();
//   linkList.insert("World", "head");
//   linkList.insert("!", "World");
//   linkList.insert("Hello", "head");
//   it("linkList.findByIndex(0) as ListNode).data should return 'head'", () => {
//     expect((linkList.findByIndex(0) as ListNode).data).to.equal('head');
//   });
//   it("linkList.findByValue('Hello') as ListNode).nextshould return linkList.findByValue('World')", () => {
//     expect((linkList.findByValue('Hello') as ListNode).next).to.equal(linkList.findByValue('World'));
//   });
//   it("linkList.listLength() return 3", () => {
//     expect(linkList.listLength()).to.equal(3);
//   });
//   it("linkList.findByValue('World') as ListNode).data should return 'World'", () => {
//     expect((linkList.findByValue('World') as ListNode).data).to.equal('World');
//     describe('Link List:delete', () => {
//       linkList.delete('World');
//       it("linkList.findByValue('World') should return -1", () => {
//         expect(linkList.findByValue('World')).to.equal(-1);
//       });
//     })
//   });
// });

describe("Binary Tree", () => {
  const treeNode = new TreeNode(1);
  treeNode.left = new TreeNode(2);
  treeNode.right = new TreeNode(0);
  it("maxDeath(treeNode) should return 2", () => {
    expect(maxDeath(treeNode)).to.equal(2);
  });
});