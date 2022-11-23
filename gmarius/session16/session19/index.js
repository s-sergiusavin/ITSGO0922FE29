// Primitives: string, number, boolean, undefined, symbol, bigInt
// References: Objects: Array, functions, null

// Numbers

let myNumber = 5;
let secondNumber = 2;
let result;

result = myNumber + secondNumber;
result = myNumber - secondNumber;
result = myNumber / secondNumber;
result = myNumber * secondNumber;
result = myNumber % secondNumber;
// ** ridicare la putere

// Strings

let mystring = "Acesta este un mesaj";
myString = "O'heary";
myString = "";
// Template literals
myString = "Rezultatul este ${result}";

// Boolean

let lightsOn = true;

// Arrays

const myArray = [5, "4", true, null, [5, 1], { name: "Marius" }];
console.log(myArray[0]);
console.log(myArray[4][1]);
console.log(myArray[5].name);

// Objects

const myObj = {
  burger: "Big Tasty",
  juice: "Cola",
  "french-fries": "With fries",
  address: {
    street: "Street",
    number: 1,
  },
  sauce: ["Ketchup", "Mayo"],
};

console.log(myObj["french-fries"]);

// Loops - Structuri iterative

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

let roomTemperature = 18;
let desiredTemperature = 24;

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

//    // Do while loop

//    do {
//      // action
//    } while ()

// For loop

let marksOf5lei = 0;
let totalOf5lei = 5;

// for (initializare; conditie; operatiune la finalul executiei iteratiei)

for (let index = 0; index < totalOf5lei; index++) {
  marksOf5lei += 1;
}

let countries = ['Romania', 'Bulgaria', 'Ucraina', 'Turcia'];

console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);

for ( let i = 0; i < countries.length; i++) {
    console.log(countries[i])
}

// If else -- conditional structures - blocks

let val1 = 5;
let val2 = '5';

if (val1 = val2) {
    console.log('Variabilele sunt egale');
} else {
    console.log('Variabilele nu sunt egale');
}

// Truthy vs Falsy values
// 
