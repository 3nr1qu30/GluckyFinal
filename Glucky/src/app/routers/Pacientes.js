const express = require('express');
const router = express.Router();
const PacienteControllers = require('../controllers/PacientesControllers');
//rutas get
router.get('/Dashboard',PacienteControllers.dashboardPacientes);
router.get('/Solicitudes',PacienteControllers.solicitudesPaciente);
router.get('/EditarCuenta',PacienteControllers.VerDatosPaciente);
router.get('/Chat',PacienteControllers.chatPacienteGet);
router.get('/Asignaciones',PacienteControllers.verAsignacionesPaciente);
//router.get('/CuentaPaciente', PacienteControllers.);

router.post('/EliminaSolCita',PacienteControllers.eliminaSolCita);
router.post('/Solicitudes',PacienteControllers.solicitudesPacientePost);
router.post('/Dashboard',PacienteControllers.dashboardPacientes);
router.post('/Citas',PacienteControllers.solicitudCita);
router.post('/Niveles',PacienteControllers.registroNiveles);
router.post('/ActualizacionPaciente',PacienteControllers.ActualizarDatosPaciente);
router.post('/Desvinculacion',PacienteControllers.Desvincular);
router.post('/Password',PacienteControllers.ActualizarContraPaciente);
router.post('/MensajeNuevo',PacienteControllers.AgregarMensaje);
module.exports= router;

