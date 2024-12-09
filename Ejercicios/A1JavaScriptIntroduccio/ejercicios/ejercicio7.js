function mostrarTabla() {
    const numero = parseInt(document.getElementById('numero').value);
    const tabla = document.getElementById('tabla');
    tabla.innerHTML = '';
    if (!isNaN(numero)) {
      for (let i = 1; i <= 10; i++) {
        const item = document.createElement('li');
        item.textContent = `${numero} x ${i} = ${numero * i}`;
        tabla.appendChild(item);
      }
    } else {
      alert('Por favor, introduce un número válido >:C .');
    }
  }
  