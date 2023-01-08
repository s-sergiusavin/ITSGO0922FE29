// const totalCount = document.getElementById("total-count");
// var count = 0;
// totalCount.innerHTML = count;
// const handleIncrement = () => {
//     count++;
//     totalCount.innerHTML = count;
//   };
//   const handleDecrement = () => {
//     count--;
//     totalCount.innerHTML = count;
//   };
//   const incrementCount = document.getElementById("increment-count");
//   const decrementCount = document.getElementById("decrement-count");
//   incrementCount.addEventListener("click", handleIncrement);
//   decrementCount.addEventListener("click", handleDecrement);



  //second try

  const likeBtn = document.querySelector(".likeButton");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="bigBtn"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="bigBtn"></i>`;
    count.textContent--;
  }
});
