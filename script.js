let score = 0;
let balance = 0;

document.getElementById('increase').addEventListener('click', function() {
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
});

document.getElementById('topupButton').addEventListener('click', function() {
    const amount = parseInt(document.getElementById('topupAmount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        document.getElementById('balance').innerText = `Balance: ${balance}`;
        document.getElementById('topupAmount').value = '';
    } else {
        alert('Please enter a valid amount.');
    }
});
