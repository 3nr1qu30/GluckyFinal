


var glucosaNormalForm = document.getElementById("GlucosaAyunasForm");
var modal = document.getElementById("glucosa-modal");
var close = document.getElementsByClassName("close")[0];

glucosaNormalForm.addEventListener("click", function() {
  modal.style.display = "block";
});

close.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

var formCitaNueva = document.getElementById("formCitaNueva");
var modal3 = document.getElementById("glucosa-modal3");
var close3 = document.getElementsByClassName("close3")[0];

formCitaNueva.addEventListener("click", function() {
  modal3.style.display = "block";
});

close3.addEventListener("click", function() {
  modal3.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
});





var modal4 = document.getElementById("doctorModal");
var btn = document.querySelector(".verDoc2");
var span = document.querySelector(".close2");

btn.onclick = function() {
  modal4.style.display = "block";
};

span.onclick = function() {
  modal4.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
};




