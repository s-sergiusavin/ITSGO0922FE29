/**
 * Test object demo
 */
const exemple={
    title : 'Example object',
    sayHi(){
        console.log('Hey');
    }
}
console.log(exemple.title);
console.log(exemple);
console.dir(exemple);

console.log(document);
console.dir(document);


/**
 * Method to get html elements by any selector
 */

//returneaza PRIMUL element pe care il gaseste
const redSquare = document.querySelector('.redSquare');
console.dir(redSquare);

redSquare.style.backgroundColor = 'green';

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


const changedListElem = document.getElementById('changedList');

console.dir(changedListElem);
changedListElem.style.border = '1px solid black';
changedListElem.children[0].style.backgroundColor = 'lightblue';

/**
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
}

const greenBox = document.querySelector('.greenBox');


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