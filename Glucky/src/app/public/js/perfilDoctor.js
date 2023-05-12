const body = document.querySelector("body"),
  modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");
const formularioEditarPerfil = document.getElementById("formularioEditarPerfil");
const formularioEditarPassword = document.getElementById("formularioEditarPassword");
const inputs = document.querySelectorAll("#formularioEditarPerfil input");
const inputs2 = document.querySelectorAll("#formularioEditarPassword input");
const cedula = document.querySelector('input[name="CedulaForm"]').value;
const email = document.querySelector('input[name="EmailForm"]').value;
const nombre = document.querySelector('input[name="NombreForm"]').value;
const apellidos = document.querySelector('input[name="ApellidosForm"]').value;
const edad = document.querySelector('input[name="EdadForm"]').value;
const telefono = document.querySelector('input[name="TelForm"]').value;
const calle = document.querySelector('input[name="CalleForm"]').value;
const numeroConsultorio = document.querySelector('input[name="NumeroForm"]').value;
const cp = document.querySelector('input[name="CPForm"]').value;
const password = document.querySelector('input[name="NewPass"]').value;
const borrarCuenta = document.querySelector('input[name="borrarcuenta"]')
const cerrarSesion = document.querySelector('input[name="cerrarSesion"]')

const expReg = {
  nombre: /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)*$/,
  apellidos:
    /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)?(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)$/,
  edad: /^([1-9][8-9]|[2-9][0-9])$/,
  telefono: /^\d{10}$/,
  calle: /^[a-zA-Z0-9\s-.,#áéíóúÁÉÍÓÚñÑ]+$/,
  numeroConsultorio: /^\d{1,3}$/,
  cp: /^\d{5}$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.#])[A-Za-z\d$@$!%*?&.#]{8,35}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

const campos = {
  nombre: false,
  apellidos: false,
  edad: false,
  telefono: false,
  calle: false,
  numeroConsultorio: false,
  cp: false,
  password: false,
  email: false,
  cedula: false,
};

if (nombre === nombre) {
  campos.nombre = true;
} else {
  validarFormularioCuenta(e);
}
if (apellidos === apellidos) {
  campos.apellidos = true;
} else {
  validarFormularioCuenta(e);
}
if (email === email) {
  campos.email = true;
} else {
  validarFormularioCuenta(e);
}
if (cedula === cedula) {
  campos.cedula = true;
} else {
  validarFormularioCuenta(e);
}
if (edad === edad) {
  campos.edad = true;
} else {
  validarFormularioCuenta(e);
}
if (telefono === telefono) {
  campos.telefono = true;
} else {
  validarFormularioCuenta(e);
}
if (calle === calle) {
  campos.calle = true;
} else {
  validarFormularioCuenta(e);
}
if (numeroConsultorio === numeroConsultorio) {
  campos.numeroConsultorio = true;
} else {
  validarFormularioCuenta(e);
}
if (cp === cp) {
  campos.cp = true;
} else {
  validarFormularioCuenta(e);
}
if(password === password){
	campos.password = false
    } else{
		validarFormularioCuenta(e);
}

var caedulaVar = cedula;

const validarFormularioCuenta = (e) => {
  switch (e.target.name) {
    case "NombreForm":
      if (expReg.nombre.test(e.target.value)) {
        document
          .querySelector("#grupo_nombre .form_input_error")
          .classList.remove("form_input_error-activo");
        campos.nombre = true;
      } else if (e.target.value === "") {
        document
          .querySelector("#grupo_nombre .form_input_error")
          .classList.add("form_input_error-activo");
        campos.nombre = false;
      } else {
        document
          .querySelector("#grupo_nombre .form_input_error")
          .classList.add("form_input_error-activo");
        campos.nombre = false;
      }
      break;
    case "ApellidosForm":
      if (expReg.apellidos.test(e.target.value)) {
        document
          .querySelector("#grupo_apellidos .form_input_error")
          .classList.remove("form_input_error-activo");
        campos.apellidos = true;
      } else if (e.target.value === "") {
        document
          .querySelector("#grupo_apellidos .form_input_error")
          .classList.add("form_input_error-activo");
        campos.apellidos = false;
      } else {
        document
          .querySelector("#grupo_apellidos .form_input_error")
          .classList.add("form_input_error-activo");
        campos.apellidos = false;
      }
      break;
    case "EmailForm":
      if (expReg.email.test(e.target.value)) {
        document
          .querySelector("#grupo_email .form_input_error")
          .classList.remove("form_input_error-activo");
        campos.email = true;
      } else if (e.target.value === "") {
        document
          .querySelector("#grupo_email .form_input_error")
          .classList.add("form_input_error-activo");
        campos.email = false;
      } else {
        document
          .querySelector("#grupo_email .form_input_error")
          .classList.add("form_input_error-activo");
        campos.email = false;
      }
      break;
    case "CedulaForm":
      caedulaVar = e.target.value;
      if (caedulaVar === cedula) {
        campos.cedula = true;
      } else {
        campos.cedula = false;
      }
      break;
    case "EdadForm":
      if (expReg.edad.test(e.target.value)) {
        document
          .querySelector("#grupo_edad .form_input_error")
          .classList.remove("form_input_error-activo");
        campos.edad = true;
      } else if (e.target.value === "") {
        document
          .querySelector("#grupo_edad .form_input_error")
          .classList.add("form_input_error-activo");
        campos.edad = false;
      } else {
        document
          .querySelector("#grupo_edad .form_input_error")
          .classList.add("form_input_error-activo");
        campos.edad = false;
      }
      break;
    case "TelForm":
      if (expReg.telefono.test(e.target.value)) {
        document
          .querySelector("#grupo_telefono .form_input_error")
          .classList.remove("form_input_error-activo");
        campos.telefono = true;
      } else if (e.target.value === "") {
        document
          .querySelector("#grupo_telefono .form_input_error")
          .classList.add("form_input_error-activo");
        campos.telefono = false;
      } else {
        document
          .querySelector("#grupo_telefono .form_input_error")
          .classList.add("form_input_error-activo");
        campos.telefono = false;
      }
      break;
    case "CalleForm":
      if (expReg.calle.test(e.target.value)) {
        document
          .querySelector("#grupo_calle .form_input_error")
          .classList.remove("form_input_error-activo");
        campos.calle = true;
      } else if (e.target.value === "") {
        document
          .querySelector("#grupo_calle .form_input_error")
          .classList.add("form_input_error-activo");
        campos.calle = false;
      } else {
        document
          .querySelector("#grupo_calle .form_input_error")
          .classList.add("form_input_error-activo");
        campos.calle = false;
      }
      break;
    case "NumeroForm":
      if (expReg.numeroConsultorio.test(e.target.value)) {
        document
          .querySelector("#grupo_numeroConsultorio .form_input_error")
          .classList.remove("form_input_error-activo");
        campos.numeroConsultorio = true;
      } else if (e.target.value === "") {
        document
          .querySelector("#grupo_numeroConsultorio .form_input_error")
          .classList.add("form_input_error-activo");
        campos.numeroConsultorio = false;
      } else {
        document
          .querySelector("#grupo_numeroConsultorio .form_input_error")
          .classList.add("form_input_error-activo");
        campos.numeroConsultorio = false;
      }
      break;
    case "CPForm":
      if (expReg.cp.test(e.target.value)) {
        document
          .querySelector("#grupo_cp .form_input_error")
          .classList.remove("form_input_error-activo");
        campos.cp = true;
      } else if (e.target.value === "") {
        document
          .querySelector("#grupo_cp .form_input_error")
          .classList.add("form_input_error-activo");
        campos.cp = false;
      } else {
        document
          .querySelector("#grupo_cp .form_input_error")
          .classList.add("form_input_error-activo");
        campos.cp = false;
      }
      break;
  }
};

const validarNuevaPassword = (e) => {
    switch(e.target.name){
        case "NewPass":
            if(expReg.password.test(e.target.value)){
                document.querySelector('#grupo_password .form_input_error').classList.remove('form_input_error-activo');
                campos.password = true;                
            } else if (e.target.value === ""){
                document.querySelector('#grupo_password .form_input_error').classList.add('form_input_error-activo');
                campos.password = false;                
            } else {
                document.querySelector('#grupo_password .form_input_error').classList.add('form_input_error-activo');
                campos.password = false;                
            }
        break;
    }
}

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
  sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
});

var box = document.getElementById("box");
var down = false;

function toggleNotifi() {
  if (down) {
    box.style.height = "0px";
    box.style.opacity = 0;
    down = false;
  } else {
    box.style.height = "400px";
    box.style.opacity = 1;
    down = true;

    box2.style.height = "0px";
    box2.style.opacity = 0;
    down2 = false;
  }
}

var box2 = document.getElementById("box2");
var down2 = false;

function toggleNotifi2() {
  if (down2) {
    box2.style.height = "0px";
    box2.style.opacity = 0;
    down2 = false;
  } else {
    box2.style.height = "auto";
    box2.style.opacity = 1;
    down2 = true;

    box.style.height = "0px";
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
  input.addEventListener("keyup", validarFormularioCuenta);
  input.addEventListener("blur", validarFormularioCuenta);
});
inputs2.forEach((input) => {
  input.addEventListener("keyup", validarNuevaPassword);
  input.addEventListener("blur", validarNuevaPassword);
});

formularioEditarPerfil.addEventListener("submit", (e) => {
    e.preventDefault();
  if (campos.nombre && campos.apellidos && campos.cedula && campos.email && campos.edad && campos.telefono && campos.calle && campos.numeroConsultorio && campos.cp) {
    swal({
        icon: "warning",
        title: "Modificación de datos",
        text: "¿Estás seguro de que deseas modificar los datos?",
        buttons: ["Cancelar", "Modificar"]
      }).then((modificacionConfirmada) => {
        if(modificacionConfirmada){
          formularioEditarPerfil.submit()
        } else{
            swal({
                icon: "warning",
                title: "Modificación cancelada"
            })
        }
      })
  } else if (cedula !== caedulaVar) {
    swal({
      icon: "warning",
      title: "Cédula modificada",
      text: "La cédula no puede ser modificada, de lo contrario no se modificará nada",
    });
    e.preventDefault();
  } else {
    e.preventDefault();
    swal({
      icon: "error",
      title: "Datos incorrectos",
      text: "Por favor, verifica que los datos ingresados cumplen el formato establecido",
    });
  }
});

formularioEditarPassword.addEventListener("submit", (e) => {
    e.preventDefault();
    if (campos.password){
        swal({
            icon: "warning",
            title: "Cambio de contraseña",
            text: "¿Estás seguro de que deseas cambiar la contraseña?",
            buttons: ["Cancelar", "Cambiar"]
          }).then((modificacionConfirmada) => {
            if(modificacionConfirmada){
              formularioEditarPassword.submit();
            } else{
                swal({
                    icon: "warning",
                    title: "Cambio de contraseña cancelado"
                })
            }
          })
    } else{
        e.preventDefault();
        swal({
            icon: "error",
            title: "Contraseña no válida",
            text: "Por favor, verifica que la contraseña ingresada cumple el formato establecido",
        });
    };
});
