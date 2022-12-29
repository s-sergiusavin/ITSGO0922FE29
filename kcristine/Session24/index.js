const demoBoxElement = document.getElementById('testBox');

console.dir(demoBoxElement);

demoBoxElement.className = "red";

demoBoxElement.className = "";

demoBoxElement.classList.add('blue');
demoBoxElement.classList.add('red');
demoBoxElement.classList.remove('blue');
demoBoxElement.classList.toggle('blue');

/**
 * Get or set attributes
 */

const demoImageElement = document.getElementById('demoImage');
const newImageElement = document.getElementById('newImage');

const imgSrc = demoImageElement.getAttribute('src');
newImageElement.setAttribute();
newImageElement.setAttribute('src', imgSrc);
newImageElement.setAttribute('src', 'https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80');

/**
 * Event listeners
 */

const ulListElement = document.getElementsByTagName('ul')[0];
let listItemsElements = document.querySelectorAll('li');

// ulListElement.addEventListener('click', () => {
//     ulListElement.classList.toggle('blue');
// });

for (let i =0; i <listItemsElements.length; i++) {
//    const listElement = listItemsElements[i];
//    listElement.addEventListener('mouseover', function() {
//     this.classList.add('red');
//     console.dir(this);
//    });
//    listElement.addEventListener('mouseout', function() {
//     this.classList.add('red');
//    });

   listElement.addEventListener('click', toggleListItem)
}

function toggleListItem() {
    console.log(this.classList.toggle('red'));
    const toggleValue = this.classList.toggle('red');
    console.log(toggleValue);
    if (toggleValue) {

        const span = document.createElement('span');
        span.innerHTML = 'x';
        this.appendChild(span);
    }else{

    }
}

