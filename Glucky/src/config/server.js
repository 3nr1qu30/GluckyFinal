const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

//configuracion
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
app.use(express.static(path.join(__dirname,'../app/public')));
app.use(session({
    secret: 'culosnegros123',
    resave: false,
    saveUninitialized: false,
  }));
app.use(bodyParser.urlencoded({extended: false}));
//

//importar rutas
const Principal = require('../app/routers/Principal');
const Pacientes = require('../app/routers/Pacientes');
const Doctores = require('../app/routers/Doctores');

//rutas
app.use('/Glucky/',Principal);
app.use('/Glucky/Pacientes/',Pacientes);
app.use('/Glucky/Doctores/',Doctores);


module.exports = app;