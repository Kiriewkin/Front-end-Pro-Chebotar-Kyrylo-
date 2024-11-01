const timerDisplay = document.querySelector(`#timerDisplay`);
const buttonTimer = document.querySelector(`#buttonTimer`);

let minutes = 2;
let seconds = 3;
let countDown;
let isRunning = false;

function updateDisplay() {
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

updateDisplay();

buttonTimer.addEventListener('click', () => {
    if (isRunning) return;

    isRunning = true;

    countDown = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(countDown);
                alert("Час вийшов!");
                isRunning = false;
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        updateDisplay();
    }, 1000);
});