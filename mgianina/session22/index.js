// Array Methods/ Functions

let array = [1, 2, 3, "4", 5];

// console.log(array.length);

// array[1] = 100;
// array[10] = 11;

// console.log(array);

//1.Adaugare sau stergere elemente vom folosi: push & pop

// array.push(6);
// console.log(array.push(61));
// console.log(array);

// console.log(array.pop());

//2.se pot adauga sau sterge elemente la inceputul unui array : unshift(adaugare) si shift(pentru a sterge un element)

// console.log(array.unshift("zero")); //ne returneaza leght ul
// console.log(array.shift());
// console.log(array);

//Array iteration:

for (i = 0; i < array.length; i++) {
  //console.log(array[i]);
}

//3.forEach() method

// array.forEach( function () {});
//array.forEach( () => {} );
//array.forEach( itterateArray );

// function itterateArray(element) {

//     console.log(element);
// }

array.forEach((element) => {
  // console.log(element);
});

//Bad exemple! Not working!!!!
let newArray = array.forEach((element) => {
  return (element += 1);
});

console.log("forEach method:", newArray);

//4.Map() method => create a new array

newArray = array.map((element) => {
  return (element += 1);
  //este obligatoriu return pentru a returna rezultatele dorite
});

//  console.log(newArray);

// 5. indexOf => returneaza indexul unui element; !!! Il returneaza intotdeauna pe primul element gasit
console.log(array);
console.log("........................")
//daca avem un element care nu exista in array,ne returneaza -1 (ne putem folosi de indexOf pentru a vedea daca un element exista intr un array)
 console.log(array.indexOf(3));

//  array[2] = 7;

//  array[array.indexOf(3)] = 7;

//Copy array element

let arrayCopy = array; //copiaza tot arrayul

console.log(array);

arrayCopy[0] = "zero";

console.log(arrayCopy);
console.log(array);

//5.slice() method: returneaza o copie(originalul nu este modificat) -shallow copy

arrayCopy = array.slice(2); //Copiaza toate elementele unui array incepand cu o pozitie specificata
arrayCopy = array.slice(2, 5); //Copiaza toate elementele unui array intre indexurile specificate(cel de-al doilea nu este inclus)

console.log(arrayCopy);
console.log(array);

//6.splice() method => cut elements

// let changedArray = array.splice(2); //decupeaza elementele unui array incepand cu pozitia specificata

// let changedArray = array.splice(1, 2); //decupeaza elementele unui array specificand pozitia initiala si numarul de elemente ce vor fi sterse

console.log(array);
// console.log(changedArray);

//Filtering array elements
//.filter()
//Returneaza un nou array cu valorile care indeplinesc conditia
//NU modifica array ul initial

// console.log(array.filter( (element) => {
//     return element > 3;
// }));

const filteredArray = array.filter((element) => {
  return element > 2;
});
// console.log(filteredArray);

/**
 * .reverse()
 * Reverse array
 *  MODIFICA ARRAY UL INITIAL
 */

array.reverse();
// console.log(array);

/**
 * Concatenarea(imbinarea) array urilor
 * .concat()
 * returneaza un nou array,nu modifica array urile initiale
 */

const concatArray = ["add", "me"];
//  console.log(array.concat(concatArray));

//  console.log(array);

/**
 * Transform array into string
 */

// let arrayToString = array.join();
// let arrayToString = array.join('');
let arrayToString = array.join("*");
console.log(arrayToString);

/**
 * .reduce()
 * Reduce array
 * pornim cu un array si ajungem sa avem o singura valoare,folosindu-ne de o operatie
 */

const arrayToReduce = [1, 2, 3, 4];

const reducedArray = arrayToReduce.reduce((total, value) => {
  // const reducedArray = arrayToReduce.reduce( (acc, value) => {
  return total + value;
});
console.log(reducedArray);

//total-primul element din array
//value-urmatoarea valoare care se aduna la total;
//acc-accumulator

/**
 * Sorting an array
 * .sort()
 * sortare alfanumerica
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
// const sortedArray = arrayToSort.sort();//by default nu sorteaza crescator numerele

const sortedArray = arrayToSort.sort((a, b) => {
  // return a - b;
  return b - a; //sorteaza descrescator
});

console.log(sortedArray);

/**
 * .find()
 * Find element
 * ne returneaza primul element dintr un array care satisface conditia,daca nici unul nu satisface
 * returneaca undefined
 * returneaza elementul cu totul
 */

const arrayToFind = [
  { name: "Alin", city: "Beijing" },
  { name: "Andrei", city: "Honk Kong" },
  { name: "Roxana", city: "New York" },
  { name: "Sergiu", city: "Honk Kong" },
  { name: "Andrei", city: "Taipei" },
];

// const foundElem = sortedArray.find( (element) => {
//     return element === 1024
// });

//  const foundElem = arrayToFind.find((element) => {
// return element.name === "Andrei";
// });

// console.log(foundElem);






//EXLUSIV VALABIL PENTRU ARROW FUNCTION!!!!!!
//Daca avem un singur parametru , parantezele rotunde sunt optionale la arrow function(pot sa lipseasca)
//Daca se scrie pe un singur rand si este o singura expresie,parantezele acolade sunt optionale si return ul este implicit

const foundElem = arrayToFind.find((element) => element.name === "Andrei");

console.log(foundElem);







//Numerotati parantezele
function test1() {
  function test2() {
    function test3() {
      function test4() {

      }
    }
  }
}





/**
 * Includes
 * ne returneaza daca e adevarat sau fals(daca un elem. se gaseste sau nu intr un array)
 */

let includedElem = sortedArray.includes(2001);
console.log(includedElem);


//find //reduce/ forEach /map


/**
 * Objects
 */

const createPerson = (name, age, gender) => {
    return {
        firstName: name,
        age: age, //age era suficient!!
        gender //gender: gender 
    }
}

const sergiu = createPerson("Sergiu", 25, "male");
const raluca = createPerson("Raluca", 19, "female");
console.log(sergiu);

/**
 * Create objects using OBJECT LITERAL  method
 */


const person = {
    name: "Sergiu",
    lastName: "Savin",
    age: 23,
    adress: {
        city: "Taipei",
        zip: 50500
    },
    hobbies: ["travel", "reading", "swiming"],
    sayHi: function () {
        console.log("Hi " + this.name )
    },
    sayHiArraw: () => {
        // console.log("Hello " + this.lastName); NU FUNCTIONEAZA
    },
    sayHiProperty() {
        console.log("Hey " + this.lastName);
    }
};

person.name ="Alexandru";
console.log(person);


person.adress.city = "City";

person.hobbies.push("ski");
console.log(person.hobbies);

person.sayHi();
person.sayHiProperty();
person.sayHiArraw();

//particularitati arrow function: THIS nu functioneaza la arrow function .




























// //Exercises

// //1.Filter
// let newNumbers = [3, 23, 4, 15, 7, 8, 10];

// let numberFiltred = newNumbers.filter((number) => {
//   return number > 10;
// });
// console.log(numberFiltred);

// //2.Find-ne returneaza primul numar care trece de conditia implementata prin functie,nu modifica array ul initial
// //daca nici unul din elemente nu satisface conditia,rezultatul este undefined

// let numberFind= newNumbers.find(number => number > 5);
// console.log("First number finded:", numberFind);

// //3.findIndex: ne returneaza indexul primului element care indeplineste conditia implementata de o functie
// //daca nici un element nu este gasit,ne returneaza -1;

// let numberFindIndex = newNumbers.findIndex(number => number > 2);
// console.log("Index finded:", numberFindIndex);

// //4.Join: ne returneaza elementele unui array separate prin virgula sau printr-un separator specificat

// let numberJoin = newNumbers.join("*");
// console.log(numberJoin);

// //5.toString: se comporta ca si join,ne returneaza elementele unui array ,separate de virgula
// //nu modifica array ul initial

// let numberString = newNumbers.toString();
// console.log(numberString);

// //6.forEach:
// let sum = 0;
// let numberForEach = [2, 4, 6, 9, 14];
// numberForEach.forEach((element) => {
//   console.log("forEach elements:", element);
// });

// function numberFunction(number) {
//   return(sum += number )
// };
// numberForEach.forEach(numberFunction)
// //7.










