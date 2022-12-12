// test object demo

const example = {
    title: 'example object',
    saiHi() {
        console.log('Hey')    
    }
};

console.log(example.title);
console.log(example);
console.dir(example);

console.log(document);
console.dir(document);

// method to get html elements by any selector

//returneaza primul element pe care il gaseste
const redSquare = document.querySelector('.redSquare');
console.dir(redSquare);

redSquare.style.backgroundColor = 'green';

// css background-color => in js script devine backgroundColor  (-minusurile sunt taiate)
//alt exemplu padding-left => js paddingLeft

const blueSquares = document.querySelectorAll('.blueSquare');


console.log(blueSquares);

blueSquares[0].style.backgroundColor = 'yellow';
blueSquares[1].style.backgroundColor = 'yellow';
blueSquares[2].style.backgroundColor = 'yellow';

for (let i = 0; i < blueSquares.length; i++) {
    const blueSquare = blueSquares[i];
    blueSquare.style.backgroundColor = 'orange';
    // blueSquares[i].style.backgroundColor = 'orange';
}

//method to get hmtl element by id

const changedListElem = document.getElementById('changedList');

console.dir(changedList);
changedListElem.style.border = '1px solid black';
changedListElem.children[0].style.backgroundColor = 'lightblue';

// method to get elements by tag name

const paragraphElem = document.getElementsByTagName('p');
paragraphElem[0].innerHTML = 'this text was added later with Js';
paragraphElem[1].style.textTransform = 'uppercase';

// method to get elements by their class names

const styledMessages = document.getElementsByClassName('styledMessages');

for(let i = 0; i < styledMessages.length; i++) {
    const tagName = styledMessages[i].tagName;
    styledMessages[i].innerHTML = `this message was in a ${tagName} and was styled by JS`;
}

const greenBox = document.querySelector('.greenBox');



function changeGreenBox() {
    greenBox.style.backgroundColor = 'lightgreen';
}

function focusInput() {
greenBox.style.backgroundColor = 'red';
document.getElementsByTagName('label')[0].innerHTML = 'Changed by focus event';
}

function blueInput() {
    greenBox.style.backgroundColor = 'black';

}

const mouseEnter = function () {
    greenBox.style.backgroundColor = 'purple';
    greenBox.style.border = '';
    greenBox.innerText = '';
}

const mouseLeave = () => {
    greenBox.style.backgroundColor = 'white';
    greenBox.style.border = '1px solid black';
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
    greenBox.style.border = '';
    greenBox.innerText = '';
}

const readInput = ()=> {
    const readValueInputElem = document.getElementById('readValueInput');
    console.dir(readValueInputElem);
    document.getElementById('textFromReadInput').innerHTML = readValueInputElem.value
} 

document.getElementById('readValueInput').value = 'alin';