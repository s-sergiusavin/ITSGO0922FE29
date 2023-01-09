const pressedBtn = document.querySelectorAll(".button");
const normalMode = document.querySelector(".normal");
const impossibleMode = document.querySelector(".impossible");

const hiddenBlock = document.getElementById("startGame");
const weaponOfChoice = document.querySelectorAll(".option");
const yourChoice = document.getElementById("yourChoice");
const pcChoice = document.getElementById("pcChoice");
const result = document.getElementById("result");
const score = document.getElementById("score");
//fac o functie care parcurge fiecare element din nodul pressedBtn si imi scoate clasa 'active' daca butonul apasat de mine este egal cu cel iterat sau imi scoate clasa 'active' daca butonul selectat nu este egal cu cel la care a ajuns iteratia
// apoi facu n for each unde adaug event listenerul pe click si ii pun functia de mai sus
//trebuie sa mai adaug un counter isSelected =true ca sa pot adauga tipul de joc ulterior
// si practic functia este trecuta prin fiecare itaratie dintr-un foreach deci are sens

function removeClasses(target) {
  pressedBtn.forEach((btn) => {
    if (btn === target) {
      btn.classList.add("active");
      hiddenBlock.classList.remove("hidden");
    } else {
      btn.classList.remove("active");
    }
  });
}

function selectMode() {
  pressedBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      removeClasses(btn);
    });
  });
  //userpick?
}

// cum pot face ca la un buton selectat, la un al doilea click sa il deselectez?

//display your choice
const userPick = function () {
  weaponOfChoice.forEach((btn) => {
    btn.addEventListener("click", () => {
      yourChoice.innerHTML = btn.textContent;
      pcPick();
    });
  });
};

//display computer's choice
function pcPick() {
  // selectMode();
  // userPick();
  if (normalMode.classList.contains("active")) {
    //normal mode
    pcChoice.innerHTML =
      weaponOfChoice[Math.floor(Math.random() * 3)].textContent;
    //result normal =>
    normalModeRules();
  } else {
    //impossible mode
    if (yourChoice.innerHTML === "Rock") {
      pcChoice.innerHTML = "Paper";
      score.innerHTML--;
    } else if (yourChoice.innerHTML === "Paper") {
      pcChoice.innerHTML = "Scissors";
      score.innerHTML--;
    } else if (yourChoice.innerHTML === "Scissors") {
      pcChoice.innerHTML = "Rock";
      score.innerHTML--;
    }
  }
}

// show result of the fight

// change score

// wait for play again or reset
// selectMode();
// userPick();
// pcPick();

// const spnac = new Promise((resolve, reject) => {
//   resolve(selectMode());
// });

// spnac.then(userPick()).then(pcPick());
selectMode();
userPick();

function normalModeRules() {
  if (yourChoice.innerHTML === pcChoice.innerHTML) {
    result.innerHTML = "It's a draw!";
  } else if (
    yourChoice.innerHTMl === "Rock" &&
    pcChoice.innerHTML === "Paper"
  ) {
    result.innerHTML = "You Lost!";
    score.innerHTML--;
  } else if (
    yourChoice.innerHTMl === "Paper" &&
    pcChoice.innerHTML === "Scissors"
  ) {
    result.innerHTML = "You Lost!";
    score.innerHTML--;
  } else if (
    yourChoice.innerHTMl === "Scissors" &&
    pcChoice.innerHTML === "Rock"
  ) {
    result.innerHTML = "You Lost!";
    score.innerHTML--;
  } else {
    result.innerHTML = "You Won!";
    score.innerHTML++;
  }
}
//for some reason the ain t equal
