const currentClock = document.getElementById("current-clock");
const exactTimer = document.getElementById("exact-timer");
const durationTimer = document.getElementById("duration-timer");
const exactTimeInput = document.getElementById("set-exact-time");
const exactTimerButton = document.getElementById("start-exact-timer");
const durationMinutesInput = document.getElementById("set-duration-minutes");
const durationTimerButton = document.getElementById("start-duration-timer");
const durationSoundSelector = document.getElementById("duration-sound-selector");

let exactTimerInterval, durationTimerInterval;

// Función para mostrar la hora actual
function updateCurrentClock() {
    const now = new Date();
    currentClock.textContent = now.toLocaleTimeString("es-ES", { hour12: false });
}
setInterval(updateCurrentClock, 1000);

// Temporizador por Hora Exacta
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
            playAlarm("./assets/sounds/alarm1.mp3");
        } else {
            const hours = String(Math.floor(remaining / (1000 * 60 * 60))).padStart(2, "0");
            const minutes = String(Math.floor((remaining / (1000 * 60)) % 60)).padStart(2, "0");
            const seconds = String(Math.floor((remaining / 1000) % 60)).padStart(2, "0");
            exactTimer.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }, 1000);
});

// Temporizador por Duración
durationTimerButton.addEventListener("click", () => {
    clearInterval(durationTimerInterval);

    const durationMinutes = parseInt(durationMinutesInput.value, 10);
    if (isNaN(durationMinutes) || durationMinutes <= 0) {
        alert("Por favor, introduce una duración válida.");
        return;
    }

    const now = new Date();
    const targetTime = new Date(now.getTime() + durationMinutes * 60 * 1000);

    durationTimerInterval = setInterval(() => {
        const remaining = targetTime - new Date();

        if (remaining <= 0) {
            clearInterval(durationTimerInterval);
            durationTimer.textContent = "00:00:00";
            playAlarm(durationSoundSelector.value);
        } else {
            const hours = String(Math.floor(remaining / (1000 * 60 * 60))).padStart(2, "0");
            const minutes = String(Math.floor((remaining / (1000 * 60)) % 60)).padStart(2, "0");
            const seconds = String(Math.floor((remaining / 1000) % 60)).padStart(2, "0");
            durationTimer.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }, 1000);
});

// Función para reproducir alarma
function playAlarm(sound) {
    const alarm = new Audio(sound);
    alarm.play();
}
