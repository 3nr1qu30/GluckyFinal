const mysql=require('mysql2');
const encrypt = require('../helpers/EncriptarContraseñas');
var con;

function connect(){
    con=mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "n0m3l0", 
        database:"glucky3",
        charset: "utf8"
    });

    con.connect((err) => {
        if (err) {
          console.error('Error conectando la base de datos:', err);
          throw err;
        }
        console.log('Base de datos conectada');
      });
    };

connect();

const db={};
//Consultas y demas a la base de datos no cierren la conexión ya que si hacen eso todo se va a la mierda jeje

//Consultar info
db.buscarPaciente = (CurpForm,callback)=>{
  con.query(`SELECT * FROM paciente natural join persona WHERE curp_pacien = '${CurpForm}'`,(error,fila)=>{
    if(error){
      console.error('Error al buscar en la base de datos', error);
      callback(error, null);
    }
    else{ 
      if(fila.length === 0){
      callback(null, 'no existe');
    }
      else{
        callback(null, fila);
      }
    }
});
};

db.verPeticionesDoctor = (Cedula,callback)=>{
  con.query(`SELECT * FROM pacientemedico natural join paciente natural join persona natural join tipodiabetes n WHERE cedula_med  = '${Cedula}' AND id_edosol = 1`, (error,peticiones)=>{
   if(error){
      console.error('No hay solicitudes', error);
   }else{
     callback(null,peticiones);
   }
  });
 };
 

 db.aceptarPeticiones = (Cedula,CurpForm,callback)=>{
  con.query(`update pacientemedico set id_edosol=2 where cedula_med='${Cedula}' and curp_pacien='${CurpForm}';`, (error,acepta)=>{
   if(error){
      console.error('No mami', error);
   }else{
     callback(null,acepta);
   }
  });
 };

 db.declinarPeticiones = (Cedula,CurpForm,callback)=>{
  con.query(`update pacientemedico set id_edosol=3 where cedula_med='${Cedula}' and curp_pacien='${CurpForm}';`, (error,declina)=>{
   if(error){
      console.error('No mami', error);
   }else{
     callback(null,declina);
   }
  });
 };


db.buscarDoctor =(CedulaForm,callback)=>{
  con.query(`SELECT * FROM medico natural join persona WHERE cedula_med = '${CedulaForm}'`,(error,fila)=>{
    if(error){
      console.error('Error al buscar en la base de datos', error);
      callback(error, null);
    }
    else{ 
      if(fila.length === 0){
      callback(null, 'no existe');
    }
      else{
        callback(null, fila);
      }
    }
});
};

db.desplegarDoctores=(callback)=>{
  con.query(`SELECT * FROM medico NATURAL JOIN persona NATURAL JOIN consultoriomedico NATURAL JOIN consultorio`,(error,Doctores)=>{
    if(error){
      console.error('Error al buscar Doctores ', error);
      callback(error,null);
    }
    else{
      callback(null,Doctores);
    }
  });
};

db.buscarSolicitud=(curp,callback)=>{
  con.query(`SELECT * FROM pacientemedico WHERE curp_pacien = '${curp}'`,(error,solicitud)=>{
    if(error){
      console.error('Error al buscar la solicitud', error);
      callback(error,null);
    }
    else{
      callback(null,solicitud);
    }
  });
};

//insertar registros a la base

db.registrarPaciente =async (NombreForm,ApellidosForm,EmailForm,EdadForm,TelefonoForm,CurpForm,GeneroForm,
    TipoDiabetes,PassForm, callback) =>{
    const PassEn = await encrypt.encrypt(PassForm);
    con.query(`CALL sp_insertar_paciente(?,?,?,?,?,?,?,?,?)`,
    [NombreForm,ApellidosForm,EmailForm,parseInt(EdadForm),TelefonoForm,GeneroForm,CurpForm,PassEn,parseInt(TipoDiabetes)],
    (error,alta)=>{
      if(error){
        callback(error,null);
      }
      else if(alta){
        callback(null,'Paciente registrado');
      }
    });
};

db.registrarDoctor = async(NombreForm,ApellidosForm,EmailForm,EdadForm,TelefonoForm,
  CedulaForm,sexo,CalleForm,NumeroConsForm,CodigoPostalForm,
  ColoniaForm,DelMunForm,EdoForm,PassForm,callback) =>{
    const PassEn = await encrypt.encrypt(PassForm);
    con.query(`CALL sp_insertar_medico_consultorio(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [NombreForm,ApellidosForm,EmailForm,parseInt(EdadForm),TelefonoForm,CedulaForm,sexo,CalleForm,parseInt(NumeroConsForm),
    CodigoPostalForm,ColoniaForm,DelMunForm,EdoForm,PassEn],
    (error,alta)=>{
      if(error){
        callback(error,null);
      }
      else if(alta){
        callback(null,'Doctor registrado');
      }
    });
  };

db.enlazarDoctoresPacientes = (Curp,CedulaForm,callback)=>{
  con.query(`INSERT INTO pacientemedico VALUES(default,${CedulaForm},'${Curp}',1)`,(error,enlaze)=>{
    if(error){
      callback(error,null);
    }
    else if(enlaze){
      callback(null,'Solicitud de enlaze enviada');
    }
  });
}; 

db.solicitudcita = (FechaForm,HoraForm,Curp,callback)=>{
  
  con.query(`INSERT INTO solicitarcita VALUES(1,${FechaForm},${HoraForm},,${Curp},)`,(error,cita)=>{
    if(error){
      callback(error,null);
    }
    else if(cita){
      callback(null,'Solicitud de Cita enviada');
    }
  });
}; 

//modificar registros
db.reintentoenlazeDoctoresPacientes=(Curp,Cedula,callback)=>{
  con.query(`UPDATE pacientemedico SET cedula_med='${Cedula}', id_edosol=1 WHERE curp_pacien ='${Curp}'`,(error,actualizacion)=>{
    if(error){
      console.log('Error al actualizar la petición: ',error);
      callback(error,null);
    }
    else{
      console.log('actualizacion realizada');
      callback(null,actualizacion);
    }
  });
}
//eliminar registros
module.exports= db;
