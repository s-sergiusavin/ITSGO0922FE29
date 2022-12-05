// Scope

let testLet = '5let';
const testConst = '5const';
var testVar = '5var';

console.log(testLet);
console.log(testConst);
console.log(testVar);

if (true) {
    let testLet = '9let';
    const testConst = '9const';
    var testVar = '9var';
    console.log(testLet);
    console.log(testConst);
    console.log(testVar);
}












let globalLetVariable = 'unchanged';

function addTwo(number) {
    globalLetVariable = 'changed';

    console.log(globalLetVariable);
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

let scopeTest = 'La nivel de fisier';

let toBeDefined;


function addFive(number) {
    scopeTest = 'La nivel de functie';
    let functionVariable = 'functionVariable';
   
   
    if (number < 50) {
        scopeTest = 'La nivel interior al functiei';
        let innerBlockScope = 'innerBlockScope';
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

for (index = 0; index <= 3; index++) {
    ////
}

console.log(index);

showBrasov();

function showBrasov() {
    console.log('Brasov');
}

showBrasov();

const showTimisoara = function () {
    console.log('Timisoara');
}

showTimisoara();

// showArad();
const showArad = () => {
    console.log('Arad');

}

showArad();


// console.log(testCity); // nu pot folosi variabila inainte de declaratie
const testCity = 'City';
console.log(testCity);

// Functions with default params

const pork = 'vita';

const makeBurger = (ingredient = pork) => {
    console.log(`Burgerul meu preferat este cu ${ingredient}`);
}

makeBurger('pui');
makeBurger();

let number = 5;
let string = '5';
if (number === string) {
    console.log('Egale');
} else {
    console.log('Diferite');
}

// Ternary operator ===> conditie ? valoare pt adevar : valoare pt fals

number === string ? console.log('Egale') : console.log('Diferite');
console.log(number === string ? 'Egale' : 'Diferite');

const rateMovie = (movie) => {
   switch (movie) {
    case 'Home Alone':
        
   }
}

rateMovie('Harry Potter'); //5
rateMovie('Avatar'); //8
rateMovie('Titanic'); //7
rateMovie('Hobbit'); //9
rateMovie('Home Alone'); //10
rateMovie('Pirates of Caribbean'); //6
rateMovie();


const complexObject = {
    name: 'Sergiu',
    address: {
        city: 'Brasov',
        zipcode: '555555'
    },
    favoriteMovies: ['Harry Potter', 'Avatar', 'Titanic'],
    hobbies: ['Travel', 'Eat', 'Drink'],
    watchMovie: function(movie) {

        console.log('Uita-te la' + movie);
    }
    
    
}



