// CONCAT

const concatFunction = (array1,array2) => {
   return array1.concat(array2);
}

console.log(concatFunction(['Salut', 'sunt'],['Alin', '!'])); // Salut sunt Alin !

// MAP

let mapArray = [];
const mapStringFunction = (array) => {
   array.map(data => {
      if (typeof data === 'string') {
         mapArray.push(data);
      }
   } )
   return mapArray;
}

console.log(mapStringFunction([1, '2', 3, '4', '5', 6, '7', '8'])); // 2 4 5 7 8

// REDUCE 

let sum = 0;
const reduceFunction = (array) => {
   sum = array.reduce((total, value) => total + value, 0);
   return sum;
}

console.log(reduceFunction([2, 200, 345, 20.5, 98])) // 665.5

// SPLICE && FINDINDEX && INCLUDES

let animalIndex = 0;
const animalsArray = ['cat', 'cow'];
const spliceFunction = (array) => {
   for (let i = 0; i < animalsArray.length; i++) {
      animalIndex = array.findIndex(element => (animalsArray.includes(element)));
      array.splice(animalIndex, 1);
   }

   return array;
}

console.log(spliceFunction(['audi', 'volkswagen', 'ferrari', 'cat', 'dodge', 'cow', 'maserati'])); // ['audi', 'volkswagen', 'ferrari', 'dodge', 'maserati']

// FILTER

const filterFunction = (array) => {
   const filteredArray = array.filter(element => element.charAt(0) === 'd');
   return filteredArray;
}

console.log(filterFunction(['duck', 'door','boot', 'drill', 'doll', 'drum', 'rug', 'litter'])); //  ['duck', 'door', 'drill', 'doll', 'drum']

// EVERY

const everyFunction = (array) => {
   const value = array.every(element => isNaN(element));
   return value;
}

console.log(everyFunction([1, 34, 12, 20, 0]));

console.log('–––– More exercizes ––––')

// More exercizes

// Check if variable is an array

const checkArray = (array) => {
   variableType = Array.isArray(array);
}

checkArray([1, 2, 3]);
console.log(variableType);
checkArray('Sup');
console.log(variableType);
console.log('––––––––');

var is_array = function(input) {
   if (toString.call(input) === "[object Array]")
     return true;
   return false;
     };
 console.log(is_array('w3resource'));
 console.log(is_array([1, 2, 4, 0]));

// Clone array


const cloneArray = (array) => {
   const clonedArray = array.slice();
   return clonedArray
}

console.log(cloneArray([1, 2, 3, [4, 5]]));
console.log('––––––––');

// Return n elements of an array

const arrayOutput = (array, elements = 1) => {
   if (elements < 0) {
      elements = 0;
   }

   const newArray = array.slice(0, elements);
   return newArray;
}

console.log(arrayOutput([2, 4, 5, 6], 1));
console.log(arrayOutput([2, 4, 5, 6], 0));
console.log(arrayOutput([2, 4, 5, 6], 2));
console.log(arrayOutput([2, 4, 5, 6], -2));
console.log('––––––––');

// Return last n elements of an array

const arrayOutput2 = (array, elements = 1) => {
   const newArray = array.slice(array.length - elements);
   return newArray;
 };
 
 console.log(arrayOutput2([2, 4, 5, 6],2));
 
console.log('––––––––');

// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.

const dashFunction = (value) => {
   if (value === Number) {
      value.forEach(element => {
         
      })
   } else {
      console.log('NaN!!');
   }
   return newValue
}

console.log(dashFunction(234421));