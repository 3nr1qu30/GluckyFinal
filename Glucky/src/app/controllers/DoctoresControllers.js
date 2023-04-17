const Controllers={};
const { query } = require('express');
const querys = require('../sql/Querys');
Controllers.dashboardDoctores=(req,res,next)=>{
    const cedula = req.session.cedula;
    const nombre = req.session.nombre;
    const correo = req.session.correo;
    res.render('dashboardDoctores',{cedula,nombre,correo});
  };

  Controllers.peticionesDoctor = (req,res,next)=>{
    console.log(req.body);
    const Cedula = req.session.cedula;
    querys.verPeticionesDoctor(Cedula,(error,ver)=>{
      if(ver){
        console.log(ver);
        res.render('peticionesDoctor',{datos:ver});
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
        console.log(ver);
        res.render('citasDoctor',{datos:ver});
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

/*   Controllers.citasDoctorConsultar = (req,res,next)=>{    
    const{IdCita} = "2";
    querys.verCita(IdCita,(error,consultar)=>{
      if(consultar){
        console.log('consultado exitosamente');
      }
      else{
        console.log(error);
      }
    });
  }; */

/*   Controllers.citasDoctorBorrar = (req,res,next)=>{    
    const{IdCita} = req.body;
    const{IdConsmed} = req.body;
    querys.borrarCita(IdCita,IdConsmed,(error,borrar)=>{
      if(borrar){
        console.log('cita borrada');
      }
      else{
        console.log(error);
      }
    });
  };
 */
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