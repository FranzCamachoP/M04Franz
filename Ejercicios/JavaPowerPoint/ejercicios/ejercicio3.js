function multiplicarTres() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, introduce números válidos.");
    } else {
        const resultado = num1 * num2 * num3;
        alert(`El resultado de la multiplicación es: ${resultado}`);
    }
}
