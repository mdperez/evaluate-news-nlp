
function updateUI(data) {
  const result = `
    <div id="agreement"><strong>Agreement:</strong> ${data.agreement}</div>
    <div id="confidence"><strong>Confidence:</strong> ${data.confidence}</div>
    <div id="irony"><strong>Irony:</strong> ${data.irony}</div>
    <div id="subjectivity"><strong>Subjectiviy:</strong> ${data.subjectivity}</div>
  `;
  document.getElementById("results").innerHTML = result;
}

const cleanResults = () => {
  document.getElementById("results").innerHTML  = "";
}

export { updateUI, cleanResults }