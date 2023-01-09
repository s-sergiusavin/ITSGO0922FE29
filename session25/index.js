//RegEx,  reex101.com \ regexr
let string = 'abcdef';
let patern = /ab/;
// verifica daca pater e in string
console.log(patern.exec(string));
console.log(patern.test(string));//true sau false
console.log(string.match(patern));


const submitBtn = document.getElementById('login');
const emailField = document.querySelector('#email')
const passwordField = document.getElementById('password');
const error = document.getElementById('error');
function showError(message){
    error.style.display='block';
    error.innerHTML = message;
    error.style.color = 'red';
}

const correctPassword = (value)=> {
    return value=== 'password';}

function correctEmail(email,regex) {
    return regex.test(email);}

const clearLoginInputs = ()=>{
        emailField.value = "";
        passwordField.value = "";}


submitBtn.addEventListener('click', function(event){
  event.preventDefault();

  const emailValue = emailField.value; 
  const passwordValue = passwordField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

 
    if(emailValue === "" || passwordValue===""){
        showError('all fields requiered')
        
    } else{
        error.style.display='none';

        if (correctPassword(passwordValue) && correctEmail(emailValue, regexEmailPattern)) {
            alert('Logged in!');
            clearLoginInputs()
        } else {
            alert('Try again');
            showError('Incorrect email or password');
            clearLoginInputs();
        }

    }


});







const firstNameElem = document.getElementById('firstName');
const lastNameElem = document.getElementById('lastName');
const ageElem = document.getElementById('age');

const firstName = 'Ana';
const lastName = 'Smith';
const age = 27;


// functie intarziata

setTimeout(() => {
    firstNameElem.value = firstName;
lastNameElem.value = lastName;
ageElem.value = age;

}, 5000);


