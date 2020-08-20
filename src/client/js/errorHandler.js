const sendError = message => {
  document.getElementById("errorMessages").innerHTML = message;
  document.getElementById("errorMessages").classList.add("show");
}

const cleanErrors = () => {
  document.getElementById("errorMessages").innerHTML = "";
  document.getElementById("errorMessages").classList.remove("show");
}

export { sendError, cleanErrors }