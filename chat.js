// chat.js

function handleConnection(socket) {
    console.log(`Socket ${socket.id} connected`);

    socket.on('joinRoom', (roomId) => {
        socket.join(roomId);
        console.log(`Socket ${socket.id} joined room ${roomId}`);
    });

    socket.on('leaveRoom', (roomId) => {
        socket.leave(roomId);
        console.log(`Socket ${socket.id} left room ${roomId}`);
    });

    socket.on('sendMessage', (message) => {
        io.to(message.roomId).emit('messageReceived', message);
        console.log(`Message received: ${message.content}`);
    });
}

module.exports = {
    handleConnection,
};
