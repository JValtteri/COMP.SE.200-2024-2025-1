import { expect } from "chai";
import toInteger from "../src/toInteger.js";

describe("toInteger", () => {
    it("Positive float to rounded down integer", () =>{
      expect(toInteger(3.2)).to.equal(3)
    });
  })