
function updateUI(data) {
  console.log(data);
  const result = `
    <div id="agreement">Agreement: ${data.agreement}</div>
    <div id="confidence">Confidence: ${data.confidence}</div>
    <div id="irony">Irony: ${data.irony}</div>
    <div id="subjectivity">Subjectiviy: ${data.subjectivity}</div>
  `;
  document.getElementById("results").innerHTML = result;
}

export { updateUI }