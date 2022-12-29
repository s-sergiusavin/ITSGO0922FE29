// Primitives:string, number, boolean, undefined, symbol, bigInt

// References: Objects: Array, functions, null;

// Numbers:
let myNumber = 5;
let secondNumber = 2;
let result;

result = myNumber + secondNumber;
result = myNumber - secondNumber;
result = myNumber / secondNumber;
result = myNumber * secondNumber;
result = myNumber % secondNumber;
// ** ridicarea la putere

// Strings

let myString = "Aceasta este un mesaj";
myString = "0\"heary";
myString = "";
// Template literals
myString = "Rezultatul este ${result}";

// Boolean

let lightsOn = true;

// Arrays
const myArray = [5, "4", true, null, [5,1],{name: "Cristine"}];
console.log(myArray[0]);
console.log(myArray[4][2]);
console.log(myArray[5].name);

// Objects

const myObj = {

    burger: "Big Tasty",
    juice: "Cola",
    "french-fries": "with fires",
    address: {
        street: "Street",
        number: 1
    },
    sauce: ["ketchup", "Mayo"]
}

console.log(myObj["french-fries"]);

// Loops (Bucle) - Structuri iterative

let marksOf10lei = 0;

marksOf10lei = marksOf10lei + 1;
marksOf10lei += 1;
marksOf10lei ++;
marksOf10lei +=3;  //se adauga 3 la valoarea precedenta
console.log(marksOf10lei);

let total = 10;

marksOf10lei = marksOf10lei + 1;
marksOf10lei = marksOf10lei + 1;
marksOf10lei = marksOf10lei + 1;

while (marksOf10lei < total) {
    marksOf10lei = marksOf10lei + 1;
}

console.log("Avem ${marksOf10lei} bancnote de 10 lei");

let roomTemprature = 18;
let desiredTemprature = 24;

while(roomTemprature < desiredTemprature){
    roomTemprature += 1;
}

let isAcOn = false;

// while(!isAcOn) {
//     roomTemprature += 1;
//     if (roomTemprature === 24){
//         isAcOn = true;
//     }
// }

//   // Do while loop

//   do {
//     // action
// } while ()


// For loop

let marksOf5lei = 0;
let totalOf5lei = 5;

// for (initializare,conditie, operatiune la finalul executiei iteratiei)

for (let index = 0; index < totalOf5lei; index ++){
    marksOf5lei += 1;
}

let countries = ["Romania", "Bulgaria", "Ucraina", "Turcia"];

console.log(countries [0]);
console.log(countries [1]);
console.log(countries [2]);
console.log(countries [3]);

debugger;

for (let i = 0; i < countries.length; i++){
    console.log(countries[1])
}

// If else -- conditional structures - blocks
// = inseamna o initializare
// == se verifica valoarea
// === se verifica valoarea si tipul variabilei
// ! inseamna diferit

let val1 = 5;
let val2 = "5";

// Truthy vs Falsy values 
// Falsy: 0, "", false, undefined, null

if ( val1 === val2) {
    console.log ("Variabilele nu sunt egale");
}   else {
    console.log("Variabilele sunt egale");
}

let temperature = 5;
let optimalTemperature = 25;

if(optimalTemperature < temperature) {
    console.log("Este urat afara");
} else {
    console.log("Este placut afara");
}

// Logical operators

// && - daca cel putin o conditie este falsa, totul este fals
//  || - daca cel putin o conditie este adevarata, totul este adevarata

if (temperature >= optimalTemperature && 35){
    console.log("Este placut afara");
} else {
    console.log("Este urat afara");
}

let pizzaPrice = 40;
let hasGorgonzola = true;

if (pizzaPrice <= 30 || hasGorgonzola === true) {
    // if (pizzaPrice <= 30 || hasGorgonzola)
    console.log("Pizza isi merita banii")
} else {
    console.log("Pizza nu isi merita banii")
}



if (pizzaPrice <= 30 && hasGorgonzola === true) {
    // if (pizzaPrice <= 30 || hasGorgonzola)
    console.log("Pizza isi merita banii")
} else {
    console.log("Pizza nu isi merita banii")
}


// Ternary operator- sunt 3 parti
// conditie ? valoare de adevar : valoare in caz de fals

// let val1 = 5;
// let val2 = "5";

val1 === val2 ? "Egale" : "False";

// Functions
// functions declaration: function term + function name

function logSomething() {
    console.log("Functia logSomething() a fost invocata/apelata (called)");
}

// ca o functie sa fie apelata facem:

logSomething();

// Function expression

const doSomething = function(){
  console.log("Do something");
}

// ....

// Arrow function

const doArrowfunction = () => {
    console.log("Do arrow something");
}

doArrowfunction();

// Function with params
let number = 8;

function addToSum(number) {
    let sum = 0;
    sum += number; // sum = sum + number;
    console.log("Rezultatul este ${sum}")
}
addToSum(3);
addToSum(5);

const removeFrom100 = () => {
    console.log("Rezultatul este ${100-number}");
}

removeFrom100(20);
removeFrom100("Marcel");

function sendEmail(firstName, lastName, proffesion, result, exam){
    let person;
    if (proffesion) {
        person = proffesion + lastName + firstName;
    } else {
        person = lastName + firstName;
    }

    console.log("Salutare ${person}! Ai obtinut nota ${result} la examnul ${exam}.Mult succes mai departe ${firstName} ");
}

// Parametrii sunt pozitionali

sendEmail("Cristine", "Kovacs","student", 10, "bacalaureat");



