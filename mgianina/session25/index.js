/**
 * RegExp-regular expression
 * tipare care cauta anumite combinatii in stringuri
 */

let string = "abcdef";

let pattern = /ab/;

console.log(pattern.exec(string)); //ne returneaza obiectul
console.log(pattern.test(string)); //ne returneaza true sau false
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
  if (value === "password") {
    return true;
  } else {
    return false;
  }

  // return value === "password"; face acelasi lucru
};

const validateEmail = (email, regex) => {
  // if (email.match(regex)) {
  //     return true;
  // }else {
  //     return false;
  // }

  return !!email.match(regex); //-face acelasi lucru ca mai sus
};

const test = "test";

console.log(test);
console.log(!test);
console.log(!!test);

//!! in fata la ceva,forteaza valoarea boleana a acelei expresii: daca are valoare de adevar ne da true, daca nu are valoare de adevar ne da false;
//adica ne converteste la valoarea booleana

const clearLoginInputs = () => {
  emailField.value = "";
  passwordField.value = "";
};

submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); //folosita in sensul de "uita tot ce trebuie sa faci";
  const emailValue = emailField.value;
  const passwordValue = passwordField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  if (emailField === "" || passwordValue === "") {
    showError("All fields are required and must contain a value");
  } else {
    error.style.display = "none";
    if (
      validatePassword(passwordValue) &&
      validateEmail(emailValue, regexEmailPattern)
    ) {
      alert("Logged in");
      clearLoginInputs();
    } else {
      alert("try again");
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
 * aceste functii se executa la 0 secunde dupa ce s a incarcat toata pagina
 */

//1. setTimeout() -executa o functie pe care o primeste ca si parametru,o singura data,dupa o anumita perioada de timp
//-perioada de timp este exprimata in milisecunde: 5000=5 secunde;
//-daca perioada de timp nu este specificata,default ul este 0 secunde dupa ce s a executat tot codul din pagina




// setTimeout(() => {
// firstNameField.value = firstName;
// lastNameField.value = lastName;
// ageField.value = age; 
// }, 5000);
// setTimeout(setFields, 2000);

// setTimeout(() => {
//     setFields();
// });


function setFields() {
    firstNameField.value = firstName;
lastNameField.value = lastName;
ageField.value = age; 
};

// alert("Opreste executia")



function myFunction(number) {
    return number + 5;
}

const newFunction = myFunction;

const anotherFunction = myFunction(5);

//2.setInterval -apeleaza o functie de mai multe ori cu frecventa intervalului mentionat
//-

let start = 1;
const interval = setInterval(() => {
console.log(start);
start += 1;
if(start === 10) {
    setFields();
    clearInterval(interval);
}
}, 2000);






