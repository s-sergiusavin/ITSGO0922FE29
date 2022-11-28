// scope

// let testLet = '5let';
// const testConst = '5const';
// var testVar = '5var';

// console.log(testLet);
// console.log(testConst);
// console.log(testVar);

// if (true) {
//     let testLet = '9let';
//     const testConst = '9let';
//     var testVar = '9let';
//     console.log(testLet);
//     console.log(testConst);
//    console.log(testVar);
// if (true) {
//     let testLet = '7let';
//     const testConst = '7let';
//     var testVar = '7let';
//     console.log(testLet);
//     console.log(testConst);
//    console.log(testVar);
// }
// console.log(testLet);
//     console.log(testConst);
//    console.log(testVar);
// }
// console.log(testLet);
// console.log(testConst);
// console.log(testVar);
// }
// }

// let globalLetVariable = 'unchanged';

// function addTwo(number) {
//     globalLetVariable = 'changed';
 

//     return number + 2;
// }

// console.log(globalLetVariable);

// let needMoney = true;
// needMoney =  false;
// if (needMoney === true) {
//     const newNumber = addTwo(3);
// }
// // console.log(globalLetVariable);

// let scopeTest = 'La nivel de fisier';
// function addFive(number) {
//     scopeTest = 'La nivel de functie';
//     let functionVariable = 'functionVariable';

//     if (number < 50) {
//         scopeTest = 'La nivel interior al functiei';
//         let innerBlockScope = 'innerBlockScope';
//         // console.log(functionVariable);
//         console.log(innerBlockScope)
//     }
//     // console.log(functionVariable);
//     console.log(innerBlockScope);
//     return number + 5;
    // }

    // addFive(5);
    // console.log(scopeTest)
    // // console.log(functionVariable) avem eroare pentru ca este declara in interiorul functiei

    let index = 7;

    for (index = 0; index <=3; index++) {
        // 
    }
    console.log(index);

    
    showBrasov(); // poate fi apelata inainte de declaratie

    function showBrasov () {
        console.log('Brasov');
    }

    showBrasov();

    // showTimisoara (); nu poate fi apelata inainte de declaratie

    const showTimisoara = function () {
        console.log('Timisoara');
    }
    showTimisoara ();

    // showArad(); nu poate fi apelata inainte de declaratie
    const showArad = () => {
        console.log('Arad');
    }

    showArad();


    //functions with default params

   const pork = 'vita';
   
    const makeBurger = (ingredient = pork) => {
        console.log(`burgerul meu preferat este cu ${ingredient} `);
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

    //ternary operator ===> conditie ? valoare pentru adevar : valoare pentru fals

    number === string ? console.log('Egale') : console.log('Diferite');
    console.log(number === string ? 'Egale' : 'Diferite');

//     const rateMovie = (movie) => {
//         if (movie === 'Home Alone') {
// console.log(movie + 'are nota 10');
//     } else if(movie === 'Hobbit' + 'are nota 9'); {
//         console.log(movie + 'are nota 9');
//     }
//    else if(movie === 'Avatar' + 'are nota 8'); {
//     console.log(movie + 'are nota 8');
//  }
//     }


const rateMovie = (movie) => {
    switch (movie) {
        case 'Home Alone':
            console.log(movie + "are note 10");
            break;
            case 'Hobbit':
            console.log(movie + "are note 9");
            break;
            case 'Avatar':
            console.log(movie + "are note 8");
            break;
            case 'Titanic':
            console.log(movie + "are note 7");
            break;
            case 'Pirate of Caribbean':
            console.log(movie + "are note 6");
            break;
            case 'Harry Potter':
            console.log(movie + "are note 5");
            break;
            default:
                console.log("filmul nu are note de trecere")
    }
}


    rateMovie('Avatar'); //8
    rateMovie('Titanic'); //7
    rateMovie('Hobbit'); //9
    rateMovie('Home Alone'); //10
    rateMovie('Pirate of Caribbean'); //6
    rateMovie();
    rateMovie('Harry Potter'); //5


    const complexObject = {
        name: 'Sergiu',
        address: {
            city: 'Brasov',
            zipcode: '55555'
        },
        favoriteMovies: ['Harry Potter', 'Avatar', 'Titanic'],
        hobbies: ['Travel', 'Eat', 'Drink'],
        watchMovie: function (movie) {
            console.log('Uita-te la' + movie);
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
        console.log(complexObject.favoriteMovies[i]);
    }

    // flip a coin


    const valoareMoneda = ['cap', 'stema'];
    const flipAcoin = () => {

if (valoareMoneda[Math.round(Math.random())] === 'cap') {
    console.log('a iesit cap');
} else {
    console.log('a iesit pajura');
}

    }
    flipAcoin();
    console.log(valoareMoneda[0]);
    console.log(valoareMoneda[1]);

    //make a pizza
    
    const orderPizza = (i1,i2, i3) => {
        console.log('Pizza cu ingredientele ' + i1 + ', ' + i2 + ' si ' + i3 + ' in preparare');
    }
    
    //pizza cu ingredientele mozzarella, ciuperci si prosciutto in preparare...
    orderPizza('mozzarella', 'ciuperci','prosciutto');

