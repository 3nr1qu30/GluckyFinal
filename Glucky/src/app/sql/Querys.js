const mysql=require('mysql2');
const encrypt = require('../helpers/EncriptarContraseñas');
var con;

function connect(){
    con=mysql.createConnection({
        host: "localhost",
        port: "3308",
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
  con.query(`SELECT * FROM paciente natural join persona natural join tipodiabetes WHERE curp_pacien = '${CurpForm}'`,(error,fila)=>{
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

db.mostrarDatosDoctorPaciente = (CurpForm, callback)=> {
  con.query(`SELECT paciente.curp_pacien, persona.nom_pers, persona.apellido_pers, persona.email_pers tipodiabetes.nomtipdiabts FROM paciente natural join persona natural join tipodiabetes WHERE curp_pacien = '${CurpForm}'`,(error,fila)=>{
    if(error){
      callback(error, null);
    } else {
      if (fila) {
        callback(null, fila);
      }
    }
  });
}

db.verPeticionesDoctor = (Cedula,callback)=>{
  con.query(`SELECT * FROM pacientemedico natural join paciente natural join persona natural join tipodiabetes n WHERE cedula_med  = '${Cedula}' AND id_edosol = 1`, (error,peticiones)=>{
   if(error){
      console.error('No hay solicitudes', error);
   }else{
     callback(null,peticiones);
   }
  });
 };


db.verAlimentos = (callback)=>{
  con.query(`SELECT * FROM ingrediente`, (error,ver)=>{
   if(error){
      console.error('No hay alimentos', error);
   }else{
     callback(null,ver);
   }
  });
 };


 db.verListaPacientes = (Cedula,callback)=>{
  con.query(`SELECT * FROM vdoctorpaciente where cedula_med ='${Cedula}'`, (error,ver)=>{
   if(error){
      console.error('No hay alimentos', error);
   }else{
     callback(null,ver);
   }
  });
 };


 
 db.verPacienteIndividual = (Cedula,CURPform,callback)=>{
  con.query(`SELECT * FROM vdoctorpaciente where cedula_med ='${Cedula}' AND curp_pacien = '${CURPform}'`, (error,ver)=>{
   if(error){
      console.error('No existe', error);
   }else{
     callback(null,ver);
   }
  });
 };

 db.verCitasPacienteIndividual = (CURPform,callback)=>{
  con.query(`SELECT * FROM citamedica where curp_pacien ='${CURPform}'`, (error2,citasver)=>{
   if(error2){
      console.error('No existe', error2);
   }else{
     callback(null,citasver);
   }
  });
 };

 db.verMedicamentos = (callback)=>{
  con.query(`SELECT * FROM medicamento`, (error,ver)=>{
   if(error){
      console.error('No hay medicamentos', error);
   }else{
     callback(null,ver);
   }
  });
 };

 

 db.PeticionesCita = (Cedula,callback)=>{
  con.query(`SELECT * FROM solicitarcita natural join paciente natural join persona natural join consultoriomedico WHERE cedula_med  = '${Cedula}' AND id_edosol = 1`, (error,peticiones)=>{
   if(error){
      console.error('No hay solicitudes', error);
   }else{
     callback(null,peticiones);
   }
  });
 };

 db.PeticionesCitaGenerales = (Cedula,callback)=>{
  con.query(`SELECT * FROM solicitarcita natural join paciente natural join persona natural join consultoriomedico WHERE cedula_med  = '${Cedula}' AND id_edosol = 2`, (error,aceptas)=>{
    if(error){
      console.error('No hay solicitudes', error);
   }else{
     callback(null,aceptas);
   }
  });
 }


 db.aceptarPeticiones = (Cedula,CurpForm,callback)=>{
  con.query(`update pacientemedico set id_edosol=2 where cedula_med='${Cedula}' and curp_pacien='${CurpForm}';`, (error,acepta)=>{
   if(error){
      console.error('No mami', error);
   }else{
     callback(null,acepta);
   }
  });
 };

db.aceptarcita = (IdCita,IdConsmed,callback)=>{
  con.query(`update solicitarcita set id_edosol=2 where id_solcita='${IdCita}' and id_consmed='${IdConsmed}';`, (error,acepta)=>{
   if(error){
      console.error('No mami', error);
   }else{
     callback(null,acepta);
   }
  });
 }; 

 db.declinarcita = (IdCita,IdConsmed,callback)=>{
  con.query(`update solicitarcita set id_edosol=3 where id_solcita='${IdCita}' and id_consmed='${IdConsmed}';`, (error,declina)=>{
   if(error){
      console.error('No mami', error);
   }else{
     callback(null,declina);
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
      callback('Error al buscar doctores en la base de datos', null);
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

db.solicitudAceptadaDoctor=(curp,callback)=>{
  con.query(`SELECT * FROM persona NATURAL JOIN medico NATURAL JOIN consultorio WHERE cedula_med = (select cedula_med from pacientemedico where curp_pacien= '${curp}'and id_edosol =2)`,(error,solicitud)=>{
    if(error){
      console.error('Error al buscar la solicitud', error);
      callback(error,null);
    }
    else{
      callback(null,solicitud);
    }
  });
};

db.buscarDatosmedicos=(curp,callback)=>{
  con.query(`SELECT * FROM datosmedicos where curp_pacien='${curp}'`,(error,datosmedicos)=>{
  if(error){
    console.error('Error al buscar los datos glucosa y presión', error);
    callback(error,null);
  }
  else{
    callback(null,datosmedicos);
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
        console.error(error);
        callback('error al registrar',null);
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

db.solicitudcita=(FechaForm,HoraForm,Curp,callback)=>{
  con.query(`select id_consmed from pacientemedico natural join consultoriomedico where curp_pacien='${Curp}'`,(error,consultorio)=>{
    if(error){
      console.log(error);
    }
    else if(consultorio){
      let consul = parseInt(consultorio[0].id_consmed);
      con.query(`INSERT INTO solicitarcita VALUES(default, '${FechaForm}', '${HoraForm}', 1, '${Curp}', ${consul})`, (error, cita) => {
        if(error){
          callback(error,null);
        }
        else if(cita){
          callback(null,'Solicitud de Cita enviada');
        }
      });
    }
  });
};

db.agregarCitaPaciente=(FechaForm,HoraForm,CURPform,Cedula,callback)=>{
  con.query(`select id_consmed from consultoriomedico where cedula_med='${Cedula}'`,(error,consultorio)=>{
    if(error){
      console.log(error);
    }
    else if(consultorio){
      let consul = parseInt(consultorio[0].id_consmed);
      con.query(`INSERT INTO citamedica VALUES(default, '${FechaForm}', '${HoraForm}', '${consul}', '${CURPform}')`, (error, cita) => {
        if(error){
          callback(error,null);
        }
        else if(cita){
          callback(null,'Cita oficial enviada');
        }
      });
    }
  });
};

db.Alimentos = (alimentoNombre,alimentoDescripcion,callback)=>{
con.query(`INSERT INTO ingrediente VALUES (default, '${alimentoNombre}', '${alimentoDescripcion}')`, (error, alimento) => {
  if(error){
    callback(error,null);
  }
  else if(alimento){
    callback(null,'Alimento registrado');
  }
});
};

db.Medicamentos = (medicamentoNombre,callback)=>{
  con.query(`INSERT INTO medicamento VALUES (default, '${medicamentoNombre}')`, (error, medicamento) => {
    if(error){
      callback(error,null);
    }
    else if(medicamento){
      callback(null,'Medicamento registrado');
    }
  });
};

db.editarMedicamento=(idMed,nomMed,callback)=>{
  con.query(`UPDATE medicamento SET nom_medic='${nomMed}' WHERE id_medic ='${idMed}'`,(error,actualizacion)=>{
    if(error){
      console.log('Error al modificar ',error);
      callback(error,null);
    }
    else{
      console.log('Modificación de medicamento realizada');
      callback(null,actualizacion);
    }
  });
}


db.enviarRegistros=(glucosa,sistolica,diastolica,hora,fecha,curp,medicion,callback)=>{
  con.query(`INSERT INTO datosmedicos VALUES(default,'${glucosa}','${sistolica}','${diastolica}','${fecha}','${hora}',${medicion},'${curp}')`,(error,registro)=>{
    if(error){
      console.log('Error al insertar meición: ',error);
      callback(error,null);
    } else if(registro){
      callback(null,'Niveles registrados');
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

db.editarAlimento=(idIngred,NomForm,DescForm,callback)=>{
  con.query(`UPDATE ingrediente SET nom_ingred='${NomForm}', desc_ingred='${DescForm}' WHERE id_ingred ='${idIngred}'`,(error,actualizacion)=>{
    if(error){
      console.log('Error al modificar ',error);
      callback(error,null);
    }
    else{
      console.log('Modificación de alimento realizado');
      callback(null,actualizacion);
    }
  });
}


//eliminar registros
db.eliminarAlimento=(idIngred,callback)=>{
  let idIng = parseInt(idIngred);
  con.query(`DELETE FROM ingrediente WHERE id_ingred='${idIng}'`,(error,elimina)=>{
    if(error){
      console.log('Error al eliminar: ',error);
      callback(error,null);
    }
    else{
      console.log('Alimento eliminado limón');
      callback(null,elimina);
    }
  });
};

db.eliminarCitaPaciente=(curp,callback)=>{
  let idIng = parseInt(idIngred);
  con.query(`DELETE FROM citamedica WHERE curp_pacien='${curp}' and id_cita = "${id_cita}"`,(error,elimina)=>{
    if(error){
      console.log('Error al eliminar: ',error);
      callback(error,null);
    }
    else{
      console.log('Alimento eliminado limón');
      callback(null,elimina);
    }
  });
};

db.eliminarMedicamento=(idMedic,callback)=>{
  let idIng = parseInt(idMedic);
  con.query(`DELETE FROM medicamento WHERE id_medic='${idIng}'`,(error,elimina)=>{
    if(error){
      console.log('Error al eliminar: ',error);
      callback(error,null);
    }
    else{
      console.log('Medicamento eliminado naranja');
      callback(null,elimina);
    }
  });
};




module.exports= db;


