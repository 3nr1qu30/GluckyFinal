const Controllers={};
const { query } = require('express');
const querys = require('../sql/Querys');
Controllers.dashboardDoctores=(req,res,next)=>{
    const cedula = req.session.cedula;
    const nombre = req.session.nombre;
    const correo = req.session.correo;
    querys.verListaPacientes(cedula,(error,pacientes)=>{
      if(pacientes){
        querys.PeticionesCitaGenerales(cedula,(error2,citasaceptadas)=>{
          if(citasaceptadas){
            //nuevocoso
            querys.verPeticionesDoctor(cedula,(error3,pacientesSolici)=>{
              if(pacientesSolici){
                console.log(`ver los super papus`);
                res.render('dashboardDoctores',{cedula,nombre,correo,pacientes, vercitas:citasaceptadas, verpaci:pacientesSolici});
              }
              else{
                console.log(error3);
              }
            }); 
            //nuevocoso
          }
          else if(error2){
            console.log(error);
          }
        });
      }
    });
  };

  Controllers.VerDatosDoctor = (req,res,next)=>{
    const cedula = req.session.cedula;
    querys.VerDatoDoctor(cedula,(error,ver)=>{
      if(ver){
 
        res.render('perfilDoctor',{datos:ver});
      }
      else{
        console.log(error);
      }
    }); 
  };

 Controllers.ActualizarDatosDoctor = (req,res,next)=>{
  const CedulaForm =req.session.cedula;
  const{NombreForm} =req.body;
  const{ApellidosForm} =req.body;
  const{EmailForm} =req.body;
  const{EdadForm} =req.body;
  const{GeneroForm} =req.body;
  const{TelForm} =req.body;
  const{CalleForm} =req.body;
  const{NumeroForm} =req.body;
  const{CPForm} =req.body;
  const{ColForm} =req.body;
  const{DelForm} =req.body;
  const{EdoForm} =req.body;

  querys.ActualizarDatoDoctor(CedulaForm,NombreForm,ApellidosForm,EmailForm,EdadForm,GeneroForm,TelForm,CalleForm,NumeroForm,CPForm,ColForm,
    DelForm,EdoForm,(error,ver)=>{
    if(ver){
      console.log(ver);
      res.redirect('/Glucky/Doctores/EditarCuenta');
    }
    else{
      console.log(error);
    }
  }); 
 };

 Controllers.ActualizarContraDoctor = (req,res,next)=>{
  const cedula  = req.session.cedula;
  const {NewPass} = req.body;
  querys.ActualizarContraDoctor(cedula, NewPass,(error,act)=>{
    if(act){
      console.log(act);
      res.redirect('/Glucky/Doctores/EditarCuenta');
    } else{
      console.log(error);
    }
  });
  };

  Controllers.peticionesDoctor = (req,res,next)=>{
    console.log(req.body);
    const Cedula = req.session.cedula;
    querys.verPeticionesDoctor(Cedula,(error,ver)=>{
      if(ver){
        querys.VerDatoDoctor(Cedula,(error,citasaceptadas)=>{
          if(citasaceptadas){
            console.log(`ver las citas`);
            res.render('peticionesDoctor',{datos:ver,dato:citasaceptadas});
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
            querys.VerDatoDoctor(Cedula,(error,dato)=>{
              if(dato){
            console.log(`Ver las citas`);
            res.render('citasDoctor',{datos:ver,citasaceptadas,dato:dato});
              }  else if(error){
                console.log(error);
              }
          });
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
    const cedula = req.session.cedula;
    console.log(req.body);
    querys.verAlimentos((error,ver)=>{
      if(ver){
        querys.VerDatoDoctor(cedula,(error,dato)=>{
          if(dato){
        console.log(ver);
        res.render('almacenDoctorIngredientes',{datos:ver, dato:dato});
        } else if(error){
          console.log(error);
        }
         });
      }
      else{
        console.log(error);
      }
    }); 
  };

  Controllers.Medicamentos = (req,res,next)=>{
    const cedula = req.session.cedula;
    console.log(req.body);
    querys.verMedicamentos((error,ver)=>{
      if(ver){
        querys.VerDatoDoctor(cedula,(error,dato)=>{
          if(dato){
        console.log(ver);
        res.render('almacenDoctorMedicamentos',{datos:ver, dato:dato});
      } else if(error){
        console.log(error);
      }
       });
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
        //inicio de la segunda consulta de query 
        querys.verCitasPacienteIndividual(CURPform,(error2,citasver)=>{
          if(citasver){
          //inicio de la tercera consulta de query 
          querys.VerDatoDoctor(Cedula,(error3,doctorver)=>{
            if(doctorver){
              //inicio de la cuarta consulta de query 
              querys.verDietaBase(CURPform,(error4,dietaver)=>{
                if(dietaver){
                //inicio de la quinta consulta de query 
                querys.verDietasCompletas(CURPform,Cedula,(error5,dietasverTodas)=>{
                  if(dietasverTodas){
                    res.render('pacienteDoctor',{citas:citasver,datos:ver,doctor:doctorver, dietas:dietaver, dietasverTodas :dietasverTodas});
                  }
                  else{
                    console.log(error5);
                  }
                }); 
                //final de la quinta consulta de query
                }
                else{
                  console.log(error4);
                }
              }); 
              //final de la cuarta consulta de query
            }
            else{
              console.log(error3);
            }
          }); 
          //final de la tercera consulta de query
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

  Controllers.dietaVerDoctor = (req, res, next) => {
    const cedula_med = req.session.cedula;
    const { curp_pacien } = req.body;
    const date_dieta = new Date().toISOString().slice(0, 10);
    querys.enviarDietaBase(curp_pacien, cedula_med, date_dieta, (error, last_id) => {
      if (last_id) {
        querys.verAlimentos((error2, alimentosver) => {
          if (alimentosver) {
             //inicio de la segunda consulta de query
             querys.verIngredientesBaseSele(last_id,(error3, verdietaalimento) => {
              if (alimentosver) {
                res.render('verDietaDoctor', { alimentos: alimentosver, last_id : last_id, verdietaalimento :verdietaalimento});
              } else {
                console.log(error3);
              }
            });
            //fin de la segunda consulta de query
          } else {
            console.log(error2);
          }
        });
      } else {
        console.log(error);
      }
    });
  };

  Controllers.dietaVerDoctorGet = (req, res, next) => {
    const last_id = req.session.id_dieta;
        querys.verAlimentos((error2, alimentosver) => {
          if (alimentosver) {
            //inicio de la segunda consulta de query
            querys.verIngredientesBaseSele(last_id,(error3, verdietaalimento) => {
              if (alimentosver) {
                res.render('verDietaDoctor', { alimentos: alimentosver, last_id : last_id, verdietaalimento :verdietaalimento});
              } else {
                console.log(error3);
              }
            });
            //fin de la segunda consulta de query
          } else {
            console.log(error2);
          }
        });
};


  Controllers.enviarDietaBaseIngrediente = (req, res, next) => {
    const {id_dieta} = req.body;
    const {id_ingred} = req.body;
    querys.enviarDietaBaseIngrediente(id_dieta,id_ingred,(error, agregado) => {
      if (agregado) {
        req.session.id_dieta=id_dieta;
        res.redirect('/Glucky/Doctores/EditarDieta');
        console.log('ha sido agregado un alimento SIIIIIIIIIIIIIIIIIIII');
      } else {
        console.log(error);
      }
    });
  };
  

Controllers.eliminarDietaBaseIngrediente = (req, res, next) => {
    const {id_dieta} = req.body;
    const {id_dietingred} = req.body;
    querys.eliminarIngrediente(id_dietingred,id_dieta,(error, eliminado) => {
      if (eliminado) {
        req.session.id_dieta=id_dieta;
        res.redirect('/Glucky/Doctores/EditarDieta');
        console.log('ha sido eliminado un alimento SIIIIIIIIIIIIIIIIIIII');
      } else {
        console.log(error);
      }
    });
  }; 

  Controllers.PacienteDoctorGet = (req,res,next)=>{
    const Cedula = req.session.cedula;
    const CURPform = req.session.paciente;
    querys.verPacienteIndividual(Cedula,CURPform,(error,ver)=>{
      if(ver){
      //inicio de la segunda consulta de query 
      querys.verCitasPacienteIndividual(CURPform,(error2,citasver)=>{
        if(citasver){
          //inicio de la tercera consulta de query 
          querys.VerDatoDoctor(Cedula,(error3,doctorver)=>{
            if(doctorver){
              //inicio de la cuarta consulta de query 
              querys.verDietaBase(CURPform,(error4,dietaver)=>{
                if(dietaver){
                //inicio de la quinta consulta de query 
                querys.verDietasCompletas(CURPform,Cedula,(error5,dietasverTodas)=>{
                  if(dietasverTodas){
                    res.render('pacienteDoctor',{citas:citasver,datos:ver,doctor:doctorver, dietas:dietaver, dietasverTodas :dietasverTodas});
                  }
                  else{
                    console.log(error5);
                  }
                }); 
                //final de la quinta consulta de query
                }
                else{
                  console.log(error4);
                }
              }); 
              //final de la cuarta consulta de query
            }
            else{
              console.log(error3);
            }
          }); 
          //final de la tercera consulta de query
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
        console.log('Cita editada correctamente');
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
        const fecha = new Date();
        const fechaFormateada = `${fecha.getFullYear()}-${(fecha.getMonth() + 1).toString().padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')} ${fecha.getHours().toString().padStart(2, '0')}:${fecha.getMinutes().toString().padStart(2, '0')}:${fecha.getSeconds().toString().padStart(2, '0')}`;
        querys.crearChat(Cedula,CurpForm,fechaSQL,(error,chat)=>{
          if(chat){
            console.log('Petición aceptada');
          }
          else{
            console.log(error);
          }
        })
      }
      else{
        console.log(error);
      }
    });
  };

  Controllers.citasDoctorAcepta = (req,res,next)=>{   
    const{IdCita} = req.body;
    const{HoraForm} = req.body;
    const{FechaForm} = req.body;
    const{CurpPacien} = req.body;
    const{IdConsmed} = req.body;
    querys.aceptarcita(FechaForm,HoraForm,IdConsmed,CurpPacien,IdCita,(error,cambio)=>{
      if(cambio){
        console.log('cita aceptada y eliminada de solicitudes');
        res.redirect('/Glucky/Doctores/Citas');
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
        res.redirect('/Glucky/Doctores/Citas');
      }
      else{
        console.log(error);
      }
    });
  };

  Controllers.citasDoctorFinaliza= (req,res,next)=>{    
    const{IdCitaL} = req.body;
    const{CurpPacienL} = req.body;
    querys.finalizarCita(IdCitaL,CurpPacienL,(error,finaliza)=>{
      if(finaliza){
        console.log('cita finalizada correctamente osea borrada xd');
        res.redirect('/Glucky/Doctores/Citas');
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
  };

  Controllers.chatDoctorGet=(req, res,next) => {
    const cedula = req.session.cedula;
    res.render('chatDoctor',{cedula});
  }
  
 
module.exports = Controllers; 