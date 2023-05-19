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





function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("style-2");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];  /*Lo que está dentro del arreglo delimita el buscador */
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
function myFunction2() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  table = document.getElementById("style-2");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];  /*Lo que está dentro del arreglo delimita el buscador */
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
function myFunction3() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput3");
	filter = input.value.toUpperCase();
	table = document.getElementById("style-2");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[2];  /*Lo que está dentro del arreglo delimita el buscador */
	  if (td) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  tr[i].style.display = "";
		} else {
		  tr[i].style.display = "none";
		}
	  }       
	}
  }
  function myFunction4() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput4");
	filter = input.value.toUpperCase();
	table = document.getElementById("style-2");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[3];  /*Lo que está dentro del arreglo delimita el buscador */
	  if (td) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  tr[i].style.display = "";
		} else {
		  tr[i].style.display = "none";
		}
	  }       
	}
  }

  function myFunction5() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput5");
	filter = input.value.toUpperCase();
	table = document.getElementById("style-2");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
	  td = tr[i].getElementsByTagName("td")[4];  /*Lo que está dentro del arreglo delimita el buscador */
	  if (td) {
		txtValue = td.textContent || td.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  tr[i].style.display = "";
		} else {
		  tr[i].style.display = "none";
		}
	  }       
	}
  }



const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});



let circle = document.querySelector(".color-option");

   circle.addEventListener("click", (e)=>{
     let target = e.target;
     if(target.classList.contains("circle")){
       circle.querySelector(".active").classList.remove("active");
       target.classList.add("active");
       document.querySelector(".main-images .active").classList.remove("active");
       document.querySelector(`.main-images .${target.id}`).classList.add("active");
     }
   });




   const section = document.querySelector("section"),
        overlay = document.querySelector(".overlay"),
        showBtn = document.querySelector(".botonver"),  /*Botón para ver */
        closeBtn = document.querySelector(".button-layer32");

      showBtn.addEventListener("click", () => section.classList.add("active"));

      overlay.addEventListener("click", () =>
        section.classList.remove("active")
      );

      closeBtn.addEventListener("click", () =>
        section.classList.remove("active")
      );







///inicio del script para los botones de listamedicamentos
      const listamedicamentos = document.querySelector('#listamedicamentos');
      const listaSeleccionados = document.querySelector('#medicamentos-seleccionados');
      const searchInput = document.querySelector('#search');
      const times = document.querySelectorAll('#tiempo');
      
      listamedicamentos.addEventListener('change', (event) => {
        const checkbox = event.target;
        const time = checkbox.parentNode.querySelector('input[type="time"]');
      
        if (checkbox.checked) {
          /* const span = document.createElement('span');
          span.innerText = checkbox.value + " ";
          span.classList.add('seleccionadodos');
          listaSeleccionados.appendChild(span); */
      
          // Mostrar el input de tipo time
          time.style.display = 'inline-block';
          time.disabled = false; // Desbloquear el input
        } else {
        /*   const spans = listaSeleccionados.getElementsByTagName('span');
          for (let i = 0; i < spans.length; i++) {
            if (spans[i].innerText.trim() === checkbox.value) {
              listaSeleccionados.removeChild(spans[i]);
              break;
            }
          } */
      
          // Ocultar el input de tipo time
          time.style.display = 'none';
          time.disabled = true; // Bloquear el input
        }
      });
      
      
      searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        listamedicamentos.querySelectorAll('.checkbox').forEach((checkbox) => {
          checkbox.style.display = checkbox.querySelector('label').innerText.toLowerCase().includes(searchText) ? 'block' : 'none';
        });
      });
///fin del script para los botones de listamedicamentos



///inicio del script para los botones de listadietas
const listadietas = document.querySelector('#listadietas');
const listaSeleccionadosdietas = document.querySelector('#dietas-seleccionados');
const searchInputdietas = document.querySelector('#searchdietas');

let isSelectClicked = false;
let isInputClicked = false;

listadietas.addEventListener('mousedown', (event) => {
  const select = event.target.closest('.textsO');
  const input = event.target.closest('.cantidad');
  
  isSelectClicked = select !== null;
  isInputClicked = input !== null;
});

listadietas.addEventListener('change', (event) => {
  const checkbox = event.target;
  const descrip = checkbox.parentNode.querySelector('input[type="submit"]');
  const texts = checkbox.parentNode.querySelectorAll('.textsO');
  const cantidad = checkbox.parentNode.querySelectorAll('.cantidad');

  if (checkbox.checked) {
    // Mostrar el input de tipo descrip
    descrip.style.display = 'inline-block';
    descrip.disabled = false; // Desbloquear el input

    // Iterar sobre la colección de nodos texts y aplicar las propiedades style y disabled a cada elemento
    for (let i = 0; i < texts.length; i++) {
      texts[i].style.display = 'block';
      texts[i].disabled = false; // Desbloquear el texto
    }

    // Agregar propiedades CSS al div con class .cantidad
    for (let i = 0; i < cantidad.length; i++) {
      cantidad[i].style.display = 'block';
      cantidad[i].disabled = false; // Desbloquear el campo de cantidad
      cantidad[i].style.border = '1px solid #ccc'; // Agregar borde al campo de cantidad
      cantidad[i].style.borderRadius = '3px'; // Agregar borde redondeado al campo de cantidad
      cantidad[i].style.padding = '5px'; // Agregar espaciado interno al campo de cantidad
      cantidad[i].style.marginBottom = '10px'; // Agregar margen inferior al campo de cantidad
    }
  } else {
    // Ocultar el input de tipo descrip
    descrip.style.display = 'none';
    descrip.disabled = true; // Bloquear el input

    // Iterar sobre la colección de nodos texts y aplicar las propiedades style y disabled a cada elemento
    for (let i = 0; i < texts.length; i++) {
      texts[i].style.display = 'none';
      texts[i].disabled = true; // Bloquear el texto
    }

    // Agregar propiedades CSS al div con class .cantidad
    for (let i = 0; i < cantidad.length; i++) {
      cantidad[i].style.display = 'none';
      cantidad[i].disabled = true; // Bloquear el campo de cantidad
    }
  }
});

document.addEventListener('click', (event) => {
  const select = event.target.closest('.textsO');
  const input = event.target.closest('.cantidad');
  
  if ((select && !isSelectClicked) || (input && !isInputClicked)) {
    event.preventDefault();
    event.stopPropagation();
  }
  isSelectClicked = false;
  isInputClicked = false;
});
      
      searchInputdietas.addEventListener('input', () => {
        const searchText =  searchInputdietas.value.toLowerCase();
        listadietas.querySelectorAll('.checkbox').forEach((checkbox) => {
          checkbox.style.display = checkbox.querySelector('label').innerText.toLowerCase().includes(searchText) ? 'block' : 'none';
        });
      });
///fin del script para los botones de listadietas





      var modal = document.getElementById("myModal");
      var modal2 = document.getElementById("myModal2");
      var modal3 = document.getElementById("myModal3");
      
      
      var btn = document.getElementById("myBtn");
      var btn2 = document.getElementById("myBtn2");
      var btn3 = document.getElementById("myBtn3");
      
      var span = document.getElementsByClassName("cancel")[0];
      var span2 = document.getElementsByClassName("cancel2")[0];
      var span3 = document.getElementsByClassName("cancel3")[0];
      
      btn.onclick = function() {
        modal.style.display = "block";
      }
      btn2.onclick = function() {
        modal2.style.display = "block";
      }
      btn3.onclick = function() {
        modal3.style.display = "block";
      }
      
      span.onclick = function() {
        modal.style.display = "none";
      }
      span2.onclick = function() {
        modal2.style.display = "none";
      }
      span3.onclick = function() {
        modal3.style.display = "none";
      }
      
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
      }
      }
      
      window.onclick = function(event) {
        if (event.target == modal2) {
          modal2.style.display = "none";
      }
      
      }
      window.onclick = function(event) {
        if (event.target == modal3) {
          modal3.style.display = "none";
      }
      }

  













      // Obtener todas las cards
      const cards = document.querySelectorAll('.card');
        
      // Obtener el overlay de tratamientos
      const overlayTRATAM = document.getElementById('overcardTRATAM');

      // Obtener el overlay de dietas
      const overcardDIET = document.getElementById('overcardDIET');

      // Obtener el overlat de citas
      const overcardCITA = document.getElementById('overcardCITA');
      
      
      // Agregar evento de clic a cada card
      cards.forEach(card => {
        card.addEventListener('click', () => {
          // Obtener los elementos h4 y h6 dentro de la card clickeada
          const titulo = card.querySelector('h4').textContent;
          const fecha = card.querySelector('h6').textContent;
          const detalles = card.querySelector('p').textContent;
          const consultorio = document.getElementById('consultorio');
           // Obtener la clase de la card clickeada
           const clase = card.classList[1];
           // Obtener el titulo
          const overcardTRATAM = document.getElementById('overcardTRATAM');
      
           // Mostrar la información en el overlay
           const overlaycard = document.getElementById('overlaycard');
          if (clase === 'amarillosC') {
            overcardTRATAM.classList.add('amarillosC');
            document.getElementById("tituloTratamiento").innerHTML = titulo;
            document.getElementById("contenidoTratamiento").innerHTML = detalles;
            document.getElementById("fechaTratamiento").innerHTML = fecha;

            overcardTRATAM.classList.add(clase);
            // Mostrar el overlay
            overlayTRATAM.style.display = 'block';

            

          // Obtener el botón de cerrar overlay
            const cerrarOverlay = document.querySelector('.overlay-close');
            
            // Agregar evento de clic al botón de cerrar overlay
            cerrarOverlay.addEventListener('click', () => {
              // Ocultar el overlay
              const overlayTRATAM = document.querySelector('.overlaycard');
              overlayTRATAM.style.display = 'none';
            
              // Remover la clase de overcardcolor
              const overcardTRATAM = document.getElementById('overcardTRATAM');
              const clase = overcardTRATAM.classList[1];
              overcardTRATAM.classList.remove(clase);
            });
            
            // Agregar evento de clic al documento
            document.addEventListener('mousedown', (event) => {
              // Verificar si el clic fue fuera del overlay
              if (event.target !== overlayTRATAM && !overlayTRATAM.contains(event.target)) {
                // Ocultar el overlay
                overlayTRATAM.style.display = 'none';
            
                // Remover la clase de overcardcolor
                const overcardTRATAM = document.getElementById('overcardTRATAM');
                const clase = overcardTRATAM.classList[1];
                overcardTRATAM.classList.remove(clase);
              }
            });

            
          } else if (clase === 'verdesC'){

            document.getElementById("tituloDiet").innerHTML = titulo;
            document.getElementById("contenidoDiet").innerHTML = detalles;
            document.getElementById("fechaDiet").innerHTML = fecha;

            // Mostrar el overlay
            overcardDIET.style.display = 'block';

            

          // Obtener el botón de cerrar overlay
            const cerrarOverlay = document.getElementById("overlay-closeDIet")
            
            // Agregar evento de clic al botón de cerrar overlay
            cerrarOverlay.addEventListener('click', () => {
              // Ocultar el overlay
              const overlayDIET = document.querySelector('.overlaycardDIET');
              overlayDIET.style.display = 'none';
            
              // Remover la clase de overcardcolor
              const overcardDIET = document.getElementById('overcardDIET');
            });
          

          } else if (clase == 'azulesC') {
            document.getElementById("tituloCITA").innerHTML = titulo;
            document.getElementById("contenidoCITA").innerHTML = detalles;
            document.getElementById("fechaCITA").innerHTML = fecha;

            // Mostrar el overlay
            overcardCITA.style.display = 'block';

            

          // Obtener el botón de cerrar overlay
            const cerrarOverlays = document.getElementById("overlay-closeCITA")
            
            // Agregar evento de clic al botón de cerrar overlay
            cerrarOverlays.addEventListener('click', () => {
              // Ocultar el overlay
              const overlayCITA = document.querySelector('.overlaycardCITA');
              overlayCITA.style.display = 'none';
            
              // Remover la clase de overcardcolor
              const overcardCITA = document.getElementById('overcardCITA');
            });


          }

          
          
        });
      });