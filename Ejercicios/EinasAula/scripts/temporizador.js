const currentClock = document.getElementById("current-clock");
const exactTimer = document.getElementById("exact-timer");
const exactTimeInput = document.getElementById("set-exact-time");
const exactTimerButton = document.getElementById("start-exact-timer");

const bombTimerDisplay = document.getElementById("bomb-timer-display");
const bombImg = document.getElementById("bomb-img");
const startBombTimerBtn = document.getElementById("start-bomb-timer");
const stopBombTimerBtn = document.getElementById("stop-bomb-timer");
const resetBombTimerBtn = document.getElementById("reset-bomb-timer");
const bombTimeInput = document.getElementById("bomb-time-input");

let exactTimerInterval;
let bombTimeLeft = 10;
let bombInterval;

function updateCurrentClock() {
    const now = new Date();
    currentClock.textContent = now.toLocaleTimeString("es-ES", { hour12: false });
}
setInterval(updateCurrentClock, 1000);

exactTimerButton.addEventListener("click", () => {
    clearInterval(exactTimerInterval);

    const [hours, minutes] = exactTimeInput.value.split(":");
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(hours, minutes, 0, 0);

    if (targetTime <= now) {
        alert("La hora debe ser en el futuro.");
        return;
    }

    exactTimerInterval = setInterval(() => {
        const remaining = targetTime - new Date();

        if (remaining <= 0) {
            clearInterval(exactTimerInterval);
            exactTimer.textContent = "00:00:00";
            alert("¡Tiempo finalizado!");
        } else {
            const h = String(Math.floor(remaining / (1000 * 60 * 60))).padStart(2, "0");
            const m = String(Math.floor((remaining / (1000 * 60)) % 60)).padStart(2, "0");
            const s = String(Math.floor((remaining / 1000) % 60)).padStart(2, "0");
            exactTimer.textContent = `${h}:${m}:${s}`;
        }
    }, 1000);
});

function playExplosion() {
    const explosionSound = new Audio("./assets/sounds/explosion.mp3");
    explosionSound.play();
}

function updateBombDisplay() {
    const minutes = String(Math.floor(bombTimeLeft / 60)).padStart(2, "0");
    const seconds = String(bombTimeLeft % 60).padStart(2, "0");
    bombTimerDisplay.textContent = `${minutes}:${seconds}`;
}

startBombTimerBtn.addEventListener("click", () => {
    if (bombInterval) return;

    const userInput = parseInt(bombTimeInput.value, 10);
    if (!isNaN(userInput) && userInput > 0) {
        bombTimeLeft = userInput;
    }

    updateBombDisplay();

    bombInterval = setInterval(() => {
        bombTimeLeft -= 1;
        updateBombDisplay();

        if (bombTimeLeft <= 0) {
            clearInterval(bombInterval);
            bombInterval = null;
            bombImg.classList.add("bomb-explode");
            playExplosion();
        }
    }, 1000);
});

stopBombTimerBtn.addEventListener("click", () => {
    clearInterval(bombInterval);
    bombInterval = null;
});

resetBombTimerBtn.addEventListener("click", () => {
    clearInterval(bombInterval);
    bombInterval = null;
    bombTimeLeft = parseInt(bombTimeInput.value, 10) || 10;
    updateBombDisplay();
    bombImg.classList.remove("bomb-explode");
});

