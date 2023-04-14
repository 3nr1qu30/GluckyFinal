

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

    