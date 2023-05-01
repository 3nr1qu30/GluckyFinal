const Controllers={};
const { query } = require('express');
const querys = require('../sql/Querys');
Controllers.dashboardDoctores=(req,res,next)=>{
    const cedula = req.session.cedula;
    const nombre = req.session.nombre;
    const correo = req.session.correo;
    querys.verListaPacientes(cedula,(error,pacientes)=>{
      if(pacientes){
        res.render('dashboardDoctores',{cedula,nombre,correo,pacientes});
      }
    });
  };


  Controllers.peticionesDoctor = (req,res,next)=>{
    console.log(req.body);
    const Cedula = req.session.cedula;
    querys.verPeticionesDoctor(Cedula,(error,ver)=>{
      if(ver){
        querys.PeticionesCitaGenerales(Cedula,(error,citasaceptadas)=>{
          if(citasaceptadas){
            console.log(`Si se hizo mami`);
            res.render('peticionesDoctor',{datos:ver,citasaceptadas});
          }
          else if(error){
            console.log(error);
          }
        });
      }
      else{
        console.log(error);
      }
    }); 
  };

  Controllers.peticionesCita = (req,res,next)=>{
    console.log(req.body);
    const Cedula = req.session.cedula;
    querys.PeticionesCita(Cedula,(error,ver)=>{
      if(ver){
        querys.PeticionesCitaGenerales(Cedula,(error,citasaceptadas)=>{
          if(citasaceptadas){
            console.log(`Si se hizo mami`);
            res.render('citasDoctor',{datos:ver,citasaceptadas});
          }
          else if(error){
            console.log(error);
          }
        });
      }
      else{
        console.log(error);
      }
    }); 
  };

  Controllers.Alimentos = (req,res,next)=>{
    console.log(req.body);
    querys.verAlimentos((error,ver)=>{
      if(ver){
        console.log(ver);
        res.render('almacenDoctorIngredientes',{datos:ver});
      }
      else{
        console.log(error);
      }
    }); 
  };

  Controllers.Medicamentos = (req,res,next)=>{
    console.log(req.body);
    querys.verMedicamentos((error,ver)=>{
      if(ver){
        console.log(ver);
        res.render('almacenDoctorMedicamentos',{datos:ver});
      }
      else{
        console.log(error);
      }
    }); 
  };

  Controllers.PacienteDoctorPost = (req,res,next)=>{
    const Cedula = req.session.cedula;
    const{CURPform} =req.body;
    querys.verPacienteIndividual(Cedula,CURPform,(error,ver)=>{
      if(ver){
        console.log(ver);

    //inicio de la segunda consulta de query 
    querys.verCitasPacienteIndividual(CURPform,(error2,citasver)=>{
      if(citasver){
        console.log(citasver);
        res.render('pacienteDoctor',{citas:citasver,datos:ver});
      }
      else{
        console.log(error2);
      }
    }); 
    //final de la segunda consulta de query

      }
      else{
        console.log(error);
      }
    }); 
  };

  Controllers.PacienteDoctorGet = (req,res,next)=>{
    const Cedula = req.session.cedula;
    const CURPform = req.session.paciente;
    querys.verPacienteIndividual(Cedula,CURPform,(error,ver)=>{
      if(ver){
        console.log(ver);

    //inicio de la segunda consulta de query 
    querys.verCitasPacienteIndividual(CURPform,(error2,citasver)=>{
      if(citasver){
        console.log(citasver);
        res.render('pacienteDoctor',{citas:citasver,datos:ver});
      }
      else{
        console.log(error2);
      }
    }); 
    //final de la segunda consulta de query

      }
      else{
        console.log(error);
      }
    }); 
  };


  Controllers.PacienteDoctorCitas = (req,res,next)=>{
    const{CurpForm} =req.body;
    const {HoraForm} = req.body;
    const {FechaForm} = req.body;
    const Cedula = req.session.cedula;
    querys.agregarCitaPaciente(FechaForm,HoraForm,CurpForm,Cedula,(error,ver)=>{
      if(ver){
        req.session.paciente=CurpForm;
        console.log(ver);
        res.redirect('/Glucky/Doctores/PacienteDoctor');
      }
      else{
        console.log(error);
      }
    }); 
  };


  Controllers.PacienteDoctorCitasEl= (req,res,next)=>{
    const{id_citaEl} = req.body;
    const {curpFormPac} = req.body;
    querys.eliminarCitaPaciente(id_citaEl,curpFormPac,(error,elimina)=>{
      if(elimina){
        req.session.paciente=curpFormPac;
        console.log('Eliminación lograda de cita');
        res.redirect('/Glucky/Doctores/PacienteDoctor');
      }
      else{
        console.log(error);
      }
    });
  };


  Controllers.PacienteDoctorCitasEd= (req,res,next)=>{
    const {curp_pacienF} =req.body;
    const {id_citaF} =req.body;
    const {date_citaF} =req.body;
    const {hour_citaF} =req.body;
    querys.editarCitaPaciente(curp_pacienF,id_citaF,date_citaF,hour_citaF,(error,elimina)=>{
      if(elimina){
        req.session.paciente=curp_pacienF;
        console.log('Eliminación lograda de cita');
        res.redirect('/Glucky/Doctores/PacienteDoctor');
      }
      else{
        console.log(error);
      }
    });
  };

  Controllers.Medicamento = (req,res,next)=>{
    const{medicamentoNombre} =req.body;
    querys.Medicamentos(medicamentoNombre, (error, medicamento) =>{
      if(medicamento) {
        console.log('Medicamento agregado exitosamente');
        res.redirect('/Glucky/Doctores/Medicamentos');
      } else {
        console.log(error);
      }
    });
  };

  Controllers.editarMedicamentos = (req,res,next)=>{
    const{idMed} = req.body;
    const{nomMed} = req.body;
    console.log(idMed);
    querys.editarMedicamento(idMed,nomMed,(error,editamami)=>{
      if(editamami){
        console.log('Modificacion realizada de medicamento');
        res.redirect('/Glucky/Doctores/Medicamentos');
      }
      else{
        console.log(error);
      }
    });
  };

  Controllers.Alimento = (req,res,next)=>{
    const{alimentoNombre} =req.body;
    const{alimentoDescripcion} =req.body;
    querys.Alimentos(alimentoNombre, alimentoDescripcion, (error, alimento) =>{
      if(alimento) {
        console.log('Alimento agregado exitosamente');
        res.redirect('/Glucky/Doctores/Alimentos');
      } else {
        console.log(error);
      }
    });
  };


  Controllers.eliminarAlimentos = (req,res,next)=>{
    const{idIngred} = req.body;
    querys.eliminarAlimento(idIngred,(error,elimina)=>{
      if(elimina){
        console.log('Eliminación lograda');
        res.redirect('/Glucky/Doctores/Alimentos');
      }
      else{
        console.log(error);
      }
    });
  };

  Controllers.eliminarMedicamento = (req,res,next)=>{
    const{idMed} = req.body;
    querys.eliminarMedicamento(idMed,(error,elimina)=>{
      if(elimina){
        console.log('Eliminación lograda');
        res.redirect('/Glucky/Doctores/Medicamentos');
      }
      else{
        console.log(error);
      }
    });
  };


  Controllers.editarAlimentos = (req,res,next)=>{
    const{idIngred} = req.body;
    const{NomForm} = req.body;
    const{DescForm} = req.body;
    querys.editarAlimento(idIngred,NomForm,DescForm,(error,editamami)=>{
      if(editamami){
        console.log('pues va mami');
        res.redirect('/Glucky/Doctores/Alimentos');
      }
      else{
        console.log(error);
      }
    });
  };

  Controllers.peticionesDoctorAcepta = (req,res,next)=>{
    const Cedula = req.session.cedula;
    const{CurpForm} = req.body;
    querys.aceptarPeticiones(Cedula,CurpForm,(error,cambio)=>{
      if(cambio){
        console.log('Petición aceptada');
      }
      else{
        console.log(error);
      }
    });
  };

  Controllers.citasDoctorAcepta = (req,res,next)=>{    
    const{IdCita} = req.body;
    const{IdConsmed} = req.body;
    querys.aceptarcita(IdCita,IdConsmed,(error,cambio)=>{
      if(cambio){
        console.log('cieta aceptada');
      }
      else{
        console.log(error);
      }
    });
  };

  Controllers.citasDoctorDeclina = (req,res,next)=>{    
    const{IdCita} = req.body;
    const{IdConsmed} = req.body;
    querys.declinarcita(IdCita,IdConsmed,(error,cambio)=>{
      if(cambio){
        console.log('cita declinada');
      }
      else{
        console.log(error);
      }
    });
  };

  Controllers.peticionesDoctorDeclina = (req,res,next)=>{
    const Cedula = req.session.cedula;
    const{CurpForm} = req.body;
    querys.declinarPeticiones(Cedula,CurpForm,(error,cambio)=>{
      if(cambio){
        console.log('Petición declinada');
      }
      else{
        console.log(error);
      }
    });
  };

  Controllers.citasDoctor = (req,res,next)=>{
    res.render('citasDoctor');
  };

 
  Controllers.detallesPaciente = (req, res, next) => {
    const Cedula = req.session.cedula;
    const{CurpForm} = req.body;

    querys.buscarPaciente(Cedula, CurpForm, (error, consulta) => {
      if(consulta) {
        console.log('Consultado exitosamente');
        res.render('pacienteDoctor');
      } else {
        console.log(error);
      }
    });
  }
 
module.exports = Controllers; 