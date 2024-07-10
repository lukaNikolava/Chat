document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");
    const messagesContainer = document.querySelector(".messages");

    sendButton.addEventListener("click", function() {
        const messageText = messageInput.value.trim();

        if (messageText !== "") {
            sendMessage("You", messageText); 
            messageInput.value = ""; 
        }
    });

    function sendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.innerHTML = `<p>${sender}: ${message}</p>`;
        messagesContainer.appendChild(messageElement);
    
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});

console.log('works')