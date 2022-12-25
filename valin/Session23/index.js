/**
 * Test object demo
 */

const example = {
   title: 'Example object',
   satHi() {
      console.log('Hey');
   }
};

console.log(example.title);
console.log(example);
console.dir(example); // dir adica tip directory

console.log(document);
console.dir(document); // document se refera la documentul cu care lucram si cu dir putem accesa in consola toate proprietatile

/**
 * Method to get html elements by any selector, instead of accesing the element by itself using console.dir and then 
 * find a way to reach that property/element
 */

// returneaza PRIMUL element pe care il gaseste
const redSquare = document.querySelector('.redSquare');
console.log(redSquare);
console.dir(redSquare);

redSquare.style.backgroundColor = 'green';

// css background-color => js backgroundColor
// padding-left => js paddingLeft

const blueSquares = document.querySelectorAll('.blueSquare'); // o sa fie o lista/colectie de obiecte ci nu array
// const blueSquares = document.querySelectorAll('#blueSquare'); // cauta dupa id
// const blueSquares = document.querySelectorAll('blueSquare'); // cauta dupa numele tag ului

console.log(blueSquares);

blueSquares[0].style.backgroundColor = 'yellow';
blueSquares[1].style.backgroundColor = 'yellow';
blueSquares[2].style.backgroundColor = 'yellow';

for ( let i = 0; i < blueSquares.length; i++) {
   blueSquares[i].style.backgroundColor = 'orange';
}

/**
 * Method to get html elements by id
 */

const changedListElem = document.getElementById('changedList');

console.dir(changedListElem);
changedListElem.style.border = '1px solid black';
changedListElem.children[0].style.backgroundColor = 'lightblue';

/**
 * Method to get elements by tag name
 */

const paragraphElem = document.getElementsByTagName('p');
paragraphElem[0].innerHTML = 'This text was added later with Js'; // innerHTML se refera la ce avem pe pagina
paragraphElem[1].style.textTransform = 'uppercase';

/**
 * Method to get elements by their class names
 */

const styledMessages = document.getElementsByClassName('styledMessages');

for (let i = 0; i < styledMessages.length; i++) {
   const tagName = styledMessages[i].tagName;
   styledMessages[i].innerHTML = `This message was in a ${tagName} and was styled by JS`;
}

const greenBox = document.querySelector('.greenBox');

function changeGreenBox() {
   greenBox.style.backgroundColor = 'lightgreen';
}

function focusInput() {
   greenBox.style.backgroundColor = 'red';
   document.getElementsByTagName('label')[0].innerHTML = 'Changed by focus event'; 
   // totusi e sugerat sa ne folosim de id si class
}

function blurInput() {
   greenBox.style.backgroundColor = 'black';
}

const mouseEnter = function () {
   greenBox.style.backgroundColor = 'purple';
   greenBox.style.border = '';
   greenBox.innerText = 'black  ';
}

const mouseLeave = () => {
   greenBox.style.backgroundColor = 'white';
   greenBox.style.border = '1px solid black';
   greenBox.innerText = '';
}

const onKeyDown = () => {
   greenBox.style.backgroundColor = 'pink';
}

const onKeyUp = () => {
   greenBox.style.backgroundColor = 'teal';
}


const onDblClick = () => {
   greenBox.style.backgroundColor = 'green';
   greenBox.style.border = '';
   greenBox.innerText = '';
}


const readInput = () => {
   const readValueInputElem = document.getElementById('readValueInput')
   document.getElementById('textFromReadInput').innerHTML = readValueInputElem.value;
   document.getElementById("readValueInput").value = '';
}


document.getElementById('readValueInput').placeholder = 'Alin';

// Homework 3 evenimente




