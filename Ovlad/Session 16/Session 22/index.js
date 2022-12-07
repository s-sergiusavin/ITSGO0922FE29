//Array methods/functions

let array = [1,2,3, '4', 5];
// // console.log(array.length);

// array[1] = 100;



// console.log(array.push(6));

// console.log(array);

// console.log(array.pop());

// console.log(array.unshift('zero'));

// console.log(array);


//array iterations

for (i = 0; i < array.length; i++)
 {
    //console.log(array[i]);
 }

 //forEach() method

array.forEach( (element) => {
    console.log(element);
})


//bad example, not working!
// let newArray = array.forEach( (element) => {
//   return  element += 1;
// });

// // console.log(newArray);

// // .map() methid => creates new array

// newArray = array.map( (element) => {
//     return  element += 1;
//   });
//   console.log(newArray);

  // .indexOf => returneaza index de element

//   console.log(array.indexOf(3));
//   array[2] = 7;
//   array[array.indexOf(3)] = 7;

// let arrayCopy = array; //copiaza tot array
// console.log(arrayCopy);

// arrayCopy[0] = 'zero';

// console.log(arrayCopy);

// arrayCopy = array.slice(2); // copiaza toate elementele unui array incepand cu o poizitie
// arrayCopy = array.slice(2, 5);
// console.log(arrayCopy);
// console.log(array);


array.reverse();
console.log(array);

//concatenare sau imbinarea de arrays
const concatArray = ['add', 'me'];

console.log(array.concat(concatArray));

// transform arrat into string

let arrayToString = array.join();
console.log(arrayToString);

const createPerson = (name, age, gender) => {
    return {
        firstName: name,
        age: age, //age era suficient, ca jos la gender
        gender // gender: gender
    }
}

const sergiu = createPerson('Sergiu', 25, 'male');
const raluca = createPerson('Raluca', 19, 'female');

console.log(sergiu);

const person = {
    name: 'Sergiu',
    lastName: 'Savin',
    age: 23, 
    address: {
        city: 'Taipei',
        zip: 500550
    },
    hobbies: ['travel', 'reading', 'swiming'],
    sayHi: function() {
        console.log('Hi')
    },
    sayHiArrow: () => {
        console.log('Hello')
    }
    sayHiProperty() {
        console.log('hey')
    }
}