const Controllers={};
const querys = require('../sql/Querys');
Controllers.dashboardPacientes=(req,res,next)=>{
    const curp = req.session.curp;
    const nombre = req.session.nombre;
    const correo = req.session.correo;
    res.render('dashboardPacientes',{curp,nombre,correo});
  };

  Controllers.solicitudesPaciente = (req,res,next)=>{
 
    res.render('solicitudesPaciente');
  };
module.exports = Controllers; 
