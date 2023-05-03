const app = require("./config/server");
//iniciar el servidor
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado');

  socket.on('mensaje', (data) => {
    console.log('mensaje recibido: ' + data);
    io.emit('mensaje', data);
  });

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });
});

server.listen(app.get('port'), () => {
  console.log('Servidor iniciado en el puerto: ', app.get('port'));
});
