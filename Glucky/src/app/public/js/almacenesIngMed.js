const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");
let getMode = localStorage.getItem("mode");
const formulario = document.getElementById("formulario")
const formulario2 = document.getElementById("formulario2")
const formulario3 = document.getElementById("formulario3")
const inputs = document.querySelectorAll('#formulario input');
const inputs2 = document.querySelectorAll('#formulario2 input');

const expReg = {
  alimentoNombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{2,45}$/,
  alimentoDescripcion: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s0-9]{2,1000}.$/
}
const campos = {
  alimentoNombre: false,
  alimentoDescripcion: false,
  alimentoNombre2: false,
}

const validarFormulario = (e) => {
  switch(e.target.name){
    case "alimentoNombre":
      if(expReg.alimentoNombre.test(e.target.value)){
        campos.alimentoNombre = true;
      }
      else if(e.target.value === ""){
        campos.alimentoNombre = false;
      }
      else{
        campos.alimentoNombre = false;
      }
      break;
    case "alimentoDescripcion":
      if(expReg.alimentoDescripcion.test(e.target.value)){
        campos.alimentoDescripcion = true;
      }
      else if(e.target.value === ""){
        campos.alimentoDescripcion = false;
      }
      else{
        campos.alimentoDescripcion = false;
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
  })
});

function validarFormulario2() {
  const elementos = document.querySelectorAll('.elemento');
  let camposValidos = true;

  elementos.forEach(elemento => {
    const nombre = elemento.querySelector('input[name="NomForm"]');
    const descripcion = elemento.querySelector('textarea[name="DescForm"]');

    if (!nombre.value.trim()) {
      swal({
        icon: "error",
        title: "Nombre vacío",
        text: "El nombre del alimento no puede estar vacío, de lo contrario no se actualizará"
      });      
      camposValidos = false;
      return;
    }
    
    if (!expReg.alimentoNombre.test(nombre.value.trim())) {
      swal({
        icon: "error",
        title: "Nombre con extensión erronea",
        text: "Por favor, ingrese un nombre válido para el alimento (de 2 a 15 caracteres alfabéticos), de lo contrario no se actualizará"
      }); 
      camposValidos = false;
      return;
    }
    
    if (!descripcion.value.trim()) {
      swal({
        icon: "error",
        title: "Descripción vacía",
        text: "La descripción del alimento no puede estar vacía, de lo contrario no se actualizará"
      });
      camposValidos = false;
      return;
    }
    
    if (!expReg.alimentoDescripcion.test(descripcion.value.trim())) {
      swal({
        icon: "error",
        title: "Descripción con extensión erronea",
        text: "Por favor, ingrese una descripción válida para el alimento (de 2 a 15 caracteres alfanuméricos), de lo contrario no se actualizará"
      }); 
      camposValidos = false;
      return;
    }
  });
  
  return camposValidos;
}



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


formulario.addEventListener('submit', (e) => {
  if (campos.alimentoDescripcion && campos.alimentoNombre) {
/*     swal({
      icon: "success",
      title: "Alimento agregado",
      text: "El alimento se ha agregado al almacén"
    }); */
  } else {
  e.preventDefault();
}
});

formulario2.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (validarFormulario2()) {
    // swal({
    //   icon: "success",
    //   title: "Alimento modificado",
    //   text: "El alimento ya está actualizado"
    // }).then(() => {
      formulario2.submit();
    // });
  } else {    
    // console.log(`Esta mal pa`);
  }
});

// formulario3.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const id = e.target.querySelector('.idElemento').value;
//   swal({
//     title: "¿Estás seguro?",
//     text: "Este elemento será eliminado permanentemente.",
//     icon: "warning",
//     buttons: ["Cancelar", "Eliminar"],
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       swal("El elemento ha sido eliminado.", {
//         icon: "success",
//       });
//       formulario3.submit();
//     } else {
//       swal("La eliminación ha sido cancelada.");
//     }
//   });
// });