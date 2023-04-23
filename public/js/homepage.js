//sidebar menu elements
const userButton = document.getElementById('user');
const dogButton = document.getElementById('dog');
const friendsButton = document.getElementById('friends');

//html elements
const myProfile = document.getElementById('my-profile');
const dogProfile = document.getElementById('dog-profile');
const friendList = document.getElementById('friend-list');

//modal html elements
const editBtn = document.getElementsByClassName('edit-btn')[0];
//modal - likes/dislikes
const submitLikeBtn = document.getElementsByClassName('submit-like')[0];
const submitInterestBtn = document.getElementsByClassName('submit-interest')[0];
const likeList = document.getElementsByClassName('my-likes')[0];
//modal - interests
const deleteLikesBtn = document.getElementsByClassName('delete-likes')[0];
const interestList = document.getElementsByClassName('my-interests')[0];
const deleteInterestsBtn = document.getElementsByClassName('delete-interest')[0];

//friend list html elements
const myFriend = document.getElementsByClassName('human-friend')[0];
const ghostFriendBtn = document.getElementsByClassName('ghost-friend')[0];
const myDogFriend = document.getElementsByClassName('dog-friend')[0];
const ghostDogFriendBtn = document.getElementsByClassName('ghost-dog')[0];

// Submit new like
submitLikeBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Get data from form fields
    const like = document.getElementById('like-input').value;

    // Make a fetch request to post the new like data
    fetch('/likes', {
        method: 'POST',
        body: JSON.stringify({ like }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            // handle response from server
            console.log(response);
        })
        .catch(error => {
            // handle errors
            console.error(error);
        });
});

// Delete like/dislike
deleteLikesBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Get id of like to delete
    const likeId = event.target.getAttribute('data-like-id');

    // Make a fetch request to delete the like data
    fetch(`/likes/${likeId}`, {
        method: 'DELETE'
    })
        .then(response => {
            // handle response from server
            console.log(response);
        })
        .catch(error => {
            // handle errors
            console.error(error);
        });
});

// Submit new interest
submitInterestBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Get data from form fields
    const interest = document.getElementById('interest-input').value;

    // Make a fetch request to post the new interest data
    fetch('/interests', {
        method: 'POST',
        body: JSON.stringify({ interest }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            // handle response from server
            console.log(response);
        })
        .catch(error => {
            // handle errors
            console.error(error);
        });
});


// Delete interests
deleteInterestsBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Get id of interest to delete
    const interestId = event.target.getAttribute('data-interest-id');

    // Make a fetch request to delete the interest data
    fetch(`/interests/${interestId}`, {
        method: 'DELETE'
    })
        .then(response => {
            // handle response from server
            console.log(response);
        })
        .catch(error => {
            // handle errors
            console.error(error);
        });
});

// // Delete interests
// const deleteInterestsBtn = document.getElementsByClassName('delete-interest');
// deleteInterestsBtn.addEventListener('click', (event) => {
// event.preventDefault();

// // Get id of interest to delete
// const interestId = event.target.getAttribute('data-interest-id');

// // Make a fetch request to delete the interest data
// fetch(/interests/${interestId}, {
// method: 'DELETE'
// })
// .then(response => {
// // handle response from server
// console.log(response);
// })
// .catch(error => {
// // handle errors
// console.error(error);
// });
// });

// Submit edits
editBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Get data from form fields
    const name = document.getElementById('name-input').value;
    const age = document.getElementById('age-input').value;

    // Make a fetch request to update the user's profile data
    fetch('/profile', {
        method: 'PUT',
        body: JSON.stringify({ name, age }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            // handle response from server
            console.log(response);
        })
        .catch(error => {
            // handle errors
            console.error(error);
        });
});

// Delete dog/human friend
myFriend.addEventListener('click', (event) => {
    event.preventDefault();

    // Get id of friend to delete
    const friendId = event.target.getAttribute('data-friend-id');

    // Make a fetch request to delete the friend data
    fetch(`/friends/${friendId}`, {
        method: 'DELETE'
    })
        .then(response => {
            // handle response from server
            console.log(response);
        })
        .catch(error => {
            // handle errors
            console.error(error);
        });

    // Change display of dog profile, friend list when button is clicked
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
});

// Delete dog friend
myDogFriend.addEventListener('click', (event) => {
    event.preventDefault();

    // Get id of friend to delete
    const friendId = event.target.getAttribute('data-friend-id');

    // Make a fetch request to delete the friend data
    fetch(`/friends/${friendId}`, {
        method: 'DELETE'
    })
        .then(response => {
            // handle response from server
            console.log(response);
        })
        .catch(error => {
            // handle errors
            console.error(error);
        });

    // Change display of dog profile, friend list when button is clicked
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
});
