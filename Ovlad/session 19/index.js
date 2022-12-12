//primitives: string, number, boolean, undefined, symbol, bigInt
//references: objects: array, functions, null

//numbers

let myNumber = 5;
let secondNumber = 2;
let result;

result = myNumber + secondNumber;
result = myNumber - secondNumber;
result = myNumber / secondNumber;
result = myNumber * secondNumber;
result = myNumber % secondNumber;
//** ridicare la putere

//strings

let myString = "acesta este un mesaj";
myString = 'O\' heary';
myString ='';


//template literals
myString = `rezultatul este ${result}`;

//boolean
let lightsOn = true;

//arrays
const myArray = [5, '4', true, null, [5,1], {name:'Vlad'}];
console.log(myArray[0]);
console.log(myArray[4][1]);
console.log(myArray[5].name);

//objects
const myObj = {
    burger: 'big tasty',
    juice: 'cola',
    'french-fries': 'with fries',
    address: {
        street: 'street',
        number: 1
    },
    sauce: ['ketchup', 'mayo']
}

console.log(myObj["french-fries"]);

// loops (bucle) - structuri interactive

let marksOf10lei = 0;

marksOf10lei = marksOf10lei + 1;
marksOf10lei += 1;
marksOf10lei ++;
marksOf10lei +=3; //se adauga 3 la valoarea precedenta
console.log(marksOf10lei);

let total = 10;

marksOf10lei = marksOf10lei +1;
marksOf10lei = marksOf10lei +1;
marksOf10lei = marksOf10lei +1;

while (marksOf10lei < total) {
    marksOf10lei = marksOf10lei +1;

}
console.log('avem ${marksOf10lei} bancnote de 10 lei');

let roomTemperature = 18;
let desiredTemperature = 24;
while (roomTemperature < desiredTemperature) {
    roomTemperature += 1;
}

let isAcOn = false;

// while (!isAcOn) {
//     roomTemperature += 1;
//     if (roomTemperature === 24) {
//         isAcOn = true;
//     }
// }

//do while loop

// do {
//     //action
// } while ()

// for loop

let marksOf5lei = 0;
let totalOf5lei = 5;

//for(initializare; conditie; operatiune la finalul executiei iteratiei)

for (let index = 0; index <totalOf5lei; index++) {
marksOf5lei +=1;
}

let countries = ['Romania', 'Bulgaria', 'Ucraina', 'Turcia'];

console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i])
}

// if else -- conditional structures - blocks

let val1 = 5;
let val2 = '5';


//== verifica valoarea
//=== verifica valoarea si tipul variabilei

if (val1 == val2) {
    console.log('variabilele sunt egale');
} else {
    console.log('variabilele nu sunt egale');
}

// truthy vs falsy values
// falsy: 0, '', false, undefined null, 

if (val1 !== val2) {
    console.log('variabilele nu sunt egale');
} else {
    console.log('variabilele sunt egale');
}

let tempetarute = 6;
let optimalTemperature = 25;

if (optimalTemperature > tempetarute) {
console.log('este urat afara');
} else {
    console.log('este placut afara');
}

//logical operators

//&& = daca cel putin o conditie o sa fie falsa, totul este fals
//|| = daca cel putin o conditie este adevarat, totul este adevarat

if (tempetarute => optimalTemperature && tempetarute <= 35) {
    console.log('este placut afara');
    } else {
        console.log('este urat afara');
    }

    let pizzaPrice = 40;
    let hasGorgonzola = true;

    if (pizzaPrice <= 30 || hasGorgonzola === true) {
        //if (pizzaPrice <= 30 || !hasGorgonzola)
        console.log('pizza isi merita banii');
    } else {
        console.log('pizza nu isi merita banii');
    }

    // ternary operator
// conditie > valoare de adevar : valoare in caz de fals

//     let val1 = 5;
// let val2 = '5';

val1 === val2 ? 'egale' : 'false';

//functions

//function declaration: function term + function name
function logSomething() {
    console.log('functia logSomething()a fost invocata/apelata');
}

logSomething();

//function expression
const doSomething = function() {
    //do something 
console.log('do something');
}

//-------

//arror function

const doArrowFunction = () => {
    //do something
    console.log('do arrow something');
}
doSomething()
doArrowFunction()

//function with params

let number = 8;

function addToSum(number) {
    let sum = 0;
    sum += number; //sum = sum + numver;
    console.log(`rezultatul este ${sum}`)
}
addToSum(3);
addToSum(5);

const removeFrom100 = (number) => {
    console.log(`rezultatul este ${100 - number}`);
}
removeFrom100(20);
removeFrom100('marcel');
removeFrom100('5');

function sendEmail(firstName, lastName, proffession, result, exam) {
    let person;
    if (proffession) {
        person = proffession +lastName + firstName;
    } else {
        person = lastName + firstName;
    }

    console.log(`salutare ${person}!
    ai obtinut nota ${result} la examenul ${exam}.
    mult succes mai departe ${firstName}!`);
}
//parametrii sunt pozitionali
sendEmail('vlad', 'onofrei', 'gamer', 10, 'bacalaureat');
sendEmail('vlad', 'onofrei', '', 10, null);