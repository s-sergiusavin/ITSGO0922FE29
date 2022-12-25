/**
 * RegExp - Regular Expressions
 * tipare care cauta anumite combinatii DOAR in stringuri
 */

let string = "abcdef";
let pattern = /ab/;

console.log(pattern.exec(string)); // practic cauta pereche ab in stringul nostru si ne returneaza un obiect cu ceva informatii
console.log(pattern.test(string)); // returneaza true daca exista
console.log(string.match(pattern)); // returneaza acelasi lucru ca exec doar scris in mod divers

const submitBtn = document.getElementById("signin");
const emailField = document.querySelector("#email");
const passwordField = document.getElementById("password");
const error = document.querySelector("#error");

const firstNameField = document.getElementById("firstName");
const lastNameField = document.getElementById("lastName");
const ageField = document.getElementById("age");

function showError(message) {
  error.style.display = "block";
  error.innerHTML = message;
  error.style.color = "red";
}

const validatePassword = (value) => {
  // if (value === 'password') {
  //    return true;
  // } else {
  //    return false;
  // }

  return value !== "password";
};

const validateEmail = (email, regex) => {
  // if (email.match(regex)) {
  //    return true;
  // } else {
  //    return false;
  // }

  return !!email.match(regex);
};

const validateName = (value, regex) => {
   return !!value.match(regex);
}

const validateAge = (value) => {
   return !isNaN(value); 
}

const test = "test";
console.log(test);
console.log(!test);
console.log(!!test); // imi forteaza valoarea booleana al expresiei

const clearSigninInput = () => {
  emailField.value = "";
  passwordField.value = "";
  firstNameField.value = '';
  firstNameField.value = '';
  lastNameField.value = '';
  ageField.value = '';
};

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = emailField.value;
  const passwordValue = passwordField.value;
  const firstNameValue = firstNameField.value;
  const lastNameValue = lastNameField.value;
  const ageValue = ageField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;
  const regexNamePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  if (emailValue === "" || passwordValue === "" || firstNameField.value === '' || lastNameField.value === '' || ageField.value === '') {
    showError("All fields are required and must contain a value");
  } else {
    error.style.display = "none";

    if (
      validatePassword(passwordValue) && validateEmail(emailValue, regexEmailPattern)) {

      if (validateName(firstNameValue, regexNamePattern)) {

        if (validateName(lastNameValue, regexNamePattern)) {

          if (validateAge(ageValue)) {
            alert("Signed in!");
            clearSigninInput();
          } else {
            alert("Try again");
            showError("Invalid Age");
            clearSigninInput();
          }
        } else {
          alert("Try again");
          showError("Invalid Last Name");
          clearSigninInput();
        }
      } else {
        alert("Try again");
        showError("Invalid First Name");
        clearSigninInput();
      }
    } else {
      alert("Try again");
      showError("Incorrect email or passowrd");
      clearSigninInput();
    }
  }

//   console.dir(emailField);
});

const switchBtnElementSign = document.querySelector('#switchToLog');

switchBtnElementSign.addEventListener('click', function() {
  document.getElementById("switchToLog").id= 'switchToSign';
  document.getElementById('switchToSign').value = 'Switch to Sign In';

  firstNameField.style.display = 'none';
  lastNameField.style.display = 'none';
  ageField.style.display = 'none';
  const labelElements = document.querySelectorAll("label");
  for (let i = 0; i < labelElements.length; i++) {
    labelElements[i].style.display = 'none';
  }
  document.querySelector('h2').innerHTML = 'Log In';
  const subBtn = document.getElementById('signin');
  subBtn.type = 'button';
  subBtn.value = 'Log In';
  subBtn.id = 'login';

  const logBtn = document.getElementById('login');

  logBtn.addEventListener('click', function() {
  
    const emailValue = emailField.value;
    const passwordValue = passwordField.value;
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;
    if (emailValue === "" || passwordValue === "") {
      showError("All fields are required and must contain a value");
    } else {
      error.style.display = "none";
      if (validatePassword(passwordValue) && validateEmail(emailValue, regexEmailPattern)) {
        alert("Signed in!");
        clearSigninInput();
      } else {
        alert("Try again");
        showError("Incorrect email or passowrd");
        clearSigninInput();
      }
    }
  
  })


})

const switchBtnElementLog = document.getElementById('switchToSign');

switchBtnElementLog.addEventListener ('click', function() {
  switchBtnElementLog.id = 'switchToLog';
})





// const firstName = "Angelina";
// const lastName = "Jolie";
// const age = 27;

// firstNameField.value = firstName;
// lastNameField.value = lastName;
// ageField.value = age;

/**
 * Built in functions
 */

/**
 * setTimeout
 * executa o functie pe care o primeste ca parametru o singura data dupa o anumita perioada de timp
 * timpul este exprimat in milisecunde upa ce s-a executat pagina
 * daca perioada de timp nu este specificata, defaultul este 0 secunde dupa ce s-a executat tot codul din pagina
 */

// setTimeout(() => {
//    firstNameField.value = firstName;
//    lastNameField.value = lastName;
//    ageField.value = age;
// }, 5000);

// setTimeout(setFields, 2000);
// setTimeout(() => {
//    setFields();
// })

function setFields() {
   firstNameField.value = firstName;
   lastNameField.value = lastName;
   ageField.value = age;
}

function myFunction() {
   console.log('Rolul parantezelor');
}

const newFunction = myFunction;
const anotherFunction = myFunction();

/**
 * setInterval
 * apeleaza o functie de mai multe ori cu frecvenza intervalului mentionat
 */

// let start = 1;
// const interval = setInterval(() => {
//    console.log(start);
//    start += 1;
//    if (start === 7) {
//       setFields();
//       clearInterval(interval);
//    }
// }, 2000);

// // 