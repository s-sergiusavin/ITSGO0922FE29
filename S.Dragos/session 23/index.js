/**
 * Test object demo
 */
<<<<<<< HEAD
const exemple={
    title : 'Example object',
    sayHi(){
        console.log('Hey');
    }
}
console.log(exemple.title);
console.log(exemple);
console.dir(exemple);
=======

 const example = {
    title: 'Example object',
    saiHi() {
        console.log('Hey');
    }
};

console.log(example.title);
console.log(example);
console.dir(example);
>>>>>>> main

console.log(document);
console.dir(document);

<<<<<<< HEAD

=======
>>>>>>> main
/**
 * Method to get html elements by any selector
 */

<<<<<<< HEAD
//returneaza PRIMUL element pe care il gaseste
const redSquare = document.querySelector('.redSquare');
=======
// returneaza PRIMUL element pe care il gaseste
const redSquare = document.querySelector('.redSquare');
console.log(redSquare);
>>>>>>> main
console.dir(redSquare);

redSquare.style.backgroundColor = 'green';

<<<<<<< HEAD
//css background-color => js backgroundColor
//padding-left => js paddingLeft

const blueSquares = document.querySelectorAll('.blueSquare');

console.log(blueSquares);

blueSquares[0].style.backgroundColor='yellow';
blueSquares[1].style.backgroundColor='yellow';
blueSquares[2].style.backgroundColor='yellow';



for(let i = 0; i < blueSquares.length;i++){
    // const blueSquare = blueSquares[i];
    // blueSquares.style.backgroundColor='orange';
     blueSquares[i].style.backgroundColor='orange';
}

/**
 * Method to get html elements by id
 */


=======
// css background-color => js backgroundColor
// padding-left => js paddingLeft

const blueSquares = document.querySelectorAll('.blueSquare');
// const blueSquares = document.querySelectorAll('#blueSquare'); // cauta dupa id
// const blueSquares = document.querySelectorAll('blueSquare'); // cauta dupa numele tag-ului

console.log(blueSquares);

blueSquares[0].style.backgroundColor = 'yellow';
blueSquares[1].style.backgroundColor = 'yellow';
blueSquares[2].style.backgroundColor = 'yellow';

for (let i = 0; i < blueSquares.length; i++) {
    const blueSquare = blueSquares[i];
    blueSquare.style.backgroundColor = 'orange';

    // blueSquares[i].style.backgroundColor = 'orange';
}

/**
 * Method to get html element by id
 */

>>>>>>> main
const changedListElem = document.getElementById('changedList');

console.dir(changedListElem);
changedListElem.style.border = '1px solid black';
changedListElem.children[0].style.backgroundColor = 'lightblue';

/**
<<<<<<< HEAD
 * Methond get elements by tag name
 */

const paragrafElem = document.getElementsByTagName('p');
paragrafElem[0].innerHTML = 'This text was added later withs js';
paragrafElem[1].style.textTransform = 'uppercase';


/**
 * Method to get elements by class name
 */


const styletMessages = document.getElementsByClassName('styletMessages');

for(let i = 0;i <styletMessages.length; i ++){
    const tagName=styletMessages[i].tagName;
    styletMessages[i].innerHTML= `This message was in a ${tagName} and was styled by JS`;
=======
 * Method to get elements by tag name
 */

const paragraphElem = document.getElementsByTagName('p');
paragraphElem[0].innerHTML = 'This text was added later with JS';
paragraphElem[1].style.textTransform = 'uppercase';

/**
 * Method to get elements by their class names
 */

const styledMessages = document.getElementsByClassName('styledMessages');
console.log(styledMessages);
for (let i = 0; i < styledMessages.length; i++) {
    const tagName = styledMessages[i].tagName;
    styledMessages[i].innerHTML = `This message was in a ${tagName} and was styled by JS`;
>>>>>>> main
}

const greenBox = document.querySelector('.greenBox');


<<<<<<< HEAD
function changedGreenBox(){
    greenBox.style.backgroundColor = 'lightgreen';
}



function focusInput(){
    greenBox.style.backgroundColor= 'red';
    document.getElementsByTagName('label')[0].innerHTML = 'Changed by focus event';
}
function blurInput(){
    greenBox.style.backgroundColor= 'black';
}
=======
function changeGreenBox() {
    greenBox.style.backgroundColor = 'lightgreen';
}

function focusInput() {
    greenBox.style.backgroundColor = 'red';
    document.getElementsByTagName('label')[0].innerHTML = 'Changed by focus event';
}

function blurInput() {
    greenBox.style.backgroundColor = 'black';
}

const mouseEnter = function () {
    greenBox.style.backgroundColor = 'purple';
    greenBox.style.border= '';
    greenBox.innerText = '';
}

const mouseLeave = () => {
    greenBox.style.backgroundColor = 'white';
    greenBox.style.border= '1px solid black';
    greenBox.innerText = 'black';
}

const onKeyDown = () => {
    greenBox.style.backgroundColor = 'pink';
}

const onKeyUp = () => {
    greenBox.style.backgroundColor = 'teal';
}

const onDblClick = () => {
    greenBox.style.backgroundColor = 'green';
    greenBox.style.border= '';
    greenBox.innerText = '';
}

const readInput = () => {
    const readValueInputElem = document.getElementById('readValueInput');
    console.dir(readValueInputElem);
    document.getElementById('textFromReadInput').innerHTML = readValueInputElem.value;
}

document.getElementById('readValueInput').value = 'Dragos';
>>>>>>> main
