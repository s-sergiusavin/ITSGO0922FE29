const demoBoxElement= document.getElementById('testBox');

console.dir(demoBoxElement);

demoBoxElement.className = 'red';
demoBoxElement.className = '';

demoBoxElement.classList.add('blue');
demoBoxElement.classList.add('red');
demoBoxElement.classList.remove('blue');
demoBoxElement.classList.toggle('blue');


//Get or set attributes


const demoImageElement = document.getElementById('demoImage');
const newImageElement = document.getElementById('newImage');

const imgSrc = demoImageElement.getAttribute('src');
newImageElement.setAttribute('src',imgSrc);
// newImageElement.setAttribute('src');

/**
 * Event listeners
 */

const ulListElement=document.getElementsByTagName('ul')[0];
let listItemsElemnts = document.querySelectorAll('li');

// ulListElement.addEventListener('click',() => {
//     ulListElement.classList.toggle('blue');
// });

for(let i = 0; i< listItemsElemnts.length; i++){
    const listElemnt = listItemsElemnts[i];
//     listElemnt.addEventListener('mouseover', function (){
//         this.classList.add('red');
        
//     });
//     listElemnt.addEventListener('mouseout', function (){
//         this.classList.remove('red');
        
//     });
listElemnt.addEventListener('click', toggleListItems)
 }

function toggleListItems (){
 
  const toggleValue = this.classList.toggle('red')
  console.log(toggleValue);

  if(toggleValue){

    const span = document.createElement('span');
    span.innerHTML = 'x';
    this.appendChild(span);
  }else{
    this.getElementsByTagName('span')[0].remove();
    this.remove();
}
}

const cilckMeElement = document.getElementById('clickMe');
cilckMeElement.style.cursor='pointer';

const demoInputElement= document.getElementById('demoInput');
demoInputElement.addEventListener('keypress',function(event){
    console.log(event);
    if(event.keyCode === 13 && demoInputElement.value.length > 3) {
        demoInputElement.style.background = 'green';
    }
});

cilckMeElement.addEventListener('click', function(){
    const newLiElement = document.createElement('li');
    ulListElement.appendChild(newLiElement);
    listItemsElemnts = document.querySelectorAll('li');
    if(demoInputElement.value){
        newLiElement.innerHTML= demoInputElement.value;
        demoInputElement.value = ' ';
    }
    else{
        newLiElement.innerHTML = 'Elem ' + listItemsElemnts.length;
    }

});

const toDoInputElement = document.getElementById('toDoInput');
const addButtonElement = document.getElementsByClassName('addButton')[0];
const toDoListIElement = document.getElementsByClassName('toDoListItems')[0];

addButtonElement.addEventListener('click',function(){
    const candAdd = checkPlan();
    
    if(candAdd){
        if(toDoInputElement.value !== ''){
            const newListItemElem = document.createElement('li');
            newListItemElem.className= 'newListItems';
            newListItemElem.addEventListener('dbclick',function(){
                this.remove();
            })


            toDoListIElement.appendChild(newListItemElem);
            newListItemElem.innerHTML = toDoInputElement.value;
            toDoInputElement.value = '';
        }
        else{
            alert('Te rugam sa introduci o valoare');

        }
    }else{
        alert('Te rog sa treci la un plan tarifar superior');
        // prompt('Te rog sa treci la un plan tarifar superior','Iti permiti?');
        // confirm('Te rog sa treci la un plan tarifar superior');

    }

});

function checkPlan(){
    const newListItemsNumber = document.getElementsByClassName('newListItems').length;
    // console.log(newListItemsNumber);
    return newListItemsNumber < 3;
}