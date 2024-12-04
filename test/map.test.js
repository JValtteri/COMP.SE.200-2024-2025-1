import { expect } from "chai";
import map from "../src/map.js";

describe("map", () => {

    function square(n) {
        return n * n
    };

    let testArrayInteger = [1, 2, 3, 4, 5];
    let testArrayEmpty = [];

    // Example test from function description
    it("Mapping a squaring function to a list of Integers should return squared values", () =>{
        let targetArray = [1, 4, 9, 16, 25];
        expect(map(testArrayInteger, square)).to.deep.equal(targetArray)
    });
    it("A null array should return an empty array", () =>{
        expect(map(null, square)).to.deep.equal([])
    });
})