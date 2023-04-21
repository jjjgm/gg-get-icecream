//html elements
const addFriendBtn = document.getElementById('add-friend');
const findNewFriendBtn = document.getElementById('find-new');

//POST - add new friend
function addNewFriend() {
    fetch ('/api/friends', {
        method: 'POST',
        body: JSON.stringify({
            id,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

//GET - get all users to put in modal
function getNewFriends() {}

// click events