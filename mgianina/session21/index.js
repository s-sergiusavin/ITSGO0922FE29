const myName = "Gianina";

console.log(myName.toUpperCase());

let sum = 0;

function addToSum(number) {
  //poate fi apelata si inainte sa fie declarata-DE RETINUT
  return (sum = sum + number);
  // return sum += number; (facem calcul si alocam valoarea sumei)

  // sum = sum + number;
  // return sum;
}

console.log(addToSum(3));
let totalSum = addToSum(5);
console.log(totalSum);

let sumNumbers = addToSum;
console.log(sumNumbers(7));

let sumTwoNumbers = function (number1, number2) {
  return number1 + number2;
};

let sumTwoNumbersArrow = (number1, number2) => {
  return number1 + number2;
};
console.log(sumTwoNumbers(2, 3));
console.log(sumTwoNumbersArrow(2, 3));

function verifyequality(num1, num2) {
  //Sunt cazuri similare
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

console.log(verifyequality(5, 6));

function verifyEqualitySimplified(num1, num2) {
  //Sunt cazuri similare
  return num1 === num2;
}

console.log(verifyEqualitySimplified(5, 6));

// debugger;
//F8 revine la normal,iese din debugger;
//F10 sare un par;
//F11 intra intr o functie ;
//shift + F11 => iese dintr o functie;

function removeFromTheBiggest(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

console.log(removeFromTheBiggest(5, 7));
console.log(removeFromTheBiggest(15, 7));

function verifyNumber(number) {
  if (number >= 10 && number < 50) {
    return "da";
  } else {
    return "nu";
  }
}

console.log(verifyNumber(10)); //da
console.log(verifyNumber(50)); //nu
console.log(verifyNumber(121)); //nu
console.log(verifyNumber(5)); //nu

const verifyNumberArrow = (number) => {
  // if (number >= 10 && number < 50) { => este acelasi lucru cu folosirea operatorului ternar!!!
  //     return "da";
  //   } else {
  //     return "nu";
  //   }
  return number >= 10 && number < 50 ? "da" : "nu";
};

console.log(verifyNumberArrow(12));

const puppy = {
  name: "Rex",
  age: 1,
  favouriteToys: ["Duc", "Cat", "Bone"],
  bark: function () {
    console.log("Ham");
  },
  barkLoud: () => {
    console.log("HAM!");
  },
};

const doLikeDog = puppy.bark;

doLikeDog();

const anotherPuppy = puppy;
anotherPuppy.name = "Azorel";
console.log(anotherPuppy);
console.log(puppy);

anotherPuppy.barkLoud();

const createString = (array) => {
  let newString = "";
  for (let i = 0; i < array.length; i++) {
    newString = newString + array[i];
  }

  return newString;
};

console.log(createString([3, "5", 7, "2", 1])); //35721
console.log(createString([2, "3425", 17, "22", 1])); //2342517221

const createReversedString = (array) => {
  let newString = "";
  for (let i = array.length - 1; i >= 0; i--) {
    newString = newString + array[i];
  }

  return newString;
};

console.log(createReversedString([3, "5", 7, "2", 1])); //12753
console.log(createReversedString([2, "3425", 17, "22", 1])); //1227152432

createStringWithOddDigits = (array) => {
  let newString = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newString = newString + array[i];
    }
  }

  return newString;
};

console.log(createReversedString([1, 2, 3, 4, 5])); //24
console.log(createReversedString([12, 56, 4, 3, 1])); //12564

/*Smart Home app*/

let lightsValue = false;

let acValue = false;

let acOpenings = 0;

let curtainsValue = false;

let windowsValue = false;

const toggleLights = () => {
  lightsValue = !lightsValue;

  if (lightsValue) {
    //if (lightsValue === true)
    return "Luminile au fost aprinse";
  } else {
    return "Luminile au fost stinse";
  }
};

const toggleAc = () => {
  acValue = !acValue;
  if (acValue) {
    acOpenings += 1;
    return "Ac-ul a fost pornit";
  } else {
    return "Ac-ul a fost oprit";
  }
};

const toggleCurtains = () => {
  curtainsValue = !curtainsValue;
  if (curtainsValue) {
    return "Draperiile au fost deschise";
  } else {
    return "Draperiile au fost inchise";
  }
};

const toggleWindows = () => {
  windowsValue = !windowsValue;
  if (windowsValue) {
    return "Geamurile au fost deschise";
  } else {
    return "Geamurile au fost inchise";
  }
};

const smoke = () => {
  if (!curtainsValue) {
    toggleCurtains();
  }

  if (!windowsValue) {
    toggleWindows();
  }

  if ("Summer") {
    toggleAc();
  }

  console.log("Smoking.....");
  toggleWindows();
  toggleCurtains();
  //daca e vara repornim ac-ul
};

const playMusic = (song = "Playing spotify....") => {
console.log(`Playing....${song}`);
}




toggleLights();

console.log(toggleLights());

toggleAc();
smoke();
playMusic();
playMusic("Play radio");


