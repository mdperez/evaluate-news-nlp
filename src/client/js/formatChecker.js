function checkFormat(inputText) {
  if (/^http(s)*/.test(inputText)) {
    return "url";
  } else {
    return "txt";
  };
}

export { checkFormat }