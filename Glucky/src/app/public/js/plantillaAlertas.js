function DoctorSinRegistro(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'El doctor no está registrado en el sistema',
  });
  setTimeout(function(e){
    document.getElementById('formulario').submit();
  }, 10000)
}

function PacienteSinRegistro(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'El paciente no está registrado en el sistema',
  });
  setTimeout(function(e){
    document.getElementById('formulario').submit();
  }, 10000)
}