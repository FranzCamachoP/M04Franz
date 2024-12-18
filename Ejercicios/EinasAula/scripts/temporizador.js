const bombTimerDisplay = document.getElementById("bomb-timer-display");
const bombImg = document.getElementById("bomb-img");
const startBombTimerBtn = document.getElementById("start-bomb-timer");
const stopBombTimerBtn = document.getElementById("stop-bomb-timer");
const resetBombTimerBtn = document.getElementById("reset-bomb-timer");

let bombTimeLeft = 10; // Tiempo inicial de la bomba (en segundos)
let bombInterval;

// Función para reproducir sonido de explosión
function playExplosion() {
    const explosionSound = new Audio("./assets/sounds/explosion.mp3");
    explosionSound.play();
}

// Función para actualizar la visualización
function updateBombDisplay() {
    const minutes = String(Math.floor(bombTimeLeft / 60)).padStart(2, "0");
    const seconds = String(bombTimeLeft % 60).padStart(2, "0");
    bombTimerDisplay.textContent = `${minutes}:${seconds}`;
}

// Iniciar bomba
startBombTimerBtn.addEventListener("click", () => {
    if (bombInterval) return;

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

// Detener bomba
stopBombTimerBtn.addEventListener("click", () => {
    clearInterval(bombInterval);
    bombInterval = null;
});

// Reiniciar bomba
resetBombTimerBtn.addEventListener("click", () => {
    clearInterval(bombInterval);
    bombInterval = null;
    bombTimeLeft = 10;
    updateBombDisplay();
    bombImg.classList.remove("bomb-explode");
});

// Inicializar visualización
updateBombDisplay();
