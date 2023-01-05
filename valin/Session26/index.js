/**
 * Toate informatiile care sunt adaugate de noi sunt trimise la back-end si controlate dupa care se intampla 4 operatiuni:
 * Citire (afisam ce gasim la back-end, ad ex facebook are acelasi layout cu informatii diferite)
 * Scris (trimitem catre back-end)
 * Update (modificam ce este existent)
 * Stergere
 * CRUD (Create R ead Update Delete) si sunt generala la nivel de aplicatii de web
 * Implementate la protocolul HTTP (hyper text transfer protocol) devin: Post Get Update Delete
 */  

/**
 * Serviciile de mai sus se numesc RESTful services
 * Representation State of Transfer -> HTTP Implementation
 * Create => Post
 * Read => Get
 * Update => Put / Patch (rara folosita)
 * Delete
 */

/**
 * Object recap and Classes
 */

const person = {
   name: 'Alin',
   age: 28,
   adress: {
      street: 'street',
      country: 'Italy'
   },
   sayHi: function() {
      console.log(`${this.name} says hi`)
   }
};

person.name = 'Ovidiu';
person.sayHi();
const newPerson = person;
newPerson.name = 'Alin';

console.log(person);
console.log(newPerson);

const otherPerson = new Object(person); // imi creaza un obiect cu clasa Object (predefinita) deci asa nu are aceasi referinta
otherPerson.name = 'SergiuS';

console.log(otherPerson);

const bicycle = {
   gear: 21,
   setGear: function(gear) {
      this.gear = gear;
   }
};

bicycle.gear = 14;
console.log(bicycle);
bicycle.setGear(30); // am folosit o functie ca sa i modific valoarea
console.log(bicycle);

/**
 * Classes
 */

class Book { // model pentru a construi mai mu lte obiecte cu informatii diferite
   cover = 'Hard';
   constructor(type, writer) {
      this.type = type;
      this.author = writer;
   }
};

const basme = new Book('basme', 'Petre Ispirescu'); // cream obiecte diferite in clasa book
const povesti = new Book('povesti', 'Ion Creanga');

console.log(basme);
console.log(povesti);

basme.author= 'Fratii Grimm';
basme.year = 1991;

console.log(basme);
console.log(povesti);

/**
 * Promise (clasa specifica)
 * Datele de pe server au nevoie de timp sa ajunga pentru ca noi facem o cerere de date si ele trebuesc trimise
 * Deci cu aceasta clasa avem promisiunea unei valori pe care ii spun cum trebue folosita
 */

let promise = new Promise(function(resolve,reject) { // promisurile cer ca parametru o functie cu 2 parametri si ele respectiv functii
   // setTimeout(resolve, 2000, 'Value sent');
   // setTimeout(reject, 2000, 'Error sent'); //intra pe adoua functie al then ului daca promisul are o eroare
});

promise.then((value) => {
   console.log('fullfield ' + value)
}, (error) => {
   console.log('rejected '+ error)
})

/**
 * GET Request fetch()
 */

// URL => Uniform Resource Locator

const singleUserUrl = 'https://reqres.in/api/users/2';
fetch(singleUserUrl).then((response) => { // informatia primita cu fetch() e tot o promisuine de tip response 
   // si encodata deci trebue accesata cu then() deci o decodam cu json()
   // json() imi returneaza un promise deci e nevoie de inca un then() ca sa accesam obiectul returnat
   console.log(response);
   response.json().then((data) => {
      console.log(data);
   });
}); // aici nu am tratat erorile

const singleUserData = fetch(singleUserUrl).then((response) => {
   return response.json();
});
singleUserData.then(data => {
   console.log(data)
;})

/**
 * Async/Await requests
 * Async fara await in corpul functiei nu functioneaza
 * Functiile asincrone se folosesc practic doar pentru schimbul de date
 */

async function getSingleUser() {
   const response = await fetch(singleUserUrl);
   return response.json;
}

getSingleUser().then( (data) => {
   console.log('Data with sync/await')
   console.log(data);
});

/**
 * GET Request with error handling
 */

// '?' in url se numeste querry param, adica o medota de configurare si imi arata ceva specific in url

const singleUserNotFoundUrl = 'https://reqres.in/api/users/23';
const userListUrl = 'https://reqres.in/api/users?page=2';

const allUserList = new Promise((resolve,reject) => { // promise-ul e o functie nu o valoare
   fetch(userListUrl).then(response => {
      if (response.status !== 200) {
         throw 'Ai o eroare' // datorita throw-ului, daca if ul nu e verificat trece imediat la primul catch
      } // daca e gresit url-ul o sa functioneze si ne trimite pe catch, daca e gresi raspunsul n-o sa functioneze 
      return response.json();
   })
   .then((data) => {
      resolve(data);
   })
   .catch(error => {
      reject(error); // mergem per reject in caz ca avem un satuts diferit de 200 sau url-ul e gresit
   });
});

allUserList.then((value) => {
   console.log(value);
}, (error) => {
   console.log(error);
});

/**
 * POST Method
 */

const createUserUrl = 'https://reqres.in/api/users';
const user = {
   "name": "morpheus",
   "job": "leader"
}

const createUser = new Promise((resolve,reject) => {
   fetch(createUserUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(user) // serverele nu stiu alt tip de date inafara de string
   }) // pana aici fac request
   .then(response => {
      if (response.status !== 201) {
         throw 'Ai o eroare'
      }
      return response.json();
   }) // decid ce sa fac cu datele
   .then((data) => {
      resolve(data);
   })
   .catch(error => {
      reject(error);
   }); // si aici le folosesc
});

createUser.then((value) => {
   console.log(value);
}, (error) => {
   console.log(error);
});

/**
 * POST with error
 */

const registerUrl = 'https://reqres.in/api/register';

const userUnsuccessful = {
   "email": "sydney@fife"
};

const userSuccessful = {
   "email": "eve.holt@reqres.in",
   "password": "pistol"
};

const registerUrlConfig = {
   method: 'POST',
   headers: {
      'Content-Type': 'application/json'
   },
   body: JSON.stringify(userSuccessful)
}


const registerUser = new Promise((resolve,reject) => {
   fetch(registerUrl, registerUrlConfig)
   .then(response => {
      if (response.status !== 200  ) {
         throw 'Ai o eroare'
      }
      return response.json();
   })
   .then((data) => {
      resolve(data);
   })
   .catch(error => {
      reject(error);
   });
});

registerUser.then((value) => {
   console.log(value);
}, (error) => {
   console.log(error);
});

/**
 * Put request
 */

const updateUserUrl = 'https://reqres.in/api/users/2';
const updatedUser = {
   "name": "morpheus",
   "job": "zion resident"
}

const updateUrlConfig = {
   method: 'PUT',
   headers: {
      'Content-Type': 'application/json'
   },
   body: JSON.stringify(updatedUser)
}

const updateUser = new Promise((resolve,reject) => {
   fetch(updateUserUrl, updateUrlConfig)
   .then(response => {
      if (response.status !== 200  ) {
         throw 'Ai o eroare'
      }
      return response.json();
   })
   .then((data) => {
      resolve(data);
   })
   .catch(error => {
      reject(error);
   });
});

updateUser.then((value) => {
   console.log(value);
}, (error) => {
   console.log(error);
});

/**
 * Delete request
 */

 const deleteUserUrl = 'https://reqres.in/api/users/2';
 const deleteUrlConfig = {
   method: 'DELETE'
}

const deleteUser = new Promise((resolve,reject) => {
   fetch(deleteUserUrl, deleteUrlConfig)
   .then(response => {
      if (response.status !== 204) {
         throw 'Ai o eroare'
      } // nu ne trebue metoda json() pentru ca delete nu returneaza nimic
   });
});