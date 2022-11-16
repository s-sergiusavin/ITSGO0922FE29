// Aceasta este o linie de cod comentat

/**
 * Multi line comment
 * care nu va fi luat in considerare
 * 
 * 
 * sddasf
 * dsaffsda
 * afsd
 */

/**
 * Data types
 */

// Primitives (primitive) - number, string, boolean, undefined, symbol
// Refernces (referinte) - objects: array, functions, null

/**
 * Variables types
 */

// var - nu se mai foloseste
// let - variabila dinamica, i se poate schimba valoare
// const - variabila statica, nu i se schimba valoare

/**
 * Numbers
 */

 let monthlyPaycheck = 3000;
 console.log(monthlyPaycheck);
 monthlyPaycheck = 5000;
 console.log(monthlyPaycheck);
 
 let aNumber = 11;
 let bNumber = 5;
 let total;
 
 total = aNumber + bNumber;
 total = aNumber - bNumber;
 total = aNumber * bNumber;
 total = aNumber / bNumber;
 total = aNumber % bNumber; // modulo -- restul impartirii
 total = aNumber ** bNumber; // ** la puterea
 
 total = total + aNumber;
 total += aNumber; // are aceeasi valoare ca operatiunea de o linie mai sus
 // Similar pt toate operatiunie
 
 console.log(total);
 
 // NaN - tipul number
 
 /**
  * Strings
  */
 
 const fullName = "Sergiu Savin";
 const addres = 'Brasov, Rom\'ania';
 const zip = "500'500";
 const zipCode = '500"500';
 
 const age = 30;
 
 const personalInfo = 'Salut '       
 + fullName +
  ' cu varsta de ' +
   age + ' ' + 'ani\n' + // \n e folosit pt un rand nou
   'Locuiesc in ' + addres;
 console.log(personalInfo);
 
 const anotherInfo = `
 fullName ${fullName}
 Acesta este un 
 comment simplu folosind
 backticks
 scris pe mai multe randuri!
 2 + 2 = ${2 + 2}`;
 
 console.log(anotherInfo);
 
 /**
  * Boolean
  */
 
 let lightsOn = false;
 lightsOn = true;
 
 /**
  * Undefined
  */
 
 let dogName;
 let catName = 'Mitzy';
 let dogAge = 5;
 let catAge = '3';
 console.log(dogName + catName);
 console.log(dogAge + catName);
 console.log(dogAge + catAge);
 console.log(dogAge - catAge);
 console.log(dogAge - catName);
 console.log(dogName);
 dogName = null;
 
 
 // Number + Number = Number
 // Number + String = String
 // String + Number = String
 // Number - String = Number
 
 /**
  * Array
  */
 
 const arr = [1, 'doi', null, true, 'fasle', [3, 'patru']];
 console.log(arr[5][1]);
 console.log(arr.length);
 
 /**
  * Objects
  */
 
 const person = {
     fullName: 'Sergiu Savin',
     age: 30,
     lovesCold: false,
     address: {
         city: 'Bv',
         zip: 500500
     },
     'residence-permit': true,
     residencePermit: true
 };
 
 console.log(person);
 console.log(person.fullName);
 console.log(person.address.zip); // cand folosim punct se numeste dotnotation
 console.log(person["residence-permit"]); // cand folosim [] se numeste bracket notation
 console.log(person['fullName']); 
 
 person.fullName = "Brad Pitt";
 console.log(person.fullName);