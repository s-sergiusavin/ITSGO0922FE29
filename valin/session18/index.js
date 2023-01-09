let likeClicked = false;
let counter = 0;
let comment = '';
let commentCount = 1;

const likeClickElement = document.querySelectorAll('.likeButton');
const likeCountElement = document.querySelectorAll('.likeCount');
const likeIconElement = document.querySelectorAll('.likeIcon');

const newCommentFieldElement = document.querySelectorAll('.newCommentField');
const sendIconElement = document.querySelectorAll('.sendIcon');
const commentsSectionElement = document.querySelectorAll('.commentSection');
const commentCountElement = document.querySelectorAll('.commentsCount')


const profileImageElement = document.querySelector('.userPic');

for (let i = 0; i < likeClickElement.length ; i++)
{
   likeCountElement[i].innerHTML = counter;

   if (counter === 0) {
      likeCountElement[i].style.display = 'none';
   }

   likeClickElement[i].addEventListener('click', function() {
      if (!likeClicked) {
         likeCountElement[i].style.display = 'inline';
         counter = counter + 1;
         likeCountElement[i].innerHTML = counter;
         likeClickElement[i].style.color = 'darkblue';
         likeIconElement[i].style.fontSize = '25px';
         setTimeout(resizeLike, 510);
      } else {
         counter = counter - 1;
         likeCountElement[i].innerHTML = counter;
         likeClickElement[i].style.color = 'rgb(32, 124, 211)';
         likeIconElement[i].style.fontSize = '25px';
         likeIconElement[i].style.transform = 'rotate(180deg)';
         setTimeout(resizeDisike, 510);
         if (likeCountElement[i].innerHTML === '0') {
            likeCountElement[i].style.display = 'none';
         }
      }

      likeClicked = !likeClicked;
   });

   function resizeLike() {
      likeIconElement[i].style.fontSize = '20px';
   }

   function resizeDisike() {
      likeIconElement[i].style.fontSize = '20px';
      likeIconElement[i].style.transform = 'rotate(0deg)';
   }

   sendIconElement[i].addEventListener('click', function() {
      const newCommentElement = document.createElement('span');
      newCommentElement.className = 'newComment';

      const commentElement = document.createElement('div');
      commentElement.className = 'comment';

      const commentImg = document.createElement('img');
      commentImg.src = 'assets/images/profile2.jpg'
      commentImg.className = 'profileImage newComment';

      if (newCommentFieldElement[i].value !== '') {

         commentCountElement[i].innerHTML = commentCount;
         comment = newCommentFieldElement[i].value;
         newCommentFieldElement[i].value = '';
         newCommentFieldElement[i].focus();
         newCommentElement.innerHTML = comment;
         commentElement.appendChild(commentImg);
         commentElement.appendChild(newCommentElement);
         commentsSectionElement[i].appendChild(commentElement);
         commentCount++;
      }

   })
}