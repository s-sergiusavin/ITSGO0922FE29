// Scope

// duplica linia SHIFT + OPTION + SAGEATA JOS

let testLet = '5let';
const testConst = '5const';
var testVar = '4var';

console.log(testLet);
console.log(testConst);
console.log(testVar);

if (true) {
   let testLet = '9let';
   const testConst = '9const';
   var testVar = '9var';
   // console.log(testLet);
   // console.log(testConst);
   // console.log(testVar);
   if (true) {
      let testLet = '7let';
   const testConst = '7const';
   var testVar = '7var';
   // console.log(testLet);
   // console.log(testConst);
   // console.log(testVar);
   }
   // console.log(testLet);
   // console.log(testConst);
   // console.log(testVar);
}

// console.log(testLet);
// console.log(testConst);
// console.log(testVar);

let globalLetVariable = 'unchanged';

function addTwo(number) {  // se pot folosi mereu varibile din scope ul meu
   globalLetVariable = 'changed'

   // console.log(globalLetVariable);
   return number + 2;
}

   console.log(globalLetVariable);

// addTwo(2);
// console.log(globalLetVariable);

let needMoney = true ;
if (needMoney === true) {
   const newNumber = addTwo(3);
}

console.log(globalLetVariable)

let scopeTest = 'La nivel de fisier';

function addFive(number) {
   scopeTest = 'La nivel de functie';
   let functionVariable = 'functionVariable';
   if (number < 50) {
      scopeTest = 'La nivel interior al functiei';
      console.log(functionVariable);
   }
   console.log(functionVariable);
   return number + 5;
}

addFive(5);
console.log(scopeTest);
addFive(52);
console.log(scopeTest);

console.log(functionVaraible); // Avem eroare fiindca este initializata in interiorul functiei

let index = 7;

for (index = 0; index <= 3; index++) {
   ///
}

console.log(index);


showBrasov();

function showBrasov () {
   console.log('Brashov');
}

showBrasov();

// Functions with default params

const pork = 'vita'

const makeBurger = (ingredient = pork) => { // cu default params
   console.log(`Burgerul meu preferat este cu ${ingredient}`);
}

makeBurger('pui');
makeBurger();

let number = 5;
let string = '5';
if (number = string) {
   console.log('Eagle');
} else {
   console.log('Diferite');
}

// Ternary operator

number === string ? console.log('Egale') : console.log('Diferite');
console.log(number === string ? 'Egale' : 'Diferite');

// const rateMovie = (movie) => {
//    if (movie === 'Home Alone'){
//    console.log(movie + 'are nota 10');
//    } else if (movie === 'Hobbit' ) {
//       console.log(movie + 'are nota 9');
//    } else if (movie === 'Avatar' ) {
//       console.log(movie + 'are nota 8');
//    } // etc... else {
//   console.log('Filmul nu are nota de trecere ')
// }
// }

const rateMovie = (movie) => {
   switch (movie) {
      case 'Home Alone' :
         console.log(movie + 'are nota 10');
      break;
      case 'Hobbit' :
         console.log(movie + 'are nota 9');
      break;
      case 'Avatar' :
         console.log(movie + 'are nota 8');
      break;
      case 'Titanic' :
         console.log(movie + 'are nota 7');
      break;
      case 'Pirate of Caribbean' :
         console.log(movie + 'are nota 6');
      break;
      case 'Harry Potter' :
         console.log(movie + 'are nota 5');
      break;

      default:
         console.log('Filmul nu are nota de trecere');
   }
}

rateMovie('Harry Potter'); // 5
rateMovie('Avatar'); // 8
rateMovie ('Titanic'); // 7
rateMovie('Hobbit'); // 9
rateMovie('Home Alone'); // 10
rateMovie('Pirate of Caribbean'); // 6
rateMovie();

const complexObject = {
   name: 'Alin',
   adress: {
      city: 'Schio',
      zipcode: '36015'
   },
   favoriteMovies: ['Predator', 'Avatar', 'Titanic'],
   hobbies: ['Snowboard', 'Reading', 'Eat'],
   watchMovie: function (movie) {
      console.log('Uita-te la ' + movie);
   },
   sleep () {
      console.log('Du-te la culcare');
   },
   drink: () => {
      console.log('Bea un pahar cu apa');
   },
   age:28,
   hasPassaport: true
};

console.log(complexObject.age);
console.log(complexObject.adress.zipcode);
complexObject.drink();
complexObject.sleep();
complexObject.watchMovie(complexObject.favoriteMovies[2]);

// Flip a coin

const valoareMoneda = ['cap', 'stema'];

const flipAcoin = () => {
   if ( valoareMoneda[Math.round(Math.random())] === 'cap') {
      console.log('A iesit Cap');
   } else {
      console.log('A iesit Stema')
   }
}
flipAcoin();

// console.log(Math.random); returneaza valore intre 0 si 1

// Make a pizza

const orderPizza = (i1, i2, i3) => {
   console.log('Pizza cu ingredientele ' +  i1 + ', ' + i2 + ' si ' + i3 + ' in preparare...')
}

orderPizza('mozzarella', 'ciuperci', 'prosciutto');