function parOImpar() {
    const numero = parseInt(document.getElementById('numero').value);
    if (!isNaN(numero)) {
      const resultado = numero % 2 === 0 ? 'par' : 'impar';
      document.getElementById('resultado').innerText = `El número es ${resultado}.`;
    } else {
      document.getElementById('resultado').innerText = 'Por favor, introduce un número válido >:C .';
    }
  }
  