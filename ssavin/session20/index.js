// Scope

let testLet = "5let";
const testConst = "5const";
var testVar = "5var";

// console.log(testLet);
// console.log(testConst);
// console.log(testVar);

if (true) {
  let testLet = "9let";
  const testConst = "9const";
  var testVar = "9var";
  //   console.log(testLet);
  //   console.log(testConst);
  //   console.log(testVar);
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

  // console.log(globalLetVariable);
  return number + 2;
}

console.log(globalLetVariable);

// addTwo(2);
// console.log(globalLetVariable);

let needMoney = true;
needMoney = false;
if (needMoney === true) {
  const newNumber = addTwo(3);
}
// console.log(globalLetVariable);

let scopeTest = "La nivel de fisier";

let toBeDefined;

function addFive(number) {
  scopeTest = "La nivel de functie";
  let functionVariable = "functionVariable";

  if (number < 50) {
    scopeTest = "La nivel interior al functiei";
    let innerBlockScope = "innerBlockScope";
    // console.log(functionVariable);
    toBeDefined = innerBlockScope;
    console.log(innerBlockScope);
  }

  // console.log(functionVariable);
  // console.log(innerBlockScope);
  return number + 5;
}

// console.log(innerBlockScope);

addFive(5);
// console.log(scopeTest);
// console.log(functionVariable); // Avem eroare fiindca este declarata in interiorul functiei

let index = 7;

for (let index = 0; index <= 3; index++) {
  ////
}
console.log(index);

showBrasov(); // poate fi apelata inainte de declaratie
// showTimisoara(); // nu poate fi apelata inainte de declaratie
// showArad(); // nu poate fi apelata inainte de declaratie

function showBrasov() {
  console.log("Brasov");
}

showBrasov();

const showTimisoara = function () {
  console.log("Timisoara");
};

showTimisoara();

// showArad();
const showArad = () => {
  console.log("Arad");
};

showArad();

// console.log(testCity);  // nu pot folosi variabila inainte de declaratie
const testCity = "City";
console.log(testCity);

// Functions with default params

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

// Ternary operator ===> conditie ? valoare pt adevar : valoare pt fals

number === string ? console.log("Egale") : console.log("Diferite");
console.log(number === string ? "Egale" : "Diferite");

// const rateMovie = (movie) => {
//   if (movie === "HOme Alone") {
//     console.log(movie + "are nota 10");
//   } else if (movie === "HObbit") {
//     console.log(movie + "are nota 9");
//   } else if (movie === "Avatar") {
//     console.log(movie + "are nota 8");
//   } else if (movie === "Titanic") {
//     console.log(movie + "are nota 7");
//   } else if (movie === "Pirate of Caribbean") {
//     console.log(movie + "are nota 6");
//   } else if (movie === "Harry POtter") {
//     console.log(movie + "are nota 5");
//   } else {
//     console.log("Filmul nu are nota de trecere");
//   }
// };

const rateMovie = (movie) => {
    switch (movie) {
        case 'HOme Alone':
            console.log(movie + "are nota 10");
        break;
        case 'HObbit':
            console.log(movie + "are nota 9");
        break;
        case 'Avatar':
            console.log(movie + "are nota 8");
        break;
        case 'Titanic':
            console.log(movie + "are nota 7");
        break;
        case 'Pirate of Caribbean':
            console.log(movie + "are nota 6");
        break;
        case 'Harry POtter':
            console.log(movie + "are nota 5");
        break;
        default:
            console.log("Filmul nu are nota de trecere"); 
    }
}

rateMovie("Harry POtter"); //5
rateMovie("Avatar"); //8
rateMovie("Titanic"); //7
rateMovie("HObbit"); //9
rateMovie("HOme Alone"); //10
rateMovie("Pirate of Caribbean"); //6
rateMovie();

const complexObject = {
    name: 'Sergiu',
    address: {
        city: 'Brasov',
        zipcode: '555555'
    },
    favoriteMovies: ['Harry Potter', 'Avatar', 'Titanic'],
    hobbies: ['Travel', 'Eat', 'Drink'],
    watchMovie: function (movie) {
        console.log('Uita-te la ' + movie);
    },
    sleep() {
        console.log('Du-te la culcare');
    },
    drink: () => {
        console.log('Bea un pahar cu apa');
    },
    age: 25,
    hasPassport: true
};

// console.log(complexObject.age);
// console.log(complexObject.address.zipcode);
// complexObject.drink();
// console.log(console);
// console.log(complexObject);
// console.dir(complexObject);
// complexObject.sleep();
complexObject.watchMovie(complexObject.favoriteMovies[2]);

for (let i = 0; i < complexObject.hobbies.length; i++) {
    const movie = complexObject.favoriteMovies[i];
    complexObject.watchMovie(movie);
}

// Flip a coin

const valoareMoneda = ['cap', 'stema'];

// console.log(valoareMoneda[0]);
// console.log(valoareMoneda[1]);

const flipAcoin = () => {
    if (valoareMoneda[Math.round(Math.random())] === 'cap') {
        console.log('A iesit Cap');
    } else {
        console.log('A iesit stema');
    }
}

flipAcoin();

// Make a pizza


const orderPizza = (i1, i2, i3) => {
    console.log('Pizza cu ingredientele ' + i1 + ', ' + i2 + ' si ' + i3 + ' in preparare...');
    console.log(`Pizza cu ingredientele ${i1}, ${i2} si ${i3} in preparare`);
}

// Pizza cu ingredientele mozzarella, ciuperci si prosciutto in preparare...
orderPizza('mozzarella', 'ciuperci', 'prosciutto');



