document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', startCountdown);
});

let countdownInterval;

function startCountdown() {
    const countdownInput = document.getElementById('countdown');
    const countdownValue = parseInt(countdownInput.value, 10);

    if (isNaN(countdownValue) || countdownValue <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    let remainingTime = countdownValue;

    countdownInterval = setInterval(function() {
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').innerText = "Time's up!";
            return;
        }

        document.getElementById('timer').innerText = remainingTime;
        remainingTime--;
    }, 1000);
}
