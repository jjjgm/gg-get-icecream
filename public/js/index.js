const messageFeature = document.getElementById('message-feature');

messageFeature.innerHTML =
    `
<!DOCTYPE html>
<html>
    <head>
        <title>Socket.IO Chat Example</title>
        <script src="/socket.io/socket.io.js"></script>
        <script src="/js/messages.js"></script>
    </head>
    <body>
        <ul id="messages"></ul>
        <form id="form">
            <input id="input" autocomplete="off" /><button>Send</button>
        </form>
    </body>
    `

document.body.append(messageFeature);
console.log('appended')

const socket = io();

const form = document.getElementById('message-form');
const input = document.getElementById('message-input');
const messageList = document.getElementById('message-dislay');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = input.value;
    input.value = '';
    socket.emit('sendMessage', message);
});

socket.on('message', (message) => {
    const messageItem = document.createElement('li');
    messageItem.innerText = message;
    messageList.appendChild(messageItem);
});
