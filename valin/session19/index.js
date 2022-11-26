// Primitives: string, number, boolean, undefined, symbol, bigInt
// References: Objects: Array, functions, null

// Loops (Bucle) - Structuri iterative

logSomething(); // sare direct la linia cu functia

let marksOf10lei = 0;

marksOf10lei += 1;
marksOf10lei++;
marksOf10lei += 3;

let total = 10;

while (marksOf10lei < total) {
  marksOf10lei += 1;
}

console.log(`Avem ${marksOf10lei} in buzunar`);

let roomTemperature = 18;
let desiredTemperature = 25;

while (roomTemperature < desiredTemperature) {
  roomTemperature += 1;
}

let isAcOn = false;

while (!isAcOn) {
  roomTemperature += 1;
  if (roomTemperature === 24) {
    isAcOn = true;
  }
}

// Do while loop

// do {
//     action
// } while () {
// }

// For loop

let marksOf5lei = 0;
let totalOf5Lei = 0;

// for (initializare; conditie; operatiune la finalul executiei iteratiei)

for (let index = 0; index < totalOf5Lei; index++) {
  marksOf5lei += 1;
}

let countries = ["Romania", "Bulgaria", "Ucraina", "Turcia"];

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

// If else -- conditional structures - blocks

let val1 = 5;
let val2 = '5';

if (val1 === val2) {
   console.log('Variabilele sunt egale')
} else {
   console.log('Variabilele nu sunt egale')
}

// Truthy vs Falsy value
// Falsy: 0, '', false, undefiend, null


if (val1 !== val2) {
   console.log('Variabilele nu sunt egale')
} else {
   console.log('Variabilele sunt egale')
}

let temperature = 5;
let optimalTemperature = 25;

if (optimalTemperature > temperature) {
   console.log('Este placut afara');
} else {
   console.log('Este urat afara');
}

// Logical operators

// && - daca cel putin o conditie este falsa, totul este fals
// || - daca cel putin o conditie este adevrata, totul este adevarat

if (optimalTemperature >= temperature && temperature <= 35) {
   console.log('Este placut afara');
} else {
   console.log('Este urat afara');
}

let pizzaPrice = 40;
let hasGorgonzola = true;

if (pizzaPrice <= 30 || hasGorgonzola === true) {
// if (pizzaPrice <= 30 || hasGorgonzola) {
   console.log('Pizza isi merita banii')
} else {
   console.log('Pizza nu isi merita banii')
}

if (pizzaPrice <= 30 && hasGorgonzola === true) {
      console.log('Pizza isi merita banii')
   } else {
      console.log('Pizza nu isi merita banii')
   }

// Ternary operator -int 3 parti
// conditie ? valoare de adevar : valore in caz de fals

// let val1 = 5;
// let val2 = '5';

val1 === val2 ? 'Egale' : 'False'

// Functions

// Funcion declaration: function term + function name; si poate fi apelata functia oriunde
function logSomething() {
   console.log('Functia logSomething() a fost invocata/apelata (called)')
}

logSomething();

// Function expression
const doSomething = function() {
   console.log('Do something')
}

doSomething(); // nu se poate apela deasupra initializarei

// –––––––

// Arrow function

const doArrowFunction = () => {
   console.log('Do arrrow something')
}

doArrowFunction(); // nu se poate apela deasupra initializarei

// Function with params

let number = 8; // functia nu foloseste aceasta valoare

function addToSum(number) {
   let sum = 0;
   sum += number,
   console.log(`Rezultatul este ${sum}`)
}

addToSum(3);
addToSum(5);

const removeFrom100 = (number) => {
   console.log(`Rezultatul este ba${100-number}a`)
}

removeFrom100(20);
removeFrom100('Marcel'); // NaN
removeFrom100('5') // = 95 pentru ca number - string = number

function sendEmail(firstName, lastName, profession, result, exam) {
   let person;
   if (profession) {
      person = `${profession} ${lastName} ${firstName}`
   } else {
      person = lastName + firstName
   }

   console.log(`Salutare ${person}!
   Ai obtinut nota ${result} la exmenul ${exam}.
   Mult succes mai departe ${firstName}`)
}

// Parametri sunt pozitionali
sendEmail('Alin', 'Vasiliu','Student', 10, 'Bacalaureat')
sendEmail('Alin', 'Vasiliu','', 10, 'Bacalaureat')
sendEmail('Alin', 'Vasiliu',null, 10, 'Bacalaureat')