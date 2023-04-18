const express = require('express');
const router = express.Router();
const DoctoresControllers = require('../controllers/DoctoresControllers');
//rutas get
router.get('/Dashboard',DoctoresControllers.dashboardDoctores);
router.get('/Peticiones',DoctoresControllers.peticionesDoctor);
router.get('/Citas',DoctoresControllers.peticionesCita);
router.get('/Alimentos',DoctoresControllers.Alimentos);
router.get('/Medicamentos',DoctoresControllers.Medicamentos)

router.post('/CitasAcepta',DoctoresControllers.citasDoctorAcepta);
router.post('/CitasDeclina',DoctoresControllers.citasDoctorDeclina);
router.post('/Alimentos',DoctoresControllers.Alimento);
router.post('/AlimentosE',DoctoresControllers.eliminarAlimentos);
router.post('/AlimentosEd',DoctoresControllers.editarAlimentos);
router.post('/Medicamentos',DoctoresControllers.Medicamento);
router.post('/MedicamentosEd',DoctoresControllers.editarMedicamentos);
router.post('/MedicamentosE',DoctoresControllers.eliminarMedicamento);


router.post('/Peticiones',DoctoresControllers.peticionesDoctorAcepta);
router.post('/Peticion',DoctoresControllers.peticionesDoctorDeclina);


module.exports= router;