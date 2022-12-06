// CONCAT

const concatFunction = (array1,array2) => {
   return array1.concat(array2);
}

console.log(concatFunction(['Salut', 'sunt'],['Alin', '!'])); // Salut sunt Alin !

// MAP

// let mapArray = [];
// const mapStringFunction = (array) => {
//    array.map(data => {
//       if (typeof data === 'string') {
//          mapArray.push(data);
//       }
//    } )
//    return mapArray;
// }

const mapStringFunction = (array) => {
   const mapArray = array.map(element => {
      if (typeof element === 'string') {
         return element;
      }
   })
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

console.log(everyFunction([1, 34, 'Hi', 12, 20, 0]))
