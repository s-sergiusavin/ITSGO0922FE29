const accountSettingsBtn = document.getElementById("accountSettingsButton");
const accountSettingsList = document.getElementsByClassName(
  "accountSettingsMenu"
)[0];

const logoutButton = document.getElementById("logoutButton");

accountSettingsBtn.addEventListener("click", function () {
  if (accountSettingsList.style.display === "flex") {
    accountSettingsList.style.display = "none";
  } else {
    accountSettingsList.style.display = "flex";
  }
});

logoutButton.addEventListener("click", () => {
  window.open("../../index.html");
});
console.log("js");

const nOfLikesElem = document.getElementById("likesNumber");

const nOfSharesElem = document.getElementById("sharesNumber");

const likeButton = document.getElementById("likeButton");
const shareButton = document.getElementById("shareButton");

const commentButton = document.getElementById("commentButton");
const commentInput = document.getElementById("commentInput");

const commentMessage = document.getElementById("commentMessage");
const removeCommentButton = document.getElementById("removeCommentButton");

const commentInputButton = document.getElementById("commentInputButton");

let isLiked = false;

let isShared = false;

function getNumberOfLikes() {
  nOfLikesElem.innerHTML = nOfLikesElem.innerHTML || 21;
}

function getNumberOfShares() {
  nOfSharesElem.innerHTML = nOfSharesElem.innerHTML || 27;
}

function getData() {
  getNumberOfLikes();
  getNumberOfShares();
}

getData();

function setComment() {
  commentMessage.innerHTML = commentInput.value;
  commentInput.value = "";
}

likeButton.addEventListener("click", function () {
  isLiked = !isLiked;
  //   if (isLiked) {
  //     nOfLikesElem.innerHTML = Number(nOfLikesElem.innerHTML) + 1;
  //   } else {
  //     nOfLikesElem.innerHTML = Number(nOfLikesElem.innerHTML) - 1;
  //   }

  nOfLikesElem.innerHTML = isLiked
    ? Number(nOfLikesElem.innerHTML) + 1
    : Number(nOfLikesElem.innerHTML) - 1;

  this.classList.toggle("blue");
});

shareButton.addEventListener("click", function () {
  isShared = !isShared;

  nOfSharesElem.innerHTML = isShared
    ? Number(nOfSharesElem.innerHTML) + 1
    : Number(nOfSharesElem.innerHTML) - 1;

  this.classList.toggle("blue");
});

commentButton.addEventListener("click", function () {
  commentInput.focus();

  // commentInput.blur(); // reversul functiei blur
});

commentInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    setComment();
    this.blur();
  }
});
///13 este tasta ENTER

commentInputButton.addEventListener("click", setComment);

commentMessage.addEventListener("mouseover", function () {
  removeCommentButton.style.display = "inline-block";
});
