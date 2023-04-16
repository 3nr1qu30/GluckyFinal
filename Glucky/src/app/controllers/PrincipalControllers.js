const Controllers={};
const querys = require('../sql/Querys');
const encriptar = require('../helpers/EncriptarContraseñas');
const session = require('express-session');
const Swal = require('sweetalert2');

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
};

var doctorNoExiste = false;

Controllers.iniciosesionPost=(req,res,next)=>{
  const{UserForm,PassForm} = req.body;
  if(UserForm.length===18){
    querys.buscarPaciente(UserForm, async (error,paciente)=>{
      if(error){
        console.log(error);
      }
      else if(paciente==='no existe'){
        console.log('El paciente no esta registrado');
      }
      else if(paciente){
        if(await encriptar.compare(PassForm, paciente[0].pass_pacien)===true){
          req.session.curp=paciente[0].curp_pacien;
          req.session.nombre=`${paciente[0].nom_pers} ${paciente[0].apellidos_pers}`;
          req.session.correo=paciente[0].email_pers;
          req.session.tipodia=paciente[0].nom_tipdiabts;
          res.redirect('/Glucky/Pacientes/Dashboard');
        }
        else{
          console.log('Contraseña incorrecta');
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
        let error ='El doctor no esta registrado';
        console.log(error);
        res.render('iniciosesion',{error});
      }
      else if(doctor){
        if(await encriptar.compare(PassForm, doctor[0].pass_med)===true){
          req.session.cedula=doctor[0].cedula_med;
          req.session.nombre=`${doctor[0].nom_pers} ${doctor[0].apellidos_pers}`;
          req.session.correo=doctor[0].email_pers;
          res.redirect('/Glucky/Doctores/Dashboard');
        }
      }
    });
  }
};

module.exports = {doctorNoExiste};
module.exports = Controllers;