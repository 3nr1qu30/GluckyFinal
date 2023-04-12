const app = require("./config/server");
//iniciar el servidor
app.listen(app.get('port'),()=>{
    console.log('servidor en el puerto: ' , app.get('port'));
});