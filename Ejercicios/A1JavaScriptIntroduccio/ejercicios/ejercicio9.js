function sumarNumeros() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (!isNaN(numero1) && !isNaN(numero2)) {
      const suma = numero1 + numero2;
      alert(`La suma de ${numero1} y ${numero2} es ${suma}.`);
    } else {
      alert('Por favor, introduce números válidos >:C .');
    }
  }
  