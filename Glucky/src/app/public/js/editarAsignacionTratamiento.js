const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

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




const listadietas = document.querySelector('#listadietas');
const listaSeleccionadosdietas = document.querySelector('#dietas-seleccionados');
const searchInputdietas = document.querySelector('#searchdietas');

// Función que crea los elementos span
function actualizarSeleccionados() {
  // Eliminar los elementos span existentes
  const spans = listaSeleccionadosdietas.querySelectorAll('span');
  spans.forEach((span) => span.remove());

  // Recorrer los checkboxes y crear los elementos span para los que están seleccionados
  const checkboxes = listadietas.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    const descrip = checkbox.parentNode.querySelector('input[type="text"]');
    if (checkbox.checked) {
      const span = document.createElement('span');
      span.innerText = checkbox.value + " ";
      span.classList.add('seleccionadodos');
      listaSeleccionadosdietas.appendChild(span);

      // Mostrar el input de tipo descrip
      descrip.style.display = 'inline-block';
      descrip.disabled = false; // Desbloquear el input
    } else {
      // Ocultar el input de tipo descrip
      descrip.style.display = 'none';
      descrip.disabled = true; // Bloquear el input
    }
  });
}

// Llamar a la función al cargar la página
actualizarSeleccionados();

// Llamar a la función cuando se cambie el estado de un checkbox
listadietas.addEventListener('change', (event) => {
  const checkbox = event.target;
  const descrip = checkbox.parentNode.querySelector('input[type="text"]');

  if (checkbox.checked) {
    const span = document.createElement('span');
    span.innerText = checkbox.value + " ";
    span.classList.add('seleccionadodos');
    listaSeleccionadosdietas.appendChild(span);

    // Mostrar el input de tipo descrip
    descrip.style.display = 'inline-block';
    descrip.disabled = false; // Desbloquear el input
  } else {
    const spans = listaSeleccionadosdietas.getElementsByTagName('span');
    for (let i = 0; i < spans.length; i++) {
      if (spans[i].innerText.trim() === checkbox.value) {
        listaSeleccionadosdietas.removeChild(spans[i]);
        break;
      }
    }

    // Ocultar el input de tipo descrip
    descrip.style.display = 'none';
    descrip.disabled = true; // Bloquear el input
  }
});


      searchInputdietas.addEventListener('input', () => {
        const searchText =  searchInputdietas.value.toLowerCase();
        listadietas.querySelectorAll('.checkbox').forEach((checkbox) => {
          checkbox.style.display = checkbox.querySelector('label').innerText.toLowerCase().includes(searchText) ? 'block' : 'none';
        });
      });


