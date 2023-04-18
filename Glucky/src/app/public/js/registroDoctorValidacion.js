/* const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const nombre = document.getElementById('nombre'),
apellidos = document.getElementById('apellidos'),
email = document.getElementById('email'),
edad = document.getElementById('edad'),
telefono = document.getElementById('telefono'),
curp = document.getElementById('curp'),
sexo = document.getElementById('sexo'),
tipodiabetes = document.getElementById('tipodiabetes'),
password = document.getElementById('password');

const expReg = {
    nombre: /^[A-Za-z\u00C0-\u017F]{2,}( [A-Za-z\u00C0-\u017F]{2,})+$/,
    apellidos: /^[A-Z\u00C0-\u017F][a-z\u00C0-\u017F]{1,}\s[A-Z\u00C0-\u017F][a-z\u00C0-\u017F]{1,}\s?[A-Z\u00C0-\u017F]?[a-z\u00C0-\u017F]{0,}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    edad: /^([1-9][8-9]|[2-9][0-9])$/,
    telefono: /^\d{10}$/,
    curp: /^([A-Z]{4})(\d{6})([A-Z]{6})(\d{2})$/,
    sexo: ,
    tipodiabetes: ,
    password: 
}

const campos = {
    nombre: false,
    apellidos: false,
    email: false,
    edad: false,
    telefono: false,
    curp: false,
    sexo: false,
    tipodiabetes: false,
    password: false 
} */

const validarFormulario = (e) => {
    console.log(e.target.name);
    switch (e.target.name){
        case "NombreForm":
            break;
        case "ApellidosForm":
            break;
    }
}

const validarCampo = () => {

}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

document.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("abrase alv si solo va a jugar")
});
