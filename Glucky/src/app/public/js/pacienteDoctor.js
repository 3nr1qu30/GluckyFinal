const matarEspecimen = document.getElementById("matarEspecimen");
const formularioNuevaCita = document.getElementById("formularioNuevaCita");
const formularioActualizarCitas = document.getElementById("formularioActualizarCitas");
const inputs = document.querySelectorAll('#formularioNuevaCita input');
const inputs2 = document.querySelectorAll('#formularioActualizarCitas input');
const fechaActual1 = new Date();
const horaActual = fechaActual1.getHours();
var fechaIngresada = document.getElementById('fechaIngresada').value;
var horaIngresada = document.getElementById('horaIngresada').value;
var tituloCITA = document.getElementById('tituloCITA').value; //hora
var contenidoCITA = document.getElementById('contenidoCITA').value; //fecha
const campos = {
  fecha: false, 
  hora: false,
  fechaEditada: false, 
  horaEditada: false
}


if(tituloCITA === tituloCITA){
  campos.horaEditada = true;
} else {
  validarFechayHoraEditadas(e);
}
if(contenidoCITA === contenidoCITA){
  campos.fechaEditada = true;
} else {
  validarFechayHoraEditadas(e);
}

var mes = (fechaActual1.getMonth() + 1).toString();
if(mes.length <= 1) mes = "0" + mes;
var dia = fechaActual1.getDate().toString();
if(dia.length <= 1) dia = "0" + dia;
var fechaActual2 = fechaActual1.getFullYear() + "-" + mes + "-" + dia;
var fechaMaxima = (fechaActual1.getFullYear() + 1) + "-" + mes + "-" + dia;

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
  kimBtn = document.querySelector(".kimkardashian"), /*Nuevo botón para ver*/
  KyliBtn = document.querySelector(".KylieJenner"), /*Nuevo botón para ver*/
  NickiBtn = document.querySelector(".NickiMinaj"), /*Nuevo botón para ver*/
  closeBtn = document.querySelector(".button-layer32");

showBtn.addEventListener("click", () => section.classList.add("active"));

if (kimBtn) {
  kimBtn.addEventListener("click", () => section.classList.add("active"));
}

if (KyliBtn) {
  KyliBtn.addEventListener("click", () => section.classList.add("active"));
}

if (NickiBtn) {
  NickiBtn.addEventListener("click", () => section.classList.add("active"));
}

overlay.addEventListener("click", () =>
  section.classList.remove("active")
);

closeBtn.addEventListener("click", () =>
  section.classList.remove("active")
);








     






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
            document.getElementById("tituloCITA").value = titulo;
            document.getElementById("contenidoCITA").value =  detalles;
            document.getElementById("fechaCITA").value = fecha; //Este es el dato que usas para hacer consultas SQL
            document.getElementById("fechaCITAEd").value = fecha; //Este es el dato que usas para hacer consultas SQL

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

      matarEspecimen.addEventListener('submit', (e) => {
        e.preventDefault();
        swal({
          icon: 'warning',
          title: '¿Estás seguro?',
          text: 'Esta acción no se puede deshacer',
          buttons: ["Cancelar", "Dar de baja"],
          dangerMode: true
        }).then((matar) => {
          if(matar){
            swal({
              icon: "success",
              title: "Paciente eliminado"
            }).then(() => {
              matarEspecimen.submit();
            })
          }
        })
      });
      
      
      const validarFechayHora = (e) => {
        switch(e.target.name){
          case "FechaForm":
            console.log(`Luego luego la hora`);
            fechaIngresada = e.target.value
            if (fechaActual2 < fechaIngresada && fechaIngresada < fechaMaxima) {
              console.log(`Marco bien`);
              campos.fecha = true;
            } else if (e.target.value === ""){
              console.log(`Directo se fue a fecha vacia`);
              campos.fecha = false;
            }else{
              campos.fecha = false;
              swal({
                icon: "error",
                title: "Fecha extemporánea",
                text: "La fecha no puede ser mayor a un año o anterior a la actual"
              });
            }
            
            break;
            case "HoraForm":
              console.log(`Luego luego la fecha`);
              horaIngresada = e.target.value
              if (horaIngresada >= '07:00' && horaIngresada <= '21:00') {
                console.log(`Marco bien`);
                campos.hora = true;
              } else if (e.target.value === ""){
                console.log(`Directo se fue a hora vacia`);
                campos.hora = false;
              } else{
                campos.hora = false;
                swal({
                  icon: "error",
                  title: "Horario inactivo",
                  text: "El doctor no está disponible en ese horario"
                });
              }
            break;
        }
      }

      const validarFechayHoraEditadas = (e) => {
        switch(e.target.name){
          case "date_citaF":
            contenidoCITA = e.target.value
            if (fechaActual2 < contenidoCITA && contenidoCITA < fechaMaxima) {
              campos.fechaEditada = true;
            } else if (e.target.value === ""){
              campos.fechaEditada = false;
              swal({
                icon: "error",
                title: "Sin fecha",
                text: "No has ingresado alguna fecha"
              });
            }else{
              campos.fechaEditada = false;
              swal({
                icon: "error",
                title: "Fecha extemporánea",
                text: "La fecha no puede ser mayor a un año o anterior a la actual"
              });
            }
            
            break;
            case "hour_citaF":
              tituloCITA = e.target.value
              if (tituloCITA > '07:00' && tituloCITA < '21:00') {
                campos.horaEditada = true;
              } else if (e.target.value === ""){
                campos.horaEditada = false;
                swal({
                  icon: "error",
                  title: "Sin hora",
                  text: "No has ingresado una hora"
                });
              } else{
                campos.horaEditada = false;
                swal({
                  icon: "error",
                  title: "Horario inactivo",
                  text: "El doctor no está disponible en ese horario"
                });
            }
            break;
        }
      }
      
      inputs.forEach((input) => {
        input.addEventListener('keyup', validarFechayHora);
        input.addEventListener('blur', validarFechayHora);
      });

      inputs2.forEach((input) => {
        input.addEventListener('keyup', validarFechayHoraEditadas);
        input.addEventListener('blur', validarFechayHoraEditadas);
      });

      formularioNuevaCita.addEventListener('submit', (e) => {
        e.preventDefault();
        if (campos.fecha && campos.hora) {
          formularioNuevaCita.submit()
          console.log(`Esta validando en bien ya`);
        } else {
          console.log(`Esta validando directo a mal ya`);
        /* swal({
          icon: "error",
          title: "Datos erroneos",
          text: "Por favor, ingresa datos válidos"
        }); */
      }
      });
      

      formularioActualizarCitas.addEventListener('submit', (e) => {
        e.preventDefault();
        if (campos.fechaEditada && campos.horaEditada) {
          formularioActualizarCitas.submit()
        } else {
        swal({
          icon: "error",
          title: "Datos erroneos",
          text: "Por favor, ingresa datos válidos"
        });
      }
      });