//RegExp = Regular Expressions

//tipare care cauta anumite combinatii in stringuri

let string = 'abcdef';
let pattern = /ab/;

console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));

const submitBtn = document.getElementById('login');
const emailField = document.querySelector('email');
const passwordField = document.getElementById('password');
const error = document.querySelector('#error');

submitBtn.addEventListener('click', function(event) {
event.preventDefault();

const emailValue = emailField.value;
const passwordValue = passwordField.value;

    console.dir(emailField);

});
