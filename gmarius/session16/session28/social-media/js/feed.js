const accountSettingsBtn = document.getElementById("accountSettingsButton");
const acountSettingsList = document.getElementsByClassName(
  "accountSettingsMenu"
)[0];

const logoutButton = document.getElementById("logoutButton");

accountSettingsBtn.addEventListener("click", function () {
  if (acountSettingsList.style.display === "flex") {
    acountSettingsList.style.display = "none";
  } else {
    acountSettingsList.style.display = "flex";
  }
});

logoutButton.addEventListener("click", () => {
  window.open("../../index.html");
});

const noOfLikesElem = document.getElementById("likesNumber");
const noOfSharesElem = document.getElementById("sharesNumber");

const likeButton = document.getElementById("likeButton");
const shareButton = document.getElementById("shareButton");

const commentButton = document.getElementById('commentButton');
const commentInput = document.getElementById('commentInput');
const commentInputButton = document.getElementById('commentInputButton');

const commentMessage = document.getElementById('commentMessage');
const removeCommentButton = document.getElementById('removeCommentButton');

let isLiked = false;
let isShared = false;

function getNumberOfLikes() {
  noOfLikesElem.innerHTML = noOfLikesElem.innerHTML || 21;
}

function getNumberOfShares() {
  noOfSharesElem.innerHTML = noOfSharesElem.innerHTML || 27;
}

function getData() {
  getNumberOfLikes();
  getNumberOfShares();
}

getData();

function setComment() {
    commentMessage.innerHTML = commentInput.value;
        commentInput.value = '';
}

likeButton.addEventListener("click", function () {
  isLiked = !isLiked;
  // if(isLiked) {
  //    noOfLikesElem.innerHTML = Number(noOfLikesElem.innerHTML) + 1;
  // } else {
  //    noOfLikesElem.innerHTML = Number(noOfLikesElem.innerHTML) - 1;
  // }

  

  noOfLikesElem.innerHTML = isLiked
    ? Number(noOfLikesElem.innerHTML) + 1
    : Number(noOfLikesElem.innerHTML) - 1;

  this.classList.toggle("blue");
});

shareButton.addEventListener("click", function () {
    isShared = !isShared;
    noOfSharesElem.innerHTML = isShared
    ? Number(noOfSharesElem.innerHTML) + 1
    : Number(noOfSharesElem.innerHTML) - 1;

    this.classList.toggle('blue');
});

commentButton.addEventListener('click', function() {
    commentInput.focus();
    // commentInput.blur(); // reversul functiei de mai sus
});

commentInput.addEventListener('keydown', function(event) {
    if(event.keyCode === 13) {
        setComment()
        this.blur();
    }
});

commentInputButton.addEventListener('click', setComment)


commentMessage.addEventListener('mouseover', function() {
    removeCommentButton.style.display = 'inline-block';
})
