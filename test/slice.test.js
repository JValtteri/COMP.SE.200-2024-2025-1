import { expect } from "chai";
import slice from "../src/slice.js";

describe("slice", () => {
    
    let testArrayInteger = [1, 2, 3, 4, 5];
    let testArrayString = ["one", "two", "three", "four", "five"];
    let testArrayEmpty = [];

    it("Slice of 2 should return elements 3,4,5 of array with 5 elements ", () =>{
        let targetArray = [3, 4, 5];
        expect(slice(testArrayInteger, 2)).to.deep.equal(targetArray)
    });
    it("Slice of -3 should return elements three, four ,five of array with 5 elements ", () =>{
        let targetArray = ["three", "four", "five"];
        expect(slice(testArrayString, -3, 5)).to.deep.equal(targetArray)
    });
    it("Slice of empty array with invalid indices should return empty array", () =>{
        expect(slice(testArrayEmpty, -7, 7)).to.deep.equal([])
    });
    it("Slice of 0 to -2 should return elements one, two, three of array with 5 elements ", () =>{
        let targetArray = ["one", "two", "three"];
        expect(slice(testArrayString, 0, -2)).to.deep.equal(targetArray)
    });
    it("Slice of null array with bad indices should return empty array", () =>{
        expect(slice(null, null, undefined)).to.deep.equal([])
    });
})