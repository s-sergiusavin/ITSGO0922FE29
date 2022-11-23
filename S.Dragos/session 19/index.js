// Primitives: string, number, boolean, undefined, symbol, bigInt
// References: Objects: Array, functions, null
logSomething();
// Numbers

let myNumber = 5;
let secondNUmber = 2;
let result;

result = myNumber + secondNUmber;
result = myNumber - secondNUmber;
result = myNumber / secondNUmber;
result = myNumber * secondNUmber;
result = myNumber % secondNUmber;
//  ** ridicarea la putere

// Strings

let myString = "Acesta este un mesaj";
myString = "O'heary";
myString = "";
// Template literals
myString = `Rezultatul este ${result}`;

// Boolean

let lightsOn = true;

// Arrays
const myArray = [5, "4", true, null, [5, 1], { name: "Sergiu" }];
console.log(myArray[0]);
console.log(myArray[4][1]);
console.log(myArray[5].name);

// Objects

const myObj = {
  burger: "Big Tasty",
  juice: "Cola",
  "french-fries": "With fires",
  address: {
    street: "Street",
    number: 1,
  },
  sauce: ["Ketchup", "Mayo"],
};

console.log(myObj["french-fries"]);

// Loops (Bucle) - Structuri iterative

let marksOf10lei = 0;

marksOf10lei = marksOf10lei + 1;
marksOf10lei += 1;
marksOf10lei++;
marksOf10lei += 3; // Se adauga 3 la valoarea precedenta
console.log(marksOf10lei);

let total = 10;

marksOf10lei = marksOf10lei + 1;
marksOf10lei = marksOf10lei + 1;
marksOf10lei = marksOf10lei + 1;

while (marksOf10lei < total) {
  marksOf10lei = marksOf10lei + 1;
}

console.log(`Avem ${marksOf10lei} bancnote de 10 lei`);

let roomTemprature = 18;
let desiredTemperature = 24;

while (roomTemprature < desiredTemperature) {
  roomTemprature += 1;
}

let isAcOn = false;

// while (!isAcOn) {
//   roomTemprature += 1;
//   if (roomTemprature === 24) {
//     isAcOn = true;
//   }
// }

// Do while loop

// do {
//     // action
// } while ()

// For loop

let marksOf5lei = 0;
let totalOf5lei = 5;

// for (initializare; conditie; operatiune la finalul executiei iteratiei)

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

// If else -- conditional structures - blocks

let val1 = 5;
let val2 = "5";

// == verifica valoarea
// === verifica valoarea si tipul varibilei

if (val1 === val2) {
  console.log("Variabilele sunt egale");
} else {
  console.log("Variabilele nu sunt egale");
}

// Truthy vs Falsy values
// Falsy: 0, '', false, undefined, null

if (val1 !== val2) {
  console.log("Variabilele nu sunt egale");
} else {
  console.log("Variabilele sunt egale");
}

let temperature = 6;
let optimalTemperature = 25;

if (temperature >= optimalTemperature) {
  console.log("Este placut afara");
} else {
  console.log("Este urat afara");
}

// Logical operators

// && - daca cel putin o conditie este falsa, totul este fals
// || - daca cel putin o conditie este adevarata, totul este adevarat

if (temperature >= optimalTemperature && temperature <= 35) {
  console.log("Este placut afara");
} else {
  console.log("Este urat afara");
}

let pizzaPrice = 40;
let hasGorgonzola = true;

if (pizzaPrice <= 30 || hasGorgonzola === true) {
  // if (pizzaPrice <= 30 || hasGorgonzola) {
  console.log("Pizza isi merita banii");
} else {
  console.log("Pizza nu isi merita banii");
}

if (pizzaPrice <= 30 && hasGorgonzola === true) {
  // if (pizzaPrice <= 30 || hasGorgonzola) {
  console.log("Pizza isi merita banii");
} else {
  console.log("Pizza nu isi merita banii");
}

// Ternary operator - sunt 3 parti
// conditie ? valoare de adevar : valoare in caz de fals

// let val1 = 5;
// let val2 = "5";

val1 === val2 ? 'Egale' : 'False';

// Functions 

// Function declaration: function term + function name
function logSomething() {
    console.log('Functia logSomething() a fost invocata/apelata (called)');
}

logSomething();


// Function expression
const doSomething = function() {
    console.log('Do something');
}

doSomething();

// ------

// Arrow function

const doArrowFunction = () => {
    console.log('Do arrow something');
}

doArrowFunction();

// Function with params

let number = 8;

function addToSum(number) {
    let sum = 0;
    sum += number; // sum = sum + number;
    console.log(`Rezultatul este ${sum}`)
}

addToSum(3);
addToSum(5);

const removeFrom100 = (number) => {
    console.log(`Rezultatul este ${100 - number}`);
}

removeFrom100(20);
removeFrom100('Marcel');
removeFrom100('5');

function sendEmail(firstName, lastName, proffesion, result, exam) {
    let person;

    if (proffesion) {
        person = proffesion + lastName + firstName;
    } else {
        person = lastName + firstName;
    }

    console.log(`Salutare ${person}!
    Ai obtinut nota ${result} la examenul ${exam}.
    Mult succes mai departe ${firstName}!`);
}
// parametrii sunt pozitionali
sendEmail('Sergiu', 'Savin', 'student', 10, 'bacalauerat');
sendEmail('Sergiu', 'Savin', '', 10, 'bacalauerat');
sendEmail('Sergiu', 'Savin', null, '', 'bacalauerat');

/**
 * git status
 * git add .
 * git status
 * git commit -m 'Mesaj'
 * git status
 * git push
 * git checkout main
 * git pull
 * git checkout branchPropriu
 * git merge main
 */



