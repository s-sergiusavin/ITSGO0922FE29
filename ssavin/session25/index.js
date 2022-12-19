/**
 * RegExp - Regular Expressions
 * tipare care cauta anumite combinatii in stringuri
 */

let string = "abcdef";
let pattern = /ab/;

console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));

const submitBtn = document.getElementById("login");
const emailField = document.querySelector("#email");
const passwordField = document.getElementById("password");
const error = document.querySelector("#error");

function showError(message) {
  error.style.display = "block";
  error.innerHTML = message;
  error.style.color = "red";
}

const validatePassword = (value) => {
  // if (value === 'password') {
  //     return true;
  // } else {
  //     return false;
  // }

  return value === "password";
};

const validateEmail = (email, regex) => {
  // if (email.match(regex)) {
  //     return true;
  // } else {
  //     return false;
  // }
  console.log(email.match(regex));
  return !!email.match(regex); // converteste la valoare booleana
};
const test = null;
console.log(test);
console.log(!test);
console.log(!!test);

const clearLoginInputs = () => {
  emailField.value = "";
  passwordField.value = "";
};

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = emailField.value;
  const passwordValue = passwordField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  if (emailValue === "" || passwordValue === "") {
    showError("All fields are required and must contain a value");
  } else {
    error.style.display = "none";

    if (
      validatePassword(passwordValue) &&
      validateEmail(emailValue, regexEmailPattern)
    ) {
      alert("Logged in!");
      clearLoginInputs();
    } else {
      alert("Try again");
      showError("Incorrect email or password");
      clearLoginInputs();
    }
  }
});

const firstNameField = document.getElementById("firstName");
const lastNameField = document.getElementById("lastName");
const ageField = document.getElementById("age");

const firstName = "Angelina";
const lastName = "Jolie";
const age = 27;

// firstNameField.value = firstName;
// lastNameField.value = lastName;
// ageField.value = age;

/**
 * Built in functions
 */

/**
 * setTimeout
 * Executa o functie pe care o primeste ca parametru o singura data, dupa o anumita perioada de timp
 * Perioada de timp este exprimata in milisecunde
 * Daca perioada de timp nu este specificata, defaultul este 0 secunda dupa ce s-a executat tot codul din pagina
 */

// setTimeout(() => {
//   firstNameField.value = firstName;
//   lastNameField.value = lastName;
//   ageField.value = age;
// }, 5000);

setTimeout(setFields, 2000);
// setTimeout(() => {
//     setFields();
// });

function setFields() {
  firstNameField.value = firstName;
  lastNameField.value = lastName;
  ageField.value = age;
}

// alert('Opreste executia');
// debugger;

function myFunction(number) {
    return number + 5;
}

const newFunction = myFunction;
const anotherFunction = myFunction(5);

console.log(newFunction(10));
console.log(newFunction(50));
console.log(anotherFunction)

/**
 * setInterval
 * apeleaza o functie de mai multe ori cu frecventa intervalului mentionat
 */

let start = 1;
const interval = setInterval(() => {
    console.log(start);
    start += 1;
    if (start === 7) {
        setFields();
        clearInterval(interval);
    }
}, 2000);
