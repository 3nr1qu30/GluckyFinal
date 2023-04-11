const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//importar rutas
const Principal = require('../app/routers/Principal');
const Pacientes = require('../app/routers/Pacientes');
const Doctores = require('../app/routers/Doctores');

//rutas
app.use('/',Principal);
app.use('/Pacientes',Pacientes);
app.use('/Doctores',Doctores);


//configuracion
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

//
app.use(bodyParser.urlencoded({extended:true}));

module.exports = app;