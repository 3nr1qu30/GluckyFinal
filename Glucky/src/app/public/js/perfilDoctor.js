const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");
const formularioEditarPerfil = document.getElementById("formularioEditarPerfil")
const inputs = document.querySelectorAll('#formularioEditarPerfil input');
const cedula = document.querySelector('input[name="CedulaForm"]').value;
const email = document.querySelector('input[name="EmailForm"]').value;
const nombre = document.querySelector('input[name="NombreForm"]').value;
const apellidos = document.querySelector('input[name="ApellidosForm"]').value;
const edad = document.querySelector('input[name="EdadForm"]').value;
const telefono = document.querySelector('input[name="TelForm"]').value;
const calle = document.querySelector('input[name="CalleForm"]').value;
const numeroConsultorio = document.querySelector('input[name="NumeroForm"]').value;
const cp = document.querySelector('input[name="CPForm"]').value;

console.log(`cedula: ${cedula}`);
console.log(`email: ${email}`);
console.log(`nombre: ${nombre}`);
console.log(`apellidos: ${apellidos}`);
console.log(`edad: ${edad}`);
console.log(`telefono: ${telefono}`);
console.log(`calle: ${calle}`);
console.log(`numeroConsultorio: ${numeroConsultorio}`);
console.log(`cp: ${cp}`);

const expReg = {
    nombre: /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)*$/,
    apellidos: /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)?(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)$/,
    edad: /^([1-9][8-9]|[2-9][0-9])$/,
    telefono: /^\d{10}$/,
    calle: /^[a-zA-Z0-9\s-.,#áéíóúÁÉÍÓÚñÑ]+$/,
    numeroConsultorio: /^\d{1,3}$/,
    cp: /^\d{5}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.#])[A-Za-z\d$@$!%*?&.#]{8,35}$/
}

const campos = {
    nombre: false,
    apellidos: false,
    edad: false,
    telefono: false,
    calle: false,
    numeroConsultorio: false,
    cp: false,
    password: false ,
    email: false,
    cedula: false
} 

if(nombre === nombre){
	console.log(`El nombre es igual`);
	campos.nombre = true
    } else{
		validarFormularioCuenta(e);
		console.log(`El nombre cambio we`);
}
if(apellidos === apellidos){
	console.log(`Apellidos es igual`);
	campos.apellidos = true
    } else{
		validarFormularioCuenta(e);
		console.log(`Apellidos cambio we`);
}
if(email === email){
	console.log(`Email es igual`);
	campos.email = true
    } else{
		validarFormularioCuenta(e);
		console.log(`Email cambio we`);
}
if(cedula === cedula){
	console.log(`Cedula es igual`);
	campos.cedula = true
    } else{
		validarFormularioCuenta(e);
		console.log(`Cedula cambio we`);
}
if(edad === edad){
	console.log(`Edad es igual`);
	campos.edad = true
    } else{
		validarFormularioCuenta(e);
		console.log(`Edad cambio we`);
}
if(telefono === telefono){
	console.log(`El telefono es igual`);
	campos.telefono = true
    } else{
		validarFormularioCuenta(e);
		console.log(`El telefono cambio we`);
}
if(calle === calle){
	console.log(`Calle es igual`);
	campos.calle = true
    } else{
		validarFormularioCuenta(e);
		console.log(`Calle cambio we`);
}
if(numeroConsultorio === numeroConsultorio){
	console.log(`El numero de consultorio es igual`);
	campos.numeroConsultorio = true
    } else{
		validarFormularioCuenta(e);
		console.log(`El numero de consultorio cambio we`);
}
if(cp === cp){
	console.log(`El cp es igual`);
	campos.cp = true
    } else{
		validarFormularioCuenta(e);
		console.log(`El cp cambio we`);
}
/* if(password === password){
	console.log(`Contraseña es igual`);
	campos.password = true
    } else{
		validarFormularioCuenta(e);
		console.log(`Contraseña cambio we`);
} */

const validarFormularioCuenta = (e) => {
    switch (e.target.name){
        case "NombreForm":
            if(expReg.nombre.test(e.target.value)){
                document.querySelector('#grupo_nombre .form_input_error').classList.remove('form_input_error-activo');
                campos.nombre = true;
				console.log(`El nombre es otro pa`);       
                console.log(campos.nombre);
                console.log(e.target.name);
                console.log(nombre);
                console.log(campos.nombre && campos.apellidos && campos.cedula && campos.email && campos.edad && campos.telefono && campos.calle && campos.numeroConsultorio && calle.cp);
            } else if (e.target.value === ""){
                document.querySelector('#grupo_nombre .form_input_error').classList.add('form_input_error-activo');
                campos.nombre = false;                
				console.log(`El nombre es otro pa esta mal`);       
                console.log(campos.nombre);
                console.log(e.target.name);
                console.log(nombre);
                console.log(campos.nombre && campos.apellidos && campos.cedula && campos.email && campos.edad && campos.telefono && campos.calle && campos.numeroConsultorio && calle.cp);
            } else {
                document.querySelector('#grupo_nombre .form_input_error').classList.add('form_input_error-activo');
                campos.nombre = false;                
				console.log(`El nombre es otro pa pero esta mal`);       
                console.log(campos.nombre);
                console.log(e.target.name);
                console.log(nombre);
                console.log(campos.nombre && campos.apellidos && campos.cedula && campos.email && campos.edad && campos.telefono && campos.calle && campos.numeroConsultorio && calle.cp);
            }
            break;
			case "ApellidosForm":
				if(expReg.apellidos.test(e.target.value)){
					document.querySelector('#grupo_apellidos .form_input_error').classList.remove('form_input_error-activo');
					campos.apellidos = true;                
				} else if (e.target.value === ""){
					document.querySelector('#grupo_apellidos .form_input_error').classList.add('form_input_error-activo');
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
                    document.querySelector('#grupo_email .form_input_error').classList.add('form_input_error-activo');
                    campos.email = false;                
                } else {
                    document.querySelector('#grupo_email .form_input_error').classList.add('form_input_error-activo');
                    campos.email = false;                
                }
                    break;
                    case "CedulaForm":
                        if(e.target.value === cedula){
                            campos.cedula = true;
                            console.log(e.target.value);
                            console.log(cedula);
                            console.log(`El cedula esta bien papu no le muevas`);
                        } else if (e.target.value === ""){
                            console.log(`la cedula esta bien papu`);
                            campos.cedula = false;                
                        } else {
                            console.log(`la cedula esta bien papu`);
                            campos.cedula = false;                
                        }
            break;
        case "EdadForm":
            if(expReg.edad.test(e.target.value)){
                document.querySelector('#grupo_edad .form_input_error').classList.remove('form_input_error-activo');
                campos.edad = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_edad .form_input_error').classList.add('form_input_error-activo');
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
                document.querySelector('#grupo_telefono .form_input_error').classList.add('form_input_error-activo');
                campos.telefono = false;                
            } else {
                document.querySelector('#grupo_telefono .form_input_error').classList.add('form_input_error-activo');
                campos.telefono = false;                
            }
            break;
        case "CalleForm":
            if(expReg.calle.test(e.target.value)){
                document.querySelector('#grupo_calle .form_input_error').classList.remove('form_input_error-activo');
                campos.calle = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_calle .form_input_error').classList.add('form_input_error-activo');
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
                document.querySelector('#grupo_numeroConsultorio .form_input_error').classList.add('form_input_error-activo');
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
                document.querySelector('#grupo_cp .form_input_error').classList.add('form_input_error-activo');
                campos.cp = false;
            } else {
                document.querySelector('#grupo_cp .form_input_error').classList.add('form_input_error-activo');
                campos.cp = false;                
            }
            break;
    }

}


let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})


var box  = document.getElementById('box');
var down = false;


function toggleNotifi(){
	if (down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
	}else {
		box.style.height  = '400px';
		box.style.opacity = 1;
		down = true;

        box2.style.height  = '0px';
		box2.style.opacity = 0;
		down2 = false;
	}
}


var box2  = document.getElementById('box2');
var down2 = false;

function toggleNotifi2(){
	if (down2) {
		box2.style.height  = '0px';
		box2.style.opacity = 0;
		down2 = false;
	}else {
		box2.style.height  = 'auto';
		box2.style.opacity = 1;
		down2 = true;

        box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
	}
}


function getfocus() {
    document.getElementById("edText").disabled = true;

  }

  function mostrar() {
	var x = document.getElementById("myInput");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
  }

  function mostrar2() {
	var x = document.getElementById("myInput2");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
  }


inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormularioCuenta);
  input.addEventListener('blur', validarFormularioCuenta);
});

formularioEditarPerfil.addEventListener('submit', (e) => {
    if (campos.nombre && campos.apellidos && campos.cedula && campos.email && campos.edad && campos.telefono && campos.calle && campos.numeroConsultorio && calle.cp) {
    // if (campos) {
        console.log(`esta bien`);
		formularioEditarPerfil.submit();
	} else if(cedula !== cedula){
        swal({
            icon: "waring",
            title: "Cédula modificada",
            text: "La cédula no puede ser modificada, de lo contrario no se modificará nada"
        })
		e.preventDefault();
	} else {
    e.preventDefault();
    swal({
        icon: "error",
        title: "Datos incorrectos",
        text: "Por favor, verifica que los datos ingresados cumplen el formato establecido"
    })
    document.querySelector('#grupo_enviar .form_input_error').classList.add('form_input_error-activo');    
	}
});
