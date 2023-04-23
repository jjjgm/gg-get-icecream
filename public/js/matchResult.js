//html elements
const addFriendBtn = document.getElementById('add-friend');
const findNewFriendBtn = document.getElementById('find-new');

//create an array with five randomly selected objects
function randomArray(arr) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const item = arr[randomIndex];
}

//POST - add new friend
function addNewFriend() {
    fetch ('/api/users', {
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

// function addNewFriend() {
//     fetch ('/api/users', {
//         method: 'POST',
//         body: JSON.stringify({
//             id,
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
// }

//GET - randomly select five users to put in modal
// function getNewFriends() {
//     fetch('/api/users')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
// }

// click events
addFriendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addNewFriend();
})