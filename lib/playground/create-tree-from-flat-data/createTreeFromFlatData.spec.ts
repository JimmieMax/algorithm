import createTreeFromFlatData from "./createTreeFromFlatData";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("createTreeFromFlatData", () => {
  it("should createTreeFromFlatData(List) to createTreeFromFlatData Tree", () => {
    expect(
      createTreeFromFlatData([
        {
          id: 1,
          name: "i1",
        },
        {
          id: 2,
          name: "i2",
          parentId: 1,
        },
        {
          id: 4,
          name: "i4",
          parentId: 3,
        },
        {
          id: 3,
          name: "i3",
          parentId: 2,
        },
        {
          id: 8,
          name: "i8",
          parentId: 2,
        },
      ])
    ).to.eql([
      {
        id: 1,
        name: "i1",
        children: [
          {
            id: 2,
            name: "i2",
            parentId: 1,
            children: [
              {
                id: 3,
                name: "i3",
                parentId: 2,
                children: [
                  {
                    id: 4,
                    name: "i4",
                    parentId: 3,
                  },
                ],
              },
              {
                id: 8,
                name: "i8",
                parentId: 2,
              },
            ],
          },
        ],
      },
    ]);
    // 输入循环数据
    expect(
      createTreeFromFlatData([
        {
          id: 1,
          name: "ii1",
          parentId: 2,
        },
        {
          id: 2,
          name: "ii2",
          parentId: 1,
        },
        {
          id: 4,
          name: "ii4",
          parentId: 3,
        },
      ])
    ).to.be.null;
  });
});
