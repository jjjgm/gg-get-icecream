// Get the input fields from the signup form
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Add an event listener to the signup form
document.getElementById('signupForm').addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the user's input
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Validate the input
  if (!email || !password || !confirmPassword) {
    alert('Please enter all required fields.');
    return;
  }
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Send a request to the server to create a new user account
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      else {window.location.href = '/dashboard';}
      return response.json();
    })
    .catch((error) => {
      alert(`Signup failed: ${error.message}`);
    });
});