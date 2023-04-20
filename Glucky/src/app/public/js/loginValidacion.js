const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const Usuario = request("Usuario");

const cedula = document.getElementById('cedula'), password = document.getElementById('password');
const expReg = {
    cedula: /^\d[0-9]{7}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.#])[A-Za-z\d$@$!%*?&.#]{8,35}$/,
    curp: /^([A-Z]{4})(\d{6})([A-Z]{7})(\d{1})$/
}

const campos = {
    UserForm: false,
    PassForm: false
}

const validarFormulario = (e) => {
    let letras = e.target.value.charAt(0).toUpperCase();
    switch (e.target.name){
        case "UserForm":
            if (e.target.value === ""){
                document.querySelector('#grupo__cedula .form_input_error2').classList.remove('form_input_error2-activo');
                campos.UserForm = false;
            }
            if (e.target.value === ""){
                document.querySelector('#grupo__cedula .form_input_error1').classList.remove('form_input_error1-activo');
                campos.UserForm = false;
            }
            if (e.target.value.charAt(0) === '1' || e.target.value.charAt(0) === '2' || e.target.value.charAt(0) === '3' || e.target.value.charAt(0) === '4' || e.target.value.charAt(0) === '5' || e.target.value.charAt(0) === '6' || e.target.value.charAt(0) === '7' || e.target.value.charAt(0) === '8' || e.target.value.charAt(0) === '9' || e.target.value.charAt(0) === '0'){
                if (expReg.cedula.test(e.target.value) === true){
                    document.querySelector('#grupo__cedula .form_input_error1').classList.remove('form_input_error1-activo');
                    campos.UserForm = true;
                }
                else {
                    document.querySelector('#grupo__cedula .form_input_error1').classList.add('form_input_error1-activo');
                    campos.UserForm = false;
                }
            }
            if (letras === 'A' || letras === 'B' || letras === 'C' || letras === 'D' ||letras === 'E' ||letras === 'F' || letras === 'G' || letras === 'H' || letras === 'I' ||letras === 'J' ||letras === 'K' ||letras === 'L' ||letras === 'M' ||letras === 'N' ||letras === 'Ñ' ||letras === 'O' || letras === 'P' ||letras === 'Q' ||letras === 'R' ||letras === 'S' || letras === 'T' ||letras === 'U' || letras === 'V' ||letras === 'W' || letras === 'X' || letras === 'Y' ||letras === 'Z') {
                if (expReg.curp.test(e.target.value) === true){
                    document.querySelector('#grupo__cedula .form_input_error2').classList.remove('form_input_error2-activo');
                    campos.UserForm = true;
                }
                else{
                    document.querySelector('#grupo__cedula .form_input_error2').classList.add('form_input_error2-activo');
                    campos.UserForm = false;
                }
            }
        break;
        case "PassForm":
            if (expReg.password.test(e.target.value) === true){
                document.querySelector('#grupo__password .form_input_error3').classList.remove('form_input_error3-activo');
                campos.PassForm = true;
            }
            if (!(expReg.password.test(e.target.value) === true)){
                document.querySelector('#grupo__password .form_input_error3').classList.add('form_input_error3-activo');
                campos.PassForm = false;
            }
            if (e.target.value === ""){
                document.querySelector('#grupo__password .form_input_error3').classList.remove('form_input_error3-activo');
                campos.PassForm = false;
            }
        break;
        
    }
    if (campos.UserForm && campos.PassForm) {
        document.querySelector('#grupo_enviar .form_input_error4').classList.remove('form_input_error4-activo');
    }
}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
    if (campos.UserForm && campos.PassForm) {
        
    } else if(Usuario !== undefined && campos.PassForm){

    } else {
        e.preventDefault();
        document.querySelector('#grupo_enviar .form_input_error4').classList.add('form_input_error4-activo');
    }
});
