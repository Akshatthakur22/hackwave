function sendMessage() {
    // Get the message input value
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value.trim();

    // If the message is not empty
    if (message !== '') {
      // Create a new message element
      var chatContainer = document.getElementById('chat-container');
      var newMessage = document.createElement('div');
      newMessage.classList.add('chat-message');
      newMessage.innerHTML = '<span class="user">User:</span><span class="message">' + message + '</span>';

      // Append the new message to the chat container
      chatContainer.appendChild(newMessage);

      // Clear the message input
      messageInput.value = '';

      // Scroll to the bottom of the chat container
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}
function handleKeyPress(event) {
    if (event.keyCode == 13) { // Enter key pressed
        sendMessage();
    }
}