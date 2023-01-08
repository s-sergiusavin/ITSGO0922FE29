let isLoginPage = true;

const switchButton = document.getElementById('switchButton');
const loginButton = document.getElementById('loginButton');

const emailField = document.getElementById('userInput');
const passwordField = document.getElementById('passwordInput');
const error = document.querySelector('#error');

switchButton.addEventListener('click', function(){
const headerTitleElement = document.getElementById('headerTitle');
const forgotPasswordButton = document.getElementById('forgotPassword');

if (isLoginPage) {
    // switch to create account page
    headerTitleElement.innerHTML = 'Create New Account';
    forgotPasswordButton.style.display = 'none';
    loginButton.value = 'Sign Up';
    this.value = 'Switch To Login page';

} else { 
// switch to login page
headerTitleElement.innerHTML = 'Login';
forgotPasswordButton.style.display = 'inline';
loginButton.value = 'Login';
this.value = 'Switch To create account page';
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


  loginButton.addEventListener("click", function (event) {
    event.preventDefault();
  
    const emailValue = emailField.value;
    const passwordValue = passwordField.value;
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;
  
    function showError(message) {
        error.style.display = "block";
        error.innerHTML = message;
        error.style.color = "red";
      }

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
loginButton(emailValue, passwordValue).then( data => {
    console.log(data);
});
} else {
//register request
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

  function showError(message) {
    error.style.display = "block";
    error.innerHTML = message;
    error.style.color = "red";
  }

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

  function createAccount(email, password) {
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
