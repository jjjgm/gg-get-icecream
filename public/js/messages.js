const nameInput = document.getElementById('useridhere');
const textInput = document.getElementById('message-input');

document.getElementById('message-input').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    const name = nameInput.value;
    const text = textInput.value;

fetch('/messages', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name,
        text,
    }),
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        else {window.location.href = '/usermessages';}
        return response.json(); 
        // if (response.ok) {
        //     document.location.replace('/messages');
        // } else {
        //     alert(response.statusText);
        // }
    })
    .catch((error) => {
        alert(`message failed: ${error.message}`);
    })
});