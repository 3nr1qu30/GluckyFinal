const express = require('express');
const router = express.Router();
const DoctoresControllers = require('../controllers/DoctoresControllers');
//rutas get
router.get('/Dashboard',DoctoresControllers.dashboardDoctores);
router.get('/Peticiones',DoctoresControllers.peticionesDoctor);
router.get('/ConsultaPacienteDash',DoctoresControllers.detallesPaciente);


// router.post('/CitaConsultar',DoctoresControllers.citasDoctorConsultar);
// router.post('/CitasBorrar',DoctoresControllers.citasDoctorBorrar);
router.post('/CitasAcepta',DoctoresControllers.citasDoctorAcepta);
router.post('/CitasDeclina',DoctoresControllers.citasDoctorDeclina);
router.post('/Peticiones',DoctoresControllers.peticionesDoctorAcepta);
router.post('/Peticion',DoctoresControllers.peticionesDoctorDeclina);

module.exports= router;