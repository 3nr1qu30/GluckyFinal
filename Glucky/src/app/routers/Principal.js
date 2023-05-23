const express = require('express');
const router = express.Router();

const PrincipalControllers = require('../controllers/PrincipalControllers');
//rutas get
router.get('/', PrincipalControllers.index);
router.get('/Registros',PrincipalControllers.registros);
router.get('/Registros/Paciente',PrincipalControllers.registroPaGet);
router.get('/Registros/Doctor',PrincipalControllers.registroDocGet);
router.get('/IniciodeSesion',PrincipalControllers.iniciosesion);
router.get('/RecuperarContrasena',PrincipalControllers.recuperarContrasena);
router.get('/CambiarContrasena', PrincipalControllers.cambiarContrasenaGet);
//rutas post
router.post('/Registros/Paciente', PrincipalControllers.registroPaPost);
router.post('/CambiarContrasena', PrincipalControllers.cambiarContrasenaPost);
router.post('/Registros/Doctor',PrincipalControllers.registroDocPost);
router.post('/IniciodeSesion',PrincipalControllers.iniciosesionPost);
router.post('/RecuperarContrasena',PrincipalControllers.recuperarContrasenaPost);

module.exports= router;