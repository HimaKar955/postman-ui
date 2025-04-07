function showForm() {
    document.getElementById('notificationForm').classList.remove('d-none');
}

function sendNotification() {
    const apiEndpoint = "https://api.example.com/sendNotification";
    const data = {
        clientAccount: document.getElementById('clientAccount').value,
        performingSite: document.getElementById('performingSite').value,
        comment: document.getElementById('comment').value,
        destinationCode: document.getElementById('destinationCode').value,
        requestedBy: document.getElementById('requestedBy').value,
        messageVersion: document.getElementById('messageVersion').value,
        suppressManualOrder: document.getElementById('suppressManualOrder').checked,
        suppressReflexTests: document.getElementById('suppressReflexTests').checked,
        notificationStatusCode: Array.from(document.getElementById('notificationStatusCode').selectedOptions).map(option => option.value)
    };
    
    fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('responseOutput').textContent = JSON.stringify(result, null, 2);
        document.getElementById('responseContainer').classList.remove('d-none');
    })
    .catch(error => {
        document.getElementById('responseOutput').textContent = "Error sending notification: " + error;
        document.getElementById('responseContainer').classList.remove('d-none');
    });
}
