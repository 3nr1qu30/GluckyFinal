const socket = io();
const button = document.querySelector('.enviarMensaje');
const messageInput = document.querySelector('.escribeC');

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', (event) => {
    console.log(event.target)
    const id = event.target.id;
    console.log(`El botón presionado tiene el id ${id}`);
  });
});
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
  } else if(data.emisor === receptor && data.receptor === emisor){
    newMessage.className = 'message received';
    
  }

  messagesContainer.appendChild(newMessage);
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
