import depthFirstSearch from "./depthFirstSearch";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("depthFirstSearch", () => {
  it("should depthFirstSearch", () => {
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

    expect(depthFirstSearch(data)).to.eql([
      "a",
      "b",
      "e",
      "c",
      "f",
      "d",
      "g",
      "a2",
      "b2",
      "e2",
      "c2",
      "f2",
      "d2",
      "g2",
    ]);
  });
});
