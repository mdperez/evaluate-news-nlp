import { cleanErrors, sendError } from "../src/client/js/errorHandler"

//creating a fake elements
const errorMessages = document.createElement('div');
errorMessages.id = "errorMessages";
errorMessages.innerHTML = "Placeholder text";
document.body.appendChild(errorMessages);

describe("Testing errorHandler functions", () => {
  it("Testing default set message", () => {
    expect(errorMessages.innerHTML).toBe("Placeholder text");
  });
  it("Testing sent errors", () => {
    sendError("testing send error");
    expect(errorMessages.innerHTML).toBe("testing send error");
  });
  it("Testing clean errors", () => {
    cleanErrors();
    expect(errorMessages.innerHTML).toBe("");
  });
});