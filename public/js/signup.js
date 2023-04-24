// Get the input fields from the signup form
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const breedInput = document.getElementById('breed');
// const genderInput = document.getElementById('gender');
// const pictureInput = document.getElementById('picture');
// const bioInput = document.getElementById('description');


// Add an event listener to the signup form
document.getElementById('signupForm').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the user's input
    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPass.value;
    const name = nameInput.value;
    const age = ageInput.value;
    const breed = breedInput.value;


    // Validate the input
    if (!username || !password || !confirmPassword || !name || !age || !breed) {
        alert('Please input all required fields.');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Send a request to the server to create a new user account
    fetch('/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
            dogs: [
                {
                    name,
                    age,
                    breed,
                },
            ],
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            else {window.location.href = '/login';}
            return response.json();
            // if (response.ok) {
            //     document.location.replace('/messages');
            // } else {
            //     alert(response.statusText);
            // }
        })
        .catch((error) => {
            alert(`Signup failed: ${error.message}`);
        });
    
    var myWidget = cloudinary.createUploadWidget({
        cloudName: 'dyyjy1hzi',
        uploadPreset: 'a7lspwhw'}, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info);
                profile_picture = result.info.secure_url;
            }
        })
    
    document.getElementById("upload_widget").addEventListener("click", function(){    myWidget.open();  }, false);
});