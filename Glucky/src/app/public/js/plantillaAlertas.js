function rellenoDatos() {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Por favor, rellene bien los datos',
  });
}

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
