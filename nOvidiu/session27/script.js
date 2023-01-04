let isLoginPage = true;

const switchButton = document.getElementById("switchButton");
const loginButton = document.getElementById("loginButton");

const emailField = document.getElementById("userInput");
const passwordField = document.getElementById("passwordInput");
const error = document.querySelector("#error");

switchButton.addEventListener("click", function () {
  const headerTitleElement = document.getElementById("headerTitle");
  const forgotPassword = document.getElementById("forgotPassword");
  // pot scrie if ul si fara paranteze acolade doar ca tb sa am o singura expresie - gen un rand
  if (isLoginPage) {
    //switch to create account page

    headerTitleElement.innerHTML = "Create new account";
    forgotPassword.style.display = "none";
    loginButton.value = "Sign Up";
    this.value = "Switch to login page"; // this este cel pe care am pus eventul deci switch button
  } else {
    //switch to login page
    headerTitleElement.innerHTML = "log in";
    forgotPassword.style.display = "inline";
    loginButton.value = "login";
    this.value = "Switch to create account page";
  }
  isLoginPage = !isLoginPage; // ia val diferita fata de ce avea inainte
});

function showError(message) {
  error.style.display = "block";
  error.innerHTML = message;
  error.style.color = "red";
}

const validatePassword = (value) => {
  // if(value==='password'){
  //     return true;
  // }else{
  //     return false;
  // } face acelasi lucru
  return value === "password";
};

const validateEmail = (email, regex) => {
  //   if (email.match(regex)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return !!email.match(regex);
};

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = emailField.value;
  const passwordValue = passwordField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  if (emailValue === "" || passwordValue === "") {
    showError("All fields are required and must contain a value");
  } else {
    error.style.display = "none";
    if (
      validatePassword(passwordValue) &&
      validateEmail(emailValue, regexEmailPattern)
    ) {
      if (isLoginPage) {
        //login request
        login(emailValue, passwordValue).then((data) => {
          console.log(data);
        });
      } else {
        //register request
        createAccount(emailValue, passwordValue).then((data) => {
          console.log(data);
        });
      }
      clearLoginInputs();
    } else {
      alert("try again");
      showError("Incorrect email or password");
      clearLoginInputs();
    }
  }
});

async function login(email, password) {
  //datele declarate tb sa fie de forma unui obiect unde declar ermail si password
  const loginUrl = "https://reqres.in/api/login";
  let loginData = {
    email: email, //email stanga - key , email dreapta - parametrul functiei care va fi folosit pt emailValue
    password: password,
  };
  // pt login trimit o informatie catre server deci aici voi folosi metoda post

  const loginConfig = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  };
  const response = await fetch(loginUrl, loginConfig);
  return response.json();
}

// alt request
//fac async ca sa nu folosesc promise
async function createAccount(emnail, password) {
  const createAccountUrl = "https://reqres.in/api/register";
  email = "eve.holt@reqres.in"; //am primit o valoare dar eu vreau sa o suprascriu
  let registerData = {
    email: email,
    password: password,
  };
  const createAccountConfig = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerData),
  };
  const response = await fetch(createAccountUrl, createAccountConfig);
  return response.json();
}

// for some reason ceva e retardat si imi tot da eroarea try again

//check for axios
// urm doua sesiuni lucram la aplicatiile existente
// instalam librarii - si o sa instalam si axios

//metoda de clonare obiecte de care o sa am nevoie la react

// rest and spread operators
//array and objecty destructuring

const puppy = {
  hair: "long",
  eyes: "blue",
  legs: "4",
  tail: true,
  barks: "yes",
  address: {
    city: "brasov",
    zip: 12312312,
  },
  bark() {
    console.log("ham!");
  },
};

const myPuppy = {
  ...puppy,
  hair: "short", // imi copiaza toate proprietatile iar eu la final suprascriu sau adaug proprietatea hair
  eyes: "green",
};

// nu copiaza obiectul in sine - spread operatorul - imi ia toate proprietatile obiectului si le copiaza, nu ia referinta ci copiaza fiecare proprietate in parte

myPuppy.hair = "short";
// puppy nu se va modifica

myPuppy.address.zip = 100;

console.log(myPuppy);
// spread operator functiuoneaza doar pt primul nivel
// daca vreau sa imi functioneze pt urmatorul nivel va trebui sa fac
// const myPuppy = {
//     ...puppy,
//     address{...},
//     hair: "short",
//     eyes: "green",
//   }; //altfel pe nivelul 2 o sa am atat la puppy cat si la mypuppy zip=100

const hobbies = ["ski", "travel", "dance", "sing", "play"];
//const myHobbies = hobbies;
//myHobbies[0] = "snowboarding";
// same

const myHobbies = [...hobbies];
myHobbies[0] = "snowboarding";

console.log(hobbies);
console.log(myHobbies);

// REST operator - tot ... doar ca se foloseste in alt context

const [a, b, ...c] = hobbies;
//a=ski
//b= trave
//...c restul elementelor
console.log(a);
console.log(b);
console.log(c);
// used for destructuring / merge si la obiecte
// il folosesc cand am nevoie sa folosesc doar parti specifice din arrays objects

const returnSomething = () => {
  const cat = {
    meows: true,
    purrs: "sometimes",
  };
  const feedCat = () => {
    console.log("feed the cat");
  };

  //return cat;
  return [cat, feedCat]; // pozitia conteaza
};

const [myCat, myFunc] = returnSomething(); // mycat o sa fie obiectul cat ca aia returenaza
//daca vreau sa returnez mai multe elemente fac return array

console.log(myCat);
myFunc();

//tema
// la aplicatia  de fb pe care am facut-o in datile trecute
// sa fac functionalitatea pt butoanele de like si share
// cand dau click sa se modifice nr de la like - daca dua click sa se incrementeze si daca mai dau click odata sa se decrementeze
// baloarea pot sa o fac sa fie cu un span pe care il controlez din js
// si cand dau like sa dispara sau sa reapara stilizarea

// urmeaza 2 sesiuni de recapitulare
// apoi 1 sesiune de librarii
// apoi react
