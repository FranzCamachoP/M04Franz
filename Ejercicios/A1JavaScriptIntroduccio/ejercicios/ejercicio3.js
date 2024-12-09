function pedirNombre() {
    const nombre = prompt('¿Cuál es tu nombre?');
    if (nombre) {
      alert(`¡Hola, ${nombre}!`);
    } else {
      alert('No ingresaste ningún nombre, pendejo.');
    }
  }
  