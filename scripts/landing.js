/* Landing Page JavaScript */

"use strict";

const logInForm = document.querySelector("#logIn");

logInForm.onsubmit = function (e) {
    // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered:
    e.preventDefault();

    // We can use loginForm.username (for example) to access
    // the input element in the form which has the ID of "username".
    const loginData = {
        username: logInForm.username.value,
        password: logInForm.password.value,
    }
    // console.log(loginData.token)

    // Disables the button after the form has been submitted already:
    logInForm.logInButton.disabled = true;

    // Time to actually process the login using the function from auth.js!
    login(loginData);
};


// Gender Select
if (window.location.pathname === "/") {
    const femaleRadioBtn = document.querySelector("#female");
    const maleRadioBtn = document.querySelector("#male");
    const customRadioBtn = document.querySelector("#custom");
    const genderSelect = document.querySelector("#genderSelect");
  
    femaleRadioBtn.addEventListener("change", () => {
      genderSelect.classList.add("d-none");
    });
    maleRadioBtn.addEventListener("change", () => {
      genderSelect.classList.add("d-none");
    });
    customRadioBtn.addEventListener("change", () => {
      genderSelect.classList.remove("d-none");
    });
  }


