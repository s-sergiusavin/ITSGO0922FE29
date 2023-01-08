/**
 * RESTful services
 * Representation State of Transfer
 * CRUD
 * Create
 * Read
 * Update
 * Delete
 */

/**
 * HTTP implementation of rest services
 * Create => POST
 * Read => GET
 * Update => PUT / PATCH (rar folosita)
 * Delete => DELETE
 */

/**
 * Object recap and Classes
 */

const person = {
  name: "Sergiu",
  age: 30,
  address: {
    street: "street",
    country: "RO",
  },
  saiHi: function () {
    console.log(`${this.name} says hi`);
  },
};

person.name = "Ovidiu";
person.saiHi();
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
 * Classes
 */

class Book {
  cover = "Hard";
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
basme.year = "1991";

console.log(basme);
console.log(povesti);

/**
 * Promise
 */

let promise = new Promise(function (resolve, reject) {
  // setTimeout(resolve, 2000, 'Value sent');
  // setTimeout(reject, 2000, 'Error sent');
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

const singleUserUrl = "https://reqres.in/api/users/2";

// fetch(singleUserUrl).then( (response) => {
//     console.log(response);
//     response.json().then( (data) => {
//         console.log(data);
//     });
// });

const singleUserData = fetch(singleUserUrl).then((response) => {
  return response.json();
});

singleUserData.then((data) => {
  console.log(data);
});

/**
 * Async/ Await requests
 */

async function getSingleUser() {
  const response = await fetch(singleUserUrl);
  return response.json();
}

getSingleUser().then((data) => {
  console.log("Data with async/await");
  console.log(data);
});

/**
 * Get request with error handling
 */

// ? in url se numeste querry param

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
  }) // pana in punctul asta se face requestul
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

const userSuccessful = {
  email: "eve.holt@reqres.in",
  password: "pistol",
};

const registerUrlConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(userSuccessful),
};

const registerUser = new Promise((resolve, reject) => {
  fetch(registerUrl, registerUrlConfig) // pana in punctul asta se face requestul
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

const updateUserUrl = 'https://reqres.in/api/users/2';
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

const deleteUserUrl = 'https://reqres.in/api/users/2';

const deleteUserUrlConfig = {
  method: "DELETE",
};

const deleteUser = new Promise((resolve, reject) => {
  fetch(deleteUserUrl, deleteUserUrlConfig) // pana in punctul asta se face requestul
    .then((response) => {
      if (response.status !== 204) {
        throw "Ai o eroare";
      }
    })
});