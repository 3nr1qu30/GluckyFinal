const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const sexoSelect = document.querySelector('select[name="sexo"]');

const expReg = {
    nombre: /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)*$/,
    apellidos: /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)?(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    edad: /^([1-9]|[1-9][0-9])$/,
    telefono: /^\d{10}$/,
    cedula: /^\d[0-9]{7}$/,
    calle: /^[a-zA-Z0-9\s-.,#áéíóúÁÉÍÓÚñÑ]+$/,
    numeroConsultorio: /^\d{1,3}$/,
    cp: /^\d{5}$/,
    colonia: /^[a-zA-Z0-9\s#áéíóúÁÉÍÓÚñÑ.,-]+$/,
    delomuni: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]{2,100}$/,
    estado: /^(Aguascalientes|Baja California|Baja California Sur|Campeche|Chiapas|Chihuahua|Coahuila|Colima|Durango|Guanajuato|Guerrero|Hidalgo|Jalisco|México|Michoacán|Morelos|Nayarit|Nuevo León|Oaxaca|Puebla|Querétaro|Quintana Roo|San Luis Potosí|Sinaloa|Sonora|Tabasco|Tamaulipas|Tlaxcala|Veracruz|Yucatán|Zacatecas|Ciudad de México|CDMX)$/i,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.#])[A-Za-z\d$@$!%*?&.#]{8,35}$/
}

const campos = {
    nombre: false,
    apellidos: false,
    email: false,
    edad: false,
    telefono: false,
    cedula: false,
    sexo: false,
    calle: false,
    numeroConsultorio: false,
    cp: false,
    colonia: false,
    delomuni: false,
    estado: false,
    password: false 
} 

function actualizarError() {
    const grupo = document.querySelector('#grupo_sexo');
    const error = grupo.querySelector('.form_input_error');
    if (this.value !== '') {
      error.classList.remove('form_input_error-activo');
      campos.sexo = true;
      document.querySelector('#grupo_enviar .form_input_error').classList.remove('form_input_error-activo');
  } else {
      error.classList.add('form_input_error-activo');
      campos.sexo = false;
    }
  }
  
  sexoSelect.addEventListener('change', actualizarError);

const validarFormulario = (e) => {
    switch (e.target.name){
        case "NombreForm":
            if(expReg.nombre.test(e.target.value)){
                document.querySelector('#grupo_nombre .form_input_error').classList.remove('form_input_error-activo');
                campos.nombre = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_nombre .form_input_error').classList.remove('form_input_error-activo');
                campos.nombre = false;                
            } else {
                document.querySelector('#grupo_nombre .form_input_error').classList.add('form_input_error-activo');
                campos.nombre = false;                
            }
            break;
        case "ApellidosForm":
            if(expReg.apellidos.test(e.target.value)){
                document.querySelector('#grupo_apellidos .form_input_error').classList.remove('form_input_error-activo');
                campos.apellidos = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_apellidos .form_input_error').classList.remove('form_input_error-activo');
                campos.apellidos = false;                
            } else {
                document.querySelector('#grupo_apellidos .form_input_error').classList.add('form_input_error-activo');
                campos.apellidos = false;                
            }
            break;
        case "EmailForm":
            if(expReg.email.test(e.target.value)){
                document.querySelector('#grupo_email .form_input_error').classList.remove('form_input_error-activo');
                campos.email = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_email .form_input_error').classList.remove('form_input_error-activo');
                campos.email = false;                
            } else {
                document.querySelector('#grupo_email .form_input_error').classList.add('form_input_error-activo');
                campos.email = false;                
            }
            break;
        case "EdadForm":
            if(expReg.edad.test(e.target.value)){
                document.querySelector('#grupo_edad .form_input_error').classList.remove('form_input_error-activo');
                campos.edad = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_edad .form_input_error').classList.remove('form_input_error-activo');
                campos.edad = false;                
            } else {
                document.querySelector('#grupo_edad .form_input_error').classList.add('form_input_error-activo');
                campos.edad = false;                
            }
            break;
        case "TelefonoForm":
            if(expReg.telefono.test(e.target.value)){
                document.querySelector('#grupo_telefono .form_input_error').classList.remove('form_input_error-activo');
                campos.telefono = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_telefono .form_input_error').classList.remove('form_input_error-activo');
                campos.telefono = false;                
            } else {
                document.querySelector('#grupo_telefono .form_input_error').classList.add('form_input_error-activo');
                campos.telefono = false;                
            }
            break;
        case "CedulaForm":
            if(expReg.cedula.test(e.target.value)){
                document.querySelector('#grupo_cedula .form_input_error').classList.remove('form_input_error-activo');
                campos.cedula = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_cedula .form_input_error').classList.remove('form_input_error-activo');
                campos.cedula = false;                
            } else {
                document.querySelector('#grupo_cedula .form_input_error').classList.add('form_input_error-activo');
                campos.cedula = false;                
            }
            break;
        case "CalleForm":
            if(expReg.calle.test(e.target.value)){
                document.querySelector('#grupo_calle .form_input_error').classList.remove('form_input_error-activo');
                campos.calle = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_calle .form_input_error').classList.remove('form_input_error-activo');
                campos.calle = false;                
            } else {
                document.querySelector('#grupo_calle .form_input_error').classList.add('form_input_error-activo');
                campos.calle = false;                
            }
            break;
        case "NumeroConsForm":
            if(expReg.numeroConsultorio.test(e.target.value)){
                document.querySelector('#grupo_numeroConsultorio .form_input_error').classList.remove('form_input_error-activo');
                campos.numeroConsultorio = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_numeroConsultorio .form_input_error').classList.remove('form_input_error-activo');
                campos.numeroConsultorio = false;                
            } else {
                document.querySelector('#grupo_numeroConsultorio .form_input_error').classList.add('form_input_error-activo');
                campos.numeroConsultorio = false;                
            }
            break;
        case "CodigoPostalForm":
            if(expReg.cp.test(e.target.value)){
                document.querySelector('#grupo_cp .form_input_error').classList.remove('form_input_error-activo');
                campos.cp = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_cp .form_input_error').classList.remove('form_input_error-activo');
                campos.cp = false;                
            } else {
                document.querySelector('#grupo_cp .form_input_error').classList.add('form_input_error-activo');
                campos.cp = false;                
            }
            break;
        case "ColoniaForm":
            if(expReg.colonia.test(e.target.value)){
                document.querySelector('#grupo_colonia .form_input_error').classList.remove('form_input_error-activo');
                campos.colonia = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_colonia .form_input_error').classList.remove('form_input_error-activo');
                campos.colonia = false;                
            } else {
                document.querySelector('#grupo_colonia .form_input_error').classList.add('form_input_error-activo');
                campos.colonia = false;                
            }
            break;
        case "DelMunForm":
            if(expReg.delomuni.test(e.target.value)){
                document.querySelector('#grupo_delomuni .form_input_error').classList.remove('form_input_error-activo');
                campos.delomuni = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_delomuni .form_input_error').classList.remove('form_input_error-activo');
                campos.delomuni = false;                
            } else {
                document.querySelector('#grupo_delomuni .form_input_error').classList.add('form_input_error-activo');
                campos.delomuni = false;                
            }
            break;
        case "EdoForm":
            if(expReg.estado.test(e.target.value)){
                document.querySelector('#grupo_estado .form_input_error').classList.remove('form_input_error-activo');
                campos.estado = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_estado .form_input_error').classList.remove('form_input_error-activo');
                campos.estado = false;                
            } else {
                document.querySelector('#grupo_estado .form_input_error').classList.add('form_input_error-activo');
                campos.estado = false;                
            }
            break;
        case "PassForm":
            if(expReg.password.test(e.target.value)){
                document.querySelector('#grupo_password .form_input_error').classList.remove('form_input_error-activo');
                campos.password = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_password .form_input_error').classList.remove('form_input_error-activo');
                campos.password = false;                
            } else {
                document.querySelector('#grupo_password .form_input_error').classList.add('form_input_error-activo');
                campos.password = false;                
            }
            break;
    }
    if (campos.nombre && campos.apellidos && campos.email && campos.edad && campos.telefono && campos.cedula && campos.calle && campos.numeroConsultorio && campos.cp && campos.colonia && campos.delomuni && campos.estado && campos.password) {
        document.querySelector('#grupo_enviar .form_input_error').classList.remove('form_input_error-activo');
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    if (campos.nombre && campos.apellidos && campos.email && campos.edad && campos.telefono && campos.cedula && campos.calle && campos.numeroConsultorio && campos.cp && campos.colonia && campos.delomuni && campos.estado && campos.password && campos.sexo) {
        console.log(`esta bien`);
} else {
    e.preventDefault();
    document.querySelector('#grupo_enviar .form_input_error').classList.add('form_input_error-activo');    
}
});
