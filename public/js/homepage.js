// //sidebar menu elements
// const userButton = document.getElementById('user');
// const dogButton = document.getElementById('dog');
// const friendsButton = document.getElementById('friends');

// //html elements
// const myProfile = document.getElementById('my-profile');
// const dogProfile = document.getElementById('dog-profile');
// const friendList = document.getElementById('friend-list');

// //modal html elements
// const editBtn = document.getElementsByClassName('edit-btn');
// //modal - likes/dislikes
// const submitLikeBtn = document.getElementsByClassName('submit-like');
// const submitInterestBtn = document.getElementsByClassName('submit-interest');
// const likeList = document.getElementsByClassName('my-likes');
// //modal - interests
// const deleteLikesBtn = document.getElementsByClassName('delete-likes');
// const interestList = document.getElementsByClassName('my-interests');
// const deleteInterestsBtn = document.getElementsByClassName('delete-interest');

// //friend list html elements
// const myFriend = document.getElementsByClassName('human-friend');
// const ghostFriendBtn = document.getElementsByClassName('ghost-friend');
// const myDogFriend = document.getElementsByClassName('dog-friend');
// const ghostDogFriendBtn = document.getElementsByClassName('ghost-dog');

// // Submit new like
// // const submitLikeBtn = document.getElementsByClassName('submit-like');
// // submitLikeBtn.addEventListener('click', (event) => {
// // event.preventDefault();

// // Get data from form fields
// const like = document.getElementById('like-input').value;

// // Make a fetch request to post the new like data
// fetch('/likes', {
// method: 'POST',
// body: JSON.stringify({ like }),
// headers: {
// 'Content-Type': 'application/json'
// }
// })
// .then(response => {
// // handle response from server
// console.log(response);
// })
// .catch(error => {
// // handle errors
// console.error(error);
// });




// // Get data from form fields
// const name = document.getElementById('name-input').value;
// const age = document.getElementById('age-input').value;

// // Make a fetch request to update the user's profile data
// fetch('/profile', {
// method: 'PUT',
// body: JSON.stringify({ name, age }),
// headers: {
// 'Content-Type': 'application/json'
// }
// })
// .then(response => {
// // handle response from server
// console.log(response);
// })
// .catch(error => {
// // handle errors
// console.error(error);
// });

// // Delete dog human friend
// const myFriend = document.getElementsByClassName('human-friend');
// myFriend.addEventListener('click', (event) => {
// event.preventDefault();

// // Get id of friend to delete
// const friendId = event.target.getAttribute('data-friend-id');

// // Make a fetch request to delete the friend data
// fetch(/friends/${friendId}, {
// ////////////////
// //change display of dog profile, friend list when button is clicked
// if (userButton.checked) {
//     myProfile.setAttribute('style', 'display: block');
//     dogProfile.setAttribute('style', 'display: none');
//     friendList.setAttribute('style', 'display: none');
// };

// if (dogButton.checked) {
//     myProfile.setAttribute('style', 'display: none');
//     dogProfile.setAttribute('style', 'display: block');
//     friendList.setAttribute('style', 'display: none');
// };

// if (friendsButton.checked) {
//     myProfile.setAttribute('style', 'display: none');
//     dogProfile.setAttribute('style', 'display: none');
//     friendList.setAttribute('style', 'display: block');
// }

// //click events
// editBtn.addEventListener('click', (event) => {
//     event.preventDefault();
// });