/**
 * Test object demo
 */

const example = {
    title: 'Example object',
    saiHi() {
        console.log('Hey');
    }
};

console.log(example.title);
console.log(example);
console.dir(example);

console.log(document);
console.dir(document);

/**
 * Method to get html elements by any selector
 */

// returneaza PRIMUL element pe care il gaseste
const redSquare = document.querySelector('.redSquare');
console.log(redSquare);
console.dir(redSquare);

redSquare.style.backgroundColor = 'green';

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

const changedListElem = document.getElementById('changedList');

console.dir(changedListElem);
changedListElem.style.border = '1px solid black';
changedListElem.children[0].style.backgroundColor = 'lightblue';

/**
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
}

const greenBox = document.querySelector('.greenBox');


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
    blueSquares[1].style.backgroundColor='green';
    blueSquares[2].style.backgroundColor='pink';
}

const mouseLeave = () => {
    greenBox.style.backgroundColor = 'white';
    greenBox.style.border= '1px solid black';
    greenBox.innerText = 'black';
    blueSquares[1].style.backgroundColor='pink';
    blueSquares[2].style.backgroundColor='blue';
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

document.getElementById('readValueInput').value = 'Alin';
