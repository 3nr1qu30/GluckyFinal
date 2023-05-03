const formularioNuevaCita = document.getElementById("formularioNuevaCita");
const fechaActual1 = new Date();
const horaActual = fechaActual1.getHours();
const fechaIngresada = document.getElementById('glucosaNormal').value;
const horaIngresada = document.getElementById('glucosaNormal2').value;
const inputs = document.querySelectorAll('#formularioNuevaCita input');
const campos = {fecha: false, hora: false}
var mes = (fechaActual1.getMonth() + 1).toString();
if(mes.length <= 1) mes = "0" + mes;
var dia = fechaActual1.getDate().toString();
if(dia.length <= 1) dia = "0" + dia;
var fechaActual2 = fechaActual1.getFullYear() + "-" + mes + "-" + dia;
var fechaMaxima = (fechaActual1.getFullYear() + 1) + "-" + mes + "-" + dia;

const validarFechayHora = (e) => {
  console.log("El nombre:" + e.target.name);
  switch(e.target.name){
    case "FechaForm":
      console.log(fechaIngresada);
      if (fechaActual2 < fechaIngresada) {
        console.log(`La fecha ingresada no es válida`);
        campos.fecha = false;
        console.log("La fecha dlv1:" + e.target.value);
      } else if (e.target.value === ""){
        console.log(`La fecha ingresada no es válida`);
        campos.fecha = false;
        console.log("La fecha dlv2:" + e.target.value);
        console.log(fechaActual2 < fechaIngresada);
      } else{
        console.log(`La fecha esta bien pa`);
        console.log("La fecha buena:" + e.target.value);
        console.log(`Fecha actual: ${fechaActual2}`);
        console.log(`Fecha ingresada: ${fechaIngresada}`);
        console.log(fechaActual2 < fechaIngresada);
        campos.fecha = true;
      }
      break;
      case "HoraForm":
        if (horaIngresada < '07:00' || horaIngresada > '21:00') {
          console.log(`La hora ingresada no está dentro del rango permitido`);
          campos.hora = false;
          console.log("La hora dlv1:" + e.target.value);
        } else if (e.target.value === ""){
          console.log(`La hora ingresada no está dentro del rango permitido`);
          campos.hora = false;
          console.log("La hora dlv2:" + e.target.value);
        } else{
        console.log(`La hora ingresada esta bien`);
        campos.hora = true;
        console.log("La hora buena:" + e.target.value);
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
    console.log(`Si se envio wtf`);
    formularioNuevaCita.submit()
  } else {
  console.log(`No se puede cabrona`);
}
});


/* if (!fechaIngresada || fechaIngresada < fechaActual || fechaIngresada > new Date(fechaActual.getFullYear() + 1, fechaActual.getMonth(), fechaActual.getDate())) {
  alert('La fecha ingresada no es válida');
}
if (horaIngresada < '07:00' || horaIngresada > '21:00') {
  alert('La hora ingresada no está dentro del rango permitido');
}
document.querySelector('.glucosaNormalForm2').addEventListener('submit', function (e) {
  if (fechaIngresada && fechaIngresada >= fechaActual && fechaIngresada <= new Date(fechaActual.getFullYear() + 1, fechaActual.getMonth(), fechaActual.getDate()) && horaIngresada >= '07:00' && horaIngresada <= '21:00') {
    // Enviar formulario
  } else {
    e.preventDefault();
  }
});

 */