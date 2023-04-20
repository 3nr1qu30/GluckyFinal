const express = require('express');
const router = express.Router();
const PacienteControllers = require('../controllers/PacientesControllers');
//rutas get
router.get('/Dashboard',PacienteControllers.dashboardPacientes);
router.get('/Solicitudes',PacienteControllers.solicitudesPaciente);
//router.get('/CuentaPaciente', PacienteControllers.);

router.post('/Solicitudes',PacienteControllers.solicitudesPacientePost);
router.post('/Dashboard',PacienteControllers.dashboardPacientes);
router.post('/Citas',PacienteControllers.solicitudCita);
router.post('/Niveles',PacienteControllers.registroNiveles);
module.exports= router;