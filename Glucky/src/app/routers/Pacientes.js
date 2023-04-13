const express = require('express');
const router = express.Router();
const PacienteControllers = require('../controllers/PacientesControllers');
//rutas get
router.get('/Dashboard',PacienteControllers.dashboardPacientes);
router.get('/Solicitudes',PacienteControllers.solicitudesPaciente);

router.post('/Solicitudes',PacienteControllers.solicitudesPaciente);
module.exports= router;