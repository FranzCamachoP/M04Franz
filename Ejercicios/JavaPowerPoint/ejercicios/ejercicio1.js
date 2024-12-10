function calcularMayor() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, introduce números válidos.");
    } else if (num1 > num2) {
        alert(`El mayor es: ${num1}`);
    } else if (num2 > num1) {
        alert(`El mayor es: ${num2}`);
    } else {
        alert("Los números son iguales.");
    }
}
