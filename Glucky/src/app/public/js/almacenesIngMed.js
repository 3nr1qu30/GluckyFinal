const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");
let getMode = localStorage.getItem("mode");
const formulario = document.getElementById("formulario")
const inputs = document.querySelectorAll('#formulario input');
const expReg = {
  alimentoNombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,10}$/,
  alimentoDescripcion: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{1,10}$/
}
const campos = {
  alimentoNombre: false,
  alimentoDescripcion: false
}

const validarFormulario = (e) => {
  switch(e.target.name){
    case "alimentoNombre":
      if(expReg.alimentoNombre.test(e.target.value)){
        console.log(`To bien papu`);
      }
      else{
        console.log(`dlv crack`);
      }
      break;
    case "alimentoDescripcion":
      break;
  }
}

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



const elementos = document.querySelectorAll(".elemento");

elementos.forEach((elemento) => {
  let botonesVisibles = false;
  elemento.addEventListener("click", () => {
    const botones = elemento.querySelector(".botones-elemento");
    if (botonesVisibles) {
      botones.style.display = "none";
      botonesVisibles = false;
    } else {
      botones.style.display = "flex";
      botonesVisibles = true;
    }
  });
});


const buscar = document.getElementById("buscar");
buscar.addEventListener("input", () => {
  const valorBusqueda = buscar.value.toLowerCase().trim();
  const elementos = document.querySelectorAll(".elemento");
  elementos.forEach((elemento) => {
    const inputs = elemento.querySelectorAll(".textoSimple");
    let encontrado = false;
    inputs.forEach((input) => {
      const valorInput = input.getAttribute("value").toLowerCase();
      if (valorInput.includes(valorBusqueda)) {
        encontrado = true;
      }
    });
    if (encontrado) {
      elemento.style.display = "block";
    } else {
      elemento.style.display = "none";
    }
  });
});

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  if (campos.alimentoDescripcion && campos.alimentoNombre) {
      console.log(`esta bien`);
} else {
  e.preventDefault();
  document.querySelector('#grupo_enviar .form_input_error').classList.add('form_input_error-activo');    
}
});