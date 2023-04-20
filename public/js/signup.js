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
  fetch('/api/signup', {
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
      return response.json();
    })
    .then((data) => {
      // Store the user's session data in localStorage or a cookie
      localStorage.setItem('user', JSON.stringify(data));
      // Redirect the user to the dashboard page
      window.location.href = '/dashboard';
    })
    .catch((error) => {
      alert(`Signup failed: ${error.message}`);
    });
});