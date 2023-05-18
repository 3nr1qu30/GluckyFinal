const mysql=require('mysql2');
const encrypt = require('../helpers/EncriptarContraseñas');

//const { callback } = require('chart.js/dist/helpers/helpers.core');

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
db.buscarChatPaciente=(curp,callback) => {
  con.query(`SELECT * FROM chat natural join medico natural join persona where curp_pacien='${curp}'`,(error,chat) => {
    if (error){
      callback(error);
    }
    else{
      callback(null,chat);
    }
  });
};

db.buscarChatDoctor=(cedula,callback) => {
  con.query(`SELECT * FROM chat natural join paciente natural join tipodiabetes natural join persona where cedula_med='${cedula}'`,(error,chat) => {
    if (error){
      callback(error);
    }
    else{
      callback(null,chat);
    }
  });
};

db.buscarMensajes=(id_chat,callback) => {
  con.query(`SELECT * FROM mensaje where id_chat = '${id_chat}'`,(error,mensajes) => {
      if (error){
        callback(error);
      }
      else{
        callback(null,mensajes);
      }
    });
};

db.eliminarDatosDietas = (CurpForm,callback)=>{
  con.query(`SELECT * FROM dieta  WHERE curp_pacien = '${CurpForm}'`,(error,iddieta)=>{
    if(iddieta){
      if(iddieta.length !==0){
        for(var i=0; i<iddieta.length; i++){
        const idiet = parseInt(iddieta[i].id_dieta);
        con.query(`DELETE FROM dietaingrediente WHERE id_dieta = '${idiet}'`,(error,eldieting)=>{
         if(eldieting){
           con.query(`DELETE FROM dieta WHERE id_dieta = '${idiet}'`,(error,eldieta)=>{
             if(eldieta){
               console.log(iddieta)
               callback(null,eldieting,eldieta);
             } else {
               callback(error,null);
             } 
           });
        } else {
          callback(error,null);
        }
      });
    }
      } else {
        con.query(`DELETE FROM dieta WHERE curp_pacien = '${CurpForm}'`,(error,eldieta)=>{
          if(eldieta){
            callback(null,eldieta);
         } else {
           callback(error,null);
         } 
      });
    }
      } else {
        callback(error,null);
      }
  });
};

db.eliminarDatosRecetas = (CurpForm,callback)=>{
  con.query(`SELECT * FROM receta  WHERE curp_pacien = '${CurpForm}'`,(error,idreceta)=>{
    if(idreceta){
      if(idreceta.length !==0){
        for(var i=0; i<idreceta.length; i++){
        const idrec = parseInt(idreceta[i].id_receta);
        con.query(`DELETE FROM recetamedicamento WHERE id_receta = '${idrec}'`,(error,elrecmed)=>{
         if(elrecmed){
           con.query(`DELETE FROM receta WHERE id_receta = '${idrec}'`,(error,elrec)=>{
             if(elrec){
               console.log(idreceta)
               callback(null,elrecmed,elrec);
             } else {
               callback(error,null);
             } 
           });
        } else {
          callback(error,null);
        }
      });
    }
      } else {
        con.query(`DELETE FROM receta WHERE curp_pacien = '${CurpForm}'`,(error,elrec)=>{
         if(elrec){
           callback(null,elrec);
        } else {
          callback(error,null);
        } 
      });
    }
      } else {
        callback(error,null);
      }
  });
};


db.DesvincularDoctor = (CurpForm,callback)=>{
  con.query(`UPDATE pacientemedico SET id_edosol = 3 WHERE curp_pacien = '${CurpForm}'`,(error,desv)=>{
  if(desv){
    con.query(`DELETE FROM chat WHERE curp_pacien = '${CurpForm}'`,(error,elchat)=>{
      if(elchat){
        con.query(`DELETE FROM citamedica WHERE curp_pacien = '${CurpForm}'`,(error,elcitam)=>{
          if(elcitam){
                con.query(`DELETE FROM solicitarcita  WHERE curp_pacien = '${CurpForm}'`,(error,elsolcita)=>{
                  if(elsolcita){
                    callback(null, desv, elchat, elcitam, elsolcita);
              } else {
                callback(error,null);
              }
            }); 
          } else {
            callback(error,null);
          }
        });   
      } else {
        callback(error,null);
      }
    });
  } else { 
    console.log('Error al desvincular', error);
    callback(error,null);
  }
  });
 };
 

db.VerDatoDoctor = (cedula,callback)=>{
con.query(`SELECT * FROM persona NATURAL JOIN consultoriomedico NATURAL JOIN consultorio NATURAL JOIN medico Where cedula_med = '${cedula}'`,(error,datos)=>{
  if(error){
    console.error('No existe pero se supone que si debia existir jeje', error);
    callback(error, null);
  }
  else{
    callback(null, datos);
  }
});
};

db.ActualizarContraPaciente = async(curp,NewPass, callback)=>{
  const PassEn = await encrypt.encrypt(NewPass);
  con.query(`UPDATE paciente SET pass_pacien = '${PassEn}' WHERE curp_pacien = '${curp}'`,(error,cambio)=>{
   if(error){
     callback(error,null);
   }else if(cambio){
    callback(null,cambio);
   }
  });
 };

 db.ActualizarContraDoctor = async(cedula,NewPass, callback)=>{
  const PassEn = await encrypt.encrypt(NewPass);
  con.query(`UPDATE medico SET pass_med = '${PassEn}' WHERE cedula_med = '${cedula}'`,(error,cambio)=>{
   if(error){
     callback(error,null);
   }else if(cambio){
    callback(null,cambio);
   }
  });
 };

db.VerDatoPaciente = (curp,callback)=>{
  con.query(`SELECT * FROM persona NATURAL JOIN pacientemedico NATURAL JOIN tipodiabetes NATURAL JOIN paciente NATURAL JOIN consultorio NATURAL JOIN consultoriomedico
   Where curp_pacien = '${curp}'`,(error,datos)=>{
    if(error){
      console.error('No existe pero se supone que si debia existir jeje', error);
      callback(error, null);
    }
    else{
      callback(null, datos);
    }
  });
  };

  db.datosPaciente= (curp,callback) => {
    con.query(`SELECT * FROM persona NATURAL JOIN paciente WHERE curp_pacien= '${curp}'`,(error,datos)=>{
      if(error){
            console.error(error);
            callback(error, null);
          }
      else if(datos){
        callback(null, datos);
      }
    })
  };

  db.DatoPacienteDoctor = (curp,callback)=>{
    con.query(`SELECT * FROM medico NATURAL JOIN persona NATURAL JOIN pacientemedico NATURAL JOIN consultoriomedico NATURAL JOIN consultorio Where curp_pacien = '${curp}'`,(error,datos)=>{
      if(error){
        console.error('No existe pero se supone que si debia existir jeje', error);
        callback(error, null);
      }
      else{
        callback(null, datos);
      }
    });
    };

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
      console.error('Error al ver las solicitudes', error);
   }else{
     callback(null,peticiones);
   }
  });
 };




 db.verListaPacientes = (Cedula,callback)=>{
  con.query(`select * from vdoctorpaciente natural join pacientemedico where cedula_med='${Cedula}' and id_edosol = '2'`, (error,ver)=>{
   if(error){
      console.error('No hay pacientes', error);
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


 db.PeticionesCita = (Cedula,callback)=>{
  con.query(`SELECT * FROM solicitarcita natural join paciente natural join persona natural join consultoriomedico WHERE cedula_med  = '${Cedula}' AND id_edosol = 1`, (error,peticiones)=>{
   if(error){
      console.error('No hay solicitudes', error);
   }else{
     callback(null,peticiones);
   }
  });
 };

 db.PeticionesCitaPaciente = (Curp,callback)=>{
  con.query(`SELECT * FROM solicitarcita WHERE curp_pacien  = '${Curp}' AND id_edosol = 1`, (error,peticiones)=>{
   if(error){
      console.error('Hay error al jalar las solicitudes', error);
   }else{
     callback(null,peticiones);
   }
  });
 };

 db.PeticionesCitaPacienteDeclinadas = (Curp,callback)=>{
  con.query(`SELECT * FROM solicitarcita WHERE curp_pacien  = '${Curp}' AND id_edosol = 3`, (error,peticiones)=>{
   if(error){
      console.error('Hay error al jalar las solicitudes', error);
   }else{
     callback(null,peticiones);
   }
  });
 };

 db.PeticionesCitaGenerales = (Cedula,callback)=>{
  con.query(`SELECT * FROM citamedica natural join paciente natural join persona natural join consultoriomedico WHERE cedula_med  = '${Cedula}'`, (error,aceptas)=>{
    if(error){
      console.error('Hubo un error al ver las citas generales', error);
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


 db.declinarcita = (IdCita,IdConsmed,callback)=>{
  con.query(`update solicitarcita set id_edosol=3 where id_solcita='${IdCita}' and id_consmed='${IdConsmed}';`, (error,declina)=>{
   if(error){
      console.error('No mami jaja no puedes porque eres tonta jaja', error);
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

db.verAlimentos = (callback)=>{
  con.query(`SELECT * FROM ingrediente`, (error,ver)=>{
   if(error){
      console.error('No hay alimentos', error);
   }else{
     callback(null,ver);
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


db.verDietaBase=(curp_pacien,callback)=>{
  con.query(`select * from dieta where curp_pacien ='${curp_pacien}';`,(error,registro)=>{
    if(error){
      console.log('Error al ver dieta: ',error);
      callback(error,null);
    } else if(registro){
      callback(null,registro);
    }
  });
};

db.verTratamientoBase=(curp_pacien,callback)=>{
  con.query(`select * from receta where curp_pacien ='${curp_pacien}';`,(error,registro)=>{
    if(error){
      console.log('Error al ver receta: ',error);
      callback(error,null);
    } else if(registro){
      callback(null,registro);
    }
  });
};

db.verIngredientesBaseSele=(id_dieta,callback)=>{
  con.query(`select * from dietaingrediente  natural join ingrediente where id_dieta = '${id_dieta}';`,(error,vercosas)=>{
    if(error){
      console.log('Error al ver dieta e ingrediente: ',error);
      callback(error,null);
    } else if(vercosas){
      callback(null,vercosas);
    }
  });
};

db.verMedicamentosBaseSele=(id_receta,callback)=>{
  con.query(`select * from recetamedicamento natural join medicamento where id_receta = '${id_receta}';`,(error,vercosas)=>{
    if(error){
      console.log('Error al ver dieta y medicamento: ',error);
      callback(error,null);
    } else if(vercosas){
      callback(null,vercosas);
    }
  });
};

db.verDietasCompletas=(curp_pacien,cedula_med,callback)=>{
  con.query(`select * from dieta natural join dietaingrediente natural join ingrediente 
  where curp_pacien = '${curp_pacien}' and cedula_med = '${cedula_med}';`,(error,vercosas)=>{
    if(error){
      console.log('Error al ver dieta e ingrediente: ',error);
      callback(error,null);
    } else if(vercosas){
      callback(null,vercosas);
    }
  });
};

db.verTratamientosCompletas=(curp_pacien,cedula_med,callback)=>{
  con.query(`select * from receta natural join recetamedicamento natural join medicamento 
  where curp_pacien = '${curp_pacien}' and cedula_med = '${cedula_med}';`,(error,vercosas)=>{
    if(error){
      console.log('Error al ver receta y medicamento: ',error);
      callback(error,null);
    } else if(vercosas){
      callback(null,vercosas);
    }
  });
};

db.verDietasCompletas2=(curp_pacien,callback)=>{
  con.query(`select * from dieta natural join dietaingrediente natural join ingrediente 
  where curp_pacien = '${curp_pacien}'`,(error,vercosas)=>{
    if(error){
      console.log('Error al ver dieta e ingrediente: ',error);
      callback(error,null);
    } else if(vercosas){
      callback(null,vercosas);
    }
  });
};

db.verTratamientosCompletas2=(curp_pacien,callback)=>{
  con.query(`select * from receta natural join recetamedicamento natural join medicamento 
  where curp_pacien = '${curp_pacien}';`,(error,vercosas)=>{
    if(error){
      console.log('Error al ver receta y medicamento: ',error);
      callback(error,null);
    } else if(vercosas){
      callback(null,vercosas);
    }
  });
};

db.verDietaIndividual=(curp_pacien,cedula_med,id_dieta,callback)=>{
  con.query(`select * from dieta 
  where curp_pacien = '${curp_pacien}' and cedula_med = '${cedula_med}' and id_dieta = '${id_dieta}';`,(error,vercosas)=>{
    if(error){
      console.log('Error al ver dieta individual: ',error);
      callback(error,null);
    } else if(vercosas){
      callback(null,vercosas);
    }
  });
};
//insertar registros a la base

db.agregarMensaje = (IdChat,Emisor,Receptor,Mensaje,Fecha,Hora)=>{
  con.query(`INSERT INTO mensaje VALUES(default,${IdChat},'${Emisor}','${Receptor}','${Mensaje}','${Fecha}','${Hora}')`,(error,mensaje)=>{
    if(error){
      console.log('Error al agregar mensaje',error);
    }
    else{
      console.log('Mensaje agregado');
    }
  });
}

db.crearChat = (Cedula,CurpForm,fechaSQL,callback)=>{
  con.query(`INSERT INTO chat VALUES(default,'${CurpForm}','${Cedula}','${fechaSQL}')`,(error,chat)=>{
    if (error){
      callback(error,null);
    }
    else{
      callback(null,chat);
    }
  });
};

db.ActualizarDatoDoctor = async (CedulaForm,NombreForm,ApellidosForm,EmailForm,EdadForm,GeneroForm,TelForm,CalleForm,NumeroForm,CPForm,ColForm,
DelForm,EdoForm,callback) =>{
  con.query(`CALL sp_actualizar_datos_medico(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [CedulaForm,NombreForm,ApellidosForm,EmailForm,EdadForm,GeneroForm,TelForm,CalleForm,NumeroForm,CPForm,ColForm,DelForm,EdoForm],
    (error,actualizacion)=>{
      if(error){
        callback(error,null);
      }
      else if(actualizacion){
        callback(null,NombreForm);
      }
    });
};



db.ActualizarDatoPaciente = async (CurpForm,NombreForm,ApellidosForm,EmailForm,
                                   EdadForm,GeneroForm,TelForm,TDiabForm,callback) =>{
  con.query(`CALL sp_actualizar_datos_paciente(?,?,?,?,?,?,?,?)`,
    [CurpForm,NombreForm,ApellidosForm,EmailForm,EdadForm,GeneroForm,TelForm,TDiabForm],
    (error,actualizacion)=>{
      if(error){
        callback(error,null);
      }
      else if(actualizacion){
        callback(null,NombreForm);
      }
    });
};



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
      callback(null,'Solicitud de enlace enviada');
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


db.enviarRegistros=(glucosa,sistolica,diastolica,hora,fecha,curp,medicion,Estado,callback)=>{
  con.query(`CALL insertarDatosMedicos ('${glucosa}','${sistolica}','${diastolica}','${fecha}','${hora}',${medicion},'${curp}','${Estado}')`,(error,registro)=>{
    if(error){
      console.log('Error al insertar meición: ',error);
      callback(error,null);
    } else if(registro){
      callback(null,'Niveles registrados');
    }
  });
};


db.enviarDietaBase = (curp_pacien, cedula_med, date_dieta, callback) => {
  con.query(`insert into dieta (id_dieta,curp_pacien,cedula_med,date_dieta) 
             values (default,'${curp_pacien}',${cedula_med},'${date_dieta}')`, (error, resultado) => {
    if (error) {
      console.log('Error al insertar dieta: ', error);
      callback(error, null);
    } else {
      con.query("SELECT LAST_INSERT_ID() as last_id", (error, resultado) => {
        if (error) {
          console.log('Error al obtener el último id generado: ', error);
          callback(error, null);
        } else if (resultado.length > 0) {
          const last_id = resultado[0].last_id;
          console.log('El último id generado es: ', last_id);
          callback(null, last_id);
        } else {
          console.log('No se encontró ningún último id generado.');
          callback(null, null);
        }
      });
    }
  });
};

db.enviarTratamientoBase = (curp_pacien, cedula_med, date_receta,id_cons ,callback) => {
  con.query(`insert into receta (id_receta,curp_pacien,cedula_med,date_receta,id_cons) 
             values (default,'${curp_pacien}',${cedula_med},'${date_receta}','${id_cons}')`, (error, resultado) => {
    if (error) {
      console.log('Error al insertar tratamiento: ', error);
      callback(error, null);
    } else {
      con.query("SELECT LAST_INSERT_ID() as last_id", (error, resultado) => {
        if (error) {
          console.log('Error al obtener el último id generado: ', error);
          callback(error, null);
        } else if (resultado.length > 0) {
          const last_id = resultado[0].last_id;
          console.log('El último id generado es: ', last_id);
          callback(null, last_id);
        } else {
          console.log('No se encontró ningún último id generado.');
          callback(null, null);
        }
      });
    }
  });
};

db.enviarDietaBaseIngrediente=(id_dieta,id_ingred,callback)=>{
  con.query(`insert into dietaingrediente (id_dietingred, id_dieta, id_ingred)
  VALUES (default, '${id_dieta}', '${id_ingred}');`,(error,registro)=>{
    if(error){
      console.log('Error al insertar elemento: ',error);
      callback(error,null);
    } else if(registro){
      callback(null,'Elemento registrado');
    }
  });
};

db.enviarTratamientoBaseMedicamento=(id_receta,id_medic,frec_recmed,present_recmed,callback)=>{
  con.query(`insert into recetamedicamento (id_recmed,id_receta,id_medic,frec_recmed,present_recmed)
  VALUES (default, '${id_receta}', '${id_medic}', '${frec_recmed}', '${present_recmed}');`,(error,registro)=>{
    if(error){
      console.log('Error al insertar elemento: ',error);
      callback(error,null);
    } else if(registro){
      callback(null,'Elemento registrado');
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


db.editarCitaPaciente=(curp_pacien,id_cita,date_cita,hour_cita,callback)=>{
  con.query(`update citamedica set date_cita = '${date_cita}', hour_cita = '${hour_cita}', curp_pacien = '${curp_pacien}' where curp_pacien = '${curp_pacien}' and id_cita =  '${id_cita}'`,(error,actualizacion)=>{
    if(error){
      console.log('Error al modificar la cita',error);
      callback(error,null);
    }
    else{
      console.log('Modificación de cita realizada');
      callback(null,actualizacion);
    }
  });
}

//eliminar registros

db.eliminaSolicitudesDen=(idCita,curpPacien,callback)=>{
  let idCitas = parseInt(idCita);
  con.query(`delete from solicitarcita where curp_pacien = '${curpPacien}' and id_solcita = '${idCitas}'  and id_edosol = 3;`,(error,elimina)=>{
    if(error){
      console.log('Error al eliminar la solicitud de cita: ',error);
      callback(error,null);
    }
    else{
      console.log('Solicitud eliminada limón');
      callback(null,elimina);
    }
  });
};

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

db.eliminarCitaPaciente=(id_citaEl,curpFormPac,callback)=>{
  let id_cita = parseInt(id_citaEl);
  con.query(`DELETE FROM citamedica WHERE curp_pacien='${curpFormPac}' and id_cita = "${id_cita}"`,(error,elimina)=>{
    if(error){
      console.log('Error al eliminar: ',error);
      callback(error,null);
    }
    else{
      console.log('Cita eliminada');
      callback(null,elimina);
    }
  });
};

db.finalizarCita= (IdCita,CurpPacien,callback)=>{
  let id_cita = parseInt(IdCita);
  con.query(`Delete from citamedica where curp_pacien ='${CurpPacien}' and id_cita = '${id_cita}'`, (error,finaliza)=>{
   if(error){
      console.error('Error al finalizar la cita', error);
   }else{
     callback(null,finaliza);
   }
  });
 };



db.eliminarIngrediente=(id_dietingred,id_dieta,callback)=>{
  con.query(`delete from dietaingrediente where id_dietingred = '${id_dietingred}' and id_dieta = '${id_dieta}';`,(error,elimina)=>{
    if(error){
      console.log('Error al eliminar: ',error);
      callback(error,null);
    }
    else{
      console.log('ingrediente eliminado naranja');
      callback(null,elimina);
    }
  });
};

db.eliminarMedicamento=(id_recmed,id_receta,callback)=>{
  con.query(`delete from recetamedicamento where id_recmed = '${id_recmed}' and id_receta = '${id_receta}';`,(error,elimina)=>{
    if(error){
      console.log('Error al eliminar: ',error);
      callback(error,null);
    }
    else{
      console.log('medicamento eliminado verde');
      callback(null,elimina);
    }
  });
};

db.eliminarChat=(CurpForm,callback)=>{
  con.query(`delete from chat where curp_pacien ='${CurpForm}';`,(error,elimina)=>{
    if(error){
      console.log('Error al eliminar: ',error);
      callback(error,null);
    }
    else{
      callback(null,elimina);
    }
  });
};

db.eliminarDieta = (id_dieta, callback) => {
  con.query(`delete from dietaingrediente where id_dieta = '${id_dieta}';`, (error, vercosas) => {
    if (error) {
      console.log('Error al eliminar los ingredientes de una dieta individual: ', error);
      callback(error, null);
    } else if (vercosas) {
      con.query(`delete from dieta where id_dieta = '${id_dieta}';`, (error2, vercosas2) => {
        if (error2) {
          console.log('Error al eliminar dieta individual: ', error2);
          callback(error2, null);
        } else if (vercosas2) {
          callback(null, vercosas2);
        }
      });
    }
  });
};


db.eliminarTratamiento = (id_receta, callback) => {
  con.query(`delete from recetamedicamento where id_receta = '${id_receta}';`, (error, vercosas) => {
    if (error) {
      console.log('Error al eliminar los ingredientes de un tratamiento individual: ', error);
      callback(error, null);
    } else if (vercosas) {
      con.query(`delete from receta where id_receta = '${id_receta}';`, (error2, vercosas2) => {
        if (error2) {
          console.log('Error al eliminar receta individual: ', error2);
          callback(error2, null);
        } else if (vercosas2) {
          callback(null, vercosas2);
        }
      });
    }
  });
};




//modificar y eliminar registros osea querys anidados jaja el que borre esto lo asesino
db.aceptarcita = (date_cita,hour_cita,id_consmed,curp_pacien,id_solcita,callback)=>{
  con.query(`insert into citamedica (id_cita, date_cita, hour_cita, id_consmed, curp_pacien)
  VALUES (default, '${date_cita}', '${hour_cita}', ${id_consmed}, '${curp_pacien}');`, (error,acepta)=>{
   if(error){
      console.error('No se pudo agregar la cita a la tabla citas', error);
   }else if (acepta){
    con.query(`delete from solicitarcita where id_solcita = '${id_solcita}' and curp_pacien = '${curp_pacien}';`, (error,acepta)=>{
     if(error){
        console.error('No se pudo eliminar esta solicitud jaja amiga', error);
     }else{
       callback(null,acepta);
     }
    });
   }
  });
 }; 

 module.exports= db;


