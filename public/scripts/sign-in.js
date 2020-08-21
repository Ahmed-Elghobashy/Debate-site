import * as cookie from "./cookie.js";
//this is to send the username to the sign up page
const emailInput = document.getElementById("email_inp");
// emailInput.addEventListener("onchange", () => {
//   console.log("I came here");
//   setCookie("login_email", emailInput.value);
// });

emailInput.onchange = () => {
  console.log(emailInput.value);
  cookie.setCookie("login_email", emailInput.value);
};
