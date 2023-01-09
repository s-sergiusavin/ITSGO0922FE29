const accountSettingsBtn = document.getElementById("accountSettingsButton");
const accountSettingsList = document.getElementsByClassName(
  "accountSettingsMenu"
)[0];
const logoutButton = document.getElementById("logoutBtn");
const noOfLikesElem = document.getElementById("likeCounter");
const noOfCommentsElem = document.getElementById("commentCounter");
const noOfShareElem = document.getElementById("shareCounter");

const likeButton = document.getElementById("likeBtn");
const commentButton = document.getElementById("commentBtn");
const shareButton = document.getElementById("shareBtn");
const commentInput = document.getElementById("commentInput");

const commentMessage = document.getElementById("commentMessage");
const removeCommentButton = document.getElementById("removeCommentButton");
accountSettingsBtn.addEventListener("click", () => {
  if (accountSettingsList.style.display === "flex") {
    accountSettingsList.style.display = "none";
  } else {
    accountSettingsList.style.display = "flex";
  }
});

function setComment() {
  commentMessage.innerHTML = commentInput.value;
  commentInput.value = "";
}

//sau sau sau folosesc focusfiind butoane la unul dintre ele, focus si blurr/daca dau click oriunde in pagina il pot ascunde

//
//adaug id butonului de logout => si sa-mi faca window open catre pagina de login pe care o avem
logoutButton.addEventListener("click", () => {
  //arrow functions nu ufnctioneaza cu this
  window.open("../../index.html");
});

let isLiked = false;
let isShared = false;

// simulare ca si cand mi-as lua datele de pe server

function getNumberOfLikes() {
  noOfLikesElem.innerHTML = noOfLikesElem.innerHTML || 21;
}

function getNumberOfShares() {
  noOfShareElem.innerHTML = noOfShareElem.innerHTML || 26;
}
// mecanis de fallback . in momentul in care imi iau datele sa imi dea una din valorile alea. dar de ex, daca nu obtin valoarea innerhtml sa imi arate 21 de ex. ar trebui sa am un fallback in cazul in care lucrez cu serverul. sa am o solutie de rezerva
function getData() {
  getNumberOfLikes();
  getNumberOfShares();
}

getData();

likeButton.addEventListener("click", function () {
  isLiked = !isLiked;
  //   if (isLiked) {
  //     noOfLikesElem.innerHTML = Number(noOfLikesElem.innerHTML) + 1; // este egal cu un string by defualt
  //   } else {
  //     noOfLikesElem.innerHTML = Number(noOfLikesElem.innerHTML) - 1;
  //   }
  //sau
  noOfLikesElem.innerHTML = isLiked
    ? Number(noOfLikesElem.innerHTML) + 1
    : Number(noOfLikesElem.innerHTML) - 1;
  // i use number just to make sure ca nu am alte probvleme de conversie
});
shareButton.addEventListener("click", function () {
  isShared = !isShared;
  noOfShareElem.innerHTML = isShared
    ? Number(noOfShareElem.innerHTML) + 1
    : Number(noOfShareElem.innerHTML) - 1;
  this.classList.toggle("blue");
});
// de ce imi da NAN???

//comment
// facem focus
commentButton.addEventListener("click", function () {
  commentInput.focus();
  // commentInput.blur(); //reversul lui focus
});

commentInput.addEventListener("keydown", function (event) {
  if (event.keycode === 13) {
    //tasta enter
    setComment();
    this.blur();
  }
});

commentMessage.addEventListener("mouseover", function () {
  removeCommentButton.style.dispaly = "inline-block";
});

commentInputButton.addEventListener("click", function () {
  setComment();
});
// pot sa pun functie la add event listener direct doar ca trebuie sa pun referitna nu sa o apelez gen ,setcomment, nu ,setcomment();
//altfel im ida eroare

// lucreaza la pagina asta si fa-o frumoasa
// ar fi grozAV DACA as putea sa fac o clona a paginii

//i - > postare =>interactionam cu i-ul de la postare
