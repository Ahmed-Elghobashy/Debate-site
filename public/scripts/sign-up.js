import * as cookie from "./cookie.js";
onload = function fillEmail() {
  const emailFromCookie = cookie.getCookie("login_email");
  console.log(emailFromCookie);
  if (username) {
    console.log("I came here");
    const emailBox = document.querySelector("#email_inp");
    emailBox.value = emailFromCookie;
    cookie.setCookie("login_email", "");
  }
};
