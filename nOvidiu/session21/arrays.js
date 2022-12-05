const myName = "Sergiu"; //string

console.log(myName.toUpperCase());
//toUpperCase metoda pentru stringuri cum am de ex map pt array si pe mdn e String.toUpperCase unde String e built in object

//RETURN
let sum = 0;
function addToSum(number = 1) {
  //if number exista ...., daca nu exista da-i valoarea 1
  return (sum = sum + number); //same
  //   return (sum += number); same as
  //   sum = sum + number; same as
  //   return sum;
}
//daca nu as avea return ci doar operatia simpla mi-ar rezulta unedfined;
//imagineaza-ti ca ai by default un return undefined; la finalul oricarei functii, daca nu pui tu un return iti afiseaza undefined

console.log(addToSum(3));
let totalSum = addToSum(5);
console.log(totalSum);

//pot trimite valori din interiorul unei functii catre exterior,unde este apelata

//orice pun dupa un return nu se va executa
//practic daca am doua returnuri imi va returna doar pe primul

let sumNumbers = addToSum;
//sumNumbers devine o functie - practic ma folosesc de referinta unei functii si o copiez atunci cand nu o apelez cu paranteze
console.log(sumNumbers(7));

//tip de date abiect => nu retine valoarea, ci doar referinta

//duplificat?

totalSum = addToSum();
console.log(totalSum);

sumNumbers = addToSum;
console.log(sumNumbers);
///

let sumTwoNumbers = function (number1, number2) {
  return number1 + number2;
};

const sumTwoNumbersArrow = (number1, number2) => {
  return number1 + number2;
};

console.log(sumTwoNumbers(2, 3));
console.log(sumTwoNumbersArrow(2, 3));
//fac acelasi lucru

//mereu declara functia inainte sa o apelezi

function verifyEquality(num1, num2) {
  if (num1 === num2) {
    return true;
  } else return false; // daca nu definesc else si imi intra pe cazul else imi va rezulta undefined
}
console.log(verifyEquality(5, 6));

//sau

function verifyEqualitySimplified(num1, num2) {
  return num1 === num2; //returneaza booleana
}
console.log(verifyEqualitySimplified(5, 6));

//debugger;
// F8 revine la normal - iese din debugger
//F10 sare un pas
//F11 intra intr-o functie
// Shift + F11 iese dintr-o functie

function removeFromTheBiggest(a, b) {
  if (a > b) {
    return a - b;
  } else return b - a;
}

console.log(removeFromTheBiggest(5, 7));

function verifyNumber(number) {
  if (number >= 10 && number < 50) {
    return "da";
  } else return "nu";
}

console.log(verifyNumber(10)); //da
console.log(verifyNumber(50)); //nu
console.log(verifyNumber(121)); //nu
console.log(verifyNumber(5)); //nu

// ARROW

const verifyNumberArrow = (number) => {
  return number >= 10 && number < 50 ? "da" : "nu";
};
console.log(verifyNumberArrow(12));

const puppy = {
  name: "Rex",
  age: 1,
  favouriteToys: ["duck", "cat", "bone"],
  bark: function () {
    console.log("Ham!");
  },
  barkLoud: () => {
    console.log("HAM!");
  },
};

//const doLikeAdog = puppy.bark(); // imi va da eroare, doLikeAdog va fi undefined pentru ca functia bark nu returenaza nimic

const doLikeAdog = puppy.bark; //am copiat referinta catre functia bark si am alocat-o variabilei dolikeadog

doLikeAdog();

const anotherPuppy = puppy; //obiect copiat
anotherPuppy.name = "Azorel";

console.log(anotherPuppy);
console.log(puppy); //tot azorel o sa fie numele
//obiectul are referinta catre un loc din memorie unde avem proprietatile
//noi cand copiem un obiect copiem referinta catre acel loc din memorie

//cum copiez/clonez in mod safe un obiect?
// object.assign   si spread operator pt clonare?

anotherPuppy.barkLoud();
//

//arrays
//function when i don't know how many parameters I will have

let newString = "";
// createString = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     newString += array[i];
//   }

//   return newString;
// };
// console.log(createString([3, "5", 7, "2", 1])); //35721

// createReversedString = (array) => {
//   for (let i = array.length - 1; i >= 0; i--) {
//     newString += array[i];
//   }
//   return newString;
// };
// console.log(createReversedString([3, "5", 7, "2", 1])); //12753
//ca sa parcurg un string descrescator pot in doua feluri, ori modific conditiile ori i din array devine .length-i
// better

const createStringWithOddDigits = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newString += array[i];
    }
  }
  return newString;
};
console.log(createStringWithOddDigits([1, 2, 3, 4, 5, 6]));

// Smart home app

let lightsValue = false;
let acValue = false;
let acOpenings = 0;
let curtainsValue = false;
let windowsValue = false;
//scriu mereu functiile deasupra

const toggleLights = () => {
  lightsValue = !lightsValue; //notFalse so it's true
  if (lightsValue) {
    //if(lightsValue===true)
    return "luminile au fost aprinse";
  } else return "luminile au fost stinse";
};

const toggleAc = () => {
  acValue = !acValue;
  if (acValue) {
    acOpenings++; //counter //daca nu merge incearca ac+=1;
    return "ac pornit";
  } else {
    return "ac oprit";
  }
};

const toggleCurtains = () => {
  curtainsValue = !curtainsValue;
  if (curtainsValue) {
    return "draperii trase";
  } else {
    return "draperii inchise";
  }
};

const toggleWindows = () => {
  windowsValue = !windowsValue;
  if (windowsValue) {
    return "geamuri deschise";
  } else {
    return "geamuri inchise";
  }
};

const smoke = () => {
  if (!curtainsValue) {
    toggleCurtains();
  }
  if (!windowsValue) {
    toggleWindows();
  }
  if ("summer") {
    toggleAc();
  }
  console.log("smoking...");
  toggleWindows();
  toggleCurtains();
};

const playMusic = (song = "playing random spotify song...") => {
  console.log(`Playing...${song}`);
};

toggleLights(); //aici ar fi aprinse //nu imi afiseaza nimic pentru ca nu afisez nimic pt ca nu am comanda de afisare - ci doar de return, tb sa pun si console.log daca vreau sa vad in consola
console.log(toggleLights()); //aici stinse
toggleAc();
smoke();

playMusic("Play radio");
playMusic();

//                          RECAP       //

// facem functii pt caracterul lor reutilizabil si pt a genera actiuni at some point
//RETURN
//copiat functi isi obiecte?
