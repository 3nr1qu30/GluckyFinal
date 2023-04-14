const express = require('express');
const router = express.Router();
const DoctoresControllers = require('../controllers/DoctoresControllers');
//rutas get
router.get('/Dashboard',DoctoresControllers.dashboardDoctores);
router.get('/Peticiones',DoctoresControllers.peticionesDoctor);

router.post('/Peticiones',DoctoresControllers.peticionesDoctorAcepta);
router.post('/Peticion',DoctoresControllers.peticionesDoctorDeclina);
module.exports= router;