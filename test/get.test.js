import { expect } from "chai";
import get from "../src/get.js";

const test_input = { 'City': {'Street': {'House': {'Pets': ['cat', 'dog'] } } } };
const test_path_1 = 'City.Street.House.Pets[1]'


describe("Get valid", () => {
  it("Get valid path", () =>{
    expect( get(test_input,test_path_1) ).to.equal('dog')
  });
})
