import restoreIPAddress from "./restoreIPAddress";
import { expect } from "chai";
import { describe, it } from "mocha";

describe("Backtracking: restoreIPAddress", () => {
  it("should restoreIPAddress(IPAddress) to restoreIPAddressResult", () => {
    expect(restoreIPAddress("0000")).to.eql(["0.0.0.0"]);
    expect(restoreIPAddress("010010")).to.eql(["0.10.0.10","0.100.1.0"]);
    expect(restoreIPAddress("25525511135")).to.eql(["255.255.11.135","255.255.111.35"]);
    expect(restoreIPAddress("101023")).to.eql(["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]);
  });
});
