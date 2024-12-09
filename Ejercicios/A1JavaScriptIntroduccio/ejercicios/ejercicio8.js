function determinarEdad() {
    const edad = parseInt(document.getElementById('edad').value);
    if (!isNaN(edad)) {
      const resultado = edad >= 18 ? 'mayor de edad' : 'menor de edad';
      alert(`Tienes ${edad} años y eres ${resultado}.`);
    } else {
      alert('Por favor, introduce una edad válida >:C .');
    }
  }
  