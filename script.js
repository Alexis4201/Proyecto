<script>
  function mostrarDescripcion(boton) {
    const descripcion = boton.nextElementSibling;
    descripcion.classList.toggle('activa');
    boton.textContent = descripcion.classList.contains('activa') ? 'Ver menos' : 'Ver más';
  }
</script>
