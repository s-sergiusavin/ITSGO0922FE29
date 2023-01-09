let isLoginPage = true;

const switchButton = document.getElementById('switchButton');
const loginButton = document.getElementById('loginButton');

const emailField = document.getElementById('userInput');
const passwordField = document.getElementById('passwordInput');
const error = document.querySelector('#error');

switchButton.addEventListener('click', function() {
    const headerTitleElement = document.getElementById('headerTitle');
    const forgotPasswordButton = document.getElementById('forgotPassword');

    if (isLoginPage) {
        // switch to create account page

        headerTitleElement.innerHTML = 'Create new account';
        forgotPasswordButton.style.display = 'none';
        loginButton.value = 'Sign up';
        this.value = 'Switch to login page';
    } else {
        // switch to login page

        headerTitleElement.innerHTML = 'Login';
        forgotPasswordButton.style.display = 'inline';
        loginButton.value = 'Login';
        this.value = 'Switch to create acount page';
    }
    isLoginPage = !isLoginPage;
});

const validatePassword = (value) => {
    return value === "password";
  };
  
  const validateEmail = (email, regex) => {
    console.log(email.match(regex));
    return !!email.match(regex); // converteste la valoare booleana
  };

  const clearLoginInputs = () => {
    emailField.value = "";
    passwordField.value = "";
  };

  function showError(message) {
    error.style.display = "block";
    error.innerHTML = message;
    error.style.color = "red";
  }
  
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
            // login request
            login(emailValue, passwordValue).then( data => {
                // redirect catre aplicatie
                window.open('pages/feed/index.html');
            });
            // daca nu este succes, redirect catre o pagina de eroare
        } else {
            // register request
            createAccount(emailValue, passwordValue).then(data => {
                console.log(data);
            });
        }
        clearLoginInputs();
      } else {
        alert("Try again");
        showError("Incorrect email or password");
        clearLoginInputs();
      }
    }
  });

  async function login(email, password) {
    const loginUrl = 'https://reqres.in/api/login';
    let loginData = {
        email: email,
        password: password
    }

    loginData = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }

    const loginConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    }

    const response = await fetch(loginUrl, loginConfig);
    return response.json()
  }

  async function createAccount(email, password) {
    const createAccountUrl = 'https://reqres.in/api/register';
    email = 'eve.holt@reqres.in';
    let registerData = {
        email: email,
        password: password
    }

    const createAccountConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    }

    const response = await fetch(createAccountUrl, createAccountConfig);
    return response.json();
  }

  /**
   * REST & SPREAD operators
   * Array & object destructuring
   */

  const puppy = {
    hair: 'long',
    eyes: 'blue',
    legs: 4,
    tail: true,
    barks: 'yes',
    address: {
        city: 'Brasov',
        zip: 500500
    },
    bark() {
        console.log('HAM!');
    }
  }

//   const myPuppy = puppy;
//   myPuppy.hair = 'short';
//   console.log(puppy);
//   console.log(myPuppy);

const myPuppy = {
    ...puppy,
    address: {...puppy.address},
    hair: 'short',
    eyes: 'green',
    color: 'pete'
};

myPuppy.address.zip = 100;

// myPuppy.hair = 'short';

  console.log(puppy);
  console.log(myPuppy);

  const hobbies = ['sky', 'travel', 'dance', 'sing', 'play'];
  const myHobbies = [...hobbies];
  myHobbies[0] = 'snowboarding';

  console.log(hobbies);
  console.log(myHobbies);

  const [a, b, ...c] = hobbies;
  console.log(a);
  console.log(b);
  console.log(c);

  const returnSomething = () => {
    const cat = {
        meows: true,
        purrs: 'sometimes'
    };

    const feedCat = () => {
        console.log('Feed the cat');
    }

    return [cat, feedCat];
  }

  const [myCat, myFunc] = returnSomething();

  console.log(myCat);
  myFunc();