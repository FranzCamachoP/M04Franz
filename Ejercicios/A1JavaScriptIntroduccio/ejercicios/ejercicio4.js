function calcularEdad() {
    const edadActual = parseInt(document.getElementById('edadActual').value);
    if (!isNaN(edadActual)) {
      const edadEn2050 = edadActual + (2050 - new Date().getFullYear());
      document.getElementById('resultado').innerText = `En 2050 tendrás ${edadEn2050} años.`;
    } else {
      document.getElementById('resultado').innerText = 'Por favor, introduce un número válido >:C .';
    }
  }
  