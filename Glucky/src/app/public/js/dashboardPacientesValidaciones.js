const formularioNuevaCita = document.getElementById("formularioNuevaCita");
const fechaActual1 = new Date();
const horaActual = fechaActual1.getHours();
var fechaIngresada = document.getElementById('glucosaNormal').value;
var horaIngresada = document.getElementById('glucosaNormal2').value;
const inputs = document.querySelectorAll('#formularioNuevaCita input');
const campos = {fecha: false, hora: false}
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

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFechayHora);
  input.addEventListener('blur', validarFechayHora);
});


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
