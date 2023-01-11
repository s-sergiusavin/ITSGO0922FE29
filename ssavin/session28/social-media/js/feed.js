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
  //     noOfLikesElem.innerHTML = Number(noOfLikesElem.innerHTML) + 1;
  // } else {
  //     noOfLikesElem.innerHTML = Number(noOfLikesElem.innerHTML) - 1;
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

    this.classList.toggle("blue");
});

commentButton.addEventListener('click', function() {
    commentInput.focus();
    // commentInput.blur(); // reversul functiei de mai sus
});

commentInput.addEventListener('keydown', function(event) {
    if(event.keyCode === 13) {
        setComment();
        this.blur();
    }
});

commentInputButton.addEventListener('click', setComment)

commentMessage.addEventListener('mouseover', function() {
    removeCommentButton.style.display = 'inline-block';
});

const infoIconWrapper = document.getElementsByClassName('infoIconWrapper')[0];
const infoMessage = document.getElementsByClassName('infoMessage')[0];

// infoIconWrapper.addEventListener('mouseover', function() {
//   setTimeout(() => {
//     infoMessage.style.display = 'block';
//   }, 1000);
// });

// infoIconWrapper.addEventListener('mouseout', function() {
//   infoMessage.style.display = 'none';
// });

// infoIconWrapper.addEventListener('click', function() {
//   if(infoMessage.style.display === 'block') {
//     infoMessage.style.display = 'none';
//   } else {
//     infoMessage.style.display = 'block';
//   }
// });

infoIconWrapper.addEventListener('focus', function() {
  infoMessage.style.display = 'block';
});

infoIconWrapper.addEventListener('blur', function() {
  infoMessage.style.display = 'none';
});

const profileOptionsWrapper = document.getElementsByClassName('profileOptionsWrapper')[0];
const profileOptionsDropdown = document.getElementsByClassName('profileOptionsDropdown')[0];

profileOptionsWrapper.addEventListener('focus', function(event) {
  debugger;
  profileOptionsDropdown.style.display = 'flex';
});

profileOptionsWrapper.addEventListener('blur', function() {
  profileOptionsDropdown.style.display = 'none';
});

const searchInput = document.querySelector('.searchInput');

searchInput.addEventListener('keydown', function() {
  // Sortare pe FE
  const data = [
    {
      username: 'Username 1',
      likes: 10,
      shares: 15,
      comments: [],
      title: 'Ceva',
      desription: 'Altceva'
    },
    {
      username: 'Username 2',
      likes: 10,
      shares: 15,
      comments: [],
      title: 'Ceva',
      desription: 'Altceva'
    }
  ];
  // data.filter(post => post.username === event.value);
  data.filter(post => post.username.includes(this.value));

  // Sortare pe BE
  filterData.then(data => {
    // manipulate array and prepare data for display
  })
});


async function filterData(searchTerm) {
  const createAccountUrl = 'https://reqres.in/api/data';
  let filteredData = {
      searchTerm: searchTerm,
  }

  const createAccountConfig = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(filteredData)
  }

  const response = await fetch(createAccountUrl, createAccountConfig);
  return response.json();
}


// Exercises

let puppy = {
  name: 'rex',
  age: 10
}


const dog = puppy;

// puppy.name = 'Azor';
// dog.name = 'Azor';

// puppy = {
//   name: 'GiaNCARLO',
//   age: 30
// };

puppy = null;

console.log(dog);
console.log(puppy);

console.log(`tipul lui null este ${typeof null}`);

// Primitives: number, string, undefined, boolean

// References: Objects: array, function, null