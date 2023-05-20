const Controllers={};
const querys = require('../sql/Querys');
const encriptar = require('../helpers/EncriptarContraseñas');
const session = require('express-session');

//rutas get
Controllers.index = (req, res, next) => {
      res.render('index');
  };

Controllers.registros = (req,res,next)=>{
  res.render('registros');
};

Controllers.registroPaGet = (req,res,next)=>{
  res.render('registroPa');
};

Controllers.registroDocGet=(req,res,next)=>{
  res.render('registroDoc');
};

Controllers.iniciosesion=(req,res,next)=>{
  req.session.destroy();
  res.render('iniciosesion');
}
Controllers.recuperarContrasena=(req,res,next)=>{
  req.session.destroy();
  res.render('recuperarContrasena');
}
//rutas post
Controllers.registroPaPost = (req,res,next)=>{
  const{NombreForm,ApellidosForm,EmailForm,EdadForm,TelefonoForm,CurpForm,GeneroForm,
    TipoDiabetes,PassForm} = req.body;
  querys.buscarPaciente(CurpForm, (error, resultado)=>{
    if(error){
      error='Paciente no registrado';
      console.log(error);
      res.render('registroPa',{error});
      error="undefined";
    }
    else{
      if(resultado === 'no existe'){
        querys.registrarPaciente(NombreForm,ApellidosForm,EmailForm,EdadForm,TelefonoForm,CurpForm,GeneroForm,
          TipoDiabetes,PassForm,(error,alta)=>{
            if(error){
              error='Paciente no registrado';
              res.render('registroPa',{error});
              error="undefined";
            }
            else if(alta){
              error='Paciente registrado con exito';
              res.render('registroPa',{error});
              error="undefined";
            }
          });
      }
      else{
        error='Paciente registrado con anterioridad';
        res.render('registroPa',{error});
        error="undefined";
      }
    }
  });
};

Controllers.registroDocPost=(req,res,next)=>{
  const{NombreForm,ApellidosForm,EmailForm,EdadForm,TelefonoForm,
    CedulaForm,sexo,CalleForm,NumeroConsForm,CodigoPostalForm,
    ColoniaForm,DelMunForm,EdoForm,PassForm}=req.body;
    querys.buscarDoctor(CedulaForm, (error, resultado)=>{
      if(error){
        error='Doctor no registrado';
        res.render('registroDoc',{error});
        error="undefined";
      }
      else{
        if(resultado === 'no existe'){
          querys.registrarDoctor(NombreForm,ApellidosForm,EmailForm,EdadForm,TelefonoForm,
            CedulaForm,sexo,CalleForm,NumeroConsForm,CodigoPostalForm,
            ColoniaForm,DelMunForm,EdoForm,PassForm,(error,alta)=>{
              if(error){
                error='Doctor no registrado';
                res.render('registroDoc',{error});
                error="undefined";
              }
              else if(alta){
                error='Doctor registrado con exito';
                res.render('registroDoc',{error});
                error="undefined";
              }
            });
        }
        else{
          error='Doctor registrado con anterioridad';
          res.render('registroDoc',{error});
          error="undefined";
        }
      }
    });
};


Controllers.iniciosesionPost=(req,res,next)=>{
  const{UserForm,PassForm} = req.body;
  let error;
  if(UserForm.length===18){
    querys.buscarPaciente(UserForm, async (error,paciente)=>{
      if(error){
        console.log(error);
      }
      else if(paciente==='no existe'){
        error ='El paciente no esta registrado';
        res.render('iniciosesion',{error});
        error="undefined";
      }
      else if(paciente){
        if(await encriptar.compare(PassForm, paciente[0].pass_pacien)===true){
          req.session.curp=paciente[0].curp_pacien;
          req.session.tipodia=paciente[0].nom_tipdiabts;
          res.redirect('/Glucky/Pacientes/Dashboard');
        }
        else{
          res.render('iniciosesionpasin',{Usuario:UserForm})
        }
      }
    });
  }
  else if(UserForm.length===8){
    querys.buscarDoctor(UserForm, async (error,doctor)=>{
      if(error){
        console.log(error);
      }
      else if(doctor==='no existe'){
        error='El doctor no esta registrado';
        res.render('iniciosesion',{error});
        error="undefined";
      }
      else if(doctor){
        if(await encriptar.compare(PassForm, doctor[0].pass_med)===true){
          req.session.cedula=doctor[0].cedula_med;
          req.session.nombre=`${doctor[0].nom_pers} ${doctor[0].apellidos_pers}`;
          req.session.correo=doctor[0].email_pers;
          res.redirect('/Glucky/Doctores/Dashboard');
        }
        else{
          res.render('iniciosesionpasin',{Usuario:UserForm});
        }
      }
    });
  }
};

module.exports = Controllers;