const demoBoxElement = document.getElementById('testBox');

console.dir(demoBoxElement);

demoBoxElement.className = 'red';
demoBoxElement.className = '';

demoBoxElement.classList.add('blue');
demoBoxElement.classList.add('red');
demoBoxElement.classList.remove('blue');
demoBoxElement.classList.toggle('blue');

// get or set attributes

const demoImageElement = document.getElementById('demoImage');
const newImageElement = document.getElementById('newImage');

// const imgSrc = demoImageElement.getAttribute('src');
// newImageElement.setAttribute('src', imgSrc);

//event listeners

const ulListElement = document.getElementsByTagName('ul')[0];
let listItemsElements = document.querySelectorAll('li');

// ulListElement.addEventListener('click', () => {
//     ulListElement.classList.toggle('blue');
// });

for (let i = 0; i < listItemsElements.length; i++) {
    const listElement = listItemsElements[i];
// listElement.addEventListener('mouseover', function () {
//     this.classList.add('red');
// });
// listElement.addEventListener('mouseover', function () {
//     this.classList.add('red');
// });
listElement.addEventListener('click', toggleListItems)
}

function toggleListItems() {
  const toggleValue = this.classList.toggle('red');
  console.log(toggleValue);
if (toggleValue) {
const span = document.createElement('span');
span.innerHTML = 'x';
this.appendChild(span);
} else {
this.getElementsByTagName('span')[0].remove();
this.remove();
}
}

const clickMeElement = document.getElementById('clickMe');
clickMeElement.style.cursor = 'pointer';
const demoInputElement = document.getElementById('demoInput');

demoInputElement.addEventListener('keypress', function(event) {
console.log(event);
if (event.keyCode === 13 && demoInputElement.value.length > 3) {
 demoInputElement.style.background = 'green';
}
});

clickMeElement.addEventListener('click', function() {
    const newLiElement = document.createElement('li');
ulListElement.appendChild(newLiElement);
listItemsElements = document.querySelectorAll('li');
if(demoInputElement.value) {
    newLiElement.innerHTML = demoInputElement.value;
} else {
    newLiElement.innerHTML = 'Elem' + listItemsElements.length;
}
});