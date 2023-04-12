const express = require('express');
const router = express.Router();

const PrincipalControllers = require('../controllers/PrincipalControllers');
//rutas get
router.get('/Glucky/', PrincipalControllers.index);
router.get('/Glucky/Registros',PrincipalControllers.registros);
router.get('/Glucky/Registros/Paciente',PrincipalControllers.registroPaGet);
router.get('/Glucky/Registros/Doctor',PrincipalControllers.registroDocGet);
router.get('/Glucky/IniciodeSesion',PrincipalControllers.iniciosesion);
//rutas post
router.post('/Glucky/Registros/Paciente', PrincipalControllers.registroPaPost);
router.post('/Glucky/Registros/Doctor',PrincipalControllers.registroDocPost);
router.post('/Glucky/IniciodeSesion')

module.exports= router;