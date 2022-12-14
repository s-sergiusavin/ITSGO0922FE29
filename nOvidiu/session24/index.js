const demoBoxElement = document.getElementById("testBox");

console.dir(demoBoxElement);
//check  className - string & classList - array

demoBoxElement.className = "red"; //atribui clasa
demoBoxElement.className = ""; //sterg clasa

// cu class list pot controla mai multe clase
demoBoxElement.classList.add("blue");
demoBoxElement.classList.add("red");
//va fi tot blue pentru ca in css clasa albastra e declarata ultima, deci va fi suprascrisa
demoBoxElement.classList.remove("blue"); //elimin o clasa
demoBoxElement.classList.toggle("blue"); //adauga clasa daca nu exista, o sterge daca exista;

const demoImageElement = document.getElementById("demoImage");
const newImageElement = document.getElementById("newImage");

const imgSrc = demoImageElement.getAttribute("src");
//console.log(imgSrc);
newImageElement.setAttribute("src", imgSrc);
// setAttribute(atributul pe care vreau sa il schimb, valoare pe care o vreau)

/* 
EVENT LISTENERS */
// structura camelCase
//dispare prefixul "on" = de la onclick -> click

const ulListElement = document.getElementsByTagName("ul")[0];
// cand am elements tb sa specific si pozitiile de interes
// irl pune clase si id-uri NU FOLOSI TAGNAMES

let listItemsElements = document.querySelectorAll("li");
//nu toate elementele li din pauza
// ci doar elementele li care sunt in pagina la momentul ala

ulListElement.addEventListener("click", () => {
  ulListElement.classList.toggle("blue");
});

// cere 2 parametrii = 1 - tipu lde event si 2 - callback
//cu event listeners scap de a mai nota events in js pentru ca notez evenimentele direct in js

//nu am hover - am mouseover - mouseout
for (let i = 0; i < listItemsElements.length; i++) {
  const listElement = listItemsElements[i];

  //   listElement.addEventListener("mouseover", function () {
  //     this.classList.add("red");
  //   });
  //   listElement.addEventListener("mouseout", function () {
  //     this.classList.remove("red");
  //   });
  listElement.addEventListener("click", toggleListItems);
  //nu am pus paranteze la functie pt ca nu vreau sa imi apeleze functia ci vreau doar sa ii dau o referinta catre functie. daca punteam toggleListItems() mi-o executa cand ajngea lal inia respectiva
}

function toggleListItems() {
  // toggle returneaza daca are sau nu clasa la finalul actiunii true or false

  const toggleValue = this.classList.toggle("red");
  console.log(toggleValue);
  if (toggleValue) {
    const span = document.createElement("span");
    // const x = document.createTextNode("");

    span.innerHTML = " x";
    this.appendChild(span);
  } else {
    this.getElementsByTagName("span")[0].remove(); //sterge span
    //this.remove(); // sterge li
  }
}

//arrow function nu functioneaza cu this

const clickMeElement = document.getElementById("click-me");
clickMeElement.style.cursor = "pointer";

const demoInputElement = document.getElementById("demoInput");

demoInputElement.addEventListener("keypress", function (event) {
  console.dir(event);
  if (event.keyCode === 13 && demoInputElement.value.length > 3) {
    // mai mult de 3 caractere
    //13 = enter
    demoInputElement.style.background = "green";
  }
});

clickMeElement.addEventListener("click", function () {
  const newLiElement = document.createElement("li");
  ulListElement.appendChild(newLiElement);
  listItemsElements = document.querySelectorAll("li");
  if (demoInputElement.value) {
    newLiElement.innerHTML = demoInputElement.value;
    demoInputElement.value = "";
    //daca are orice fel de valoare li-ul, adauga-mi noul li-element sa aibe continutul inputului
  } else {
    newLiElement.innerHTML = "Elem" + listItemsElements.length;
  }
});

//input add toDoList
const toDoInputElement = document.getElementById("toDoInput");
const addButtonElement = document.getElementsByClassName("addButton")[0];
const toDoListElement = document.getElementsByClassName("toDoListItems")[0];
//vreau sa adaug maxim 3 elemente, dar vreau sa le si sterg dand dublu click pe ele iar daca am mai mult de 3 elemente sa nu ma mai lase sa adug

addButtonElement.addEventListener("click", function () {
  const canAdd = checkPlan;
  canAdd();
  if (canAdd) {
    if (toDoInputElement.value !== ``) {
      // use regular expressions
      //if(toDoInputElement.value) - acelasi lucru cu mai sus
      const newListItemElem = document.createElement("li");
      newListItemElem.className = "newListItems";
      newListItemElem.addEventListener("dblclick", function () {
        this.remove();
      });
      toDoListElement.appendChild(newListItemElem);
      newListItemElem.innerHTML = toDoInputElement.value;
      toDoInputElement.value = "";
    } else {
      alert("introdu o valoare");
    }
  } else {
    // alert("get premium"); //opreste executarea paginii// nu-s recomandate pt folosire.
    //similare cu alertele sunt
    //prompt("we all gonna die", "nope!");
    //confirm("bla bal");
    // la react facem console modal care nu opresc rularea paginii
    console.log("actiune dupa alerta");
  }
});

function checkPlan() {
  const newListItemsNumber =
    document.getElementsByClassName("newListItems").length;

  //console.log(newListItemsNumber);

  return newListItemsNumber < 3; //returneaza boolean true sau false
}

//adauga autofocus pe input text

//simplifica addButtonElement click - event listener
// de simplificat codul
//de scos in functii
//de stilizat lista

// practic fa o aplicatie de TD DO LIST
// numai buna de pus la portofoliu
