  function DatosPerNoAct(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'Tu información personal no ha sido actualizada, inténtalo más tarde',
  });
};

function PassNoAct(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'La contraseña no pudo ser actualizada, inténtalo más tarde',
  });
};

function SolicitudNoEnvi(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'La solicitud de enlace con el doctor no pudo ser eliminada, inténtalo más tarde',
  }).then((confirmar)=>{
    window.location.href='/Glucky/Pacientes/Dashboard';
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
    text: 'No se pudo registrar al doctor en el sistema, intentelo más tarde',
  });
};

function NoRegistroPa(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo registrar al paciente en el sistema, intentelo más tarde',
  });
};

function NoDesvinPa(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo desvincular del doctor, intentelo más tarde',
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

function Noenlaze2(e) {
  swal({
    icon: 'error',
        title: 'Error',
        text: 'No puedes acceder a esta función, ya que no te has enlazado a ningún doctor',
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
            text: 'Hubo un error al cargar esta pagina, intentelo más tarde',
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

function PassAct(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'La contraseña ha sido actualizada',
  });
};

function DatosPerAct(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'Tu información personal ha sido actualizada',
  });
};

function DesvincuSi(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'Se te ha desvinculado del doctor',
  });
};

function SolicitudEnviada(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'La solicitud de enlace con el doctor ha sido enviada',
  }).then((confirmar)=>{
    window.location.href='/Glucky/Pacientes/Dashboard';
  });
};
//Alertas informativas
function SolicitudDene(e) {
  swal({
    title: 'Estado de solicitud',
    text: 'La solicitud de enlace con el doctor, fue denegada o se elimino el enlace',
  }).then((confirmar)=>{
    window.location.href='/Glucky/Pacientes/Solicitudes';
  });
};

function SolicitudEnProce(e) {
  swal({
    title: 'Estado de solicitud',
    text: 'La solicitud de enlace con el doctor, sigue en proceso',
  });
};

function SolicitudAcept(e) {
  swal({
    title: 'Estado de solicitud',
    text: 'La solicitud de enlace con el doctor, fue aceptada',
  });
};

function SolicitudAceptDoctor(e) {
  swal({
    title: 'Estado de solicitud',
    text: 'La solicitud fue aceptada',
  });
};

function SolicitudCrasheo(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'Solicitud no registrada en el sistema, intentalo más tarde',
  });
};

function SolicitudDeclinadaDoctor(e) {
  swal({
    icon: "success",
    title: 'Estado de solicitud',
    text: 'La solicitud fue declinada'
  });
}

 function dietaEliminada(e){
  swal({
    icon: "success",
    title: 'Exito',
    text: 'La dieta ha sido eliminada',
  })
}