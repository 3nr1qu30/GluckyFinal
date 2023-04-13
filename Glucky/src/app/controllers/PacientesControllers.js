const Controllers={};
const querys = require('../sql/Querys');
Controllers.dashboardPacientes=(req,res,next)=>{
    const curp = req.session.curp;
    const nombre = req.session.nombre;
    const correo = req.session.correo;
    res.render('dashboardPacientes',{curp,nombre,correo});
  };

  Controllers.solicitudesPaciente = (req,res,next)=>{
    querys.desplegarDoctores((error,Doctores)=>{
      if(Doctores){
        console.log(Doctores);
        res.render('solicitudesPaciente',{datos:Doctores});
      }
      else{
        console.log(error);
      }
    });
  };
module.exports = Controllers; 
