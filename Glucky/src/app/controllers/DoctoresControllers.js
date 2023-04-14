const Controllers={};
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

  Controllers.peticionesDoctorAcepta = (req,res,next)=>{
    const Cedula = req.session.cedula;
    const{CurpForm} = req.body;
    querys.aceptarPeticiones(Cedula,CurpForm,(error,cambio)=>{
      if(cambio){
        console.log('pues va');
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
        console.log('pues va');
      }
      else{
        console.log(error);
      }
    });
  };
module.exports = Controllers; 

