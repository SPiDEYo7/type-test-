let startTime;
let timerInterval;

document.getElementById('input-field').addEventListener('input', startTest);
document.getElementById('restart-btn').addEventListener('click', restartTest);

function startTest() {
    const inputField = document.getElementById('input-field');
    const textDisplay = document.getElementById('text-display').textContent;
    const timerDisplay = document.getElementById('timer');
    const wpmDisplay = document.getElementById('wpm');

    if (!startTime) {
        startTime = new Date();
        timerInterval = setInterval(updateTimer, 1000);
    }

    const inputText = inputField.value;
    const elapsedTime = (new Date() - startTime) / 1000;
    const wordCount = inputText.trim().split(" ").length;
    const wpm = Math.round((wordCount / elapsedTime) * 60);

    wpmDisplay.textContent = `WPM: ${wpm}`;
    timerDisplay.textContent = `Time: ${Math.floor(elapsedTime)}s`;

    if (inputText === textDisplay) {
        clearInterval(timerInterval);
        inputField.disabled = true;
    }
}

function updateTimer() {
    const elapsedTime = (new Date() - startTime) / 1000;
    document.getElementById('timer').textContent = `Time: ${Math.floor(elapsedTime)}s`;
}

function restartTest() {
    document.getElementById('input-field').value = '';
    document.getElementById('input-field').disabled = false;
    document.getElementById('wpm').textContent = 'WPM: 0';
    document.getElementById('timer').textContent = 'Time: 0s';
    clearInterval(timerInterval);
    startTime = null;
}
