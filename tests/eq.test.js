import { expect } from "chai";
import eq from "../src/eq.js";

describe("Eq", () => {
  it("Test that 2 equals 2", () =>{
    expect(eq(2,2)).to.equal(true)
  });
})
