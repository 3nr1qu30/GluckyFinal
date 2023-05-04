const express = require('express');
const router = express.Router();
const DoctoresControllers = require('../controllers/DoctoresControllers');
//rutas get
router.get('/Dashboard',DoctoresControllers.dashboardDoctores);
router.get('/Peticiones',DoctoresControllers.peticionesDoctor);
router.get('/Citas',DoctoresControllers.peticionesCita);
router.get('/Alimentos',DoctoresControllers.Alimentos);
router.get('/Medicamentos',DoctoresControllers.Medicamentos);
router.get('/EditarCuenta',DoctoresControllers.VerDatosDoctor);
router.get('/PacienteDoctor',DoctoresControllers.PacienteDoctorGet);
router.get('/Chat',DoctoresControllers.chatDoctorGet);

router.post('/PacienteDoctorCitasEd',DoctoresControllers.PacienteDoctorCitasEd);
router.post('/PacienteDoctorCitasEl',DoctoresControllers.PacienteDoctorCitasEl);
router.post('/PacienteDoctorCitas',DoctoresControllers.PacienteDoctorCitas);
router.post('/PacienteDoctor',DoctoresControllers.PacienteDoctorPost);
router.post('/CitasAcepta',DoctoresControllers.citasDoctorAcepta);
router.post('/CitasDeclina',DoctoresControllers.citasDoctorDeclina); 
router.post('/FinalizarCita',DoctoresControllers.citasDoctorFinaliza); 
router.post('/Alimentos',DoctoresControllers.Alimento);
router.post('/AlimentosE',DoctoresControllers.eliminarAlimentos);
router.post('/AlimentosEd',DoctoresControllers.editarAlimentos);
router.post('/Medicamentos',DoctoresControllers.Medicamento);
router.post('/MedicamentosEd',DoctoresControllers.editarMedicamentos);
router.post('/MedicamentosE',DoctoresControllers.eliminarMedicamento);
router.post('/ActualizacionDoctor',DoctoresControllers.ActualizarDatosDoctor)


router.post('/Peticiones',DoctoresControllers.peticionesDoctorAcepta);
router.post('/Peticion',DoctoresControllers.peticionesDoctorDeclina);


module.exports= router;