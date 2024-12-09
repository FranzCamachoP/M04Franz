function verificarLongitud() {
    const palabra = document.getElementById('palabra').value;
    if (palabra) {
      const resultado = palabra.length > 5 ? 'más de 5 letras' : '5 o menos letras';
      alert(`La palabra "${palabra}" tiene ${resultado}.`);
    } else {
      alert('Por favor, introduce una palabra >:C .');
    }
  }
  