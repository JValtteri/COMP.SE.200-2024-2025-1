import { expect } from "chai";
import slice from "../src/slice.js";

describe("slice", () => {
    let testArrayInteger = [1, 2, 3, 4, 5];
    let testArrayString = ["one", "two", "three", "four", "five"];
    let testArrayEmpty = [];
    it("Slice of 2 should return elements 3,4,5 of array with 5 elements ", () =>{
        let targetArray = [3, 4, 5];
        expect(testArrayInteger.slice(2)).to.deep.equal(targetArray)
    });
    it("Slice of -3 should return elements 3,4,5 of array with 5 elements ", () =>{
        let targetArray = ["three", "four", "five"];
        expect(testArrayString.slice(-3, 5)).to.deep.equal(targetArray)
    });
    it("Slice of empty array should return empty array", () =>{
        let targetArray = [3, 4, 5];
        expect(testArrayEmpty.slice(2)).to.deep.equal([])
    });
})