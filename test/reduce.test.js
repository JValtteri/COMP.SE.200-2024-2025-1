import { expect } from "chai";
import reduce from "../src/reduce.js";

describe("reduce", () => {

    let testDictCharNum = {'a': 1, 'b': 2, 'c': 1};
    let testListInteger = [1, 2, 3, 4, 5];

    // Modified example case from function documentation
    it("Summing a list from 1 to 5 should equal 15", () =>{
      expect(reduce(testListInteger, (sum, n) => sum + n, 0)).to.equal(15)
    });
    // Example case from function documentation
    it("Example case from function docs of grouping dict keys according to value", () =>{
        let targetDict = { '1': ['a', 'c'], '2': ['b'] };
        expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => { 
            (result[value] || (result[value] = [])).push(key) 
            return result 
        }, {})).to.deep.equal(targetDict)
    });
})