import { expect } from "chai";
import filter from "../src/filter.js";

const sample_0 = [
  { 'scottsman': 'McKinley', 'true_scottsman': true },
  { 'scottsman': 'Mickey', 'true_scottsman': false },
  { 'scottsman': 'McAlister', 'true_scottsman': true },
  { 'scottsman': 'McDuck', 'true_scottsman': false }
]

const expected_0 = [
  { 'scottsman': 'McKinley', 'true_scottsman': true },
  { 'scottsman': 'McAlister', 'true_scottsman': true }
]


const debugtext = filter(sample_0, ({true_scottsman}) => true_scottsman );
console.log(debugtext);


describe("Filter true scottsmen", () => {
  it("scottsmen", () => {
    expect(filter(sample_0, ({true_scottsman}) => true_scottsman )).to.deep.equal(expected_0)
  });
})
