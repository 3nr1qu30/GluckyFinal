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

function NoRegistroPa(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo registrar al paciente en el sistema',
  });
};

function PacienteRegistradoAnt(e) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Ya existe una cuenta con esta CURP',
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

function PacienteRegistrado(e) {
  Swal.fire({
    icon: 'success',
    title: 'Exito',
    text: 'Paciente registrado al sistema',
  }).then((confirmar)=>{
    window.location.href='/Glucky/IniciodeSesion';
  });
};

function NivelesRegistrados(e) {
  Swal.fire({
    icon: 'success',
    title: 'Exito',
    text: 'Niveles registrados',
  });
};
