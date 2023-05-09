

//Errores
function SolicitudNoEnvi(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'La solicitud de enlace con el doctor no pudo ser eliminada, inténtalo más tarde',
  });
};

function DoctorSinRegistro(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'El doctor no está registrado en el sistema',
  });
};

function NivelesNoRegi(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'Niveles no registrados en el sistema, intentalo más tarde',
  });
};

function CitaNoEli(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'La cita no pudo ser eliminada, intentalo más tarde',
  });
};

function CitaPetNoEnvi(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'La cita no pudo ser enviada, intentalo más tarde',
  });
};



function SesionCad(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'Su sesión ha caducado, por favor vuelva a iniciarla',
  })
  .then((confirmar)=>{
    window.location.href='/Glucky/';
  });
};

function PacienteSinRegistro(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'El paciente no está registrado en el sistema',
  });
};
function PassIncorrecto(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'Contraseña incorrecta',
  });
};

function DoctorRegistradoAnt(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'Ya existe una cuenta con esta cédula profesional',
  });
};

function NoRegistroDoc(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo registrar al doctor en el sistema',
  });
};

function NoRegistroPa(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo registrar al paciente en el sistema',
  });
};

function PacienteRegistradoAnt(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'Ya existe una cuenta con esta CURP',
  });
};

function Noenlaze(e) {
  swal({
    icon: 'error',
        title: 'Error',
        text: 'No puedes acceder a esta función, ya que no te has enlazado a ningún doctor',
  }).then((confirmar)=>{
    window.location.href='/Glucky/Pacientes/Dashboard';
  });
}

function NoenlazeDoc(e) {
  swal({
    icon: 'error',
        title: 'Error',
        text: 'No puedes acceder a esta función, ya que no te has enlazado a ningún paciente',
  }).then((confirmar)=>{
    window.location.href='/Glucky/Doctores/Dashboard';
  });
}

function NocargaChat(e){
  swal({
    icon: 'error',
            title: 'Error',
            text: 'Hubo un error al cargar esta pagina intenta en unos instantes',
  })
}

//Exitos
function DoctorRegistrado(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'Doctor registrado al sistema',
  }).then((confirmar)=>{
    window.location.href='/Glucky/IniciodeSesion';
  });
};

function PacienteRegistrado(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'Paciente registrado al sistema',
  }).then((confirmar)=>{
    window.location.href='/Glucky/IniciodeSesion';
  });
};

function NivelesRegistrados(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'Niveles registrados',
  });
};

function CitaBorrada(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'La cita ha sido eliminada',
  });
};

function CitaPetEnvi(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'La petición de cita ha sido enviada',
  });
};

function SolicitudEnviada(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'La solicitud de enlace con el doctor ha sido enviada',
  });
};