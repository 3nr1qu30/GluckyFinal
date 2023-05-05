const app = require("./config/server");
//iniciar el servidor
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.on('userConnected', (emisor) => {
    // Asocia el id del usuario con la conexión del socket actual
    console.log('usuario conectado ' + emisor);
    socket.emisor = emisor;
  });
  
  // Utiliza socket.userId para identificar al usuario en eventos futuros
  socket.on('nuevoMensaje', (messageData) => {
    
    const message = {
      message: messageData.message,
      emisor: messageData.emisor,
      receptor: messageData.receptor
    };
    io.emit('nuevoMensaje', message);
  });

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });
});

server.listen(app.get('port'), () => {
  console.log('Servidor iniciado en el puerto: ', app.get('port'));
});
