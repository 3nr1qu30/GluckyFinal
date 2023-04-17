const Controllers={};
const querys = require('../sql/Querys');
//get
Controllers.dashboardPacientes=(req,res,next)=>{
    const curp = req.session.curp;
    const nombre = req.session.nombre;
    const correo = req.session.correo;
    const tipodia= req.session.tipodia;
    let direccion;
    let solicituda;
    querys.solicitudAceptadaDoctor(curp,(error,solicitud)=>{
      if(error){
        console.error(error);
      }
      else{
        if(solicitud.length===0){
          solicituda='Aun no te has enlazado a un doctor';
          direccion='Aun no te has enlazado a un doctor';
          res.render('dashboardPacientes',{curp,nombre,correo,solicituda,direccion,tipodia});
        }
        else{
          solicituda=solicitud[0].nom_pers +" "+ solicitud[0].apellidos_pers;
          direccion='Calle:'+solicitud[0].calle_cons+ ' Num:' +solicitud[0].num_cons+'\n'+' CP:'+solicitud[0].cp_cons+'\n'+' Colonia:'+solicitud[0].col_cons+'\n'+
           ' Del o Mun:'+solicitud[0].del_cons+'\n'+' Estado o Ciudad:'+solicitud[0].edo_cons;
          res.render('dashboardPacientes',{curp,nombre,correo,solicituda,direccion,tipodia});
        }
      }
    });
  };

  Controllers.solicitudesPaciente = (req,res,next)=>{
    const curp = req.session.curp;
    querys.buscarSolicitud(curp,(error,solicitud)=>{
      if(solicitud){
        if(solicitud.length===0){
          querys.desplegarDoctores((error,Doctores)=>{
            if(Doctores){
              res.render('solicitudesPaciente',{datos:Doctores});
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
              res.render('solicitudesPaciente',{datos:Doctores});
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
  Controllers.solicitudesPacientePost = (req,res,next)=>{
    const{CedulaForm} = req.body;
    const curp = req.session.curp;
    querys.buscarSolicitud(curp, (error,solicitud)=>{
      if(solicitud){
        if(solicitud.length===0){
          querys.enlazarDoctoresPacientes(curp,CedulaForm,(error,enlaze)=>{
            if(enlaze){
              console.log('solicitud enviada');
            }
            else{
              console.log(error);
            }
          });
        }else{
          querys.reintentoenlazeDoctoresPacientes(curp,CedulaForm,(error,actualizacion)=>{
            if(actualizacion){
              console.log('solicitud envidad');
            }
            else{
              console.log('Error al actualizar la solicitud');
            }
          });
        }
      }
    });
  };

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
  
module.exports = Controllers;