const example = { 
    title: 'exemple Title',
    sayHi() {
        console.log('Hi')
    }
}
console.log(example)
console.dir(example)
console.log(document)
console.dir(document)

//get html element by any selector

const redSquare = document.querySelector('.redSquare')
redSquare.style.backgroundColor = 'green';

const blueSquares = document.querySelectorAll('.blueSquare')
blueSquares[0].style.backgroundColor = 'yellow';

for( let i=0;i< blueSquares.length;i++){
    blueSquares[i].style.backgroundColor = 'purple';
}


//get html element by id
const changedListElem = document.getElementById('changedList')
changedListElem.style.border = '1 px solid black';
changedListElem.children[0].style.backgroundColor = 'lightblue';


//get html elements by tag

const paragraphElem = document.getElementsByTagName('p')

paragraphElem[0].innerHTML = 'this text will be changed';

//green box
const greenBox = document.querySelector('.greenbox');
 //on FOCUS
function changeGreenbox(){
    greenBox.style.backgroundColor = 'lightgreen';
}

//on FOCUS && BLUR EVENTS

function focusInput(){
    greenBox.style.backgroundColor = 'red'
}



