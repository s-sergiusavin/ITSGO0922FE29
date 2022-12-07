//ARRAY METHODS

let array = [1, 2, 3, "4", 5];

console.log(array.length);
//cheia arrayurilor este indexul

//array[1] = 100;
//console.log(array);

//array[10] = 11;
//console.log(array);

// Adaugare sau stergere elemente intr-un array
//in general cand adaug elemente o sa o fac la final
//push & pop  // adaugare si stergere

array.push(61);
console.log(array);
console.log(array.push(1)); //returneaza noua lungime a arrayului
array.pop(); //functiile care sterg nu au nev de parametru in general
console.log(array);
console.log(array.pop()); //returneaza elementul scos

//adaugare sau stergerea elementelor la inceputul unui array
//unshift - adaugare
//shift- scoatere

console.log(array.unshift(0)); //returneaza nr total de elemente - length
console.log(array);

console.log(array.shift()); //returneaza nr scos
console.log(array);

//array iterations

for (let i = 0; i < array.length; i++) {
  //console.log(array[i]);
}

// forEach() method

//array.forEach((element) => console.log(element));
//foreach cere ca parametru o functie
//array.forEach(function(){});
//incep sa folosesc arrow functions

//o metoda de a face un forEach
// array.foreach(itterateArray);
//function itterateArray(element){
//console.log(element);
//}
// bad example - not working
let newArray = array.forEach((element) => {
  return (element += 1);
});
console.log(newArray); //rezulta undefined - pentru ca nu imi produce un array

// folosesc map() pentru a face un array nou

newArray = array.map((element) => {
  return (element += 1); // fara return imi rezulta un array plin de undefined
});
console.log(newArray); // returneaza array nou
//ESTE OBLIGATORIU RETURN PT A OBTINE UN REZULTAT

// mai explicit pot sa scriu o functie separat si sa o apelez in metoda = array.map(functie);

// array.indexOf=> returneaza indexul unui element

console.log(array.indexOf(1));
//returneaza -1 daca nu exista ceva la index
array[2] = 7;
array[array.indexOf(3)] = 7;
//expresiile de mai sus sunt identice(ultimele doua);
//returneaza indexul primei matching value

//copy array elements
let arrayCopy = array; //copiaza tot arrayul - nu se copiaza continutul ci referinta deci se va modifica si array odata cu arrayCopy
console.log(arrayCopy); //wut?
arrayCopy[0] = "zero";

//.slice() method

arrayCopy = array.slice(2, 5); //copiaza toate elementele unui array incepand cu o pozitie specificata si un final-copiaza de la pozitia 2 inclusiv pana in pozitia 5, adica 5 nu e inclus. slice nu copiaza doar referinta si un shallow copy;
console.log(arrayCopy);
console.log(array);

// cu slice pot copia un array iar originalul nu se va modifica, este o metoda de copiere

//splice()-cut elements
//let changedArray = array.splice(2); //decupeaza elem. unui array incepand cu 2
let changedArray = array.splice(1, 2); //decupeaza elem unui array- din pozitia 1 si nr de elem ce vor fi sterse(2)
console.log(array);
console.log(changedArray);
// ambele arrayuri se vor modifica

//filter
//Returneaza un nou array cu valorile care indepliniesc conditia
//nu modifica arrayul initial

console.log(
  array.filter((element) => {
    return element > 3;
  })
);

const filteredArray = array.filter((element) => {
  return element > 2;
});

console.log(filteredArray);

//reverse
/**!!!!!!!!!! modifica arrayul initial
 *
 */
array.reverse();
console.log(array);

//concatenarea sau imbinarea a mai multor arrayuri
//.concat()
//nu afecteaza arrayurile initiale, produce un array nou
let concatArray = ["add", "me"];

console.log(array.concat(concatArray));

//transform array into string
let arrayToString = array.join();
console.log(arrayToString);
//join poate sau sa aiba parametri
arrayToString = array.join("");
console.log(arrayToString);
arrayToString = array.join(" ");
console.log(arrayToString);
arrayToString = array.join("*");
console.log(arrayToString);

//foreach vs map - unul itereaza altul face array nou

//reduce
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const arrayToReduce = [1, 2, 3, 4];
const reducedArray = arrayToReduce.reduce((total, value) => {
  return total + value;
});
console.log(reducedArray);
//valorile total si value, total porneste ca prima valoare din array iar value porneste ca a doua valoare, total-ul ia valoarea operatiei - la a doua iteratie total o sa fie 3 iar value o sa fie 3, total- valoarea sumei elementelor anterioare,value va avea valoare elementului urmator    (total si value se regasesc ca acc si val)

// sort()

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

//const sortedArray = arrayToSort.sort();//nu sorteaza crescator numerele

//caractere speciale, numere apoi strings
//face sortare alfa numerica
//sortarea iese aiurea, sorteaza dupa prima cifra si atat
//

const sortedArray = arrayToSort.sort((a, b) => {
  //return a - b; // sorteaza crescator
  return b - a; //sorteaza descrescator
});
console.log(sortedArray);

//.find()
//returneaza primul element dintr-un array
//daca nu indeplineste niciun elm conditia returneaza undefined

const arrayToFind = [
  { name: "Alin", city: "Beijing" },
  { name: "Andrei", city: "Hong Kong" },
  { name: "Roxana", city: "New York" },
  { name: "Sergiu", city: "Hong Kong" },
  { name: "Andrei", city: "Taipei" },
];

// const foundElem = sortedArray.find((element) => {
//   return element === 1024;
// });

// const foundElem = arrayToFind.find((element) => {
//   return element.name === "Andrei";
// });

// console.log(foundElem);

//arrawFunction poate fi scrisa si mai simplu
//daca avem un singur parametru parantezele rotunde de la arrow function sunt optionale (pot sa lipeasca)
//daca se scrie pe un singur rand si este o singura expresie, parantezele acolade sunt optionale si returnul este implicit.
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const foundElem = arrayToFind.find((element) => element.name === "Andrei");

console.log(foundElem);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//nested functions?? closure?? idk
function test1() {
  function test2() {
    function test3() {
      function test4() {}
    }
  }
}

// includes()

let includedElem = sortedArray.includes(2001);
console.log(includedElem);

//INTRO OBIECTE

const createPerson = (name, age, gender) => {
  return {
    firstName: name,
    age: age, //age era suficient
    gender, //gender:gender;
  };
};

const sergiu = createPerson("Sergiu", 25, "male");
const raluca = createPerson("Raluca", 19, "female");
console.log(sergiu);

// create ubjects using object literal method

const person = {
  name: "Sergiu",
  lastName: "Savin",
  age: "23",
  address: {
    city: "Taipei",
    zip: 500500,
  },
  hobbies: ["travel", "reading", "swimming"],
  sayHi: function () {
    console.log("Hi!");
  },
  sayHiArrow: () => {
    console.log("HiArrow");
  },
  sayHiProperty() {
    console.log("Hey");
  },
};
