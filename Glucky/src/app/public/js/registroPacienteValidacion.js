const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const tipoDiabetesSelect = document.querySelector('select[name="TipoDiabetes"]'),
generoSelect = document.querySelector('select[name="GeneroForm"]');

var tipodiabetes = document.getElementsByName("TipoDiabetes")[0],
genero = document.getElementsByName("GeneroForm")[0];

const expReg = {
    nombre: /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)*$/,
    apellidos: /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)?(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    edad: /^([1-9][8-9]|[2-9][0-9])$/,
    telefono: /^\d{10}$/,
    curp: /^([A-Z]{4})(\d{6})([A-Z]{7})(\d{1})$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.#])[A-Za-z\d$@$!%*?&.#]{8,35}$/
}

const campos = {
    nombre: false,
    apellidos: false,
    email: false,
    edad: false,
    telefono: false,
    curp: false,
    genero: false,
    tipodiabetes: false,
    password: false 
}

function actualizarError() {
  const grupo = document.querySelector('#grupo_tipodiabetes');
  const error = grupo.querySelector('.form_input_error');
  if (this.value !== '') {
    error.classList.remove('form_input_error-activo');
    campos.tipodiabetes = true;
    document.querySelector('#grupo_enviar .form_input_error').classList.remove('form_input_error-activo');
} else {
    error.classList.add('form_input_error-activo');
    campos.tipodiabetes = false;
  }
}

tipoDiabetesSelect.addEventListener('change', actualizarError);


function actualizarErrorgenero() {
  const grupo = document.querySelector('#grupo_genero');
  const error = grupo.querySelector('.form_input_error');
  if (this.value !== '') {
    error.classList.remove('form_input_error-activo');
    campos.genero = true;
    document.querySelector('#grupo_enviar .form_input_error').classList.remove('form_input_error-activo');
} else {
    error.classList.add('form_input_error-activo');
    campos.genero = false;
  }
}

generoSelect.addEventListener('change', actualizarErrorgenero);


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
        case "CurpForm":
            if(expReg.curp.test(e.target.value)){
                document.querySelector('#grupo_curp .form_input_error').classList.remove('form_input_error-activo');
                campos.curp = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_curp .form_input_error').classList.remove('form_input_error-activo');
                campos.curp = false;                
            } else {
                document.querySelector('#grupo_curp .form_input_error').classList.add('form_input_error-activo');
                campos.curp = false;                
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
        if (campos.nombre && campos.apellidos && campos.email && campos.edad && campos.telefono && campos.curp && campos.password) {
            document.querySelector('#grupo_enviar .form_input_error').classList.remove('form_input_error-activo');
            console.log(`esta bien`);
        }
        
    }
    
    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
    
    formulario.addEventListener('submit', (e) => {
        if (campos.nombre && campos.apellidos && campos.email && campos.edad && campos.telefono && campos.curp && campos.genero && campos.tipodiabetes && campos.password) {
            console.log(`esta bien`);
    } else {
        e.preventDefault();
        document.querySelector('#grupo_enviar .form_input_error').classList.add('form_input_error-activo');
    }
});
