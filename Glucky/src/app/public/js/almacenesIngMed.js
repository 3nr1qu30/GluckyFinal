const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");
let getMode = localStorage.getItem("mode");
const formulario = document.getElementById("formulario")
const formulario2 = document.getElementById("formulario2")
const inputs = document.querySelectorAll('#formulario input');
const inputs2 = document.querySelectorAll('#formulario2 input');
const textareaValue = formulario2.querySelector('textarea[name="DescForm"]').value;

const expReg = {
  alimentoNombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{2,15}$/,
  alimentoDescripcion: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s0-9]{2,15}.$/
}
const campos = {
  alimentoNombre: false,
  alimentoDescripcion: false,
  alimentoNombre2: false,
  alimentoDescripcion2: false
}

const validarFormulario = (e) => {
  switch(e.target.name){
    case "alimentoNombre":
      if(expReg.alimentoNombre.test(e.target.value)){
        console.log(`To bien papu`);
        campos.alimentoNombre = true;
      }
      else if(e.target.value === ""){
        console.log(`mal papu`);
        campos.alimentoNombre = false;
      }
      else{
        console.log(`dlv crack`);
        campos.alimentoNombre = false;
      }
      break;
    case "alimentoDescripcion":
      if(expReg.alimentoDescripcion.test(e.target.value)){
        console.log(`To bien papu`);
        campos.alimentoDescripcion = true;
      }
      else if(e.target.value === ""){
        console.log(`mal papu`);
        campos.alimentoDescripcion = false;
      }
      else{
        console.log(`dlv crack`);
        campos.alimentoDescripcion = false;
      }
      break;
  }
}

const validarFormulario2 = (e) => {
  switch (e.target.name){
    case "NomForm":
      if(expReg.alimentoNombre.test(e.target.value)){
        console.log(`To bien papu`);
        campos.alimentoNombre2 = true;
      }
      else if(e.target.value === ""){
        console.log(`mal papu`);
        campos.alimentoNombre2 = false;
      }
      else{
        console.log(`dlv crack`);
        campos.alimentoNombre2 = false;
      }
      break;
    }
    switch (e.target.name){
      case "DescForm":
        if(expReg.alimentoDescripcion.test(e.target.value)) {
          console.log(`To bien papu`);
          campos.alimentoDescripcion2 = true;
        } else if(e.target.value === "") {
          console.log(`mal papu`);
          campos.alimentoDescripcion2 = false;
        } else {
          console.log(`dlv crack`);
          campos.alimentoDescripcion2 = false;
        }
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
    console.log(`so2342`);
	}else {
    box2.style.height  = 'auto';
		box2.style.opacity = 1;
		down2 = true;
    
    box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
    console.log(`logivo`);
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
    const formulario2 = elemento.querySelector('#formulario2');
    formulario2.addEventListener('input', validarFormulario2);
    // formulario2 = elemento.querySelector('textarea[name="DescForm"]');
    formulario2.addEventListener('change', validarFormulario2);

/*     const validarFormulario3 = (e) => {
      const textareaValue = e.target.form.querySelector('textarea[name="DescForm"]').value;
    } */
  });
});

/* const formulario3 = elemento.querySelector('textarea[name="DescForm"]');
formulario3.addEventListener('change', validarFormulario3); */

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
  input.addEventListener('keyup', validarFormulario2);
  input.addEventListener('blur', validarFormulario2);
});



formulario2.addEventListener('submit', (e) => {
  if (campos.alimentoDescripcion2 && campos.alimentoNombre2) {
      console.log(`esta bien`);
    } else if(campos.alimentoNombre2 === false){
  e.preventDefault();
  swal({
    icon: "error",
    title: "Error",
    text: "El nombre no puede estar vacío ni contener menos de dos letras, de lo contrario no se modificará"
  });
} else if (campos.alimentoDescripcion2 === false){
  e.preventDefault();
  swal({
    icon: "error",
    title: "Error",
    text: "La descripción no puede estar vacía ni contener menos de dos letras, de lo contrario no se modificará"
  });
} else {
  e.preventDefault();
  swal({
    icon: "error",
    title: "Error",
    text: "Por favor rellena bien los datos"
  });
  }
});

formulario.addEventListener('submit', (e) => {
  if (campos.alimentoDescripcion && campos.alimentoNombre) {
      console.log(`esta bien`);
} else {
  e.preventDefault();
}
});