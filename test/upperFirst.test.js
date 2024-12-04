import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst", () => {
    it("Capitalize small letter in word", () => {
      expect(upperFirst("word")).to.equal("Word")
    });
    it("Single capitalized letter stays capitalized", () => {
      expect(upperFirst("F")).to.equal("F")
    });
    it("Empty input should return empty", () => {
      expect(upperFirst("")).to.equal("")
    });
    it("Wrong input type should throw an error", () => {
      expect(function () {upperFirst(1)} ).to.throw(TypeError)
    });
  })