const Controllers={};
const querys = require('../sql/Querys');
Controllers.dashboardDoctores=(req,res,next)=>{
    const cedula = req.session.cedula;
    const nombre = req.session.nombre;
    const correo = req.session.correo;
    res.render('dashboardDoctores',{cedula,nombre,correo});
  };

  Controllers.peticionesDoctor = (req,res,next)=>{
    res.render('peticionesDoctor');
  };
module.exports = Controllers;