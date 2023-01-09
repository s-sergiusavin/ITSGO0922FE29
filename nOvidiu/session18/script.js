const likeCounter = document.getElementById("likeCounter");
const commentCounter = document.getElementById("commentCounter");
const shareCounter = document.getElementById("shareCounter");

//buttons

const likeBtnValue = document.getElementById("likeBtnValue");
const likeBtn = document.getElementById("likeBtn");
const commentBtn = document.getElementById("commentBtn");
const shareBtn = document.getElementById("shareeBtn");

//Like
let isLiked = false;
likeBtn.addEventListener("click", function () {
  if (!isLiked) {
    likeCounter.innerHTML++;
    isLiked = true;
    likeBtnValue.innerHTML = "Liked";
    this.classList.add("selectedBtn");
  } else {
    likeCounter.innerHTML--;
    isLiked = false;
    likeBtnValue.innerHTML = "Like";
    this.classList.remove("selectedBtn");
  }
});

//Comment
const postComment = document.getElementById("postComment");
const commentSection = document.querySelector(".commentSection");
const newCommentField = document.querySelector(".newCommentField");
const comments = document.querySelector(".comments");

const addElement = (text) => {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(text);
  newDiv.appendChild(newContent);
};

// //commentSection.style.display = "none";
// commentBtn.addEventListener("click", () => {
//   commentSection.classList.toggle("addComment");
// });
// postComment.addEventListener("click", () => {
//   let newComment = document.createElement("p");
//   newComment.innerHTML = commentSection.innerHTML;
//   comments.append(newComment);

//   // trebuie sa preiau textul pe care il introduc.
// });
