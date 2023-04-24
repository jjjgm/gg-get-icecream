signUp.addEventListener('click', (event) => {
  event.preventDefault();
  signupFormHandler();
})

// NEW SIGN UP FROM BUTTON
const signupFormHandler = async (event) => {
  event.preventDefault();


  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPass = document.getElementById('confirmPass').value.trim();
  const name = document.getElementById('name').value.trim();
  const photo = document.getElementById('picture').value.trim();
  const location = document.getElementById('location').value.trim();
  const age = document.getElementById('age').value.trim();
  const gender = document.getElementById('gender').value.trim();
  const bio = document.getElementById('description').value.trim();


  if (!email || !password || !confirmPass || !name || !photo || !location || !age || !gender || !bio) {
    alert('Please input all required fields.');
    return;
  }
  if (password !== confirmPass) {
    alert('Passwords do not match.');
    return;
  }

//   document.getElementById('signupForm').addEventListener('submit', (event) => {
//     const response = await fetch('/api/pet', {
      
//       method: 'POST',
//       body: JSON.stringify({ name, photo, location, age, gender, bio }),

//       headers: { 'Content-Type': 'application/json' },
//     })
//   });


//   if (response.ok) {
//     document.location.replace('/profile');
//   } else {
//     alert(response.statusText);
//   }
// }


// Send a request to the server to create a new user account
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
    pets: [
      {
        name,
        age,
        gender,
        bio,
        location,
        photo
      },
    ],
  }),
})
}


document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);