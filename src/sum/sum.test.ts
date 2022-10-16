import { sum } from "src/sum/sum";

describe("sum()", () => {
  it("returns the sum of two numbers", () => {
    expect(sum(2, 2)).toEqual(4);
  });
});
