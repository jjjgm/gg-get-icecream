// Get the input fields from the signup form
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const profilePictureInput = document.getElementById('profilePicture');
const locationInput = document.getElementById('location');
const petNameInput = document.getElementById('petName');
const petAgeInput = document.getElementById('petAge');
const petGenderInput = document.getElementById('petGender');



// Add an event listener to the signup form
document.getElementById('signupForm').addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the user's input
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const profilePicture = profilePictureInput.value;
  const location = locationInput.value;
  const petName = petNameInput.value;
  const petBreed = petBreedInput.value;
  const petAge = petAgeInput.value;
  const petGender = petGenderInput.value;
  const petDescription = petDescriptionInput.value;
  const petProfilePicture = petProfilePictureInput.value;

  // Validate the input
  if (!email || !password || !confirmPassword || !firstName || !lastName || !location || !petName || !petBreed || !petAge || !petGender) {
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
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
      profilePicture,
      location,
      pets: [
        {
          name: petName,
          breed: petBreed,
          age: petAge,
          gender: petGender,
          description: petDescription,
          profilePicture: petProfilePicture,
        },
      ],
    }),
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
