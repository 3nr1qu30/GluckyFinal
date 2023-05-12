const querys = require('../sql/Querys');
const Controllers={};

//get
//Le falta lo de los estados
Controllers.dashboardPacientes = (req, res, next) => {
  const curp = req.session.curp;
  const regis = req.session.regis;
  const tipodia = req.session.tipodia;
  const citaEli = req.session.citaEli;
  const citaEnvi = req.session.citaEnvi;
  const enlace = req.session.enlaze;
  const conect = req.session.conectado;
  delete req.session.regis;
  delete req.session.citaEli;
  delete req.session.citaEnvi;
  delete req.session.enlaze;
  delete req.session.conectado;
  let direccion;
  let solicituda;
  let glucosa = 0;
  let sistolica = 0;
  let diastolica = 0;
  querys.datosPaciente(curp,(error,datosPa)=>{
    if(datosPa){
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
                  solicituda,
                  direccion,
                  datosmedicos,
                  glucosa,
                  sistolica,
                  diastolica,
                  regis,
                  citaEli,
                  citaEnvi,
                  enlace,
                  conect,
                  datosPa,
                  tipodia
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
                    solicituda, 
                    direccion,
                    tipodia,
                    datosmedicos,
                    glucosa,
                    sistolica,
                    diastolica,
                    regis, citas:citasver, citasP1:citasverEdo1, citasP3:citasverEdo3,
                    citaEli,
                    citaEnvi,
                    enlace,
                    conect,
                    datosPa,
                    tipodia
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
    }
    else{
          console.log(error);
        }
  });
};
//Este ya esta al 100%
Controllers.VerDatosPaciente = (req,res,next)=>{
  const curp = req.session.curp;
  const passAct = req.session.passAct;
  const datosAct = req.session.daActuali;
  const desvincu =  req.session.desvinculado
  delete req.session.daActuali;
  delete req.session.passAct;
  querys.datosPaciente(curp,(error,ver)=>{
    if(ver){
      querys.DatoPacienteDoctor(curp,(error,pacdoc)=>{
      if(pacdoc){
      res.render('perfilPaciente',{curp, datos:ver, pacdoc:pacdoc,passAct,datosAct,desvincu});
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

//Este ya esta al 100%
Controllers.verAsignacionesPaciente = (req,res,next)=>{
  const curp = req.session.curp;
  querys.solicitudAceptadaDoctor(curp,(error,solicitud)=>{
    if(solicitud.length!==0){
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
                                  res.render('asignacionesPacientes',{curp,citas:citas, dietas:dietas, datos:ver, direccion:direccion, nombredoc:solicituda, dietas:dietaver, dietasverTodas:dietasverTodas , recetaver:recetaver, recetaverTodas:recetaverTodas});
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
    }else if(solicitud.length === 0){
      req.session.conectado='no doctor';
      res.redirect('/Glucky/Pacientes/Dashboard');
    }
    else if(error){
      req.session.conectado='no';
      console.log(error);
    } 
  }); 
};

//Este ya no se mueve ya esta al 100%
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
      req.session.daActuali='datos actualizados';
      res.redirect('/Glucky/Pacientes/EditarCuenta');
    }
    else{
      console.log(error);
      req.session.daActuali='datos no actualizados';
      res.redirect('/Glucky/Pacientes/EditarCuenta');
    }
  }); 
 };
//alertas en las desvinculaciones
 Controllers.Desvincular = (req,res,next)=>{
  const CurpForm =req.session.curp;
  querys.DesvincularDoctor(CurpForm,(error,desv)=>{
    if(desv){
      querys.eliminarDatosDietas(CurpForm,(error,eldiet)=>{
        if(eldiet){
          querys.eliminarDatosRecetas(CurpForm,(error,elrece)=>{
            if(elrece){
          req.session.desvinculado='si';
          res.redirect('/Glucky/Pacientes/EditarCuenta');
            } else {
              req.session.desvinculado='no';
          res.redirect('/Glucky/Pacientes/EditarCuenta');
              console.log(error);
            } 
        });
        } else{
          req.session.desvinculado='no';
          res.redirect('/Glucky/Pacientes/EditarCuenta');
          console.log(error);
        }
        });
    }
    else{
      req.session.desvinculado='no';
      res.redirect('/Glucky/Pacientes/EditarCuenta');
      console.log(error);
    }
  }); 
 };

//Este ya no se mueve ya esta al 100%
 Controllers.ActualizarContraPaciente = (req,res,next)=>{
const curp  = req.session.curp;
const {NewPass} = req.body;

querys.ActualizarContraPaciente(curp, NewPass,(error,act)=>{
  if(act){
    req.session.passAct='contra actualizada';
    res.redirect('/Glucky/Pacientes/EditarCuenta');
  } else if(error){
    console.log(error);
    req.session.passAct='contra no actualizada';
    res.redirect('/Glucky/Pacientes/EditarCuenta');
  }
});
};

  //Este ya no se mueve ya esta al 100%
  Controllers.solicitudesPaciente = (req,res,next)=>{
    const soliciEnvi = req.session.EnvioSoli;
    delete req.session.EnvioSoli;
    const curp = req.session.curp;
    const reenlaze = req.session.reenlaze;
    delete req.session.reenlaze;
    if(soliciEnvi!==undefined){
      querys.desplegarDoctores((error,Doctores)=>{
        if(Doctores){
          querys.VerDatoPaciente(curp,(error,datpac)=>{
            if(datpac){
          res.render('solicitudesPaciente',{datos:Doctores, datopac:datpac, soliciEnvi,curp});
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
    
    querys.buscarSolicitud(curp,(error,solicitud)=>{
      if(solicitud){
        if(solicitud.length===0||reenlaze==='su solicitud fue denegada'){
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
          req.session.enlaze='su solicitud sigue en espera';
          res.redirect("/Glucky/Pacientes/Dashboard");

        } 
        else if(solicitud[0].id_edosol===2){
          req.session.enlaze='su solicitud fue aceptada';
          res.redirect("/Glucky/Pacientes/Dashboard");
        }
        else if(solicitud[0].id_edosol===3){
          req.session.enlaze='su solicitud fue denegada';
          req.session.reenlaze='su solicitud fue denegada';
          res.redirect("/Glucky/Pacientes/Dashboard");
        }  
      }
      else{
        console.log(error);
      }
    });
  }
  //post
  //Este ya esta al 100%
  Controllers.solicitudesPacientePost = (req,res,next)=>{
    const{CedulaForm} = req.body;
    const curp = req.session.curp;
    querys.buscarSolicitud(curp, (error,solicitud)=>{
      if(solicitud){
        if(solicitud.length===0){
          querys.enlazarDoctoresPacientes(curp,CedulaForm,(error,enlaze)=>{
            if(enlaze){
              req.session.EnvioSoli='solicitud de enlaze enviada';
              res.redirect("/Glucky/Pacientes/Solicitudes");
            }
            else if(error){
              console.log(error);
              req.session.EnvioSoli='solicitud de enlaze no enviada ';
              res.redirect("/Glucky/Pacientes/Solicitudes");
            }
          });
        }else{
          querys.reintentoenlazeDoctoresPacientes(curp,CedulaForm,(error,actualizacion)=>{
            if(actualizacion){
              req.session.EnvioSoli='solicitud de reenlaze enviada';
              res.redirect("/Glucky/Pacientes/Solicitudes");
            }
            else if(error){
              console.log(error);
              req.session.EnvioSoli='solicitud de no reenlaze enviada';
              res.redirect("/Glucky/Pacientes/Solicitudes");
            }
          });
        }
      }
    });
  };

// Este ya esta al 100%
  Controllers.solicitudCita = (req,res,next)=>{    
    const{FechaForm} = req.body;
    const{HoraForm} = req.body;
    const Curp = req.session.curp;
    querys.solicitudcita(FechaForm,HoraForm,Curp,(error,Cita)=>{
      if(Cita){
        req.session.citaEnvi ='Tu cita fue enviada';
        res.redirect("/Glucky/Pacientes/Dashboard");
      }
      else if(error){
        console.log(error);
        req.session.citaEnvi ='Tu no cita fue enviada';
        res.redirect("/Glucky/Pacientes/Dashboard");
      }
    });
  }; 

// Este ya esta al 100%
  Controllers.eliminaSolCita = (req,res,next)=>{    
    const{idCitaDel} = req.body;
    const Curp = req.session.curp;
    querys.eliminaSolicitudesDen(idCitaDel,Curp,(error,Cita)=>{
      if(Cita){
        req.session.citaEli='citaeliminada';
        res.redirect("/Glucky/Pacientes/Dashboard");
      }
      else if(error){
        console.log(error);
        req.session.citaEli='error al eliminar la cita';
        res.redirect("/Glucky/Pacientes/Dashboard");
      }
    });
  }; 

  // Este ya esta al 100%
  Controllers.registroNiveles = (req,res,next)=>{
    const{glucosa,sistolica,diastolica,medicion}=req.body
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
      else if(error){
        console.log(error);
        req.session.regis='No se pudo agregar el registro de niveles';
        res.redirect("/Glucky/Pacientes/Dashboard"); 
      }
    });
  };

  //Este ya esta al 100%
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
            res.render('chatPaciente',{curp,solicitud,mensajes,format12HourTime,formatDate});
          }
          else if(mensajes.length===0){
            querys.VerDatoPaciente(curp,(error,datospac)=> {
              if(datospac){
            mensajes='undefined';
            res.render('chatPaciente',{curp,solicitud,mensajes,datopac:datospac});
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
        req.session.conectado='no doctor';
        res.redirect('/Glucky/Pacientes/Dashboard');
      }
      else if(error){
        console.log(error);
        req.session.conectado='no';
        res.redirect('/Glucky/Pacientes/Dashboard');
      
      }
    });
  };

  //A este no le muevan es el api rest ya esta al 100%
  Controllers.AgregarMensaje = async (req, res, next) => {
    try {
      const { IdChat, Emisor, Receptor, Mensaje, Fecha, Hora } = req.body;
      await querys.agregarMensaje(IdChat, Emisor, Receptor, Mensaje, Fecha, Hora);
      res.sendStatus(200);
    } catch (error) {
      console.log('Error al agregar mensaje ' +error);
      res.sendStatus(500);
    }
  }
  //A este no le muevan es el api rest ya esta al 100%
  Controllers.niveles=(req,res,next)=>{
    const curp = req.session.curp;
    const tipodia = req.session.tipodia;
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
    querys.datosPaciente(curp, (error,datospacientes)=>{
      if(datospacientes){
        querys.buscarDatosmedicos(curp,(error,datosmedicos)=>{
          if(datosmedicos){
            res.render('nivelesPaciente',{datospacientes,curp,datosmedicos,format12HourTime,formatDate,tipodia});
          }
        })
      }
    })
  }
  
  module.exports = Controllers;