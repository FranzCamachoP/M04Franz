function encontrarNumeros() {
    const numeros = [];
    for (let i = 1; i <= 10000; i++) {
        const sumaCubos = i
            .toString()
            .split("")
            .map(Number)
            .reduce((acc, digito) => acc + Math.pow(digito, 3), 0);
        if (sumaCubos === i) {
            numeros.push(i);
        }
    }
    document.getElementById("resultado").innerText = `Números encontrados: ${numeros.join(", ")}`;
}
