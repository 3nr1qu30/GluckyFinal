/* const validaciones = {};

validaciones.login = () => { */
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const cedula = document.getElementById('cedula'), password = document.getElementById('password');
const expReg = {
    cedula: /^\d[0-9]{7}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.#])[A-Za-z\d$@$!%*?&.#]{8,35}$/,
    curp: /^[A-Z\d]{18}$/
}

const validarFormulario = (e) => {
    console.log(e.target.name);
    console.log(formulario);
    let letras = e.target.value.charAt(0).toUpperCase();
    switch (e.target.name){
        case "UserForm":
            if (e.target.value === ""){
                document.querySelector('#grupo__cedula .form_input_error2').classList.remove('form_input_error2-activo');
            }
            if (e.target.value === ""){
                document.querySelector('#grupo__cedula .form_input_error1').classList.remove('form_input_error1-activo');
            }
            if (e.target.value.charAt(0) === '1' || e.target.value.charAt(0) === '2' || e.target.value.charAt(0) === '3' || e.target.value.charAt(0) === '4' || e.target.value.charAt(0) === '5' || e.target.value.charAt(0) === '6' || e.target.value.charAt(0) === '7' || e.target.value.charAt(0) === '8' || e.target.value.charAt(0) === '9' || e.target.value.charAt(0) === '0'){
                if (expReg.cedula.test(e.target.value) === true){
                    document.querySelector('#grupo__cedula .form_input_error1').classList.remove('form_input_error1-activo');
                }
                else {
                    document.querySelector('#grupo__cedula .form_input_error1').classList.add('form_input_error1-activo');
                }
            }
            if (letras === 'A' || letras === 'B' || letras === 'C' || letras === 'D' ||letras === 'E' ||letras === 'F' || letras === 'G' || letras === 'H' || letras === 'I' ||letras === 'J' ||letras === 'K' ||letras === 'L' ||letras === 'M' ||letras === 'N' ||letras === 'Ñ' ||letras === 'O' || letras === 'P' ||letras === 'Q' ||letras === 'R' ||letras === 'S' || letras === 'T' ||letras === 'U' || letras === 'V' ||letras === 'W' || letras === 'X' || letras === 'Y' ||letras === 'Z') {
                if (expReg.curp.test(e.target.value) === true){
                    document.querySelector('#grupo__cedula .form_input_error2').classList.remove('form_input_error2-activo');
                }
                else{
                    document.querySelector('#grupo__cedula .form_input_error2').classList.add('form_input_error2-activo');
                }
            }
        break;
        case "PassForm":
            if (expReg.password.test(e.target.value) === true){
                document.querySelector('#grupo__password .form_input_error3').classList.remove('form_input_error3-activo');
            }
            if (!(expReg.password.test(e.target.value) === true)){
                document.querySelector('#grupo__password .form_input_error3').classList.add('form_input_error3-activo');
            }
            if (e.target.value === ""){
                document.querySelector('#grupo__password .form_input_error3').classList.remove('form_input_error3-activo');
            }
        break;
        
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Rellena bien joven")
    document.querySelector('#grupo_enviar .form_input_error4').classList.add('form_input_error4-activo');
});
/* }
module.export = validaciones;
console.log(module.export); */