const currentClock = document.getElementById("current-clock");
const exactTimer = document.getElementById("exact-timer");
const durationTimer = document.getElementById("duration-timer");
const exactTimeInput = document.getElementById("set-exact-time");
const exactTimerButton = document.getElementById("start-exact-timer");
const durationMinutesInput = document.getElementById("set-duration-minutes");
const durationTimerButton = document.getElementById("start-duration-timer");
const durationSoundSelector = document.getElementById("duration-sound-selector");

let exactTimerInterval, durationTimerInterval;

function updateCurrentClock() {
    const now = new Date();
    currentClock.textContent = now.toLocaleTimeString("es-ES", { hour12: false });
}
setInterval(updateCurrentClock, 1000);

function playAlarm(selectedSound) {
    const sound = selectedSound || "./assets/sounds/alarma.mp3"; 
    const alarm = new Audio(sound);

    alarm.play().catch(error => {
        console.error("Error al reproducir el sonido:", error);
    });
}

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
            playAlarm("./assets/sounds/alarma.mp3");
        } else {
            const h = String(Math.floor(remaining / (1000 * 60 * 60))).padStart(2, "0");
            const m = String(Math.floor((remaining / (1000 * 60)) % 60)).padStart(2, "0");
            const s = String(Math.floor((remaining / 1000) % 60)).padStart(2, "0");
            exactTimer.textContent = `${h}:${m}:${s}`;
        }
    }, 1000);
});

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
            const selectedSound = durationSoundSelector.value;
            playAlarm(selectedSound);
        } else {
            const h = String(Math.floor(remaining / (1000 * 60 * 60))).padStart(2, "0");
            const m = String(Math.floor((remaining / (1000 * 60)) % 60)).padStart(2, "0");
            const s = String(Math.floor((remaining / 1000) % 60)).padStart(2, "0");
            durationTimer.textContent = `${h}:${m}:${s}`;
        }
    }, 1000);
});
