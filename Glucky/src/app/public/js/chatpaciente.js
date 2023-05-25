const socket = io();
const button = document.querySelector('.enviarMensaje');
const messageInput = document.querySelector('.escribeC');
// obtener el id de sesión del usuario actual

socket.on('connect', () => {
  socket.emit('userConnected', emisor);
});

function enviarMensaje() {
  const message = messageInput.value;
  const messageData = {
    message: message,
    emisor: emisor ,
    receptor: receptor// enviar el id de sesión junto con el mensaje
  };
  socket.emit('nuevoMensaje', messageData);
  messageInput.value='';
}

button.addEventListener('click', enviarMensaje);

messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    enviarMensaje();
  }
});

socket.on('nuevoMensaje', (data) => {
  const messagesContainer = document.getElementById('menssages-container');
  const newMessage = document.createElement('div');
  const messageText = document.createElement('p');
  const messageTime = document.createElement('span');

  messageText.textContent = data.message;
  messageTime.textContent = getCurrentTime();
  newMessage.appendChild(messageText);
  newMessage.appendChild(messageTime);

  if (data.emisor === emisor) {
    newMessage.className = 'message sent';
    const fecha = new Date();
// Establece la diferencia horaria entre tu zona horaria y México
const diferenciaHoraria = -6; // GMT-6 (horario estándar de México)

// Aplica la diferencia horaria para obtener la fecha y hora en México
const fechaMexico = new Date(fecha.getTime() + (diferenciaHoraria * 60 * 60 * 1000));

const anioMexico = fechaMexico.getFullYear();
const mesMexico = fechaMexico.getMonth() + 1; // Los meses en JavaScript empiezan en 0
const diaMexico = fechaMexico.getDate();
const horaMexico = fechaMexico.getHours();
const minutosMexico = fechaMexico.getMinutes();
const segundosMexico = fechaMexico.getSeconds();

const fechaActualMexico = `${anioMexico}-${mesMexico}-${diaMexico}`;
const horaActualMexico = `${horaMexico}:${minutosMexico}:${segundosMexico}`;



    messagesContainer.appendChild(newMessage);
    const url = 'https://gluckyfinal-production.up.railway.app/Glucky/Pacientes/MensajeNuevo';
    const datams = {
      IdChat:chat,
      Emisor:emisor,
      Receptor:receptor,
      Mensaje:data.message,
      Fecha:fechaActualMexico,
      Hora:horaActualMexico
    };
    fetch(url,{
      method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datams)
    });
  } else if(data.emisor === receptor && data.receptor === emisor){
    newMessage.className = 'message received';
    messagesContainer.appendChild(newMessage);
  }

});

function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // el 0 se convierte en 12 para el formato de 12 horas
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
