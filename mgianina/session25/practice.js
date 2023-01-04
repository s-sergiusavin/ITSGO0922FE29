/**
 * Request examples
 */

//1.Request de tipul Get:
//acest tip de request este cel mai simplu si foloseste ca si parametru url-ul
//ne folosim de o functie specifica numita fetch care necesita ca parametru url-ul

const singleUser = "https://reqres.in/api/users/2";
fetch(singleUser);
//in acest punct,informatia primita este tot o promisiune,de aceea trebuie sa ne folosim de metoda then

// fetch(singleUser).then( (response) => {
// console.log(response);
// response.json().then((data) => {
//     console.log(data);
// })
// });

//in punctul acesta informatia primita este encodata,de aceea pentru a o putea utiliza ne folosim de metoda specifica,disponibila pe astfel de obiecte,numita JSON
//json returneaza tot un promise,de acees si lui ii punem then.


//a doua modalitate
//nu putem avea acces instant la date,de aceea aceste functii sunt numite si f. asincrone

// const singleUserData = fetch(singleUser).then((response) => {
// return response.json();

// });
// singleUserData.then((data) => {
//     console.log(data);
// })


/**
 * Asyns si Await request
 */

async function getSingleUser() {
    const response = await fetch(singleUser);
    return response.json();
};

getSingleUser().then((data) => {
    console.log("Data with async await:",  data);
});

/**
 * get request with error
 */

const userError = "https://reqres.in/api/users/23";

const usertListUrl = "https://reqres.in/api/users?page=2";

/**
 * post -trimitem date catre server
 */

const createUserUrl = "https://reqres.in/api/users";
const user = {
    "name": "morpheus",
    "job": "leader"
};

const creatUser = new Promise((resolve, reject) => {
    fetch(createUserUrl, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })// in punctul asta se face request
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
  

  creatUser.then(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    }
  );