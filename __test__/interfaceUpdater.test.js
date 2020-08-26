import { updateUI, cleanResults } from "../src/client/js/interfaceUpdater"

//creating a fake elements
const results = document.createElement('div');
results.id = "results";
document.body.appendChild(results);


const data = {
  agreement: "agreement1",
  confidence: "confidence2",
  irony: "irony3",
  subjectivity: "subjectivity4"
}

describe("Testing interfaceUpdater functions", () => {
  it("Testing addition of new results", () => {
    updateUI(data);
    let expected = /Agreement: agreement1.*Confidence: confidence2.*Irony: irony3.*Subjectiviy: subjectivity4/gs;
    expect(results.textContent).toMatch(expected);
  });
  it("Testing clean of results", () => {
    cleanResults();
    expect(results.textContent).toBe("");
  });
});