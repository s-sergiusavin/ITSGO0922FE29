//IMPORTANT##################
// RESTful services
// representational state of transfer
// CRUD - CREATE READ UPDATE DELETE

// HTTP implementation of rest services

//Create => Post
// Read=> Get
// Update=>Put/Patch (rar folosita)
// Delete=>Delete

//Fetch/XHR -> filtrare care imi arata requesturile

//Particularitati Obiecte
// Object recap and Classes
// gasesc in suporturile de curs

const person = {
  name: "Sergiu",
  age: 30,
  address: {
    street: "street",
    country: "RO",
  },
  sayHi: function () {
    console.log(`${this.name} says hi`);
  },
};

// in interiorul obiectelor ne folosim de context, adica de this

person.name = "Ovidiu";
person.sayHi();
const newPerson = person;
newPerson.name = "Alin";
console.log(person);
console.log(newPerson);
//pentru ambele referinte va fi Alin numele

//creez un obiect cu modelul respectiv
const otherPerson = new Object(person);
otherPerson.name = "SergiuS";

console.log(person);
console.log(otherPerson);
// tot nu s-a modificat referinta

const bicycle = {
  gear: 21,
  setGear: function (gear) {
    this.gear = gear;
  },
};

bicycle.gear = 14;
console.log(bicycle.gear);
bicycle.setGear(30);
console.log(bicycle.gear);
// am doua metode prin a modifica proprietatea gear prima directa si a doua indirecta, folosindu-ma de o functie pentru a o modifica indirect
//observ ca [protoype]: object

//CLASEEEEEEEEEEEEEEEEE
// clasele se noteaza cu litera mare
class Book {
  cover = "hard"; // toate obiectele au proprietatea asta fara sa o specific eu

  constructor(type, writer) {
    this.type = type;
    this.author = writer;
  }
}

const basme = new Book("basme", "Petre Ispirescu");

console.log(basme);

const povesti = new Book("povesti", "Ion Creanga");
console.log(povesti);

// protoype = object dar vad ca face parte din clasa book

basme.author = "Fratii Grimm";
basme.year = 1991;
console.log(basme);
console.log(povesti);

// cand vreau sa extind mai multe obiecte e util sa folosesc clase????

// clasa fantastica si importanta
//PROMISE###################################################################
// prima actiune care se intampla cand accesez o pagina este read
// setTimeout si setInterval se executa dupa ce se termina de incarcat toata pagina => functii sincrone
//in cazul requesturilor chestiile astea nu se pot intampla in aceeasi masura
// promise - o sa fie o functie

let promise = new Promise(function (resolve, reject) {
  //setTimeout(resolve, 2000, "Value sent");
  setTimeout(reject, 2000, " Error sent");
}); // built In class, cere ca parametru o functie; resolve si reject vor fi functii

//promise.then(()=>{},()=>{})
//dupa ce primesti datele fa-mi urmatoarele lucruri
// primul ca e de succes si al doilea de eroare
promise.then(
  (value) => {
    console.log("fulfilled" + promise);
  },
  (error) => {
    console.log("rejected" + error);
  }
);

// GET request
// primesc fisiere json de pe servere
// iau url/ adresa paginii unde am datele json
// functiile get necesita numai url-ul
const singleUserUrl = "https://reqres.in/api/users?page=2";
// fetch(singleUserUrl).then((response) => {
//   console.log(response);
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// headers am parametrii de configurare ai url ,status code....
//preview - am informatia primita
//response = forma bruta a obiectului din preview
// initiator si timing - performante
// informatia asta este tot o promisiune
// informatia mea este encodata
//tb sa folosesc json

//same ca mai sus
const singleUserData = fetch(singleUserUrl).then((response) => {
  return response.json(); //nu ma folosesc de ea aici ci doar o returnez
});

singleUserData.then((data) => {
  console.log(data);
});
//get e setat ca default

//o alta modalitate de a face asta

// am nevoie de Async/Await requests
//functie asincrona,nu se va executa ca o functie normala si nu se va executa daca nu pun awat
async function getSingleUser() {
  const response = await fetch(singleUserUrl);
  return response.json();
}

getSingleUser().then((data) => {
  console.log("Data with async/await");
  console.log(data);
});

//folosesc async/await in cea mai mare parte in comunicarea cu serverul sau uneori daca vreau sa trimit o informatie intr-o parte sau in alta

//https - s vine de la secured

//get request with error handling
// code 200 success
// code 404 error

// ? in url se numeste query parameter //parametru de configurare/cautare, ex ?page=2 imi arata doar pagina 2 de la users
const singleUserNotFoundUrl = "https://reqres.in/api/users/23";
const userListUrl = "https://reqres.in/api/users?page=2";

const allUserList = new Promise((resolve, reject) => {
  fetch(userListUrl)
    .then((response) => {
      if (response.status !== 200) {
        throw "Ai o eroare";
      }
      return response.json();
    })
    .then((data) => {
      resolve(data); // am tratat numai cazul de succes, adica resolve
    })
    .catch((error) => {
      reject(error);
    });
}); //vor fi doua functii

allUserList.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

// POST method#########################################

const createUserUrl = "https://reqres.in/api/users";

const user = {
  name: "morpheus",
  job: "leader",
};

const createUser = new Promise((resolve, reject) => {
  fetch(createUserUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user), //pana aici se face requestul
  }) // fac asta daca vreau sa ma folosesc de raspuns si sa ma asigur ca nu am erori
    .then((response) => {
      if (response.status !== 201) {
        throw "Ai o eroare";
      }
      return response.json();
    })
    .then((data) => {
      resolve(data); // am tratat numai cazul de succes, adica resolve
    })
    .catch((error) => {
      reject(error);
    });
});

//partea asta nu e obligatorie, chestia asta o fac daca vreau sa ma folosesc de raspuns
createUser.then(
  // then semnifica punctul din care eu am obtinut informatia, e async stuff I guess
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
); //la then primul caz e mereu succesul sau daca vreau sa pun doar unul o sa fie doar succesul

//metodele post put delete patch mai necesita un parametru pe care il definesc separat or il pun direct

//POST with error

const registerUrl = "https://reqres.in/api/register";

const userUnsuccessful = {
  email: "sydney@fife",
};
const userSuccessful = {
  email: "eve.holt@reqres.in",
  password: "pistol",
};

const registerUrlConfig = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(userSuccessful),
};

const registerUser = new Promise((resolve, reject) => {
  fetch(registerUrl, registerUrlConfig) // fac asta daca vreau sa ma folosesc de raspuns si sa ma asigur ca nu am erori
    .then((response) => {
      //debugger
      if (response.status !== 201) {
        // e gresit pe site e codul 200 si de aia imi tot da eroare
        throw "Ai o eroare";
      }
      return response.json();
    })
    .then((data) => {
      resolve(data); // am tratat numai cazul de succes, adica resolve
    })
    .catch((error) => {
      reject(error);
    });
});

registerUser.then(
  // then semnifica punctul din care eu am obtinut informatia, e async stuff I guess
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

// Session 27

//PUT Request

const updateUserUrl = "https://reqres.in/api/users/2";
const updatedUser = {
  name: "morpheus",
  job: "zion resident",
};
const updateUrlConfig = {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(updatedUser),
};
const updateUser = new Promise((resolve, reject) => {
  fetch(updateUserUrl, updateUrlConfig) // fac asta daca vreau sa ma folosesc de raspuns si sa ma asigur ca nu am erori
    .then((response) => {
      //debugger
      if (response.status !== 200) {
        throw "Ai o eroare";
      }
      return response.json();
    })
    .then((data) => {
      resolve(data); // am tratat numai cazul de succes, adica resolve
    })
    .catch((error) => {
      reject(error);
    });
});

registerUser.then(
  // then semnifica punctul din care eu am obtinut informatia, e async stuff I guess
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
// aici tb sa revizuiesc pentru ca for some reason am o eroare desi nu cred ca ar trebu isa am = sau cred ca throwul ala e aiurea cred ca s-a facut cu succes

const deleteUserUrl = "https://reqres.in/api/users/2";
const deleteUrlConfig = {
  method: "DELETE",
};
const deleteUser = new Promise((resolve, reject) => {
  fetch(deleteUserUrl, deleteUrlConfig) // fac asta daca vreau sa ma folosesc de raspuns si sa ma asigur ca nu am erori
    .then((response) => {
      //debugger
      if (response.status !== 204) {
        throw "Ai o eroare";
      }
      //return response.json(); la delete nu imi returneaza nimic
    })
    .then((data) => {
      resolve(data); // am tratat numai cazul de succes, adica resolve
    })
    .catch((error) => {
      reject(error);
    });
});
// trebuie sa refac exercitiile astea sa ma asigur ca totul e ok ca nu prea am inteles daca au loc acele evenimente sau nu
