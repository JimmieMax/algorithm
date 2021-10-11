import depthFirstSearch from "./depthFirstSearch";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("depthFirstSearch", () => {
  it("should depthFirstSearch", () => {
    const data = [
        {
            value: 'a',
            children: [
                { value: 'b', children: [{ value: 'e' }] },
                { value: 'c', children: [{ value: 'f' }] },
                { value: 'd', children: [{ value: 'g' }] },
            ],
        },
        {
            value: 'a2',
            children: [
                { value: 'b2', children: [{ value: 'e2' }] },
                { value: 'c2', children: [{ value: 'f2' }] },
                { value: 'd2', children: [{ value: 'g2' }] },
            ],
        }
    ]

    expect(depthFirstSearch(data)).to.eql([]);
    // expect(trie.root.toString()).toBe('*:c');
    // expect(trie.root.getChild('c').toString()).toBe('c:a');
    // expect(trie.root.getChild('c').getChild('a').toString()).toBe('a:t,r');
    // expect(trie.root.getChild('c').getChild('a').getChild('t').toString()).toBe('t*');
  });
});
