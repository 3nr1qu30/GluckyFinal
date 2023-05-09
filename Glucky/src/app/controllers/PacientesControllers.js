const querys = require('../sql/Querys');
const Controllers={};

//get
//Le falta lo de los estados
Controllers.dashboardPacientes = (req, res, next) => {
  const curp = req.session.curp;
  const nombre = req.session.nombre;
  const correo = req.session.correo;
  const tipodia = req.session.tipodia;
  const regis = req.session.regis;
  delete req.session.regis;
  let direccion;
  let solicituda;
  let glucosa = 0;
  let sistolica = 0;
  let diastolica = 0;


  querys.buscarDatosmedicos(curp, (error, datosmedicos) => {
    if (error) {
      console.log(error);
    } else if (datosmedicos) {
      for (var i = Math.max(datosmedicos.length - 10, 0); i < datosmedicos.length; i++) {
        glucosa += parseInt(datosmedicos[i].gluc_datmed);
        sistolica += parseInt(datosmedicos[i].presis_datmed);
        diastolica += parseInt(datosmedicos[i].predia_datmed);
      }
      glucosa = Math.floor(glucosa / datosmedicos.length);
      sistolica = Math.floor(sistolica / datosmedicos.length);
      diastolica = Math.floor(diastolica / datosmedicos.length);

      querys.solicitudAceptadaDoctor(curp, (error, solicitud) => {
        if (error) {
          console.error(error);
        } else {
          if (solicitud.length === 0) {
            solicituda = 'Aun no te has enlazado a un doctor';
            direccion = 'Aun no te has enlazado a un doctor';
            res.render('dashboardPacientes', {
              curp,
              nombre,
              correo,
              solicituda,
              direccion,
              tipodia,
              datosmedicos,
              glucosa,
              sistolica,
              diastolica,
              regis
            });
          } else {
        //inicio de la segunda consulta de query 
        querys.verCitasPacienteIndividual(curp,(error2,citasver)=>{
          if(citasver){
            //inicio de la tercera consulta de query 
            querys.PeticionesCitaPaciente(curp,(error3,citasverEdo1)=>{
            if(citasverEdo1){
              //inicio de la cuarta consulta de query 
              querys.PeticionesCitaPacienteDeclinadas(curp,(error4,citasverEdo3)=>{
              if(citasverEdo3){
                solicituda =
                solicitud[0].nom_pers + ' ' + solicitud[0].apellidos_pers;
              direccion =
                'Calle:' +
                solicitud[0].calle_cons +
                ' Num:' +
                solicitud[0].num_cons +
                '\n' +
                ' CP:' +
                solicitud[0].cp_cons +
                '\n' +
                ' Colonia:' +
                solicitud[0].col_cons +
                '\n' +
                ' Del o Mun:' +
                solicitud[0].del_cons +
                '\n' +
                ' Estado o Ciudad:' +
                solicitud[0].edo_cons;
              res.render('dashboardPacientes', {
                curp,
                nombre,
                correo,
                solicituda, 
                direccion,
                tipodia,
                datosmedicos,
                glucosa,
                sistolica,
                diastolica,
                regis, citas:citasver, citasP1:citasverEdo1, citasP3:citasverEdo3
              });
                console.log(citasverEdo3);
              }
              else{
                console.log(error4);
              }
              }); 
              //Fin de la cuarta consulta de query 
            }
            else{
              console.log(error3);
            }
            }); 
            //Fin de la tercera consulta de query 
          }
          else{
            console.log(error2);
          }
          }); 
          //Fin de la segunda consulta de query 
          }
        }
      });
    }
  });
};
//Le falta la alerta de si estas seguro de desvincula al doctores
Controllers.VerDatosPaciente = (req,res,next)=>{
  const curp = req.session.curp;
  querys.VerDatoPaciente(curp,(error,ver)=>{
    if(ver){
      querys.DatoPacienteDoctor(curp,(error,pacdoc)=>{
      if(pacdoc){
        console.log(ver);
        console.log(pacdoc);
      res.render('perfilPaciente',{curp, datos:ver, pacdoc:pacdoc});
      }else{
        console.log(error);
      }
    });
    }
    else{
      console.log(error);
    }
  }); 
};

//Le falta una alerta si no estas asignado a ningun paciente
Controllers.verAsignacionesPaciente = (req,res,next)=>{
  const curp = req.session.curp;
  querys.verCitasPacienteIndividual(curp,(error,citas)=>{
    if(citas){
      querys.verDietasCompletas2(curp,(error,dietas)=>{
      if(dietas){
        querys.solicitudAceptadaDoctor(curp,(error,pacdoc)=>{
          if(pacdoc){
            querys.DatoPacienteDoctor(curp,(error,ver)=>{
              if(ver){

                solicituda =
                pacdoc[0].nom_pers + ' ' + pacdoc[0].apellidos_pers;

                direccion =
                'Calle:' +
                pacdoc[0].calle_cons +
                ' Num:' +
                pacdoc[0].num_cons +
                '\n' +
                ' CP:' +
                pacdoc[0].cp_cons +
                '\n' +
                ' Colonia:' +
                pacdoc[0].col_cons +
                '\n' +
                ' Del o Mun:' +
                pacdoc[0].del_cons +
                '\n' +
                ' Estado o Ciudad:' +
                pacdoc[0].edo_cons;
               //inicio de la cuarta consulta de query 
               querys.verDietaBase(curp,(error4,dietaver)=>{
                if(dietaver){
                //inicio de la quinta consulta de query verTratamientoBase
                querys.verDietasCompletas2(curp,(error5,dietasverTodas)=>{
                  if(dietasverTodas){
                     //inicio de la sexta consulta de query 
                      querys.verTratamientosCompletas2(curp,(error6,recetaverTodas)=>{
                        if(recetaverTodas){
                          //inicio de la séptima consulta de query 
                          querys.verTratamientoBase(curp,(error7,recetaver)=>{
                            if(recetaver){
                              res.render('asignacionesPacientes',{citas:citas, dietas:dietas, datos:ver, direccion:direccion, nombredoc:solicituda, dietas:dietaver, dietasverTodas:dietasverTodas , recetaver:recetaver, recetaverTodas:recetaverTodas});
                            }
                            else{
                              console.log(error7);
                            }
                          }); 
                          //final de la séptima consulta de query
                        }
                        else{
                          console.log(error6);
                        }
                      }); 
                      //final de la sexta consulta de query
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
              }else{
                console.log(error);
              }
            });
          }else{
            console.log(error);
          }
        });
      }else{
        console.log(error);
      }
    });
    }
    else{
      console.log(error);
    }
  }); 
};

//Alerta de datos cambiados
Controllers.ActualizarDatosPaciente = (req,res,next)=>{
  const CurpForm =req.session.curp;
  const{NombreForm} =req.body;
  const{ApellidosForm} =req.body;
  const{EmailForm} =req.body;
  const{EdadForm} =req.body;
  const{GeneroForm} =req.body;
  const{TelForm} =req.body;
  const{TDiabForm} =req.body;

  querys.ActualizarDatoPaciente(CurpForm,NombreForm,ApellidosForm,EmailForm,EdadForm,GeneroForm,TelForm,TDiabForm,(error,ver)=>{
    if(ver){
      console.log(ver);
      res.redirect('/Glucky/Pacientes/EditarCuenta');
    }
    else{
      console.log(error);
    }
  }); 
 };
//alertas en las desvinculaciones
 Controllers.Desvincular = (req,res,next)=>{
  const CurpForm =req.session.curp;
  querys.DesvincularDoctor(CurpForm,(error,desv)=>{
    if(desv){
      console.log(desv);
      querys.eliminarChat(CurpForm,(error,eliminar)=>{
        if(eliminar){
          console.log(eliminar);
          res.redirect('/Glucky/Pacientes/EditarCuenta');
        }
        else{
          console.log(error);
        }
      });
    }
    else{
      console.log(error);
    }
  }); 
 };
//Contraseña actualizada alerta
 Controllers.ActualizarContraPaciente = (req,res,next)=>{
const curp  = req.session.curp;
const {NewPass} = req.body;
querys.ActualizarContraPaciente(curp, NewPass,(error,act)=>{
  if(act){
    console.log(act);
    res.redirect('/Glucky/Pacientes/EditarCuenta');
  } else{
    console.log(error);
  }
});
};
  //Alertas del estado de la solicitud
  Controllers.solicitudesPaciente = (req,res,next)=>{
    const curp = req.session.curp;
    querys.buscarSolicitud(curp,(error,solicitud)=>{
      if(solicitud){
        if(solicitud.length===0){
          querys.desplegarDoctores((error,Doctores)=>{
            if(Doctores){
              querys.VerDatoPaciente(curp,(error,datpac)=>{
                if(datpac){
              res.render('solicitudesPaciente',{curp, datos:Doctores, datopac:datpac});
                } else {
                  console.log(error);
                }
               });
            }
            else{
              console.log(error);
            }
          });
        }
        else if(solicitud[0].id_edosol===1){
          console.log('su solicitud sigue en espera');
        } 
        else if(solicitud[0].id_edosol===2){
          console.log('su solicitud fue aceptada');
        }
        else if(solicitud[0].id_edosol===3){
          console.log('su solicitud fue denegada');
          querys.desplegarDoctores((error,Doctores)=>{
            if(Doctores){
              querys.VerDatoPaciente(curp,(error,datpac)=>{
                if(datpac){
              res.render('solicitudesPaciente',{curp, datos:Doctores, datopac:datpac});
                } else {
                  console.log(error);
                }
               });
            }
            else{
              console.log(error);
            }
          });
        }  
      }
      else{
        console.log(error);
      }
    });
  };
  //post
  //Alerta de solicitud enviada
  Controllers.solicitudesPacientePost = (req,res,next)=>{
    const{CedulaForm} = req.body;
    const curp = req.session.curp;
    querys.buscarSolicitud(curp, (error,solicitud)=>{
      if(solicitud){
        if(solicitud.length===0){
          querys.enlazarDoctoresPacientes(curp,CedulaForm,(error,enlaze)=>{
            if(enlaze){
              console.log('solicitud enviada');
              res.redirect("/Glucky/Pacientes/Dashboard");
            }
            else{
              console.log(error);
            }
          });
        }else{
          querys.reintentoenlazeDoctoresPacientes(curp,CedulaForm,(error,actualizacion)=>{
            if(actualizacion){
              console.log('solicitud envidad');
              res.redirect("/Glucky/Pacientes/Dashboard");
            }
            else{
              console.log('Error al actualizar la solicitud');
            }
          });
        }
      }
    });
  };
  //Alerta de cita enviada
  Controllers.solicitudCita = (req,res,next)=>{    
    const{FechaForm} = req.body;
    const{HoraForm} = req.body;
    const Curp = req.session.curp;
    querys.solicitudcita(FechaForm,HoraForm,Curp,(error,Cita)=>{
      if(Cita){
        console.log('Tu cita fue enviada');
        res.redirect("/Glucky/Pacientes/Dashboard");
      }
      else{
        console.log(error);
      }
    });
  }; 

//Alerta de eliminacion de cita
  Controllers.eliminaSolCita = (req,res,next)=>{    
    const{idCitaDel} = req.body;
    const Curp = req.session.curp;
    querys.eliminaSolicitudesDen(idCitaDel,Curp,(error,Cita)=>{
      if(Cita){
        console.log('Tu cita fue enviada');
        res.redirect("/Glucky/Pacientes/Dashboard");
      }
      else{
        console.log(error);
      }
    });
  }; 

  Controllers.registroNiveles = (req,res,next)=>{
    const{glucosa,sistolica,diastolica,medicion}=req.body
    let regis;
    const Curp = req.session.curp;
    let fechaActual = new Date();
    let anio = fechaActual.getFullYear();
    let mes = fechaActual.getMonth() + 1;
    let dia = fechaActual.getDate();
    let fecha = `${anio}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;
    let horaActual = new Date();
    let hora = horaActual.toLocaleTimeString();
    querys.enviarRegistros(glucosa,sistolica,diastolica,hora,fecha,Curp,medicion,(error,registro)=>{
      if(registro){
        req.session.regis='Tu registro de niveles fue agregado';
        res.redirect("/Glucky/Pacientes/Dashboard");
      }
    });
  };

  Controllers.chatPacienteGet=(req,res,next)=>{
    const curp = req.session.curp;
    querys.buscarChatPaciente(curp, (error, solicitud) => {
      if(solicitud.length!==0){
        const id_chat = solicitud[0].id_chat;
        querys.buscarMensajes(id_chat,(error, mensajes) => {
          if(mensajes.length!==0){
            const format12HourTime = (time) => {
              var splitTime = time.split(':');
              var hours = parseInt(splitTime[0]);
              var minutes = parseInt(splitTime[1]);
              var amPm = hours >= 12 ? 'PM' : 'AM';
              hours = hours % 12;
              hours = hours ? hours : 12; // convert 0 to 12
              minutes = minutes < 10 ? '0' + minutes : minutes;
              var formattedTime = hours + ':' + minutes + ' ' + amPm;
              return formattedTime;
            }
            const formatDate = (dates) => {
              const date = new Date(dates);
              const months = [
                "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
              ];
              const day = date.getDate();
              const monthIndex = date.getMonth();
              const year = date.getFullYear();
              return `${day} ${months[monthIndex]} ${year}`;
            }
            error='undefined';
            res.render('chatPaciente',{curp,solicitud,mensajes,format12HourTime,formatDate,error});
          }
          else if(mensajes.length===0){
            querys.VerDatoPaciente(curp,(error,datospac)=> {
              if(datospac){
            error='undefined';
            mensajes='undefined';
            res.render('chatPaciente',{curp,solicitud,mensajes,error, datopac:datospac});
              } else {
                console.log(error);
              }
          });
          }
          else if(error){
            console.log(error);
          }
        });
      }
      else if(solicitud.length===0){
      error = "No te has en lazado a un doctor";
      solicitud = 'undefined';
      res.render('chatPaciente',{curp,solicitud,error});
      }
      else if(error){
        error='no se pudo cargar la pagina';
        solicitud = 'undefined';
        res.render('chatPaciente',{curp,solicitud,error});
      }
    });
  };


  Controllers.AgregarMensaje=(req,res,next)=>{
    const{IdChat,Emisor,Receptor,Mensaje,Fecha,Hora}=req.body;
    querys.agregarMensaje(IdChat,Emisor,Receptor,Mensaje,Fecha,Hora,(error,mensaje)=>{
      if(mensaje){
       console.log('Mensaje agregado'); 
      }
      else{
              console.log(error);
            }
    });
  }
  module.exports = Controllers;