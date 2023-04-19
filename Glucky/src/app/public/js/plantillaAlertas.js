function DoctorSinRegistro(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'El doctor no está registrado en el sistema',
  });
}

function PacienteSinRegistro(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'El paciente no está registrado en el sistema',
  });

}
function PassIncorrecto(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Contraseña incorrecta',
  });
}