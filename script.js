document.getElementById('wifiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const ssid = document.getElementById('ssid').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Simulate WiFi connection process
    if (ssid && password) {
        messageElement.textContent = 'Connecting to ' + ssid + '...';
        setTimeout(() => {
            messageElement.textContent = 'Connected to ' + ssid + '!';
        }, 2000);
    } else {
        messageElement.textContent = 'Please enter valid credentials.';
    }
});