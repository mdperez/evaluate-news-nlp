let textareaValue = "";
let status = false;


const getDataMock = () => {
  return status;
}

const handleSubmitMock = () => {
  if (textareaValue) {
    if (getDataMock()) {
      return "update UI";
    } else {
      return "error";
    }
  } else {
    return "error";
  }
}

describe("Testing interfaceUpdater functions", () => {
  it("Testing empty textarea", () => {
    expect(handleSubmitMock()).toBe("error");
  });
  it("Testing with textarea content and wrong status from api", () => {
    textareaValue = "Now we have content";
    expect(handleSubmitMock()).toBe("error");
  });
  it("Testing with textarea content and correct status from api", () => {
    status = true;
    expect(handleSubmitMock()).toBe("update UI");
  });
});