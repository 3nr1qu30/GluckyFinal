const formularioNuevaCita = document.getElementById("formularioNuevaCita");
const formularioNiveles = document.getElementById("formularioNiveles");
const fechaActual1 = new Date();
const horaActual = fechaActual1.getHours();
var fechaIngresada = document.getElementById('glucosaNormal').value;
var horaIngresada = document.getElementById('glucosaNormal2').value;
const inputs = document.querySelectorAll('#formularioNuevaCita input');
const inputs2 = document.querySelectorAll('#formularioNiveles input');
const campos = {
  fecha: false, 
  hora: false, 
  glucosa: false, 
  presionSis: false, 
  presionDia: false
}
var mes = (fechaActual1.getMonth() + 1).toString();
if(mes.length <= 1) mes = "0" + mes;
var dia = fechaActual1.getDate().toString();
if(dia.length <= 1) dia = "0" + dia;
var fechaActual2 = fechaActual1.getFullYear() + "-" + mes + "-" + dia;
var fechaMaxima = (fechaActual1.getFullYear() + 1) + "-" + mes + "-" + dia;

const validarFechayHora = (e) => {
  switch(e.target.name){
    case "FechaForm":
      fechaIngresada = e.target.value
      console.log(fechaIngresada);
      if (fechaActual2 < fechaIngresada && fechaIngresada < fechaMaxima) {
        campos.fecha = true;
      } else if (e.target.value === ""){
        campos.fecha = false;
        swal({
          icon: "error",
          title: "Sin fecha",
          text: "No has ingresado alguna fecha"
        });
      }else{
        campos.fecha = false;
        swal({
          icon: "error",
          title: "Fecha extemporánea",
          text: "La fecha no puede ser mayor a un año"
        });
      }
      
      break;
      case "HoraForm":
        horaIngresada = e.target.value
        if (horaIngresada > '07:00' && horaIngresada < '21:00') {
          campos.hora = true;
        } else if (e.target.value === ""){
          console.log(`No hay hora we`);
          campos.hora = false;
          swal({
            icon: "error",
            title: "Sin hora",
            text: "No has ingresado una hora"
          });
        } else{
          campos.hora = false;
          swal({
            icon: "error",
            title: "Horario inactivo",
            text: "El doctor no está disponible en ese horario"
          });
      }
      break;
  }
}

const validarNivelesGluc = (e) => {
  switch (e.target.name){
    case "glucosa":
      if(e.target.value > 40 && e.target.value < 800){
        campos.glucosa = true
      } else if (e.target.value === ""){
        campos.glucosa = false
      } else {
        campos.glucosa = false
      }
      break;
      case "sistolica":
      if(e.target.value > 70 && e.target.value < 300){
        campos.presionSis = true
      } else if (e.target.value === ""){
        campos.presionSis = false
      } else {
        campos.presionSis = false
      }
      break;
      case "diastolica":
      if(e.target.value > 40 && e.target.value < 200){
        campos.presionDia = true
      } else if (e.target.value === ""){
        campos.presionDia = false
      } else {
        campos.presionDia = false
      }
      break;
  }
}


inputs.forEach((input) => {
  input.addEventListener('keyup', validarFechayHora);
  input.addEventListener('blur', validarFechayHora);
});

inputs2.forEach((input) => {
  input.addEventListener('keyup', validarNivelesGluc);
  input.addEventListener('blur', validarNivelesGluc);
})


formularioNuevaCita.addEventListener('submit', (e) => {
  e.preventDefault();
  if (campos.fecha && campos.hora) {
    formularioNuevaCita.submit()
  } else {
  swal({
    icon: "error",
    title: "Datos erroneos",
    text: "Por favor, ingresa datos válidos"
  });
}
});

formularioNiveles.addEventListener('submit', (e) => {
  e.preventDefault();
  if (campos.glucosa && campos.presionDia && campos.presionSis){
    formularioNiveles.submit()
  } else if(campos.glucosa === false && campos.presionDia && campos.presionSis){
    swal({
      icon: "error",
      title: "Niveles de glucosa anómalos",
      text: "No se puede enviar debido a que los nieles de glucosa ingresados son anomalos"
    });
  } else if(campos.glucosa === false && campos.presionDia === false && campos.presionSis){
    swal({
      icon: "error",
      title: "Niveles de glucosa y presión diastólica anómalos",
      text: "No se puede enviar debido a que los nieles de glucosa y presión diastólica ingresados son anomalos"
    });
  } else if(campos.glucosa === false && campos.presionDia && campos.presionSis === false){
    swal({
      icon: "error",
      title: "Niveles de glucosa y presión sistólica anómalos",
      text: "No se puede enviar debido a que los nieles de glucosa y presión sistólica ingresados son anomalos"
    });
  } else if(campos.glucosa && campos.presionDia === false && campos.presionSis === false){
    swal({
      icon: "error",
      title: "Niveles de presión diastólica y presión sistólica anómalos",
      text: "No se puede enviar debido a que los nieles de presión diastólica y presión sistólica ingresados son anomalos"
    });
  } else if(campos.glucosa && campos.presionDia === false && campos.presionSis){
    swal({
      icon: "error",
      title: "Niveles de presión diastólica anómalos",
      text: "No se puede enviar debido a que los nieles de presión diastólica ingresados son anomalos"
    });
  } else if(campos.glucosa && campos.presionDia && campos.presionSis === false){
    swal({
      icon: "error",
      title: "Niveles de presión sistólica anómalos",
      text: "No se puede enviar debido a que los nieles de presión sistólica ingresados son anomalos"
    });
  }
  else{
    swal({
      icon: "error",
      title: "Niveles anómalos o vacíos",
      text: "El formulario no se puede enviar debido a que los niveles ingresados son anómalos o no se han llenado"
    });
  }
})