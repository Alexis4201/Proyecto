function verMas(boton) {
  const descripcion = boton.nextElementSibling;
  
  if (descripcion.classList.contains('oculto')) {
    descripcion.classList.remove('oculto');
    boton.textContent = 'Ver menos';
  } else {
    descripcion.classList.add('oculto');
    boton.textContent = 'Ver más';
  }
}