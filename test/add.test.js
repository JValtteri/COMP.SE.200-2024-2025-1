import { expect } from "chai";
import add from "../src/add.js";

describe("Add 0 + 2", () => {
  it("Test that 2 equals 2", () =>{
    expect(add(0,2)).to.equal(2)
  });
})
