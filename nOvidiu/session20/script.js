//SCOPE

let = testLet = "5let";
const testConst = "5const";
var testVar = "5var";

console.log(testLet);
console.log(testConst);
console.log(testVar);

//let si const sunt block scoped variables

if (true) {
  let testLet = "9let";
  let testConst = "9const";
  let testVar = "9var";

  console.log(testLet);
  console.log(testConst);
  console.log(testVar);
  if (true) {
    let testLet = "7let";
    let testConst = "7const";
    let testVar = "7var";
    console.log(testLet);
    console.log(testConst);
    console.log(testVar);
  }
}

console.log(testLet);
console.log(testConst);
console.log(testVar);

let globalLetVariable = "unchanged";
function addTwo(number) {
  globalLetVariable = "changed";
  console.log(globalLetVariable);
  return number + 2;
}

//console.log(globalLetVariable);

addTwo(2);
// cand rulez sare peste functie si printeaza cand se apeleaza functia
// eu in functie n-am declarat variabila (Cea cu let)

let needMoney = true;
if (needMoney) {
  //same with needMoney===true
  const needNumber = addTwo(3);
}
console.log(globalLetVariable);

let scopeTest = "la nivel de fisier";
function addFive(number) {
  scopeTest = "la nivel de functie";
  if (number < 50) {
    scopeTest = "la nivel interior al functiei";
  }
  return number + 5;
}

// addFive(5);
// addFive(52);
console.log(scopeTest);

// nu pot face console log in afara functiei pt variabile care sunt declarate doar in interiorul functiei
// nu pot folosi o variabila in afara parantezelor

// tot ce avem declarat la interior putem folosi numai in interiorul parantezelor respective
// tot ce avem declarat la exterior putem folosi oriunde
// LOOK FOR CLOSURE

//block scoped exceptie

let index = 7;

for (index = 0; index <= 3; index++) {
  ////
}
console.log(index);

//nu am declarat index ul in for nedeclarat imi da 4
// daca am if sau while etc conditiile declarate trebuie sa declar variabilele (let i =...);

//functia asta o pot apela si inainte si dupa ce am declarat functia
showBrasov();
function showBrasov() {
  console.log("Brasov");
}

showBrasov();
//

const showTimisoara = function () {
  console.log("timisoara");
};

showTimisoara(); //o pot apela strict dupa ce am declarat functia

const showArad = () => {
  console.log("Arad");
};

showArad(); // o pot apela strict dupa ce am declarat functia

//console.log(testCity); // nu pot folosi inainte sa declar variabila
const testCity = "city";
//cu var ar trebui sa pot dar for some reason imi da undevined ar trebui sa verific de ce

//usually pun function declarations la inceputul fisierului ()

//FUNCTIONS with default params
const pork = "vita"; // nu confunda variabila cu valoarea variabilei, daca vreau un text il trec in ghilimele
const makeBurger = (ingerdient = pork) => {
  console.log(`Burgerul meu preferat este cu ${ingerdient}`);
};

makeBurger("pui");
makeBurger(); // variabila va fi undefined
//pt situatii de genul pot pune o valoare default =>  parametru="vita";
//parametrul este un placeholder pentru valoarea viitoare care va fi introdusa

//operatori ternari
let number = 5;
let string = "5";

if ((number = string)) {
  console.log("egale");
} else {
  console.log("diferite");
}

//1,2,3 egale;

//ternary operator ===> conditie?valoare adevar:valoare pt fals;

number === string ? console.log("egale") : console.log("diferite");

console.log(number === string ? "egale" : "diferite");
// de ce imi to da egale cand

// const rateMovie = (movie) => {
//   //console.log(movie + "are nota 10");
//   if (movie === "Home Alone") {
//     console.log(movie + "are nota 10");
//   } else if (movie === "Hobbit") {
//     console.log(movie + "are nota 9");
//   } else if (movie === "Avatar") {
//     console.log(movie + "are nota 8");
//   } else if (movie === "Titanic") {
//     console.log(movie + "are nota 7");
//   } else if (movie === "Pirates of Caraibbean") {
//     console.log(movie + "are nota 6");
//   } else if (movie === "Harry Potter") {
//     console.log(movie + "are nota 5");
//   } else {
//     console.log("nu are nota de trecere");
//   }
// };

const rateMovie = (movie) => {
  switch (movie) {
    case "Avatar":
      console.log(movie + "are nota 8");
      break;
    case "Home Alone":
      console.log(movie + "are nota 9");
      break;
    case "Hobbit":
      console.log(movie + "are nota 10");
      break;
    case "Titanic":
      console.log(movie + "are nota 6");
      break;
    case "Pirates of Caraibbean":
      console.log(movie + "are nota 7");
      break;
    case "Harry Potter":
      console.log(movie + "are nota 5");
      break;

    default:
      console.log("nu am gasit filmul");
  }
};
rateMovie("Avatar"); //8
rateMovie("Titanic"); //7
rateMovie("Hobbit"); //9
rateMovie("Home Alone"); //10
rateMovie("Pirates of Caraibbean"); //6
rateMovie(); //5
rateMovie("Harry Potter"); //5

//

const complexObject = {
  name: "Sergiu",
  address: {
    city: "Brasov",
    zipcode: "5555551",
  },
  favouriteMovies: ["Harry Potter", "Avatar", "Titanic"],
  hobbies: ["Travel", "Eat", "Drink"],
  watchMovie: function (movie) {
    console.log("uita-te la" + movie);
  },
  sleep() {
    console.log("Du-te la culcare");
  },
  drink: () => {
    console.log("bea un pahar de apa");
  },
  age: 25,
  hasPassport: true,
};

console.log(complexObject.age);
console.log(complexObject.address.zipcode);
//console.log(complexObject.drink()); functia in sine imi scrie ceva in consola
complexObject.drink(); //functia este proprietatea unui obiect
//console.dir(complexObject);

complexObject.sleep();
complexObject.watchMovie(complexObject.favouriteMovies[2]);

for (let i = 0; i < complexObject.hobbies.length; i++) {
  const movie = complexObject.favouriteMovies[i];
  complexObject.watchMovie(movie);
  //complexObject.watchMovie(complexObject.favouriteMovies[i]);
}

// Flip a coin
const valoareMoneda = ["cap", "stema"];
const flipAcoin = () => {
  if (valoareMoneda[Math.round(Math.random())] === "cap") {
    console.log("A iesit cap");
  } else {
    console.log("A iesit stema");
  }
};

console.log(Math.random());

flipAcoin();

// console.log(valoareMoneda[0]);
// console.log(valoareMoneda[1]);

//comandam pizza
const orderPizza = (ingredient1, ingredient2, ingredient3) => {
  console.log(
    `O pizza cu ${ingredient1},${ingredient2} si ${ingredient3} in curs de preparare`
  );
  console.log(
    "O pizza cu " +
      ingredient1 +
      ", " +
      ingredient2 +
      " si " +
      ingredient3 +
      " in curs de pregatire"
  );
};

orderPizza("mozzarella", "ciuperci", "prosciuto");

//TEMA

const randomArray = [1, 5, 12, 33, 6, 11, 77, 34, 115];

const mapOfArray = randomArray.map((element) => element - 1);
console.log(mapOfArray);

const filterOfArray = randomArray.filter((element) => element > 50);
console.log(filterOfArray); // return result of filter

const spliceFunction = function (array, pos, itemsToRemove, message) {
  array.splice(pos, itemsToRemove, message);
  console.log(array);
};
//spliceFunction(randomArray, 3, 0, "Something");

//how do I store my newly spliced array in a new variable?
// variabila in care stochez operatia splice imi va afisa elementele scoase
function compareNumbers(a, b) {
  return a - b;
}
console.log(randomArray.sort(compareNumbers));

// push slice reuce pop

randomArray.pop();
randomArray.push("Stuff");
randomArray.shift();
randomArray.slice(2, 5);
