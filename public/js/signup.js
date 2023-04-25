// Get the input fields from the signup form
const usernameInput2 = document.getElementById('username');
const passwordInput = document.getElementById('password');
// const confirmPass = document.getElementById('confirmPass');
const nameInput = document.getElementById('dog-name');
const ageInput = document.getElementById('dog-age');
const breedInput = document.getElementById('dog-breed');
// const genderInput = document.getElementById('gender');
// const pictureInput = document.getElementById('picture');
// const bioInput = document.getElementById('description');
let url;

// Add an event listener to the signup form
document.getElementById('signupForm').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the user's input
    const username = usernameInput2.value;
    const password = passwordInput.value;
    // const confirmPassword = confirmPass.value;
    const name = nameInput.value;
    const age = ageInput.value;
    const breed = breedInput.value;


    // Validate the input
    if (!username || !password || !name || !age || !breed) {
        alert('Please input all required fields.');
        return;
    }
    // if (password !== confirmPassword) {
    //     alert('Passwords do not match.');
    //     return;
    // }

    // Send a request to the server to create a new user account
    fetch('/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
            // dogs: [
            //     {
                    name,
                    age,
                    breed,
                    url
                // },
            // ],
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            else {window.location.href = '/';}
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
                url = result.info.secure_url;
            }
        })
    
    document.getElementById("upload_widget").addEventListener("click", function(){    myWidget.open();  }, false);
});