// Array.prototype.map() JS are o parte mult mai complicata denumita Mostenire Prototopiala, la asta se refera obiectul prototype
// facem abstractie ca este acolo pebtru ca ne trebuesc mai multe notiuni de baza ca sa intelegem cum functioneaza

/**
 * Array cu A, la fel cu Number sau String (pe developer mozilla sunt asa declarate metodele) sunt obiecte care vin
 * cu o multime de proprietati
 */

const myName = 'alin';

console.log(myName.toUpperCase());

let sum = 0;
function addToSum(number = 1) { // punem egal cu 1 ca sa evitam sa iasa undefined in console daca nu i dam o valoare la number
   return sum += number;

   console.log('Acest cod nu se va executa niciodata') // pentru ca dupa return nu mai executa nimic
   return undefined; //  default este return undefined
}

console.log(addToSum(3));
let totalSum = addToSum(5);
console.log(totalSum);

let sumNumbers = addToSum; // aici ma refer la referinta ei si daca folosesc () o apelez
console.log(sumNumbers(7));

let sumTwoNumbers = function (number1, number2) {
   return number1 + number2;
}

let sumTwoNumbersArrow = (number1, number2) => {
   return number1 + number2;
}

console.log(sumTwoNumbers(2,3));
console.log(sumTwoNumbersArrow(2,3));

function verifyEquality(num1, num2) {
   if (num1 === num2) {
      return true
   } else {
      return false;
   }
}

console.log(verifyEquality(5,6));

function verifyEqualitySimplified(num1, num2) {
   return num1 === num2; // egal cu deasupra // practic return imi trimite inafara functiei o valoare, nu toata conditia
}

console.log(verifyEqualitySimplified(5,6));

debugger; // merge doar  cu consola deschisa
// F8 revine la normal (opreste executia debugger)
// F10 sare un pas 
// F11 intra intr-o functie
// Shift + F11 iese dintr-o functie
// Comenzile nu sunt foarte importante pentru ca avem butuoanele in consola si putem folosi debuggeru direct in browser
// Putem porni debuggeru la o anumita linie de cod apasnd in consola pe respectivul numarc  al liniei (brekpoint)

function removeFromTheBiggest(num1, num2) {
   if (num1 >= num2) {
      return num1 - num2;
   } else {
      return num2 - num1;
   }
}

console.log(removeFromTheBiggest(5,7));
console.log(removeFromTheBiggest(15,7));

function verifyNumber(number) {
   if (number >= 10 && number < 50) {v  
      return true;
   } else {
      return false;
   }
}

console.log(verifyNumber(10));
console.log(verifyNumber(50));
console.log(verifyNumber(102));
console.log(verifyNumber(5));

const verifyNumberArrow = (number) => {
   // if (number >= 10 && number < 50) {
   //    return 'da';
   // } else {
   //    return 'nu';
   // }

   return (number >= 10 && number < 50) ? 'da' : 'nu';
}

console.log(verifyNumberArrow(12));

const puppy = {
   name:'Rex',
   age: 1,
   favouriteToys: ['Duck', 'Cat', 'Bone'],
   bark: function() {
      console.log('Ham');
   },
   barkLoud: () => {
      console.log('HAM!');
   }
}

const doLikeAdog = puppy.bark;
doLikeAdog();

const anotherPuppy = puppy; // aceasi referinta pentru acelasi obiect cu alt nume
anotherPuppy.name = 'Azorel'; // schimbam si puppy pentru ca au aceasi referinta
console.log(anotherPuppy);
console.log(puppy);

const createString = (array) => {
   let newString = '';
   for  (let i = 0; i < array.length; i++){
      newString += array[i];
   }
   return newString;
}

console.log(createString([3, '5', 7, "2", 1])); // 35721

const createReversedString = (array) => {
   let newString = '';
   for (let i = array.lengt - 1; i >= 0; i --) {
      newString += array[i];
   }
   return newString;
}

console.log(createReversedString([3, '5', 7, "2", 1])); //12753

const createStringWithOddDigits = (array) => {
   let newString = '';
   for  (let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0) {
         newString += array[i];
      }
   }
   return newString;
}

console.log(createReversedString([3, '5', 7, "2", 1]));

/**
 * Smart Home App
 */

let lightsValue = false;
let acValue = false;
let acOpenings = 0;
let curtainsValue = false;
let windowsValue = false;


const toggleLights = () => {
   lightsValue = !lightsValue;
   if (lightsValue === true) {
   // if (lightsValue) { acelasi ca mai sus
   return 'Luminile au fost aprinse';
   } else {
      return 'Luminile au fost stinse';
   }
}
 
const toggleAc = () => {
   acValue = !acValue;
   if (acValue) {
      acOpenings ++;
      return 'Ac-ul a fost aprins';        
   } else {
      return 'Ac-ul a fost stins';
   }
}

const toggleCurtains = () => {
   curtainsValue = !curtainsValue;
   if (curtainsValue) {
      return 'Draperiile au fost deschise';
   } else {
      return 'Draperiile a fost inchise';
   }
}

const toggleWindows= () => {
   windowsValue = !windowsValue;
   if (windowsValue) {
      return 'Geamurile au fost deschise';
   } else {
      return 'Geamurile a fost inchise';
   }
}

const smoke = () => {
   if (!curtainsValue) {
      toggleCurtains();
   }

   if (!windowsValue) {
      toggleWindows();
   }

   if ('summer') {
      toggleAc();
   }
   console.log('Smoking...');
   toggleWindows();
   toggleCurtains();
   // daca e vara repornim ac-ul
}

const playMusic = (song = 'Spotify...') => {
   console.log(`Playing ... ${song}`)
}


toggleLights();
console.log(toggleLights());
smoke();
playMusic('Radio');

