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
    text: 'Ya existe una cuenta con esta cédula profesional o correo electronico',
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

function tratamientoNoEliminado(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo eliminar el tratamiento, intentelo más tarde',
  });
};

function citaNoAgreg(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo agendar la cita, intentelo más tarde',
  });
};

function citaNoEdit(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo editar la cita, intentelo más tarde',
  });
};

function citaNoElim(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo eliminar la cita, intentelo más tarde',
  });
};

function citaNoAcepElim(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo aceptar la cita, intentelo más tarde',
  });
};

function citaNoDecli(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo declinar la cita, intentelo más tarde',
  });
};

function citaNoFina(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo finalizar la cita, intentelo más tarde',
  });
};

function PacienteRegistradoAnt(e) {
  swal({
    icon: 'error',
    title: 'Error',
    text: 'Ya existe una cuenta con esta CURP o correo electronico',
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
        text: 'No puedes acceder a esta función, ya que no te has enlazado a ningún paciente'
  }).then((confirmar)=>{
    window.location.href='/Glucky/Doctores/Dashboard';
  });
}

function NocargaChat(e){
  swal({
    icon: 'error',
            title: 'Error',
            text: 'Hubo un error al cargar esta pagina, intentelo más tarde'
  })
}

function contraNoEnviada(e){
  swal({
    icon: 'error',
            title: 'Error',
            text: 'No se pudo enviar el correo, intentelo más tarde'
  })
}

function contraNoCambiada(e){
  swal({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo cambiar la contraseña, intentelo más tarde'
  })
}

function correoNoRegistrado(e){
  swal({
    icon: 'error',
    title: 'Error',
    text: 'El correo que ha ingresado, no esta registrado'
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

function tratamientoEliminado(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'El tratamiento ha sido eliminado'
  })
};

function citaAgreg(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'La cita ha sido agendada exitosamente'
  })
};

function citaEdit(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'La cita ha sido modificada exitosamente'
  })
};

function citaElim(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'La cita ha sido eliminada exitosamente'
  })
};

function citaAcepElim(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'La cita se ha aceptado exitosamente'
  })
};

function citaDecli(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'La cita se ha declinado exitosamente'
  })
};

function citaFina(e) {
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'La cita ha sido finalizada exitosamente'
  })
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

 function contraEnviada(e){
  swal({
    icon: "success",
    title: 'Exito',
    text: 'El correo ha sido enviado, si no lo ha recibido, por favor vuelva a introducir su correo',
  }).then((confirmar)=>{
    window.location.href='/Glucky/RecuperarContrasena';
  });
}

function contraCambiada(e){
  swal({
    icon: 'success',
    title: 'Exito',
    text: 'Su contraseña ha sido cambiada'
  }).then((confirmar)=>{
    window.location.href='/Glucky/IniciodeSesion';
  });
}