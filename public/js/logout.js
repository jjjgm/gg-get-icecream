// Get the logout button
const logoutButton = document.querySelector('.logout-button');

// When the logout button is clicked, send a request to the server to log out the user
logoutButton.addEventListener('click', async (event) => {
  event.preventDefault();

  try {
    // Send a request to the server to log out the user
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });

    if (response.ok) {
      // Redirect the user to the login page
      window.location.href = 'login.html';
    } else {
      // Handle the error
      console.error('Error logging out:', response.statusText);
    }
  } catch (error) {
    console.error('Error logging out:', error);
  }
});
