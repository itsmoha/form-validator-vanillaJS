const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password2");

const showError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.classList.remove("success");
  formControl.classList.add("error");
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
};

const checkLength = (input, min_length, max_length) => {
  value_length = input.value.length;
  if (value_length < min_length || value_length > max_length) {
    showError(
      input,
      `Field must be between ${min_length} and ${max_length} characters`
    );
  } else {
    showSuccess(input);
  }
};
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const checkEmail = (email) => {
  if (validateEmail(email.value)) {
    showSuccess(email);
  } else {
    showError(email, "Invalid email");
  }
};

const checkPasswords = (password, confirmPassword) => {
  if (password.value !== confirmPassword.value) {
    console.log("no");
    showError(confirmPassword, "Passwords must be same");
  } else {
    console.log("yes");
    showSuccess(confirmPassword);
  }
};

// Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail(email);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkLength(confirmPassword, 6, 25);
  checkPasswords(password, confirmPassword);
});
