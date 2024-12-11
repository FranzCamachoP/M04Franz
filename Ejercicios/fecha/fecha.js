function mostrarFecha() {
    const hoy = new Date();
    document.getElementById("resultado").innerText = `Fecha actual: ${hoy.toLocaleString()}`;
}

function verificarClase() {
    const hoy = new Date();
    const dia = hoy.getDay();
    const hora = hoy.getHours();
    const minutos = hoy.getMinutes();

    let mensaje = "No estás en clase de M04.";
    if (
        (dia === 2 && ((hora === 15 && minutos >= 0) || (hora === 16 && minutos <= 50))) ||
        (dia === 3 && ((hora === 16 && minutos >= 50) || (hora === 17 || hora === 18 || (hora === 19 && minutos <= 5)))) || 
        (dia === 5 && ((hora === 15 && minutos >= 55) || (hora === 16 || (hora === 17 && minutos <= 45))))
    ) {
        mensaje = "Estás en clase de M04.";
    }

    document.getElementById("resultado").innerText = mensaje;
}


function tiempoHastaCumple() {
    const hoy = new Date();
    let cumple = new Date(hoy.getFullYear(), 4, 13);

    if (hoy > cumple) {
        cumple.setFullYear(hoy.getFullYear() + 1);
    }

    const diferencia = cumple - hoy;
    const segundosTotales = Math.floor(diferencia / 1000);
    const minutosTotales = Math.floor(diferencia / (1000 * 60));
    const horasTotales = Math.floor(diferencia / (1000 * 60 * 60));
    const diasTotales = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById("resultado").innerHTML = `
        <p>a. Faltan ${diasTotales} días en total.</p>
        <p>b. Faltan ${horasTotales} horas en total.</p>
        <p>c. Faltan ${minutosTotales} minutos en total.</p>
        <p>d. Faltan ${segundosTotales} segundos en total.</p>
    `;
}




function verificarLaMerce() {
    let año = new Date().getFullYear();
    const resultados = [];
    while (año <= 2060) {
        const laMerce = new Date(año, 8, 24); 
        const diaSemana = laMerce.getDay();

        if (diaSemana === 6 || diaSemana === 0) {
            resultados.push(`${año}-24/09 (${diaSemana === 6 ? "sábado" : "domingo"})`);
        }
        año++;
    }

    document.getElementById("resultado").innerText = 
        resultados.length > 0 ? `La Mercè cae en fin de semana en: ${resultados.join(", ")}` : "No cae en fin de semana hasta 2060.";
}

function iniciarReloj() {
    clearInterval(window.intervaloReloj);
    window.intervaloReloj = setInterval(() => {
        const ahora = new Date();
        document.getElementById("resultado").innerText = 
            `Reloj: ${ahora.toLocaleTimeString()}`;
    }, 1000);
}
