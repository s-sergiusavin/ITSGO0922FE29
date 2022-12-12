//dom presupune reprezentarea html ului ca un obiect

// test
const example = {
  title: "example object",
  sayHi() {
    console.long("Hey");
  },
};

console.log(example.title);
console.log(example);
console.dir(example);
//directory, arata ce imi arata log doar ca in alta forma

console.log(document); // fisierul html
console.dir(document);

// Method to get html elements by any selector

const redSquare = document.querySelector(".redSquare");
//ca parametru accepta id tag sau clasa doar sa mentionez # . , fara nimic va presupune ca este element html (tag)
// returneaza primul element pe care il gaseste
console.log(redSquare);
console.dir(redSquare);

redSquare.style.backgroundColor = "green";
//css background-color => js backgroundColor  --> padding-left => paddingLeft
//cratima din css devine camelCase in js

const blueSquares = document.querySelectorAll(".blueSquare");
console.dir(blueSquares);
// cand selectez toate elementele imi va da o colectie/ o lista (nodeList)
blueSquares[0].style.backgroundColor = "yellow";
// ca sa le fac pe toate am nevoie sa iterez

for (let i = 0; i < blueSquares.length; i++) {
  blueSquares[i].style.backgroundColor = "orange";
}

// method to get html element by id
const changedListElem = document.getElementById("changedList");
// UN SINGURRRR ID - ID UL ESTE UNIIIIIIIIIIIIIIIIIIC

console.dir(changedListElem);

changedListElem.style.border = "1px solid black";
changedListElem.children[0].style.backgroundColor = "lightBlue";

// get elements by tag name

const paragraphElem = document.getElementsByTagName("p");
// ia toate elementele p - tot o colectie va rezulta

paragraphElem[0].innerHTML = "this text was added later with js";
//paragraphElem[1].style.textTransform = "uppercase";
//innerHTML - interiorul tagului - continutul

// get elements by their class name

const styledMessages = document.getElementsByClassName("styledMessages");

for (let i = 0; i < styledMessages.length; i++) {
  const tagName = styledMessages[i].tagName;

  styledMessages[
    i
  ].innerHTML = `This message was in a ${tagName} and was styled by JS`;
}

// Interactiunea cu fisierul html

const greenBox = document.querySelector(".greenBox");

function changeGreenBox() {
  greenBox.style.backgroundColor = "lightgreen";
}

function focusInput() {
  greenBox.style.backgroundColor = "red";
  document.getElementsByTagName = "label"[0].innerHTML =
    "changed by focus event";
}

function blurInput() {
  greenBox.style.backgroundColor = "black";
}

const mouseEnter = function () {
  greenBox.style.backgroundColor = "purple";
  greenBox.style.border = "";
  greenBox.innerText = "";
};
// stringul gol reseteaza actiunea
const mouseLeave = () => {
  greenBox.style.backgroundColor = "white";
  greenBox.style.border = "2px solid black";
  greenBox.innerText = "black";
};

const onKeyDown = () => {
  greenBox.style.backgroundColor = "pink";
};

const onKeyUp = () => {
  greenBox.style.backgroundColor = "teal";
};

const onDblClick = () => {
  greenBox.style.backgroundColor = "green";
  greenBox.style.border = "";
  greenBox.innerText = "";
};

const readInput = () => {
  const readValueInputElem = document.getElementById("readValueInput");
  console.dir(readValueInputElem); // verifica valorile - si iau value de acolo
  document.getElementById("textFromReadInput").innerHTML =
    readValueInputElem.value;
};

document.getElementById("readValueInput").value = "Ovidiu";
