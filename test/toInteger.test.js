import { expect } from "chai";
import toInteger from "../src/toInteger.js";

describe("toInteger", () => {
    it("Positive float 3.2 to rounded down integer 3", () =>{
      expect(toInteger(3.2)).to.equal(3)
    });
    it("Positive float 4.6 to rounded up integer 5", () =>{
        expect(toInteger(4.6)).to.equal(5)
      });
    it("Positive string 127 to integer 127", () =>{
      expect(toInteger("127")).to.equal(127)
    });
    it("Negative string -14 to integer -14", () =>{
        expect(toInteger("-14")).to.equal(-14)
      });
    it("Trying to make a word an integer should throw an error", () => {
        expect(function () {toInteger("word")} ).to.throw(TypeError)
    });
    it("Negative string float -235.7 to rounded negative integer -236", () =>{
        expect(toInteger("-235.7")).to.equal(-236)
    });
})