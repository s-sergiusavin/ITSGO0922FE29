const myName = 'sergiu';

console.log(myName.toUpperCase());

let sum = 0;
function addToSum(number) {
//     return (sum = sum + number);

// // return sum += number;

sum = sum + number;
return sum;
console.log('Acest cod nu se va executa niciodata');
}

console.log(addToSum(3));
let totalSum = addToSum(5);
console.log(totalSum);

let sumNumbers = addToSum;
console.log(sumNumbers(7));

function verifyEquality(num1, num2) {
if (num1 === num2) {
    return true;
} else {
    return false;
}
}

console.log(verifyEquality(5, 6));

function verifyEqualitySimplified(num1, num2) {
return num1 === num2;
}

console.log(verifyEqualitySimplified(5,6));

// debugger;
// F8 revine la normal, iese din debugger
//F10 sare un pas 
//F11 intra intr o functie
// shift + F11 iese dintr o functie

function removeFromTheBiggest(a, b) {
if (a > b) {
    return a - b;
} else {
    return b - a;
}
}

console.log(removeFromTheBiggest(5,7));
console.log(removeFromTheBiggest(15,7));

function verifyNumber(number) {
    if (number >=10 && number < 50) {
        return 'da';
    } else {
        return 'nu';
    }
    
}

console.log(verifyNumber(10)); //da
console.log(verifyNumber(50)); //nu
console.log(verifyNumber(121)); //nu
console.log(verifyNumber(5)); //nu

const verifyNumberArrow = (number) => {
    if (number >=10 && number < 50) {
        return 'da';
    } else {
        return 'nu';
    }
}

console.log(verifyNumberArrow(12));


const puppy = {
    name: 'Rex',
    age: 1,
    favouriteToys :['Duck', 'Cat', 'Bone'],
    bark: function() {
        console.log('Ham');
    },
    barkLoud: () => {
        console.log('HAM!');
    }
}

const doLikeAdog = puppy.bark;
doLikeAdog();


const anotherPuppy = puppy; 
anotherPuppy.name = 'Azorel';
console.log(anotherPuppy);
console.log(puppy);

const createString = (array) => {
 let newString = '';
 for (let i = 0; i < array.length; i++) {
    newString = newString + array[i];
    // newString += array[i];
 }
 return newString;
}


console.log(createString([3, '5', 7, "2", 1]));


const createReversedString = (array) => {
    let newString = '';
 for (let i = array.length -1; i >= 0; i--) {
    newString = newString + array[i];
    // newString += array[i];
 }
 return newString;
}


console.log(createReversedString([3, '5', 7, "2", 1]));

const createStringWithOddDigits = (array) => {
    let newString = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newString = newString + array[i];
            // newString += array[i];
        }
      
    }
    return newString;
}


console.log(createStringWithOddDigits([1, 2, 3, 4, 5]));


//Smart home app

let lightsValue = false; 
let acValue = false;
let acOpenings = 0;
let curtainsValue = false;

const toggleLights = () => {
lightsValue = !lightsValue;
if (lightsValue) {
    // if (lightsValue) {
        return 'Luminile au fost aprinse';
    } else {
        return 'Luminile au fost stinse';
    }
}


const toggleAc = () => {
acValue = !acValue;
if(acValue) {
    acOpenings += 1;
    return 'Ac a fost pornit';
} else {
    return 'Ac a fost oprit';
}
}

const toggleCurtains = () => {
    curtainsValue = !curtainsValue;
    if(curtainsValue) {
        return 'draperiile au fost pornit';
    } else {
        return 'draperiile au fost oprit';
    }
    }


toggleLights();
console.log(toggleLights());
toggleAc();
console.log(toggleAc());
toggleCurtains();
console.log(toggleCurtains());
