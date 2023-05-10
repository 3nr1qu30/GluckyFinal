const fechas = [];
const datos = [];

for (let i = Math.max(datosmedicos.length - 10, 0); i < datosmedicos.length; i++) {
    const fechaHora = datosmedicos[i].date_datmed.slice(0, 10) + " " + datosmedicos[i].hpur_datmed;
    fechas.push(fechaHora.toLocaleString());
    datos.push(parseInt(datosmedicos[i].gluc_datmed));
}

const data = {
    labels: fechas,
    datasets: [{
    label: 'Glucosa',
    data: datos,
    backgroundColor: 'rgba(0, 255, 0, 0.2)', // verde transparente
    borderColor: 'rgba(0, 255, 0, 1)', // borde verde
    borderWidth: 1 // ancho del borde
    }]
};

new Chart('glucosagraf', {
    type: 'line',
    data: data
});
var fecha=[];
var datosis=[];
var datosdia=[];

for (let i = Math.max(datosmedicos.length - 10, 0); i < datosmedicos.length; i++) {
  const fechaHora = datosmedicoso[i].date_datmed.slice(0, 10) + " " + datosmedicoso[i].hpur_datmed;
    fecha.push(fechaHora.toLocaleString());
    datosis.push(parseInt(datosmedicoso[i].presis_datmed));
    datosdia.push(parseInt(datosmedicoso[i].predia_datmed));
}

const datao = {
  labels: fecha,
  datasets: [{
    label: 'Presion sistolica',
    data: datosis,
    backgroundColor: 'rgba(54, 162, 235, 0.2)', // azul transparente
    borderColor: 'rgba(54, 162, 235, 1)', // borde azul
    borderWidth: 1 // ancho del borde
  }, {
    label: 'Presion diastolica',
    data: datosdia,
    backgroundColor: 'rgba(255, 206, 86, 0.2)', // amarillo transparente
    borderColor: 'rgba(255, 206, 86, 1)', // borde amarillo
    borderWidth: 1 // ancho del borde
  }],
};

new Chart('presiongraf', {
  type: 'line',
  data: datao
});
