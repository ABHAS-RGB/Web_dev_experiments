// Get references to the chat box and user input field
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Predefined responses
const responses = {
    "what is gender sensitization": "Gender sensitization means raising awareness about gender inequality and promoting respect for all genders.",
    "why is gender sensitization important": "Gender sensitization helps in reducing discrimination, promoting equality, and creating a more respectful society for everyone.",
    "what are stereotypes": "Stereotypes are oversimplified and often harmful beliefs or ideas about a particular group of people based on gender, race, etc.",
    "how can i support gender equality": "You can support gender equality by treating everyone with respect, challenging stereotypes, and supporting policies that promote equality.",
    "who can be a feminist": "Anyone, regardless of gender, can be a feminist if they believe in gender equality and the rights of all individuals."
};

// Function to append messages to the chat box
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to send a message and get a response
function sendMessage() {
    const userText = userInput.value.trim().toLowerCase();

    if (userText) {
        // Show the user's message
        appendMessage(userInput.value, 'user');

        // Check for a predefined response
        if (responses[userText]) {
            // Bot responds with a predefined answer
            appendMessage(responses[userText], 'bot');
        } else {
            // If no match, bot asks for clarification
            appendMessage("I'm sorry, I didn't quite understand that. Can you ask something else about gender sensitization?", 'bot');
        }

        // Clear the input field
        userInput.value = '';
    }
}

// Optional: Allow the user to press Enter to send a message
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
