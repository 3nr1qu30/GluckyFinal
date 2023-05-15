const body = document.querySelector("body"),
  modeToggle = body.querySelector(".mode-toggle");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");
const formularioEditarPerfil = document.getElementById("formularioEditarPerfil");
const formularioEditarPassword = document.getElementById("formularioEditarPassword");
const formDesvincularDoctor = document.getElementById("formDesvincularDoctor");
const inputs = document.querySelectorAll("#formularioEditarPerfil input");
const inputs2 = document.querySelectorAll("#formularioEditarPassword input");
const inputs3 = document.querySelectorAll("#formDesvincularDoctor input");
const curp = document.querySelector('input[name="CurpForm"]').value;
const tipoDiabetes = document.querySelector('input[name="TDiabForm"]').value;
const email = document.querySelector('input[name="EmailForm"]').value;
const nombre = document.querySelector('input[name="NombreForm"]').value;
const apellidos = document.querySelector('input[name="ApellidosForm"]').value;
const edad = document.querySelector('input[name="EdadForm"]').value;
const telefono = document.querySelector('input[name="TelForm"]').value;
const password = document.querySelector('input[name="NewPass"]').value;
const borrarCuenta = document.querySelector('input[name="borrarcuenta"]');
const cerrarSesion = document.querySelector('input[name="cerrarSesion"]');


const expReg = {
    nombre: /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)*$/,
    apellidos: /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)?(\s+[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñÑ']+)$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    edad: /^([1-9]|[1-9][0-9])$/,
    telefono: /^\d{10}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()+,-./:;<=>?@^_`{|}~])[A-Za-z\dÑñ!"#$%&'()+,-./:;<=>?@\[\]^_`{|}~]{8,35}$/
}

const campos = {
    nombre: false,
    apellidos: false,
    email: false,
    edad: false,
    telefono: false,
    curp: false,
    tipoDiabetes: false,
    password: false 
}

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
if (curp === curp) {
  campos.curp = true;
} else {
  validarFormularioCuenta(e);
}
if (tipoDiabetes === tipoDiabetes) {
  campos.tipoDiabetes = true;
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
if(password === password){
	campos.password = false
} else{
	validarFormularioCuenta(e);
}

var curpVar = curp, 
    tipoDiabetesVar = tipoDiabetes;

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
    case "CurpForm":
        curpVar = e.target.value;
        if (curpVar === curp) {
            campos.curp = true;
        } else {
            campos.curp = false;
        }
        break;
    case "TDiabForm":
        tipoDiabetesVar = e.target.value;
        if (tipoDiabetesVar === tipoDiabetes) {
            campos.tipoDiabetes = true;
        } else {
            campos.tipoDiabetes = false;
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
})

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

var box2 = document.getElementById('box2');
var down2 = false;

function toggleNotifi2() {
  if (down2) {
    box2.style.height = '0px';
    box2.style.opacity = 0;
    down2 = false;
  } else {
    box2.style.height = 'auto';
    box2.style.opacity = 1;
    down2 = true;

    box.style.height = '0px';
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
  if (campos.nombre && campos.apellidos && campos.curp && campos.email && campos.edad && campos.telefono && campos.tipoDiabetes) {
    swal({
        icon: "warning",
        title: "Modificación de datos",
        text: "¿Estás seguro de que deseas modificar los datos?",
        buttons: ["Cancelar", "Modificar"]
      }).then((modificacionConfirmada) => {
        if(modificacionConfirmada){
                formularioEditarPerfil.submit();
        } else{
            swal({
                icon: "warning",
                title: "Modificación cancelada"
            })
        }
      })
  } else if (curp !== curpVar || tipoDiabetes !== tipoDiabetesVar) {
    swal({
      icon: "warning",
      title: "CURP o tipo de diabetes modificados",
      text: "El CURP o tipo de diabetes no pueden ser modificados, de lo contrario no se modificará nada",
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

formDesvincularDoctor.addEventListener("submit", (e) => {
    e.preventDefault()
    swal({
        icon: "warning",
        title: "Desvincular doctor",
        text: "¿Estás seguro de que deseas desvincularte de tu doctor?",
        buttons: ["Cancelar", "Desvincular"],
        dangerMode: true    
      }).then((desvincular) => {
        if(desvincular){
          formDesvincularDoctor.submit();
        }
      })
})