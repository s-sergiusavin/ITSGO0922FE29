/**
 * Array Methods/Functions
 */

let array = [1, 2, 3, "4", 5];

// console.log(array.length);

// array[1] = 100;
// array[10] = 11;

// console.log(array);

/**
 * Adaugare sau stergere elemente intr-un array la final: push & pop
 */

// array.push(6);
// console.log(array.push(61));
// console.log(array);

// console.log(array.pop());

/**
 * Adaugarea sau stergerea elementelor la inceputul unui array: unshift & shift
 */

// console.log(array.unshift('zero'));
// console.log(array.shift());

// console.log(array);

/**
 * Array iterations
 */

for (i = 0; i < array.length; i++) {
  // console.log(array[i]);
}

/**
 * forEach() method
 */

// array.forEach( function () {} );
// array.forEach( () => {} );
// array.forEach( itterateArray );

// function itterateArray(element) {
//     console.log(element);
// }

array.forEach((element) => {
  // console.log(element);
});

// Bad example! Not Working!
let newArray = array.forEach((element) => {
  return (element += 1);
});

// console.log(newArray);

/**
 * .map() method => creates new array
 */

newArray = array.map((element) => {
  return (element += 1);
  // element += 1; // e obligatoriu return pt a returna rezultatele dorite
});

//  console.log(newArray);

/**
 * .indexOf => returneaza indexul unui element
 */
console.log(array);
 console.log('------------------');
 console.log(array.indexOf(30));

//  array[2] = 7;
//  array[array.indexOf(3)] = 7;

/**
 * Copy array elements
 */

let arrayCopy = array; // copiaza tot arrayul
console.log(arrayCopy);

arrayCopy[0] = "zero";

console.log(arrayCopy);
console.log(array);

/**
 * .slice() method
 */

arrayCopy = array.slice(2); // copiaza toate elementele unui array incepand cu o pozitie specificata
arrayCopy = array.slice(2, 5); // copiaza toate elementele unui array intre indexurile specificate ( cel de-al doilea nu e inclus)

console.log(arrayCopy);
console.log(array);

/**
 * .splice() - cut elements
 */

// let changedArray = array.splice(2) // decupeaza elementele unui array incepand cu pozitia specificata
// let changedArray = array.splice(1, 2); // decupeaza elementele unui array specificand pozitia initiala si numarul de elemente ce vor fi sterse

console.log(array);
// console.log(changedArray);

/**
 * Filtering array elements
 * .filter()
 * Returneaza un nou array cu valorile care indeplinesc conditia
 * NU modifica arrayul initial
 */

// console.log(
//   array.filter((element) => {
//     return element > 3;
//   })
// );

const filteredArray = array.filter((element) => {
  return element > 2;
});

//   console.log(filteredArray);

/**
 * .reverse()
 * Reverse array
 * MODIFICA arrayul initial
 */

array.reverse();
console.log(array);

/**
 * Concatenarea sau imbinarea arrayurilor
 * .concat()
 */

const concatArray = ["add", "me"];
console.log(array.concat(concatArray));

/**
 * Transform array into string
 */

//   let arrayToString = array.join();
//   let arrayToString = array.join('');
let arrayToString = array.join(" x * x ");
console.log(arrayToString);

/**
 * .reduce()
 * Reduce array
 */

const arrayToReduce = [1, 2, 3, 4];
const reducedArray = arrayToReduce.reduce((total, value) => {
  //   const reducedArray = arrayToReduce.reduce( (acc, val) => {
  return total + value;
});

console.log(reducedArray);

/**
 * Sorting ar array
 * .sort()
 */

const arrayToSort = [
  1,
  7,
  200,
  34,
  -8,
  1024,
  855,
  11.4,
  "asd",
  "aac",
  "sum",
  "!df",
];

//   const sortedArray = arrayToSort.sort(); // by default nu sorteaza crescator numerele

const sortedArray = arrayToSort.sort((a, b) => {
  // return a - b;
  return b - a; // sorteaza descrescator
});

console.log(sortedArray);

/**
 * .find()
 * Find element
 */

const arrayToFind = [
  { name: "Alin", city: "Beijing" },
  { name: "Andrei", city: "Hong Kong" },
  { name: "Roxana", city: "New York" },
  { name: "Sergiu", city: "Honk Kong" },
  { name: "Andrei", city: "Taipei" },
];

// const foundElem = sortedArray.find( (element) => {
//     return element === 1024
// });

// const foundElem = arrayToFind.find( (element) => {
//     return element.name === 'Andrei';
// });

// console.log(foundElem);

// EXCLUSIV valabil pt arrow function
// Daca avem un singur parametru, parantezele rotunde de la arrow function sunt optionale ( pot sa lipseasca)
// Daca se scrie pe un singur rand si este o singura expresie, parantezele acolade sunt optionale
// si returnul este implicit

const foundElem = arrayToFind.find((element) => element.name === "Andrei");

console.log(foundElem);

// Numerotati parantezele
function test1() {

    function test2() {
        function test3() {
            function test3() {
                
            }
        }
    }

}

/**
 * Includes
 */

let includedElem = sortedArray.includes(2001);
console.log(includedElem);

/**
 * Objects
 */

const createPerson = (name, age, gender) => {
    return {
        firstName: name,
        age: age, // age era suficient
        gender // gender: gender
    }
}

const sergiu = createPerson('Sergiu', 25, 'male');
const raluca = createPerson('Raluca', 19, 'female');

console.log(sergiu);

/**
 * Create objects using OBJECT LITERAL method
 */

const person = {
    name: 'Sergiu',
    lastName: 'Savin',
    age: 23,
    address: {
        city: 'Taipei',
        zip: 500500
    },
    hobbies: ['travel', 'reading', 'swimming'],
    sayHi: function() {
        console.log('Hi ' + this.name );
    },
    sayHiArrow: () => {
        // console.log('Hello' + this.lastName); // nu functioneaza
    },
    sayHiProperty() {
        console.log('Hey' + this.lastName);
    }
};

person.name = 'Aelex';
person.address.city = 'City';
person.hobbies.push('ski');
console.log(person.hobbies);
person.sayHi();
person.sayHiArrow();
person.sayHiProperty();