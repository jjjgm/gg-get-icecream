// Get the logout button
const logoutButton = document.querySelector('.logout-button');

// When the logout button is clicked, send a request to the server to log out the user
logoutButton.addEventListener('click', (event) => {
  event.preventDefault();
  // Send a request to the server to log out the user
  // ...
  // Redirect the user to the login page
  window.location.href = 'login.html';
});
