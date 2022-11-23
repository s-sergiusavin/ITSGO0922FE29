//Primitives: number string boolean undefined symbol bigInt
//references: objects: array, functions,null

//Number

let myNumber = 5;
let secondNumber = 2;
result = myNumber + secondNumber;
result = myNumber - secondNumber;
result = myNumber / secondNumber;
result = myNumber * secondNumber;
result = myNumber % secondNumber;
// ** ridicarea la putere

//strings
let myString = "Acesta este un mesaj";
myString = "O'heary";
myString = "";
//Template literals
myString = `Rezultatul este ${result}`;

//boolean
let lightOn = true;
//99% din cazurile in care folosesc booleans valoarea va trebui schimbata deci preponderent folosesc let

//Arrays
const myArray = [5, "4", true, null, [5, 1], { name: "Sergiu" }];
console.log(myArray[0]);
console.log(myArray[4][1]);
console.log(myArray[5].name);

//Objects

const myObj = {
  burger: "Big Tasty",
  juice: "Cola",
  "french-fries": "with fries",
  address: {
    street: "street",
    number: 10124,
  },
  sauce: ["Ketchup", "Mayonnaise"],
};

console.log(typeof myObj.address.number);
console.log(myObj["french-fries"]);

//loops = structuri iterative
let marksOf10lei = 0;

// marksOf10lei = marksOf10lei + 1;
marksOf10lei += 1;
// +1 === ++
marksOf10lei++;
//marksOf10lei+=3; // se adauga 3 la valoare

let total = 10;

// while (marksOf10lei < total) {
//   marksOf10lei = marksOf10lei + 1;
// }
// console.log(`Avem ${marksOf10lei} bancnote de 10 lei`);

// // alt ex

// let roomTemperature = 18;
// let desiredTemperature = 24;

// while (roomTemperature < desiredTemperature) {
//   roomTemperature += 1;
// }
// //alt ex

// let isAcOn = false;
// while (!isAcOn) {
//   roomTemperature += 1;
//   if (roomTemperature === 24) {
//     isAcOn = true;
//   }
// }

//Do while loop
// do{
//action
// }while(){
// }
// este o bucla infinita pe aici
//for loop

let marksOf5lei = 0;
let totalOf5lei = 5;

// for(initializare;conditie; operatiune la finalul executiei iteratiei){}

for (let index = 0; index < totalOf5lei; index++) {
  marksOf5lei += 1;
}

let countries = ["romania", "bulgaria", "ucraina", "turcia"];
//debugger;
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

// conditionals
// if else -- conditional structures - blocks
let val1 = 5;
let val2 = "5";

if ((val1 = val2)) {
  console.log(`variabilele sunt egale`);
} else {
  console.log(`Nu sunt egale `);
}

// truthy vs falsy values
//cat de cat adevarate sau false
// falsy: 0, '',false,undefined,null   (astea-s valori falsy, oricealtcv sunt truthy);

//1 singur egal inseamna doar ca am initializat elementul
//2 egal = verifica valoarea
//3 egal = se verifica valoarea si tipul variabilei - foloseste intotdeauna ===!!!!!!!!!!!!!!!!!

if (val1 !== val2) {
  console.log(`variabilele nu sunt egale`);
} else {
  console.log(`sunt egale `);
}

// != diferit dar nu verifica si tipul ( ca la ==)
// !== diferit ( pe asta sa il folosesti mereu)

let temperature = 34;
let optimalTemperature = 25;

if (optimalTemperature > temperature && temperature <= 35) {
  console.log(`este placut afara`);
} else {
  console.log(`este urat afara`);
}

// codul de sus e prost  nu are logica dar mna
//seteaza intervale
// trebuie sa ma gandesc la toate exceptiile care pot aparea in cazul conditiilor

//logical operators

// && and  - daca cel putin o conditie este falsa, totul este false
// || or   - daca cel putin o conditie este adevarata, totul este adevarat

//pizza ex

let pizzaPrice = 40;
let hasGorgonzola = true;
//debugger;
if (pizzaPrice <= 30 || hasGorgonzola === true) {
  // if (pizzaPrice <= 30 || hasGorgonzola ) - same value  ; !hasGorgonzola=false
  console.log(`pizza isi merita banii`);
} else {
  console.log(`Pizza nu isi merita banii`);
}

if (pizzaPrice <= 30 && hasGorgonzola === true) {
  console.log(`pizza isi merita banii`);
} else {
  console.log(`Pizza nu isi merita banii`);
}

//ternary operator

// let val1 = 5;
// let val2 = "5";

// 3 parti
//conditie?valoare de adevar:valoare in caz de fals;
console.log(val1 === val2 ? "egale" : "nu-s egale");
////??????????????????????????????????????? de ce imi da egal

//Functions

function logSomething() {
  console.log(`functia logSomething() a fost invocata/apelata (called)`);
}

logSomething();

//function declaration: function term+function name
//pot fi apelate si inainte de a initializa functia
function logSomething() {
  console.log(`functia logSomething() a fost invocata/apelata (called)`);
}

//Function expression

const doSomething = function () {
  //do something
  console.log(`do something`);
};

// function expression nu o pot apela inaintea functiei propriu zise
//-------------------------------------

//Arrow function
// nu o pot apela inaintea initializarii sale
const doArrowFunction = () => {
  //do something
  console.log(`Do arrow something`);
};
//
doSomething();
doArrowFunction();

//Exercitii

// Function with params

let number = 8; // nu are treaba cu parametrul definit mai jos

function addToSum(number) {
  let sum = 0;
  sum += number; // sum=sum+number;
  console.log(`Rezultatul este ${sum}`);
}

addToSum(3);
addToSum(5);

const removeFrom100 = (number) => {
  console.log(`rezultatul este ${100 - number}`);
};

removeFrom100(20);

//Alt exercitiu
//5+"5" rezulta "10" face concatenare adica string
// 10="5" rezulta 5 adica number !!!!de verificat

function sendEmail(firstName, lastName, profession, result, exam) {
  let person;
  if (profession) {
    person = profession + lastName + firstName;
  } else {
    person = lastName + firstName;
  }
  console.log(`salutare ${person}!
Ai obtinut nota ${result} le examenul ${exam}.
Mult succes mai departe ${firstName}`);
}
//parametrii sunt pozitionali, daca omit unul ii ia pe cel atribuit pozitiei sale(cel mai probabil unul gresit)
sendEmail("Ovidiu", "Nicolaescu", "student", 10, "bacalaureat");
sendEmail("Ovidiu", "Nicolaescu", "", 10, "bacalaureat");
sendEmail("Ovidiu", "Nicolaescu", null, null, "bacalaureat");
