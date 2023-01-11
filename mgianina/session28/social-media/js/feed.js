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

const infoIconWrapper = document.getElementsByClassName("infoIcon")[0];
const infoMessage = document.getElementsByClassName("infoMessage")[0];

// infoIconWrapper.addEventListener("mouseover", function () {
//   setTimeout(() => {

//   })
//   infoMessage.style.display = "block";
// });

// infoIconWrapper.addEventListener("mouseout", function () {
//   infoMessage.style.display = "none";
// });

// infoIconWrapper.addEventListener("click", function () {
//   if(infoMessage.style.display === "block") {
//     infoMessage.style.display = "none";
//   }else {
//     infoMessage.style.display = "block";
//   }
// });

infoIconWrapper.addEventListener("focus", function () {
  infoMessage.style.display = "block";
});

infoIconWrapper.addEventListener("blur", function () {
  infoMessage.style.display = "none";
});

const profileOptions = document.getElementsByClassName("profileOptions")[0];

const profileOptionDropdown = document.getElementsByClassName(
  "profileOptionDropdown"
)[0];

profileOptions.addEventListener("focus", function () {
  profileOptionDropdown.style.display = "flex";
});

profileOptions.addEventListener("blur", function () {
  profileOptionDropdown.style.display = "none";
});

const searchInput = document.querySelector(".searchInput");

searchInput.addEventListener("keydown", function () {
  const data = [
    {
      username: "Username 1",
      likes: 10,
      shares: 15,
      comments: [],
      title: "Ceva",
      description: "Altceva",
    },
    {
      username: "Username 2",
      likes: 10,
      shares: 15,
      comments: [],
      title: "Ceva",
      description: "Altceva",
    },
  ];
  // data.filter(post => post.username === event.value);
  data.filter((post) => post.username.includes(this.value));
});

// async function filterData(searchTerm) {
//   const createAccountUrl = "https://regres.in/api/data";
//   let filterData = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(registerData),
//   };

//   const response = await fetch(createAccountUrl, createAccountConfig);
//   return respo;
// }

//Exercises

const puppy = {
  name: "rex",
  age: 10,
};

const dog = puppy;
//puppy.name = "Azor";
//dog.name = "Azor";

puppy = {
  name: "Black",
  age: 30,
};

console.log(dog, puppy);

//Primitive : number, boolean, string, undefined

//References: Objects: Array, function, null
