import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

const test_input = { 'City': {'Street': {'House': {'Pets': ['cat', 'dog'] } } } };
const test_path_1 = 'City.Street.House.Pets[1]'


describe("Is empty", () => {
  it("null value", () =>{
    expect(isEmpty(null)).to.equal(true)
  });
  it("Object", () =>{
    expect(isEmpty(test_input)).to.equal(false)
  });
})
