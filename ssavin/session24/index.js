const demoBoxElement = document.getElementById('testBox');

console.dir(demoBoxElement);

demoBoxElement.className = 'red';
demoBoxElement.className = '';

demoBoxElement.classList.add('blue');
demoBoxElement.classList.add('red');
demoBoxElement.classList.remove('blue');
demoBoxElement.classList.toggle('blue');

// Get or set attributes

const demoImageElement = document.getElementById('demoImage');
const newImageElement = document.getElementById('newImage');

const imgSrc = demoImageElement.getAttribute('src');
newImageElement.setAttribute('src', imgSrc);
newImageElement.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__480.jpg');


/**
 * Event listeners
 */

const ulListElement = document.getElementsByTagName('ul')[0];
let listItemsElements = document.querySelectorAll('li');

// ulListElement.addEventListener('click', () => {
//     ulListElement.classList.toggle('blue');
// });


for (let i = 0; i < listItemsElements.length; i++) {
    const listElement = listItemsElements[i];
    // listElement.addEventListener('mouseover', function () {
    //     this.classList.add('red');
    //     console.dir(this);
    // });
    // listElement.addEventListener('mouseout', function () {
    //     this.classList.remove('red');
    // });
    listElement.addEventListener('click', toggleListItems)
}

// const toggleListItems = function () {
function toggleListItems() {
    const toggleValue = this.classList.toggle('red');
    console.log(toggleValue);
    if (toggleValue) {
        const span = document.createElement('span');
        span.innerHTML = 'x';
        this.appendChild(span);
    } else {
        this.getElementsByTagName('span')[0].remove();
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
        demoInputElement.value = '';
    } else {
        newLiElement.innerHTML = 'Elem ' + listItemsElements.length;
    }
});

const toDoInputElement = document.getElementById('toDoInput');
const addButtonElement = document.getElementsByClassName('addButton')[0];
const toDoListlement = document.getElementsByClassName('toDoListItems')[0];

addButtonElement.addEventListener('click', function() {
    const canAdd = checkPlan();

    if (canAdd) {
        if (toDoInputElement.value !== '') {
        // if (toDoInputElement.value) { // acelasi lucru cu ce e mai sus
            const newListItemElem = document.createElement('li');
            newListItemElem.className = 'newListItems';
            newListItemElem.addEventListener('dblclick', function() {
                this.remove();
            });

            toDoListlement.appendChild(newListItemElem);
            newListItemElem.innerHTML = toDoInputElement.value;
            toDoInputElement.value = '';
            toDoInputElement.focus();
        } else {
            alert('Te rugam sa introduci o valoare'); 
        }
    } else {
        alert('Te rugam sa treci la un plan tarifar superior');
        // // prompt('Te rugam sa treci la un plan tarifar superior', 'Iti permiti?');
        // confirm('Te rugam sa treci la un plan tarifar superior');
        console.log('Actiune dupa alerta');
    }


});

function checkPlan() {
    const newListItemsNumber = document.getElementsByClassName('newListItems').length;
    return newListItemsNumber < 3;
}