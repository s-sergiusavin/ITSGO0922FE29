//Scope-locul in care functioneaza variabilele

let testLet = "5let";
const testConst = "5const";
var testVar = "5var";

console.log(testLet);
console.log(testConst);
console.log(testVar);

if (true) {
  let testLet = "9let";
  const testConst = "9const";
  var testVar = "9var";
  console.log(testLet);
  console.log(testConst);
  console.log(testVar);

  if (true) {
    let testLet = "7let";
    const testConst = "7const";
    var testVar = "7var";
    // console.log(testLet);
    // console.log(testConst);
    // console.log(testVar);
  }
  //   console.log(testLet);
  //   console.log(testConst);
  //   console.log(testVar);
}

// console.log(testLet);
// console.log(testConst);
// console.log(testVar);

let globalLetVariable = "unchanged";

function addTwo(number) {
  globalLetVariable = "changed";

  console.log(globalLetVariable);
  return number + 2;
}

console.log(globalLetVariable);
addTwo(2);

console.log(globalLetVariable);

let needMoney = true;
needMoney = false;
if (needMoney === true) {
  const newNumber = addTwo(3);
}
console.log(globalLetVariable);

let scopeTest = "La nivel de fisier";

function addFive(number) {
  scopeTest = "La nivel de functie";
  let functionVariable = "functionVariable";
  if (number < 50) {
    scopeTest = "La nivel interior al functiei";
    let innerBlockScope = "innerBlockScope";
    // console.log(functionVariable);
    console.log(innerBlockScope);
  }
  // console.log(functionVariable);
  // console.log(innerBlockScope);
  return number + 5;
}

addFive(5);
// console.log(scopeTest);
// console.log(functionVariable);Avem eroare pentru ca

let index = 7;

for (let index = 0; index <= 3; index++) {}

console.log(index);

showBrasov;
function showBrasov() {
  console.log("Brasov"); // doar asa putem apela functia si inainte si dupa declaratie;
}
showBrasov();

const showTimisoara = function () {
  //nu poate fi apelata inainte de declaratie;
  console.log("Timisoara");
};
showTimisoara();

const showArad = () => {
  //nu poate fi apelata inainte de declaratie;
  console.log("Arad");
};
showArad();

// console.log(testCity); Nu putem folosi variabila inainte de declaratie
const testCity = "City";
console.log(testCity);

//functions with default params

const pork = "vita";

const makeBurger = (ingredient = pork) => {
  console.log(`Burgerul meu preferat este cu ${ingredient}`);
};
makeBurger("pui");
makeBurger();

let number = 5;
let string = "5";
if (number === string) {
  console.log("Egale");
} else {
  console.log("Diferite");
}

//Ternary operator ===> conditie ? valoarea pentru adevar : valoare pentru fals

number === string ? console.log("Egale") : console.log("Diferite");
console.log(number === string ? "Egale" : "Diferite");

// const rateMovie = (movie) => {
//     if(movie === "Home Alone") {
//         console.log(movie + "Are nota 10");
//     }else if(movie === "Hobbit") {
//         console.log(movie + "Are nota 9");
//     }else if(movie === "Avatar") {
//         console.log(movie + "Are nota 8");

//         }else if(movie === "Titanic"){
//             console.log(movie + "Are nota 7");
//         }else if(movie === "Pirate of Caraibbean"){
//             console.log(movie + "Are nota 6");
//         }else if(movie === "Harry Potter"){
//             console.log(movie + "Are nota 5");
//         }else{
//             console.log("Filmul nu are nota de trecere");
//         }

// };

const rateMovie = (movie) => {
  switch (movie) {
    case "Home Alone":
      console.log(movie + "are nota 10");
      break;
    case "Hobbit":
      console.log(movie + "are nota 9");
      break;
    case "Avatar":
      console.log(movie + "are nota 8");
      break;
    case "Titanic":
      console.log(movie + "are nota 7");
      break;
    case "Pirate of Caraibbean":
      console.log(movie + "are nota 6");
      break;
    case "Harry Potter":
      console.log(movie + "are nota 5");
      break;
    default:
      console.log("Filmul nu are nota de trecere");
  }
};

rateMovie("Avatar"); //8
rateMovie("Titanic"); //7
rateMovie("Hobbit"); //9
rateMovie("Home Alone"); //10
rateMovie("Pirate of Caraibbean"); //6
rateMovie("Harry Potter"); //5
rateMovie();

const complexObject = {
  name: "Sergiu",
  address: {
    city: "Brasov",
    zipcode: "55555",
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
    console.log("Bea un pahar cu apa");
  },
  age: 25,
  hasPassport: true,
};

// console.log(complexObject.age);
// console.log(complexObject.address.zipcode);
// complexObject.drink();
// console.log(console);
// console.log(complexObject);
// console.dir(complexObject);

// complexObject.sleep();

complexObject.watchMovie(complexObject.favouriteMovies[2]);

for (let i = 0; i < complexObject.hobbies.length; i++) {
  console.log(complexObject.favouriteMovies[i]);
}

for (let i = 0; i < complexObject.hobbies.length; i++) {
  const movie = complexObject.favouriteMovies[i];
  complexObject.watchMovie(movie);
}

//Flip a coin
const valoareMoneda = ["cap", "stema"];

const flipAcoin = () => {
  if (valoareMoneda[Math.round(Math.random())] === "cap") {
    console.log("A iesit cap");
  } else {
    console.log("A iesit stema");
  }
};
flipAcoin();

//Make a pizza

const orderPizza = (i1, i2, i3) => {
  console.log(
    "Pizza cu ingredientele " + i1 + i2 + " si " + i3 + " in preparare..."
  );
  console.log(`Pizza cu ingredientele ${i1}, ${i2} si ${i3} in preparare...`);
};

//Pizza cu ingredientele mozzarela, ciuperci si prociutto in preparare...
orderPizza("mozzarela", "ciuperci", "prociutto");

//Homework

const products = [
  {
    id: 37,
    title: "ank Tops for Womens/Girls",
    price: 50,
    quantity: 2,
    total: 100,
    discountPercentage: 12.05,
    discountedPrice: 88,
  },
  {
    id: 80,
    title: "Chain Pin Tassel Earrings",
    price: 45,
    quantity: 3,
    total: 135,
    discountPercentage: 17.75,
    discountedPrice: 111,
  },
  {
    id: 68,
    title: "Stylish Luxury Digital Watch",
    price: 57,
    quantity: 3,
    total: 171,
    discountPercentage: 9.03,
    discountedPrice: 156,
  },
  {
    id: 81,
    title: "Round Silver Frame Sun Glasses",
    price: 19,
    quantity: 1,
    total: 19,
    discountPercentage: 10.1,
    discountedPrice: 17,
  },
  {
    id: 90,
    title: "Cycle Bike Glow",
    price: 35,
    quantity: 1,
    total: 35,
    discountPercentage: 11.08,
    discountedPrice: 31,
  },
];

//5 metode de manupilare a array urilor:

//1.Pop method:

const newProduct = products.pop();
console.log(products);

//2.Filter method:

const namesList = [
  "Ioana",
  "Vlad",
  "Ana",
  "Iulia",
  "Ruxandra",
  "Magdalena",
  "Alexandra",
];

const newList = namesList.filter(name => name.length >= 8);
console.log(newList);

//3. Push method:
const numberList = [1, 7, 9, 3, 10]
const newNumbers = [40, 28, 19];
numberList.push(newNumbers);
console.log(numberList);

//4. Concat method:

const newNames = ["Flavia", "Bogdan"];
const newArray = namesList.concat(newNames);
console.log("The concat array is", newArray);

//5.Find method : 

const numberOf = numberList.find(number => number > 7);
console.log("The number is", numberOf);












