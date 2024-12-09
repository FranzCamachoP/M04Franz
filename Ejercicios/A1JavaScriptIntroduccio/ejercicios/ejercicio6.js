function determinarSigno() {
    const numero = parseFloat(document.getElementById('numero').value);
    if (!isNaN(numero)) {
      const resultado = numero >= 0 ? 'positivo' : 'negativo';
      alert(`El número ${numero} es ${resultado}.`);
    } else {
      alert('Por favor, introduce un número válido >:C .');
    }
  }
  