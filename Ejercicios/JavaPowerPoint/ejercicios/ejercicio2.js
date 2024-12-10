function multiplicar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;
    for (let i = 0; i < Math.abs(num2); i++) {
        result += Math.abs(num1);
    }
    if (num1 < 0 ^ num2 < 0) result *= -1;
    alert(`El resultado es: ${result}`);
}
