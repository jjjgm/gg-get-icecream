// Get the input fields from the signup form
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');
const nameInput = document.getElementById('name');
const pictureInput = document.getElementById('picture');
const locationInput = document.getElementById('location');;
const ageInput = document.getElementById('age');
const genderInput = document.getElementById('gender');
const bioInput = document.getElementById('description');


// Add an event listener to the signup form
document.getElementById('signupForm').addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the user's input
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPassInput.value;
  const name = nameInput.value;
  const profilePicture = pictureInput.value;
  const location = locationInput.value;
  const age = ageInput.value;
  const gender = genderInput.value;
  const bio = bioInput.value;


  // Validate the input
  if (!email || !password || !confirmPassword || !name || !profilePicture || !location || !age || !gender || !bio) {
    alert('Please input all required fields.');
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
    body: JSON.stringify({
      email,
      password,
      location,
      pets: [
        {
          name,
          age,
          gender,
          bio,
          profilePicture,
        },
      ],
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // else {window.location.href = '/dashboard';}
      // return response.json();
      if (response.ok) {
        document.location.replace('/messages');
      } else {
        alert(response.statusText);
      }
    })
    .catch((error) => {
      alert(`Signup failed: ${error.message}`);
    });
});
