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

// console.log(array.unshift("zero"));
// console.log(array.shift("zero"));

// console.log(array);

/**
 * Array iterations
 */

for (i = 0; i < array.length; i++){
    //console.log(array[i]);
}

/**
 * forEach() method
 */

// array.forEach( () => {} );

// array.forEach(function (){});

// array.forEach(itterateArray);

// function itterateArray(element){

//     console.log(element);
// }

array.forEach( (element) => {
    console.log(element);
});

//Bad example ! Not working!

let newArray = array.forEach( (element) => {
  return element += 1;
});
 
console.log(newArray);


/**
 * .map() method => creates new array
 */

newArray = array.map((element) => {
    return element += 1;
    // element += 1; // e obligatoriu return pt a returna rezultatele dorite
});

// console.log(newArray);

/**
 * .indexOf => returneaza indexul unui element
 */

console.log(array);
console.log("---------------");
console.log(array.indexOf(30));

// array[2] = 7;
// array[array.indexOf(3)] = 7;

/**
 * Copy array elements
 */

const arrayCopy = array; //copiaza tot array-ul


arrayCopy[0] = "zero";
console.log(arrayCopy);
console.log(array);

/**
 * .slice() method
 */

// arrayCopy = array.slice(2); //copiaza toate elementele unui array cu o pozitie specificata
// arrayCopy = array.slice(2, 5); //copiaza toate elementele unui array intre index-urile specificate (cel de-al doilea nu e inclus)

console.log(arrayCopy);
console.log(array);

/***
 * .splice() = cut elements
 */

// let changedArray = array.splice(2) // decupeaza elementele unui array incepand cu pozitia specificata

// let changedArray = array.splice(1, 2); //decupeaza elementele unui array specificand pozitia initiala 
// si nr de elem ce vor fi sterse

console.log(array);
// console.log(changedArray);

/**
 * Filtering array elements
 * Returneaza un nou array cu valorile care indeplinesc conditia
 * NU modifica array-ul initial
 */

console.log(
    array.filter ( (element) => {
    return element > 3;
})
);

const filteredArray = array.filter( (element) => {
    return element > 2;
});

console.log(filteredArray);

/**
 * .reverse()
 * Reverse array
 * Modifica array-ul initial
 */

array.reverse();
console.log(array);

/**
 * Concatenarea sau imbinarea array-urilor
 * .concat()
 */
const concatArray = ["add", "me"];
console.log(array.concat(concatArray));

/**
 * Transforma array into string
 */

let arrayToString = array.join("*");
console.log(arrayToString);

/**
 * .reduce()
 * Reduce array
 */

const arrayToReduce = [1,2,3,4];
const reduceArray = arrayToReduce.reduce( (total, value)=> {
// const reduceArray = arrayToReduce.reduce( (accumulator, curentValue)=> {
    return total + value;

});

console.log(reduceArray);

/**
 * Sorting ar array
 * .sort()
 */

const arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4, "asd", "aac", "sum", "!df"];

// const sortedArray = arrayToSort.sort();// by default nu sorteaza crescator numerele

const sortedArray = arrayToSort.sort( (a,b) => {
    // return a - b;// sorteaza crescator
    return b - a;// sorteaza descrescator
});

console.log(sortedArray);

/**
 * .find()
 * Find element
 */

const arrayToFind = [
    {name: "Cristine", city: "Bejing"},
    {name: "Andrei", city: "Hong Kong"},
    {name: "Roxana", city: "New York"},
    {name: "Alin", city: "Hong Kong"},
    {name: "Andrei", city: "Taipei"},
]

// const foundElem = sortedArray.find( (element) => {
//     return element === 1024
// });
// const foundElem = arrayToFind.find( (element) => {

//     return element.name === "Andrei";

// });

// Exclusiv valabil pt arrow function!!
// Daca avem un singur parametru, parantezele rotunde de la arrow function sunt optionale (pot sa lipseasca)
// Daca se scrie pe un singur rand si este o singura expresie, parantezele acolde sunt optionale 
// si return-ul este implicit

const foundElem = arrayToFind.find( element=> element.name === "Andrei");

console.log(foundElem);

// Numerotati parantezele

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

const Cristine = createPerson("Cristine", 27, "female");
const Raluca = createPerson("Raluca", 19, "female");

console.log(Cristine);

/**
 * Create objects using OBJECT LITERAL method
 */

const person = {
    name: "Cristine",
    lastName: "Kovacs",
    age: 27,
    address: {
        city: "Taipei",
        zip: 500500
    },
    hobbies: ["travel", "reading", "swimming"],
    sayHi: function() {
        // console.log("Hi " + this.lastName); // nu functioneaza
    },
    sayHiArrow: () => {
        console.log("Hello")
    },
    sayHiProperty() {
        console.log("Hey")
    }
};

person.name = "Alex";

person.hobbies.push("ski");

console.log(person.hobbies);

person.sayHi();

person.sayHiArrow();
person.sayHiProperty();

