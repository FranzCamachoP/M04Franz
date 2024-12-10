function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, introduce todas las notas correctamente.");
    } else {
        const media = ((nota1 + nota2 + nota3) / 3).toFixed(1);
        alert(`La media es: ${media}`);
    }
}
