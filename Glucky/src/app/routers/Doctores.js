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
router.get('/EditarDieta',DoctoresControllers.dietaVerDoctorGet);
router.get('/EditarTratamiento',DoctoresControllers.tratamientoVerDoctorGet);
router.get('/Chat',DoctoresControllers.chatDoctorGet);

router.post('/EliminarDieta',DoctoresControllers.eliminarDieta);
router.post('/EliminarTratamiento',DoctoresControllers.eliminarTratamiento);
router.post('/VerDietasPacienteDoctorEd',DoctoresControllers.dietaVerDoctorEdit);
router.post('/VerRecetaPacienteDoctorEd',DoctoresControllers.recetaVerDoctorEdit);
router.post('/EliminarIngredienteDieta',DoctoresControllers.eliminarDietaBaseIngrediente);
router.post('/EliminarMedicamentoTratamiento',DoctoresControllers.eliminarTratamientoBaseMedicamento);
router.post('/EnviarIngredienteDieta',DoctoresControllers.enviarDietaBaseIngrediente);
router.post('/EnviarMedicamentoReceta',DoctoresControllers.enviarTratamientoBaseMedicamento);
router.post('/VerDietasPacienteDoctor',DoctoresControllers.dietaVerDoctor);
router.post('/VerTratamientosPacienteDoctor',DoctoresControllers.tratamientoVerDoctor);
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
router.post('/ActualizacionDoctor',DoctoresControllers.ActualizarDatosDoctor);
router.post('/Password',DoctoresControllers.ActualizarContraDoctor);


router.post('/Peticiones',DoctoresControllers.peticionesDoctorAcepta);
router.post('/Peticion',DoctoresControllers.peticionesDoctorDeclina);


module.exports= router;