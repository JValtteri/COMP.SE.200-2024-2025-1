import { expect } from "chai";
import add from "../src/add.js";

describe("Add", () => {
  it("Add 0+2=2", () =>{
    expect(add(0,2)).to.equal(2)
  });
  it("Add -3+2=-11", () =>{
    expect(add(-3,2)).to.equal(-1)
  });
})
