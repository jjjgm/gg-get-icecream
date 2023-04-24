
// Get the input fields from the login form
const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');

  // Get the user's input
  const email = emailInput.value;
  const password = passwordInput.value;


// Add an event listener to the login form
// // document.getElementById('loginForm').addEventListener('submit', (event) => {
//   // Prevent the default form submission behavior
//   event.preventDefault();


  // Validate the input
  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }
// THIS WILL VALIDATE THE LOGIN CREDENTIALS
  const loginFormHandler = async (event) => {
    event.preventDefault();
// THIS WILL FETCH HOME PAGE ONCE CREDENTIALS ACCETPED
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    };

// SIGN UP IF NO ACCOUNT
const signupFormHandler = async (event) => {
  event.preventDefault();

  const signup = document.getElementById('sign-up');
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify(
        { email }
        ),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};