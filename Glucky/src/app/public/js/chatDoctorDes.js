const socket = io();
socket.on('connect', () => {
  socket.emit('userConnected', emisor);
});
var mensajes;
var id;
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', (event) => {
     id = event.target.id;
    const nombreElement = event.target.querySelector('.sss');
if (nombreElement) {
  const nombre = nombreElement.textContent;
  console.log(nombre);
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
const url = 'https://gluckyfinal-production.up.railway.app/Glucky/Doctores/Mensajes';
const datams = {
  Receptor: id
};
fetch(url,{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(datams)
})
.then(response => response.json())
.then(data => {
  mensajes = data;
  const format12HourTime = (time) => {
    var splitTime = time.split(':');
    var hours = parseInt(splitTime[0]);
    var minutes = parseInt(splitTime[1]);
    var amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // convert 0 to 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var formattedTime = hours + ':' + minutes + ' ' + amPm;
    return formattedTime;
  }
  const formatDate = (dates) => {
    const date = new Date(dates);
    const months = [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${day} ${months[monthIndex]} ${year}`;
  }
  const messagesContainer = document.getElementById('menssages-container');
  const fecha = document.createElement('span');
  fecha.textContent = formatDate(mensajes[0].date_mensaje);
      messagesContainer.appendChild(fecha);
  for (let i = 0; i < mensajes.length;i++){
    const newMessage = document.createElement('div');
    const messageText = document.createElement('p');
    const messageTime = document.createElement('span');

    messageText.textContent = mensajes[i].desc_mensaje;
    messageTime.textContent =  format12HourTime(mensajes[i].hour_mensaje);
    newMessage.appendChild(messageText);
    newMessage.appendChild(messageTime);
    if(i > 0 && formatDate(mensajes[i].date_mensaje) !== formatDate(mensajes[i-1].date_mensaje)){
      const fecha2 = document.createElement('span');
      fecha2.textContent = formatDate(mensajes[i].date_mensaje);
      messagesContainer.appendChild(fecha2);
      
      if (mensajes[i].id_emisor === emisor) {
        newMessage.className = 'message sent';
        messagesContainer.appendChild(newMessage);
      
      } else if(mensajes[i].id_emisor === id && mensajes[i].id_receptor === emisor){
        newMessage.className = 'message received';
        messagesContainer.appendChild(newMessage);
      }
    }else{
      if (mensajes[i].id_emisor === emisor) {
        newMessage.className = 'message sent';
        messagesContainer.appendChild(newMessage);
      } else if(mensajes[i].id_emisor === id && mensajes[i].id_receptor === emisor){
        newMessage.className = 'message received';
        messagesContainer.appendChild(newMessage);
      }
    }
  }
});


function enviarMensajeSo() {
  const message = messageInput.value;
  const messageData = {
    message: message,
    emisor: emisor ,
    receptor: id// enviar el id de sesión junto con el mensaje
  };
  socket.emit('nuevoMensaje', messageData);
  messageInput.value='';
}
const PressEnter = (event) => {
  if (event.key === 'Enter') {
    enviarMensajeSo();
  }
};
let button = document.querySelector('.enviarMensaje');
let messageInput = document.querySelector('.escribeC');
button.removeEventListener('click', enviarMensajeSo);
messageInput.removeEventListener('keypress', PressEnter);

button.addEventListener('click', enviarMensajeSo);
messageInput.addEventListener('keypress', PressEnter);

}
  });
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
      IdChat:id_chat,
      Emisor:data.emisor,
      Receptor:data.receptor,
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
    newMessage.className = 'message sent';
    messagesContainer.appendChild(newMessage);
  } else if(data.emisor === id && data.receptor === emisor){
    newMessage.className = 'message received';
    messagesContainer.appendChild(newMessage);
  }

});
