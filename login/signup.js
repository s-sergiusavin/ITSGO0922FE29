const signBtn = document.getElementById("signup");
const usernameInput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput1");
const repeatPasswordInput = document.getElementById("passwordInput2");

function showError(message) {
  error.style.display = "block";
  error.innerHTML = message;
  error.style.color = "red";
}

const correctPassword = (value) => {
  return value.length > 5;
};

function correctEmail(email, regex) {
  return regex.test(email);
}

function correctRepeat(pass, repeat) {
  return pass === repeat;
}

const clearLoginInputs = () => {
  usernameInput.value = "";
  passwordInput.value = "";
};

signBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const usernameValue = usernameInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const repeatValue = repeatPasswordInput.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  if (
    emailValue === "" ||
    passwordValue === "" ||
    usernameValue === "" ||
    repeatValue === ""
  ) {
    showError("all fields requiered");
  } else {
    error.style.display = "none";

    if (
      correctPassword(passwordValue) &&
      correctEmail(emailValue, regexEmailPattern) &&
      correctRepeat(passwordValue, repeatValue)
    ) {
      alert("signed up!");
      clearLoginInputs();
    } else {
      console.log(emailValue, passwordValue , repeatValue)
      if (correctEmail(emailValue, regexEmailPattern) === false) {
        showError("email incorrect");
      } else {
        if (correctPassword(passwordValue) === false) {
          showError("password has to be longer than 5 letters");
        } else {
          if (correctRepeat(passwordValue, repeatValue) === false) {
            showError("repeat password incorrect");
          } else {
            showError("error unknown");
          }
        }
      }
    }
  }
});
