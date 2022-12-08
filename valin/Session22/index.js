/**
 * Array methods/functions
 */

let array = [1, 2, 3, "4", 5];

console.log(array.length);

array[1] = 100;
array[10] = 100; // imi creaza spatii goale pana pe pozitia 10

/**
 * Adaugare sau stergere elemente intr-un array la final : push & pop
 */

array.push(6);

/**
 * Adaugare sau stergere elemente la inceputului unui array: unshift & shift
 */

/**
 * Array iterations
 */

for (let i = 0; i < array.length; i++) {
  // console.log(array[i]);
}

/**
 * forEach() method
 */

// array.forEach( function () {} );
// array.forEach( () => {} );

// function itterateArray(element) {
//    console.log(element);
// }

// array.forEach( itterateArray );

array.forEach((element) => {
  console.log(element);
});

// Bad example! Not working!
let newArray = array.forEach((element) => {
  return (element += 1);
});

console.log(newArray);

/**
 * .map() method => creates new array
 */

newArray = array.map((element) => {
  return (element += 1);
});

console.log(newArray);

/**
 * .indexof() => indexul unui element
 */

console.log(array.indexOf(3));
array[array.indexOf(3)] = 7;

/**
 * Copy array elements
 */

const arrayCopy = array; // copiaza tot array-ul
console.log(array);

arrayCopy[0] = "zero";

/**
 * .slice() method
 */

arrayCopy = array.slice(2); // copiaza toate elementele unui array incepand cu o pozitie specificata
arrayCopy = array.slice(2, 5); // copiaza toate elementele unui array intre indexurile specificate (cel de-al doilea nu e inclus)

/**
 * .splice() method - cut elements
 */

// let changedArray = array.splice(2) // decupeaza elementele unui array incepadn cu posizia specificata
// let changedArray = array.splice(1, 2); // decupeaza elementele unui array specificand posizia initiala si numarul de elemente ce vor fi sterse
 
/**
 * Filtering array elements
 * .filter()
 * Rreturneaza un now array cu valorile care indeplinesc conditia
 * NU modifica arrayul initial
 */

console.log(array.filter( (element) => {
   return element > 3;
} )
);

const filteredArray = array.filter( (element) => {
   return element > 2;
} );

console.log(filteredArray);

/**
 * .reverse()
 * Reverse array
 * MODIFICA arrayul initial
 */

array.reverse();
console.log(array);

/**
 * Concatenaria sau imbinarea arrayurilor
 * .concat()
 */

const concatArray = ['add', 'me'];
console.log(array.concat(concatArray));

/**
 * Transforma array into string
 */

let arrayToString = array.join();
console.log(arrayToString);

/**
 * .reduce()
 * Reduce array
 */

const arrayToReduce = [1, 2, 3, 4];
const reducedArray  = arrayToReduce.reduce( (total, value) => {
   return total + value;
} );

console.log(reducedArray);

/**
 * Sorting an array
 * .sort() // mai intai pune caracterele speciale, cifrele apoi cuvintele in ordin alfabetic
 */

const arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4, 'asd', 'aac', 'sum']; 

// const sortedArray = arrayToSort.sort(); // by default nu sorteaza crescator numerele (sortare alfamnumerica)

const sortedArray = arrayToSort.sort( (a,b) => {
   // return a - b; crescator
   return b - a; // decrescator
} )

console.log(sortedArray);

/**
 * .find()
 * Find element
 */

const arrayToFind = [
   {name: 'Alin', city: 'Beijing'},
   {name: 'Andrei', city: 'Hong Kong'},
   {name: 'Roxana', city: 'New York'},
   {name: 'Sergiu', city: 'Hong Kong'},
   {name: 'Andrei', city: 'Taipei'},
];

// const foundElem = sortedArray.find((element) => {
//    return element === 1024;
// })

// console.log(foundElem); // aici imi returneaza 1024

// const foundElem = arrayToFind.find ( (element) => {
//    return element.name === 'Andrei'; // metoda e mai utila pentru ca imi returneaza tot obiectul si nu numai elementul cautat
// });

// Arrow function
// Daca avem un singur paramentru, parantezele rotunde sunt otionale
// Daca se scrie pe un singur rand si este o singura expresie, parantezele acolade sunt optionale 
// si returnul este implicit

const foundElem = arrayToFind.find ( element => element.name === 'Andrei');

function test1() {
   function test2() {
      function test3() {
         function test4() {

         }
      }
   }
}

/**
 * Includes method
 * .include()
 */

let includedElem = sortedArray.includes(200);
console.log(includedElem);

/**
 * Objects
 */

const createPerson = (name, age, gender) => {
   return {
      firstName : name,
      age : age, // age era sufuciet
      gender // gender : gender
   }
}

const alin = createPerson('Alin', 28, 'male');
const raluca = createPerson('Raluca', 19, 'female');

console.log(alin);

/**
 * Create object literal method
 */

const persona = {
   name: 'Sergiu',
   lastName: 'Vasiliu',
   age: 28,
   adress: {
      city: 'Schio',
      zipcode: 36015
   },
   hobbies: ['travel', 'snowboard', 'reading'],
   sayHi: function() {
      console.log('Hi')
   },
   sayHiArrow: () => {
      console.log('Hello')
   },
   sayHiProperty() {
      console.log('Hey')
   }
}

