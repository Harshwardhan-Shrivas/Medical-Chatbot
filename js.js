function sendMessage() {
    const input = document.getElementById('userInput');
    const chat = document.getElementById('chat');
    const userText = input.value.trim().toLowerCase();

    if (userText) {
        const userMessage = document.createElement('p');
        userMessage.innerHTML = `<strong>You:</strong> ${userText}`;
        chat.appendChild(userMessage);
    
        fetch('symptom_checker.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: 'symptom=' + encodeURIComponent(userText)
        })    
        .then(response => response.json())
        .then(data => {
            const responseMessage = document.createElement('p');
            responseMessage.innerHTML = `<strong>MediAssist:</strong> ${data.response}`;
            chat.appendChild(responseMessage);
            chat.scrollTop = chat.scrollHeight;
        })
        .catch(() => {
            const errorMsg = document.createElement('p');
            errorMsg.innerHTML = `<strong>MediAssist:</strong> Sorry, an error occurred. <h4>> Please, Try Again<h4>`;
            chat.appendChild(errorMsg);
        });
        input.value = '';
        
    }
    }

function quickSymptom(symptom) {
    document.getElementById('userInput').value = symptom;
    sendMessage();
}