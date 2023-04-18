function verificarDoctor(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'El usuario no existe',
  });
  setTimeout(function(e){
    document.getElementById('formulario').submit();
  }, 10000)
}
