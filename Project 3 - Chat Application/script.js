const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
    console.log("Connected to WebSocket server");
});

socket.addEventListener('message', (e) => {
    const message = e.data;
    console.log("Message from server", message);
    displayMessage(message);
});

socket.addEventListener('close', () => {
    console.log("Disconnected from WebSocket server");
});

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const usernameInput = document.getElementById('username');
    if (messageInput.value.trim() && usernameInput.value.trim()) {
        const message = `${usernameInput.value}: ${messageInput.value}`;
        socket.send(message);
        messageInput.value = "";
    }
}

function displayMessage(message) {
    console.log('Received message:', message);

    const messageContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
