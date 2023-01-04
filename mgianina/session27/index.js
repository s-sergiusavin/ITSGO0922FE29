let isLoginPage = true;

const switchButton = document.getElementById("switchButton");

const loginButton = document.getElementById("loginButton");

const emailField = document.getElementById("userImput");

const passwordField = document.getElementById("passwordInput");
const error = document.querySelector("#error");

switchButton.addEventListener("click", function () {
  const headerTitleElement = documnet.getElementById("headerTitle");
  const forgotpasswordButton = document.getElementById("forgotPassword");

  if (isLoginPage) {
    //switch to create account page
    headerTitleElement.innerHTML = "Create new account";

    forgotpasswordButton.style.display = "none";
    loginButton.value = "Sign up";
    this.value = "Switch to login page";
  } else {
    //switch to login page
    headerTitleElement.innerHTML = "Login";

    forgotpasswordButton.style.display = "inline";
    loginButton.value = "Login";
    this.value = "Switch to create acount page";
  }
  isLoginPage = !isLoginPage;
});


function showError(message) {
    error.style.display = "block";
    error.innerHTML = message;
    error.style.color = "red";
  }
  
const validatePassword = (value) => {
    if (value === "password") {
      return true;
    } else {
      return false;
    }
  
  };
  
  const validateEmail = (email, regex) => {
  
    return !!email.match(regex); //-face acelasi lucru ca mai sus
  };
  
  const clearLoginInputs = () => {
  emailField.value = "";
  passwordField.value = "";
};

loginButton.addEventListener("click", function (event) {
  event.preventDefault(); //folosita in sensul de "uita tot ce trebuie sa faci";
  const emailValue = emailField.value;
  const passwordValue = passwordField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  if (emailField === "" || passwordValue === "") {
    showError("All fields are required and must contain a value");
  } else {
    error.style.display = "none";
    if (
      validatePassword(passwordValue) &&
      validateEmail(emailValue, regexEmailPattern)
    ) {
        if(isLoginPage) {
//login request
login(emailValue, passwordValue).then(data = > {
    console.log(data);
});


        }else {
//register request
createAccount(emailValue, passwordValue).then(data => {
    console.log(data);
})

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
    const loginUrl = "https://reqres.in/api/login"
    let loginData = {
        email: email,
        password: password
    }

    loginData = {
        {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
    }

    const loginConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    }

    const response = await fetch(loginUrl, loginConfig);

    return response.json();
}




async function createAcount (email, password) {
 const createAccountUrl = "https://reqres.in/api/register";
 email = "eve.holt@reqres.in";
 const registerData = {
    email: email,
    password: password
 }

 const createAccountConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(registerData)
 }
 const response = await fetch(createAccountUrl, createAccountConfig)
 return response.json();
}


/**
 * REST & SPREAD OPERATORS
 * ARRAY & OBJECT DESTRUSCTURING
 */
//Spread operator

const puppy = {
    hair: "long",
    eyes: "blue",
    legs: 4,
    tail: true,
    barks: "yes",
    address: {
        city: "Brasov",
        zip: 340484
    
    },
    bark() {
        console.log("HAM!");
    }
}

// const myPuppy = puppy;

// myPuppy.hair = "short";
// console.log(myPuppy, puppy);
// ... cele trei puncte copiaza toate proprietatile (spread operator)
//...spread operator functioneaza doar pentru primul nivel

const myPuppy = {
    ...puppy
    address: {...puppy.address},
    hair: "short",
    eyes: "blue",
    color: "pete"
};

myPuppy.address.zip = 100;

myPuppy.hair = "short";

console.log(myPuppy);


const hobbies = ["sky", "travel", "dance", "sing", "play"];

const myHobbies = [...hobbies];

myHobbies[0] = "snowbording";

console.log(hobbies, myHobbies);


const [a, b, ...c] = hobbies;

console.log(a);
console.log(b);
console.log(c);

const returnSomething = () => {
    const cat = {
        meows: true,
        purrs: "sometimes"
    };

    const feedCat = () => {
        console.log("Feed the cat");
    }
    return (cat, feedCat);
}


const [myCat, myFunc] = returnSomething();

console.log(myCat);
myFunc();