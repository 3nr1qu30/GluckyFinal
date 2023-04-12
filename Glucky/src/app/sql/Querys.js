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
  }

//modificar registros

//eliminar registros
module.exports= db;
