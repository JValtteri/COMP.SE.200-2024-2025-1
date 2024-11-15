import { expect } from "chai";
import eq from "../src/eq.js";

describe("Eq", () => {
  it("Test eq int", () =>{
    expect(eq(2,2)).to.equal(true)
  });
  it("Test eq string", () =>{
    expect(eq('foo','foo')).to.equal(true)
  });
  it("Test obj to bool", () =>{
    expect(eq({},false)).to.equal(false)
  });
  it("Test not 1=2", () =>{
    expect(eq(1,2)).to.equal(false)
  });
})
