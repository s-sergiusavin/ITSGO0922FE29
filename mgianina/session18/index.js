const likes = document.getElementById("likesNumber");

console.log(likes);
const comments = document.getElementById("commentsNumber");

const likeButton = document.getElementById("likeButton");

const commentButton = document.getElementById("commentButton");

let like = 10;

let comment = 15;

let liked = true;

let commented = true;

// likeButton.addEventListener("click", function() {
//   like = like + 1;
//   likes.innerHTML = like;
// })

// commentButton.addEventListener("click", function () {
//   comment = comment + 1;
//   comments.innerHTML = comment;
// });

likeButton.addEventListener("click", function () {
  if (liked) {
    like = like + 1;
    likes.innerHTML = like;
    if (like === 11) {
      liked = !liked;
    }
  } else {
    like = like - 1;
    likes.innerHTML = like;
    if (like === 10) {
      liked = !liked;
    }
  }
});

commentButton.addEventListener("click", function () {
  if (commented) {
    comment = comment + 1;
    comments.innerHTML = comment;
    if (comment === 16) {
      commented = !commented;
    }
  } else{
    comment = comment - 1;
    comments.innerHTML = comment;
    if (comment === 15) {
      commented = !commented;
    }
  }
});
