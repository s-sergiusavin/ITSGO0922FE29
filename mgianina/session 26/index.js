/**
 *
 */

/**
 * OBJECT RECAP AND CLASES
 */

const person = {
  name: "Sergiu",
  age: 30,
  address: {
    street: "street",
    country: "RO",
  },
  saiHI: function () {
    console.log(`${this.name} say hi`);
  },
};

//in interiorul obiectelor folosim contextul : this.

person.name = "Ovidiu";
person.saiHI();
const newPerson = person;
newPerson.name = "Alin";
console.log(person);
console.log(newPerson);

const otherPerson = new Object(person);
otherPerson.name = "SergiuS";

console.log(person);
console.log(otherPerson);

const bicycle = {
  gear: 21,
  setGear: function (gear) {
    this.gear = gear;
  },
};

bicycle.gear = 14;
console.log(bicycle);

bicycle.setGear(30);
console.log(bicycle);

/**
 * classes
 */
//clasele se noteaza cu litera mare
//au o functie : constructor
//cu ajutorul claselor putem crea noi obiecte

class Book {
  cover = "hard";
  constructor(type, writer) {
    this.type = type;
    this.author = writer;
  }
}

const basme = new Book("basme", "Petre Ispirescu");
const povesti = new Book("povesti", "Ion Creanga");

console.log(basme);
console.log(povesti);

basme.author = "Fratii Grimm";
basme.year = 1991;
console.log(basme);
console.log(povesti);

/**
 * Promise-clasa specifica
 */
//cer un paramentru o functie;

let promise = new Promise(function (resolve, reject) {
  // setTimeout(resolve, 2000, "Value sent");
  setTimeout(reject, 2000, "Error sent");
});

promise.then(
  (value) => {
    console.log("fullfield " + value);
  },
  (error) => {
    console.log("rejected " + error);
  }
);

/**
 * GET request
 */

//PRIMA METODA GET
const singleUserUrl = "https://reqres.in/api/users/2";
//fetch-necesita un parametru si acela este URL

// fetch(singleUserUrl).then((response) => {
// console.log(response);
// response.json().then((data) => {
// console.log(data);
// })
// });

const singleUserData = fetch(singleUserUrl).then((response) => {
  return response.json();
});

singleUserData.then((data) => {
  console.log(data);
});

//A DOUA METODA GET
/**
 * Async / Await request
 */
//async-functie asincrona

async function getSingleUser() {
  const response = await fetch(singleUserUrl);
  return response.json();
}

getSingleUser().then((data) => {
  console.log("data with async/await", data);
});

/**
 * get request with handling
 */

// ?-in url se numeste querry param(parametru de configurare)

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
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

allUserList.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

/**
 * POST method
 */

//trimitem informatii la server

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
    body: JSON.stringify(user),
  }) // in punctul asta se face request
    .then((response) => {
      if (response.status !== 201) {
        throw "Ai o eroare";
      }
      return response.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

//asta aplicam daca vrem sa ne folosim de date
createUser.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

/**
 * POST with error
 */

const registerUrl = "https://reqres.in/api/register";

const userUnsuccessful = {
  email: "sydney@fife",
};

const registerSuccessfull = {
  email: "eve.holt@reqres.in",
  password: "pistol",
};

const registerUrlConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(userUnsuccessful),
};

const registerUser = new Promise((resolve, reject) => {
  fetch(createUserUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }) // in punctul asta se face request
    .then((response) => {
      if (response.status !== 201) {
        throw "Ai o eroare";
      }
      return response.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

registerUser.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

/**
 * PUT request
 */

const updateUserUrl = "https://reqres.in/api/users/2";

const updatedUser = {
  "name": "morpheus",
  "job": "zion resident"
};

const updateUrlConfig = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedUser),
};


const updateUser = new Promise((resolve, reject) => {
  fetch(updateUserUrl, updateUrlConfig) // pana in punctul asta se face requestul
    .then((response) => {
      if (response.status !== 200) {
        throw "Ai o eroare";
      }
      return response.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

updateUser.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);


/**
 * Delete request
 */

const deleteUserUrl = "https://reqres.in/api/users/2";

const deleteUserUrlConfig = {
  method: "DELETE",
};


