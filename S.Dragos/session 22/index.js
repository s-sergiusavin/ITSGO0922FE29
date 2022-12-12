//array Methods/Functions


let array =[1,2,3,'4',5];



console.log(array.length);

// array[1]=100;
// array[10]=11;

console.log(array);

//Adaugare sau stergere elemente intr-un array la final : push & pop

array.push(6);
console.log(array);

console.log(array.pop());

//Adaugarea sau stergerea elementelor la inceputul unui array : unshift & shift


console.log(array.unshift('zero'));
console.log(array.shift());
console.log(array);

//Array iterations

for(i = 0;i< array.length; i++){
    //console.log(array[i]);
}


//forEach() method
//
// array.forEach(function(){});
// array.forEach(() => {});
// array.forEach(itterareArray);

// function itterareArray(element){
//     console.log(element);
// }

array.forEach((element) => {
    console.log(element);
});


let newArray = array.forEach((element) => {
   return element += 1;
});

console.log(newArray);

//.map()method =>creates new array

newArray = array.map((element) => {
    return element += 1;
    //e obligatoriu return pentru a returna rezultatele dorite
 });

 console.log(newArray);



// .indexOf => returneaza indexul unui element

// console.log(array.indexOf(3));


// array[2] = 7;
// array[array.indexOf(3)] = 7;


// coppy array


let arrayCopy= array;//copiaza tot arrayul


console.log(arrayCopy);


// .slice() method


arrayCopy = array.slice(2); 
// copiaza toat elementele unui array incepand cu o pozitie specificata
arrayCopy = array.slice(2); 
//copiaza toate elementele unui array intre indexurile specificate

console.log(arrayCopy);
console.log(array);


//.splice() - cut elements

//let changedArray = array.splice(2);
//decupeaza elementeleunui array incepandcu pozitia specificata
// let changedArray = array.splice(1,2);
//decupeaza elementeleunui array specificand pozitia initiala si nr 
// console.log(array);
// console.log(changedArray);
 



// Filtering array elements
// .filter()
//retuneazanu nou array cu valori care indeplinesc conditia 
//nu modifica arrayul initial


console.log(array.filter((element) => {
    return element > 3;
})
);

const filteredArray= array.filter((element) => {
    return element > 2;
});

console.log(filteredArray);


/**
 * .reverse()
 *  Reverse array
 * MODIFICAARRAY INITIAL
 */

array.reverse();
console.log(array);

/**
 * Concatenarea sau imbinarea arrayurilor
 * .concat()
 */

const concatArray = ['add','me'];

console.log(array.concat(concatArray));

/**
 * Transorm array intro string
 */

// let arrayToString = array.join();
let arrayToString = array.join(' ');
console.log(arrayToString);


/**
 * .reduce()
 * reduce array
 */



const arrayToReduce = [1, 2, 3, 4];
const reducedArray = arrayToReduce.reduce((total, value) => {
return total + value; 
} );
console.log(reducedArray);

/**
 * Sorting array
 * .sort()
 */


const arrayToSort = [1, 7, 200, 34, -8, 1024, 885, 11.4, 'asd','aac','sum','!df'];
// const sortedArray = arrayToSort.sort();
//by defalut nu sorteaza crescator numerele

const sortedArray = arrayToSort.sort((a,b)=> {

    // return a-b;
    return b-a; //sorteaza descrescator
} );

console.log(sortedArray);


/**
 * .find()
 * Find elements
 */

const arrayToFind= [
    {name:'Dragos',city: 'Beijing'},
    {name:'Andrei',city: 'Hong Kong'},
    {name:'Roxana',city: 'New York'},
    {name:'Sergiu',city: 'Hong Kong'},
    {name:'Andrei',city: 'Taipei'},
];

// const foundElem= sortedArray.find((element)=>{
//     return element === 1024;
// })
// const foundElem= arrayToFind.find((element) =>{
//     return element.name === 'Andrei';
// });

// console.log(foundElem);

//Exclusiv pentru arroy function
//Daca aveam un singur parametru parantezele rotunde  de la arrow funtion sunt optionale
//Daca se scrie pe un singur rand si este o singura expresie parantele acolade sunt optionale
//si retunul este implicit


const foundElem= arrayToFind.find( element => element.name === 'Andrei');

console.log(foundElem);


function test1(){
    function test2(){
        function test3(){
            function test4(){

            }
        }
    }
}


/**
 * Includes
 */

let includetElem = sortedArray.includes(200);
console.log(includetElem);


/**
 * Objects
 */

const  createPerson = (name, age,gender) => {
    return{
        firtsName: name,
        age : age,//age era suficient
        gender//gender : gender
    }
}

const dragos = createPerson('Dragos', 32, 'male');
const raluca= createPerson('Raluca',19,'female');

console.log(dragos);

/**
 * Create objects using Object literal method
 */

const person={
    name: 'Dragos',
    lastName:'Sfrijan',
    age: 23,
    address:{
        city:'Fagaras',
        zip:500200
    },
    hobbies: ['travel', 'reading', 'swimming'],
    sayHi: function() {
        console.log('Hi ' +  this.name)
    },
    sayHiArrow: () => {
       // console.log('Hello ' + this.lastName ) nu functioneaza
    },
    sayHiProperty() {
        console.log('Hey ' + this.lastName)
    }
}

person.name = 'Ionel';
person.address.city = 'Bucuresti';
person.hobbies.push ('ski');


console.log(person.hobbies);

person.sayHi();
person.sayHiArrow();
person.sayHiProperty();