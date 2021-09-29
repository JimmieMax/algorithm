import { expect } from "chai";
import { describe, it } from "mocha";

import KML from "../lib/KML";

describe("KML", () => {
  let kmp = new KML("abca");
  console.log(kmp.next);
  it("kmp.search('cababcabddasd') should return 3", () => {
    expect(kmp.search("cababcabddasd")).to.equal(3);
  });
});
