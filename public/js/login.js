// Get the input fields from the login formform
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Add an event listener to the login form
document.getElementById('loginForm').addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the user's input
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validate the input
  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  // Send a request to the server to validate the user's credentials
  fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      else {  window.location.href = '/';}
      return response.json();
    })
    .catch((error) => {
      alert(`Login failed: ${error.message}`);
    });
});