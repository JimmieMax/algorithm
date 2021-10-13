import breadthFirstSearch from "./breadthFirstSearch";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("breadthFirstSearch", () => {
  it("should breadthFirstSearch", () => {
    const data = [
      {
        value: "a",
        children: [
          { value: "b", children: [{ value: "e" }] },
          { value: "c", children: [{ value: "f" }] },
          { value: "d", children: [{ value: "g" }] },
        ],
      },
      {
        value: "a2",
        children: [
          { value: "b2", children: [{ value: "e2" }] },
          { value: "c2", children: [{ value: "f2" }] },
          { value: "d2", children: [{ value: "g2" }] },
        ],
      },
    ];

    expect(breadthFirstSearch(data)).to.eql([
      "a",
      "a2",
      "b",
      "c",
      "d",
      "b2",
      "c2",
      "d2",
      "e",
      "f",
      "g",
      "e2",
      "f2",
      "g2",
    ]);
  });
});
