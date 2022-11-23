// //Primitives: string, number, boolean, undefined, symbol, bigInt
// //References: Objects: Arrays, functions, null

// //Numbers

// let myNumber = 5;
// let secondNumber = 2;
// let result;

// result = myNumber + secondNumber;
// result = myNumber - secondNumber;
// result = myNumber / secondNumber;
// result = myNumber * secondNumber;
// result = myNumber % secondNumber;
// //ridicarea la putere

// //String

// let myString = "Acesta este un mesaj";
// myString = '0/string';
// myString = '';
// //Template literals

// myString = `Rezultatul este ${result}`;

// //Boolean

// let lightsOn = true;

// //Arrays

// const myArray = [5, '4', true, null, [5,1], {name: 'Raul'}];
// console.log(myArray[0]);
// console.log(myArray[4][1]);
// console.log(myArray[5].name);

// //Objects

// const myObj = {
//     burger: 'big tasty';
//     juice: 'Cola';
//     'french-fries': 'with fries';
//     adress: {
//         street: 'Street',
//         number: 1
//     },
//     sauce: ['ketchup', 'mayo']
// };

// let temperature = 5;
// let optimalTemperature =25;

// if (optimalTemperature > temperature) {
//     console.log('Este placut afara');
// } else {
//     console.log('Este urat afara');
// }

function sendEmail(firstName, lastName, proffesion, result, exam) {
    let person;
    if(proffesion) {
        person = proffesion + lastName + firstName;
    } else {
        person = lastName + firstName;
    }

    console.log(`salutare ${person}
    Ai obtinut nota ${result} la examenul ${exam}.
    Mult succes mai departe ${firstName}!`);
}
sendEmail('Sergiu', 'Savin', 'student' 10, 'bacalaureat');