const nameInput = document.getElementById('message-form');
const textInput = document.getElementById('message-input');
let url;

document.getElementById('message-input').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    const text = textInput.value;


fetch('/api/messages', {
    method: 'POST',
    body: JSON.stringify({
        text,
    }),
    headers: {
        'Content-Type': 'application/json',
    }
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        else {window.location.href = '/messages';}
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