let myNumber = 5;
let secondNumber = 2;
let result;
result = myNumber + secondNumber;
result = myNumber - secondNumber;
result = myNumber / secondNumber;
result = myNumber * secondNumber;
result = myNumber % secondNumber;
// **ridicare la putere

//loops(bucle)-Structuri iterative

let marksOf10lei = 0;
marksOf10lei = marksOf10lei + 1;
marksOf10lei += 1;
marksOf10lei++;
marksOf10lei += 3; //Se adauga 3 la valoarea precedenta
console.log(marksOf10lei);

let total = 10;

while (marksOf10lei < total) {
  marksOf10lei = marksOf10lei + 1;
}

console.log(`Avem ${marksOf10lei} bancnote de 10 lei`);

let roomTemperature = 18;
let desiredTemperature = 24;

while (roomTemperature < desiredTemperature) {
  roomTemperature += 1;
}

let isAsOn = false;
while (isAsOn) {
  roomTemperature += 1;
  if (roomTemperature === 24) {
    isAsOn = true;
  }
}

//Do while loop

// do {
//     //action
// }while ()

//for loop

let marksOf5lei = 0;
let totalOf5lei = 5;

//for (initializare; conditie; operatiune la finalul executiei iteratiei) -pasii for loop

for (let index = 0; index < totalOf5lei; index++) {
  marksOf5lei += 1;
}

let countries = ["Romania", "Bulgaria", "Ucraina", "Turcia"];
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

// if else -- conditional structures - blocks

let val1 = 5;
let val2 = "5";

if (val1 === val2) {
  console.log("Variabilele sunt egale");
} else {
  console.log("Variabilele nu sunt egale");
}

//Truthy vs Falsy values
//Falsy: 0, "" , false ,undefined , null
// ==  verifica valoarea
// === se verifica valoarea si tipul variabilei

// ! diferit
if (val1 !== val2) {
  console.log("Variabilele nu sunt egale");
} else {
  console.log("Variabilele sunt egale");
}

let temperature = 5;
let optimalTemperature = 25;

if (temperature >= optimalTemperature) {
  console.log("Este placut afara");
} else {
  console.log("Este urat afara");
}

//logical operators
//&& si (daca cel putin o conditie este falsa,totul este fals)
// || sau (daca cel putin o conditie este adevarata ,totul este adevarat)

if (temperature >= optimalTemperature && temperature <= 35) {
  console.log("Este placut afara");
} else {
  console.log("Este urat afara");
}

let pizzaPrice = 40;
let hasGorgonzola = true;
if (pizzaPrice <= 30 || hasGorgonzola === true) {
  //if (pizzaPrice <= 30 || hasGorgonzola)
  console.log("Pizza isi merita banii");
} else {
  console.log("Pizza nu isi merita banii");
}

if (pizzaPrice <= 30 && hasGorgonzola === true) {
  //if (pizzaPrice <= 30 || hasGorgonzola)
  console.log("Pizza isi merita banii");
} else {
  console.log("Pizza nu isi merita banii");
}

//ternary operator -sunt 3 parti ale operatorului
//conditie ? valoarea de adevar : valoarea in caz de fals
//: reprezinta "altfel"
// let val1 = 5;
// let val2 = "5";
val1 === val2 ? "Egale" : "False";

//Functions
//Function declaration : function tern + function name (//asa apelam o functie,poate fi apelata de oriunde (daca apelam functia inainte sa o scriem))
function logSomething() {
  console.log("Functia logSomething a fost invocata/apelata(called");
}

logSomething();

//Function expresion -nu poate fi apelata de oriunde
const doSomething = function () {
  console.log("Do something");
};
doSomething();

// .......

// Arrow function - nu poate fi apelata de oriunde

const doArrowFunction = () => {
  console.log("Do Arrow function");
};
doArrowFunction();

//Execises
//1 Function with params

let number = 8;

function addToSum(number) {
  let sum = 0;
  sum += number; //sum = sum + number;
  console.log(`Rezultatul este ${sum}`);
}

addToSum(3);
addToSum(5);

//Arrow function

const removeFrom100 = () => {
  console.log(`Rezultatul este ${100 - number}`);
};

removeFrom100(20);
removeFrom100("Marcel");
removeFrom100("5");

function sendEmail(firstName, lastName, proffesion, result, exam) {
  let person;
  if (proffesion) {
    person = proffesion + lastName + firstName;
  } else {
    person = lastName + firstName;
  }
  console.log(`Salutare ${person}!
    Ai optinut nota ${result} la examenul ${exam} . 
    Mult succes pe mai departe ${firstName}`);
}

//parametrii sunt pozitionali
sendEmail("Sergiu", "Savin", "student", 10, "bacalaureat");
sendEmail("Sergiu", "Savin", "", 10, "bacalaureat");
sendEmail("Sergiu", "Savin", null, 10, "bacalaureat");

// /**
//  * git status
//  * git add .
//  * git status
//  * git commit -m "Mesaj"
//  * git status
//  * git push
//  * git checkout main
//  * git pull
//  * git checkout branchPropriu
//  * git merge main
