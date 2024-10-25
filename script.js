const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Simple function to append messages to the chat
function appendMessage(text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerText = text;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to the bottom
}

// Send message on button click
sendButton.addEventListener('click', function() {
    const messageText = messageInput.value.trim();
    if (messageText) {
        appendMessage(`You: ${messageText}`);
        messageInput.value = ''; // Clear input
    }
});

// Send message on Enter key press
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});
