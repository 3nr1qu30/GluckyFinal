const Controllers={};
const querys = require('../sql/Querys');
//get
Controllers.dashboardPacientes=(req,res,next)=>{
    const curp = req.session.curp;
    const nombre = req.session.nombre;
    const correo = req.session.correo;
    res.render('dashboardPacientes',{curp,nombre,correo});
  };

  Controllers.solicitudesPaciente = (req,res,next)=>{
    const curp = req.session.curp;
    querys.buscarSolicitud(curp,(error,solicitud)=>{
      if(solicitud){
        if(solicitud.length===0){
          querys.desplegarDoctores((error,Doctores)=>{
            if(Doctores){
              console.log(Doctores);
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
              console.log(Doctores);
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
module.exports = Controllers;