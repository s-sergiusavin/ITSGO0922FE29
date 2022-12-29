// const myName = "Cristine";

// console.log(myName.toUpperCase());

// let sum = 0;

// function addToSum(number) {
//     return (sum = sum + number);
//     // return sum += number;

//     // sum = sum + number;

//     // return sum;
// }
// console.log(addToSum(3));
// let totalSum = addToSum(5);
// console.log(totalSum);

// let sumNumbers = addToSum;
// console.log(sumNumbers());

// let sumTwoNumbersArrow = (number1, number2) => {
//     return number1 + number2;
// }

// console.log(sumTwoNumbers(2,3));
// console.log(sumTwoNumbersArrow(2,3));


// function verifyEquality(num1, num2) {
//     if (num1 === num2) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(verifyEquality(5,6));

// function verifyEqualitySimplified(num1, num2){
//     return num1 === num2;
// }
// console.log(verifyEqualitySimplified(5,6));

// debbugger:
// F8 - revine la normal
// F10 - sare la un pas
// F11 - intra intr-o functie
// Shift + F11 - iese dintr-o functie

// function removeFromTheBiggest(a,b){
//     if (a >= b){
//         return a - b;
//     }
    
//     }
// }

const puppy = {
    name: "Rex",
    age: 1,
    favouriteToys:["Duck", "Cat", "Bone"],
    bark: function(){
        console.log("Ham");
    },

    barkLoud: () => {
        console.log("Ham!");
    }
}

const doLikeAdog = puppy.bark;
doLikeAdog();

const anotherPuppy = puppy;
anotherPuppy.name ="Azorel";
console.log(anotherPuppy);
console.log(puppy);
anotherPuppy.barkLoud();



const createString = () => {
let newString = "";

return newString;
}

console.log(createString([3, "5", 7, "2", 1])); //35721
console.log(createString([2, "3425", 17, "22",1])); //2342517221


