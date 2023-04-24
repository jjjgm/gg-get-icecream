// Get the user's information
const userName = "John Doe";
const userImage = "path/to/image.jpg";
const userBio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus in libero mattis luctus.";

fetch('/api/users')
  .then(response => response.json())
  .then(data => {
    userName = data.name;
    userImage = data.image;
    userBio = data.bio;

    // Update the profile page with the user's information
    const nameElement = document.querySelector('.profile-name');
    const imageElement = document.querySelector('.profile-image');
    const bioElement = document.querySelector('.profile-bio');

    nameElement.textContent = userName;
    imageElement.src = userImage;
    bioElement.textContent = userBio;
  })
  .catch(error => console.error(error));


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
    fetch ('/api/pets', {
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



  document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);

  addFriendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addNewFriend();
})

// // Get the edit button and form
// const editButton = document.querySelector('.edit-profile');
// const editForm = document.querySelector('.profile-form');

// // Show the edit form when the edit button is clicked
// editButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   editForm.style.display = 'block';
// });

// // Handle form submission to update the user's information
// editForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const formData = new FormData(editForm);
//   editForm.style.display = 'none';
// });

// Get the user's posts
// const userPosts = [
//   {
//     id: 1,
//     title: 'My first post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     date: '2023-04-20',
//   },
//   {
//     id: 2,
//     title: 'My second post',
//     content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
//     date: '2023-04-15',
//   },
// ];

// // Display the user's posts on the profile page
// const postsContainer = document.querySelector('.profile-posts');

// userPosts.forEach((post) => {
//   const postElement = document.createElement('div');
//   postElement.classList.add('post');
//   postElement.innerHTML = `
//     <h3>${post.title}</h3>
//     <p>${post.content}</p>
//     <span>${post.date}</span>
//   `;
//   postsContainer.appendChild(postElement);
// });
