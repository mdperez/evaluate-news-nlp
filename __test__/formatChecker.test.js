import { checkFormat } from "../src/client/js/formatChecker"

describe("Testing formatChecker functions", () => {
  it("Testing if detects urls", () => {
    expect(checkFormat("http://www.google.es")).toBe("url");
  });
  it("Testing if detects text", () => {
    expect(checkFormat("This is a text string")).toBe("txt");
  });
});