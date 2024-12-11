import { expect } from "chai";
import toInteger from "../src/toInteger.js";

// The rounding rules work according to standards
describe("toInteger", () => {
    it("Positive float 3.2 to rounded down integer 3", () =>{
      expect(toInteger(3.2)).to.equal(3)
    });
    it("Positive float 4.6 to rounded down integer 4", () =>{
        expect(toInteger(4.6)).to.equal(4)
      });
    it("Positive string 127 to integer 127", () =>{
      expect(toInteger("127")).to.equal(127)
    });
    it("Negative string -14 to integer -14", () =>{
        expect(toInteger("-14")).to.equal(-14)
      });
    it.skip("Trying to make a word an integer should throw an error", () => {
        expect(function () {toInteger("word")} ).to.throw(TypeError)
    });
    it("Negative string float -235.7 to rounded negative integer -235", () =>{
        expect(toInteger("-235.7")).to.equal(-235)
    });
})
