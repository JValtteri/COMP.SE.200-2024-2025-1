import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst", () => {
    it("Capitalize small letter in word", () =>{
      expect(upperFirst("word")).to.equal("Word")
    });
    it("Single capitalized letter stays capitalized", () =>{
      expect("F").to.equal("F")
    });
  })