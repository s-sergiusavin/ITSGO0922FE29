// regexp- regular expressions

let string = "abcdef";
let pattern = /ab/;

// 3 metode prin care ma pot folosi de aceste tipare, doua dintre ele o sa fie functii si una o sa fie o proprietate a tipului string
console.log(pattern.exec(string)); //metoda exec
console.log(pattern.test(string));
console.log(string.match(pattern));

const submitBtn = document.getElementById("login");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const error = document.querySelector("#error");

// cand ma apuc de verificat.
//pun event listener pe submit - login

function showError(message) {
  error.style.display = "block";
  error.innerHTML = message;
  error.style.color = "red";
}

const validatePassword = (value) => {
  // if(value==='password'){
  //     return true;
  // }else{
  //     return false;
  // } face acelasi lucru
  return value === "password";
};

const validateEmail = (email, regex) => {
  //   if (email.match(regex)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return !!email.match(regex);
};

const test = "test";
console.log(test);
console.log(!test); //false
console.log(!!test); //true
//daca pun !! inaintea unei variabile imi va oferi valoarea booleana a expresiei. orice val in js reprezinta adevarat
// null - !null (true) - !!null(false)

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
      alert("logged in!");
      clearLoginInputs();
    } else {
      alert("try again");
      showError("Incorrect email or password");
      clearLoginInputs();
    }
  }
});

//ar trebui sa ma logheze but i doesn't work
// by default browserul dupa un submit isi da refresh - deci tb sa opresc refreshul deci folosesc preventdefault

// DRY - Don't repeat yourself
// KISS - keep it simple, stupid
//email.match.regex genereaza un array cu informatie if true si daca nu retureaza null

// cum testez ca un element se afla intr-un array
// find indexof filter? includes

const firstNameField = document.getElementById("firstName");
const lastNameField = document.getElementById("lastName");
const ageField = document.getElementById("age");

const firstName = "Angelina";
const lastName = "Jolie";
const age = 27;

//firstNameField.value = firstName;
//lastNameField.value = lastName;
//ageField.value = age;

//chestii din javascript
//built-in functions

//ASYNC STUFF##########################################################

// setTimeout
//executa o functie pe care o primeste ca parametru o singura data, dupa o anumita perioada de timp
// perioada de timp este exprimata in ms
//daca perioada de timp nu este specificata defaultul este 0 secunde dupa ce s-a executat tot codul din pagina

// setTimeout(() => {
//   firstNameField.value = firstName;
//   lastNameField.value = lastName;
//   ageField.value = age;
// }, 5000);

//setTimeout(setFields, 2000);
//am pus referinta catre functie -adica fara paranteze
setTimeout(() => {
  setFields();
}); //se executa right away

function setFields() {
  firstNameField.value = firstName;
  lastNameField.value = lastName;
  ageField.value = age;
}
//debugger // observa cum nu se incarca rezultatele pt ca am oprit executia paginii cu debuggerul

function myFunction() {
  console.log("rolul parantezelor");
}

const newFunction = myFunction; //aici fac trimitere la referinta
const anotherFunction = myFunction(); // aici apelez functia si asignam variabilei anotherFunction valoarea rezultata -> adica undefined pentru ca nu returneaza nimic functia;

// setInterval
//apeleaza o functie de mai multe ori cu frecventa intervalului mentionat

let start = 1;
const interval = setInterval(() => {
  console.log(start);
  start += 1;
  if (start === 7) {
    setFields();
    clearInterval(interval); //are nev de un parametru
  } //aici oare pot pune this daca fac functie declaratie?
}, 2000);
