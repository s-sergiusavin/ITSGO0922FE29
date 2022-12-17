const demoBoxElement = document.getElementById("testBox");

console.dir(demoBoxElement);

demoBoxElement.className = "red";
demoBoxElement.className = " ";

demoBoxElement.classList.add("blue"); //ca sa adaugam o clasa

demoBoxElement.classList.add("red");

demoBoxElement.classList.remove("blue"); //ca sa stergem o clasa folosim remove()

demoBoxElement.classList.toggle("blue"); //daca nu are toggle ,o adauga,daca o are ,atunci o sterge

//get or set attributes

const demoImageElement = document.getElementById("demoImage");
const newImageElement = document.getElementById("newImage");

const imgSrc = demoImageElement.getAttribute("src");

newImageElement.setAttribute("src", imgSrc);
newImageElement.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
);

/**
 * Event listeners //in js dispare on
 */

const ulListElement = document.getElementsByTagName("ul")[0];

let listItemsElements = document.querySelectorAll("li");

// ulListElement.addEventListener("click", () => {
//     ulListElement.classList.toggle("blue");
// });

for (let i = 0; i < listItemsElements.length; i++) {
  const listElement = listItemsElements[i];
  // listElement.addEventListener("mouseover", function () {
  //     this.classList.add("red");
  //     console.log(this);
  // });
  // listElement.addEventListener("mouseout", function () {
  //     this.classList.remove("red");
  // });
  listElement.addEventListener("click", toggleListItems);
}

//mouseouver este event Listener si apoi punem functie sa actioneze

function toggleListItems() {
  const toggleValue = this.classList.toggle("red");
  console.log(toggleValue);
  if (toggleValue) {
    const span = document.createElement("span");
    span.innerHTML = "x";
    this.appendChild(span);
  } else {
    this.getElementsByTagName("span")[0].remove();
    this.remove();
  }
}

const clickMeElement = document.getElementById("clickMe");
clickMeElement.style.cursor = "pointer";

const demoInputElement = document.getElementById("demoInput");

demoInputElement.addEventListener("keypress", function (event) {
  console.log(event);
  if (event.keyCode === 13 && demoInputElement.value.length > 3) {
    demoInputElement.style.background = "green";
  }
});

clickMeElement.addEventListener("click", function () {
  const newLiElement = document.createElement("li");
  ulListElement.appendChild(newLiElement);
  listItemsElements = document.querySelectorAll("li");
  if (demoImageElement.value) {
    newLiElement.innerHTML = demoInputElement.value;
    demoInputElement.value = "";
  } else {
    newLiElement.innerHTML = "Elem " + listItemsElements.length;
  }
});

const toDoInputElement = document.getElementById("toDoInput");
const addButtonElement = document.getElementsByClassName("addButton")[0];
const toDoListElement = document.getElementsByClassName("toDoItems")[0];

addButtonElement.addEventListener("click", function () {
  const canAdd = checkPlan();

  if (canAdd) {
    if (toDoInputElement.value !== "") {
      const newListItemElem = document.createElement("li");
      newListItemElem.className = "newListItems";

      newListItemElem.addEventListener("dblclick", function () {
        this.remove();
      });

      toDoListElement.appendChild(newListItemElem);
      newListItemElem.innerHTML = toDoInputElement.value;
      toDoInputElement.value = "";
    } else {
      alert("Te rugam sa introduci o valoare!!");
    }
  } else {
    alert("Te rugam sa treci un plan tarifar superior!!"); //dupa alerta tot codul nu se mai executa pana nu dam enter
    // prompt("Te rugam sa treci un plan tarifar superior!!", "Iti permiti?")
    // confirm("Te rugam sa treci un plan tarifar superior!!"); //ne permite ca utilizatorul sa returneze rezultatul
    console.log("Actiune dupa alert");
  }
});

function checkPlan() {
  const newListItemsNumber =
    document.getElementsByClassName("newListItems").length;
  return newListItemsNumber < 3;
}

//pentru a adauga din JS o clasa unui element HTML,ne folosim de className ,care se scrie sub forma de string

const learnElem = document.getElementById("learTime");

learnElem.className = "newClass";
learnElem.className = ""; //asa stergem o clasa,sau o resetam;

//se mai poate de asemenea folosi classList.add pentru a adauga, si classList.remove pentru a sterge

learnElem.classList.add("newClass");
learnElem.classList.remove("newClass");

//tot pentru a adauga sau a sterge,putem folosi classList.toggle,care ori adauga ,ori sterge:daca are clasa toggle,o sterge,daca nu o are,atunci o adauga

learnElem.classList.toggle("newClass");

console.dir(learnElem);

const firstImg = document.getElementById("firstImg");
const secondImg = document.getElementById("secondImg");

console.log(firstImg);

const imageSrc = firstImg.getAttribute("src");
console.log(imageSrc);

secondImg.setAttribute("src", imageSrc);

const pElem = document.querySelector("p");
console.log(pElem);

pElem.addEventListener("mouseover", () => {
  pElem.classList.toggle("borderClass");
});

const anotherPara = document.getElementsByTagName("p")[1];
console.log(anotherPara);

anotherPara.addEventListener("mouseover", function () {
  anotherPara.classList.add("blue");

});

