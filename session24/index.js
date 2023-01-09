const demoBoxElement  = document.getElementById('textbox');
demoBoxElement.className = 'red';


demoBoxElement.classList.add('blue');
demoBoxElement.classList.add('red');
demoBoxElement.classList.remove('blue');
demoBoxElement.classList.toggle('blue');

const demoImageElement = document.getElementById('demoImage');
const newImageElement = document.getElementById('newImage');

const imgSrc = demoImageElement.getAttribute('src');
newImageElement.setAttribute('src',imgSrc);
newImageElement.setAttribute('src','https://media.4-paws.org/1/e/d/6/1ed6da75afe37d82757142dc7c6633a532f53a7d/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.jpg');


//EVENT LISTENERS

const ulListElements = document.getElementsByTagName('ul')[0];
let listItemsElements = document.querySelectorAll('li');

ulListElements.addEventListener('click',() => {
    ulListElements.classList.toggle('blue');
});

for (let i=0;i<listItemsElements.length;i++)
{
  const listElement=listItemsElements[i];
//   listElement.addEventListener('mouseover',function() {
//     this.classList.add('red');
//   })
//   listElement.addEventListener('mouseout',function() {
//     this.classList.remove('red');
//   })

listElement.addEventListener('click',toggleListItems);
};
function toggleListItems(){
   // this.classList.toggle('red')  
    const toggleValue = this.classList.toggle('red');
    if(toggleValue){
        const span = document.createElement('span');
        span.innerHTML='x'
        this.appendChild(span);//this=listElement
    }
    else{
        this.getElementsByTagName('span')[0].remove();
        this.remove();

    }
};
const clickmeElement = document.getElementById('click me');
clickmeElement.style.cursor= 'pointer';
 const demoInputElement = document.getElementById('demoInput')

 demoInputElement.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 && demoInputElement.value.length>3){
        demoInputElement.style.background = 'green'
    }
 });
 clickmeElement.addEventListener('click',function(){
    const newLiElem=document.createElement('li');
    ulListElements.appendChild(newLiElem);
    listItemsElements = document.querySelectorAll('li');
    if(demoInputElement.value){
        newLiElem.innerHTML = demoInputElement.value;
    }
    else{
        newLiElem.innerHTML = 'Elem ' + listItemsElements.length;
    }
 })

 const toDoInputElem = document.getElementById('toDoInput');
 const addButtonElem = document.getElementsByClassName('addButton')[0];
 const toDoListElem = document.getElementsByClassName('toDoListItems')[0];
 function checkLength(){
    const newListItemsNr = document.getElementsByClassName('newListItems').length;
    return newListItemsNr < 3;

}

 function removetxt( text){
    text.remove();}

  addButtonElem.addEventListener('click',function(){
    const canAdd = checkLength();
    function remove(text){
        text.addEventListener('dblclick', removetxt(this))
    }


    function newLE(text){
        if(text.value){
         const newListItemElement = document.createElement('li');
         newListItemElement.className = 'newListItems';
          remove(this);
        
        toDoListElem.appendChild(newListItemElement)
        newListItemElement.innerHTML=text.value;
        text.value = '';}
        else{
            alert('introdu ceva')
        }
    }

    if(canAdd){
        newLE(toDoInputElem)
    }
    else{
       alert('nu mai e spatiu')

    }
 });











