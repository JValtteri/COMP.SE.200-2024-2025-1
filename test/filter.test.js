import { expect } from "chai";
import filter from "../src/filter.js";

const sample_0 = [
  { 'scottsman': 'McKinley', 'true_scottsman': true },
  { 'scottsman': 'Mickey', 'true_scottsman': false },
  { 'scottsman': 'McAlister', 'true_scottsman': true },
  { 'scottsman': 'McDuck', 'true_scottsman': false }
]

const expected_true = [
  { 'scottsman': 'McKinley', 'true_scottsman': true },
  { 'scottsman': 'McAlister', 'true_scottsman': true }
]

const expected_false = [
  { 'scottsman': 'Mickey', 'true_scottsman': false },
  { 'scottsman': 'McDuck', 'true_scottsman': false }
]

describe("Filter", () => {
  it("true scottsmen", () => {
    expect(filter(sample_0, ({true_scottsman}) => true_scottsman )).to.deep.equal(expected_true)
  });
  it("not true scottsmen", () => {
    expect(filter(sample_0, ({true_scottsman}) => !true_scottsman )).to.deep.equal(expected_false)
  });
  it("not no match", () => {
    expect(filter(expected_false, ({true_scottsman}) => true_scottsman )).to.deep.equal( [[]] )
  });
})
