//sidebar menu elements
const userButton = document.getElementById('user');
const dogButton = document.getElementById('dog');
const friendsButton = document.getElementById('friends');

//html elements
const myProfile = document.getElementById('my-profile');
const dogProfile = document.getElementById('dog-profile');
const friendList = document.getElementById('friend-list');


//other variables

//change display of dog profile, friend list when button is clicked
if (userButton.checked) {
    myProfile.setAttribute('style', 'display: block');
    dogProfile.setAttribute('style', 'display: none');
    friendList.setAttribute('style', 'display: none');
};

if (dogButton.checked) {
    myProfile.setAttribute('style', 'display: none');
    dogProfile.setAttribute('style', 'display: block');
    friendList.setAttribute('style', 'display: none');
};

if (friendsButton.checked) {
    myProfile.setAttribute('style', 'display: none');
    dogProfile.setAttribute('style', 'display: none');
    friendList.setAttribute('style', 'display: block');
}

//edit profile
