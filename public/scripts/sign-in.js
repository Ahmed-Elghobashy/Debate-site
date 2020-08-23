import * as cookie from "./cookie.js";
//this is to send the username to the sign up page
const emailInput = document.getElementById("email_inp");
const validate = document.querySelector("form .validate")
emailInput.onchange = () => {
  console.log(emailInput.value);
  cookie.setCookie("login_email", emailInput.value);
};

function validateError() {
  console.log("Came here");
  validate.classList.remove("invisible");
}