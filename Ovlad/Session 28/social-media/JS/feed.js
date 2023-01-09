const accountSettingsBtn = document.getElementById('accountSettingsButton');
const accountSettingsList = document.getElementsByClassName('accountSettingsMenu')[0];

const logoutButton = document.getElementById('logoutButton');


accountSettingsBtn.addEventListener('click', function() {
    if (accountSettingsList.style.display === 'flex') {
        accountSettingsList.style.display = 'none';
    } else {
accountSettingsList.style.display = 'flex';}
});

logoutButton.addEventListener('click', () => {
window.open('../../index.html');
});

const noOfLikesElem = document.getElementById('likesNumber');
//reactsCount
const noOfSharesElem = document.getElementById('sharesNumber');

const likeButton = document.getElementById('likeButton');
const shareButton = document.getElementById('shareButton');

let isLiked = false;
let isShared = false;

function getNumberOfLikes() {
noOfLikesElem.innerHTML = noOfLikesElem.innerHTML || 21;
}

function getNumberOfShare() {
noOfSharesElem.innerHTML = noOfSharesElem.innerHTML || 27;
}

function getData() {
    getNumberOfLikes();
    getNumberOfShare();
}

getData();

likeButton.addEventListener('click', function() {
isLiked = !isLiked;
    if(isLiked) {
noOfLikesElem.innerHTML = Number(noOfLikesElem.innerHTML) +1;
} else {
    noOfLikesElem.innerHTML = Number(noOfLikesElem.innerHTML) -1;

}
});

shareButton.addEventListener('click', function() {

});
