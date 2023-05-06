document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', (event) => {
    const id = event.target.id;
    const nombre = event.target.querySelector('.sss').textContent;
    console.log(`El botón presionado tiene el id ${id} y el nombre ${nombre}`)
    const elementos = document.querySelectorAll('.chatBo');
    elementos.forEach(elemento => {
    elemento.remove();
  });
    // crear el elemento div con clase chatBo
var chatBo = document.createElement("div");
chatBo.classList.add("chatBo");

// crear el elemento div con clase chatNom
var chatNom = document.createElement("div");
chatNom.classList.add("chatNom");

// crear el elemento div con clase cont2
var cont2 = document.createElement("div");
cont2.classList.add("cont2");

// crear el elemento h4 con clase Nombre
var Nombre = document.createElement("h4");
Nombre.classList.add("Nombre");
Nombre.textContent = nombre;

// agregar el h4 a cont2 y el cont2 a chatNom
cont2.appendChild(Nombre);
chatNom.appendChild(cont2);

// crear el elemento div con clase caja
var caja = document.createElement("div");
caja.classList.add("caja");
caja.id = "menssages-container";

// crear los elementos div con clases message received y message sent
var messageReceived = document.createElement("div");
messageReceived.classList.add("message", "received");
messageReceived.innerHTML = '<p>¡Bien, gracias! ¿Y tú?</p><span class="time">10:35 AM Isaac</span>';

var messageSent = document.createElement("div");
messageSent.classList.add("message", "sent");
messageSent.innerHTML = '<p>Hola, ¿cómo estás?</p><span class="time">10:32 AM Tú</span>';

// agregar los elementos al contenedor caja
caja.appendChild(messageReceived);
caja.appendChild(messageSent);

// crear el elemento div con clase escribe
var escribe = document.createElement("div");
escribe.classList.add("escribe");

// crear el elemento input con tipo texto y clase escribeC
var inputMensaje = document.createElement("input");
inputMensaje.type = "text";
inputMensaje.classList.add("escribeC");
inputMensaje.placeholder = "Escribe un mensaje aquí...";

// crear el elemento button con clase enviarMensaje
var enviarMensaje = document.createElement("button");
enviarMensaje.classList.add("enviarMensaje");

// crear el elemento i con clases uil y uil-play
var iconoEnviar = document.createElement("i");
iconoEnviar.classList.add("uil", "uil-play");

// agregar el icono al botón
enviarMensaje.appendChild(iconoEnviar);

// agregar los elementos al contenedor escribe
escribe.appendChild(inputMensaje);
escribe.appendChild(enviarMensaje);
escribe.appendChild(document.createElement("br"));

// agregar los elementos al contenedor chatBo
chatBo.appendChild(chatNom);
chatBo.appendChild(caja);
chatBo.appendChild(escribe);

// agregar el contenedor chatBo al contenedor chat-container
document.getElementById("chat-container").appendChild(chatBo); 
  });
});
/* // obtener el id de sesión del usuario actual

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
 */