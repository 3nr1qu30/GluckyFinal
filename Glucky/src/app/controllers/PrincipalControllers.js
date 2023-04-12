const Controllers={};
const querys = require('../sql/Querys');
const encriptar = require('../helpers/EncriptarContraseñas');

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
  res.render('iniciosesion');
}
//rutas post
Controllers.registroPaPost = (req,res,next)=>{
  const{NombreForm,ApellidosForm,EmailForm,EdadForm,TelefonoForm,CurpForm,GeneroForm,
    TipoDiabetes,PassForm} = req.body;
  querys.buscarPaciente(CurpForm, (error, resultado)=>{
    if(error){
      console.log(error);
      res.render('index');
    }
    else{
      if(resultado === 'no existe'){
        querys.registrarPaciente(NombreForm,ApellidosForm,EmailForm,EdadForm,TelefonoForm,CurpForm,GeneroForm,
          TipoDiabetes,PassForm,(error,alta)=>{
            if(error){
              console.log(error);
              console.log('Paciente no registrado');
            }
            else if(alta){
              console.log('Paciente registrado con exito');
            }
          });
      }
      else{
        console.log('Paciente registrado con anterioridad');
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
        console.log(error);
        res.render('index');
      }
      else{
        if(resultado === 'no existe'){
          querys.registrarDoctor(NombreForm,ApellidosForm,EmailForm,EdadForm,TelefonoForm,
            CedulaForm,sexo,CalleForm,NumeroConsForm,CodigoPostalForm,
            ColoniaForm,DelMunForm,EdoForm,PassForm,(error,alta)=>{
              if(error){
                console.log(error);
                console.log('Doctor no registrado');
              }
              else if(alta){
                console.log('Doctor registrado con exito');
              }
            });
        }
        else{
          console.log('Doctor registrado con anterioridad');
        }
      }
    });
}
module.exports = Controllers;