//Errores
function DoctorSinRegistro(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'El doctor no está registrado en el sistema',
  });
};

function PacienteSinRegistro(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'El paciente no está registrado en el sistema',
  });

};
function PassIncorrecto(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Contraseña incorrecta',
  });
};

function DoctorRegistradoAnt(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Ya existe una cuenta con esta cédula profesional',
  });
};

function NoRegistroDoc(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo registrar al doctor en el sistema',
  });
};

//Exitos
function DoctorRegistrado(e) {
  Swal.fire({
    icon: 'success',
    title: 'Exito',
    text: 'Doctor registrado al sistema',
  }).then((confirmar)=>{
    window.location.href='/Glucky/IniciodeSesion';
  });
};
