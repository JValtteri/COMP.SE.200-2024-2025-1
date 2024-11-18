import { expect } from "chai";
import get from "../src/get.js";

const test_input = { 'City': {'Street': {'House': {'Pets': ['cat', 'dog'] } } } };
const test_path_1 = 'City.Street.House.Pets[1]'


describe("Get", () => {
  it("Get valid path", () =>{
    expect( get(test_input, test_path_1) ).to.equal('dog')
  });
  it("Get invalid path", () =>{
    expect( get(test_input, 'cat', 'spam') ).to.equal('spam')
  });
  it("Null object", () =>{
    expect( get(null, 'cat', 'nil') ).to.equal('nil')
  });
})
