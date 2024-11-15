import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

const test_input = { 'City': {'Street': {'House': {'Pets': ['cat', 'dog'] } } } };
const test_path_1 = 'City.Street.House.Pets[1]'

const func = isEmpty;

//const proto = {}

describe("Is empty", () => {
  it("null value", () =>{
    expect(isEmpty(null)).to.equal(true)
  });
  it("Object", () =>{
    expect(isEmpty(test_input)).to.equal(false)
  });
  it("Empty list", () =>{
    expect(isEmpty([])).to.equal(true)
  });
  it("Non-empty string", () =>{
    expect(isEmpty('spam')).to.equal(false)
  });
  it("Non-empty map", () =>{
    expect(isEmpty( {'foo': 'bar'} )).to.equal(false)
  });
//  it("Empty map", () =>{
//    expect(isEmpty( {'foo': [] } )).to.equal(false)
//  });
  it("Function is empty", () =>{
    expect(isEmpty( func )).to.equal(true)
  });
//  it("Protorype", () =>{
//    expect(isEmpty( Object.create(proto) )).to.equal(true)
//  });
  it("Set", () =>{
    expect(isEmpty( new Set(['a', 'b', 'c']) )).to.equal(false)
  });
})
