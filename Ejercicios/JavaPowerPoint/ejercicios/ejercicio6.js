function calcularCubo() {
    const num = parseFloat(document.getElementById("num").value);
    if (!Number.isInteger(num)) {
        alert("Por favor, introduce un número entero.");
    } else {
        const cubo = Math.pow(num, 3);
        alert(`El cubo de ${num} es ${cubo}.`);
    }
}
