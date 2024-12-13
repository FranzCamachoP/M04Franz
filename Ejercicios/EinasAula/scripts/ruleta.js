const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
document.getElementById("wheel").appendChild(canvas);

let names = [];
let startAngle = 0;
let spinning = false;

const colors = ["#FF6347", "#ADD8E6", "#90EE90", "#FFA07A", "#20B2AA", "#FFD700", "#FF69B4", "#9370DB", "#FFA500", "#00FA9A"];
const spinSound = new Audio("./assets/sounds/spin.mp3");
const selectSound = new Audio("./assets/sounds/alarm3.mp3");

document.getElementById("load-names").addEventListener("click", async () => {
    try {
        const response = await fetch("./data/noms.txt");
        const text = await response.text();
        names = text.split("\n").map(name => name.trim()).filter(name => name);
        if (names.length > 0) {
            drawWheel();
            alert("Nombres cargados correctamente.");
        } else {
            alert("El archivo de nombres está vacío.");
        }
    } catch (error) {
        alert("Error al cargar los nombres. Verifica la ruta al archivo.");
        console.error(error);
    }
});

document.getElementById("spin-wheel").addEventListener("click", () => {
    if (names.length === 0) {
        alert("Primero carga los nombres.");
        return;
    }
    if (!spinning) {
        spinWheel();
    }
});

function drawWheel() {
    const arcSize = (2 * Math.PI) / names.length;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < names.length; i++) {
        const angle = startAngle + i * arcSize;
        ctx.beginPath();
        ctx.arc(200, 200, 200, angle, angle + arcSize, false);
        ctx.lineTo(200, 200);
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.translate(
            200 + Math.cos(angle + arcSize / 2) * 150,
            200 + Math.sin(angle + arcSize / 2) * 150
        );
        ctx.rotate(angle + arcSize / 2);
        ctx.fillStyle = "black";
        ctx.font = "14px Arial";
        ctx.fillText(names[i], -ctx.measureText(names[i]).width / 2, 0);
        ctx.restore();
    }

    // Dibujar la flecha
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(200, 10); // Punto superior de la flecha
    ctx.lineTo(190, 40); // Esquina izquierda
    ctx.lineTo(210, 40); // Esquina derecha
    ctx.closePath();
    ctx.fill();
}

function spinWheel() {
    spinning = true;
    spinSound.play();

    let spinTime = 0;
    const spinTotal = Math.random() * 8000 + 12000; // 5-9 segundos de giro
    const arcSize = (2 * Math.PI) / names.length;

    function rotate() {
        spinTime += 30;
        startAngle += (Math.PI / 64) * (1 - spinTime / spinTotal);
        drawWheel();

        if (spinTime < spinTotal) {
            requestAnimationFrame(rotate);
        } else {
            const normalizedAngle = (startAngle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
            const selectedIndex = Math.floor(
                (names.length - Math.floor(normalizedAngle / arcSize)) % names.length
            );

            setTimeout(() => {
                spinning = false;
                selectSound.play();
                showSelectedName(names[selectedIndex]);
            }, 500);
        }
    }

    rotate();
}

function showSelectedName(name) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <h2>¡Nombre Seleccionado!</h2>
            <p>${name}</p>
            <button id="close-modal" class="btn">Cerrar</button>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("close-modal").addEventListener("click", () => {
        document.body.removeChild(modal);
    });
}
