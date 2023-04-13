var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});



const agendaCitaBtn = document.querySelector('.agendaCita');
const formCitaDiv = document.querySelector('.formcita');
const accionesPac2Div = document.querySelector('.AccionesPac2');

let formCitaVisible = false;

agendaCitaBtn.addEventListener('click', () => {
  if (!formCitaVisible) {
    formCitaDiv.style.display = 'flex';
    accionesPac2Div.style.marginTop = '50px';
    formCitaVisible = true;
  } else {
    formCitaDiv.style.display = 'none';
    accionesPac2Div.style.marginTop = '0px';
    formCitaVisible = false;
  }
});


agendaCitaBtn.addEventListener('click', () => {
  formCitaDiv.classList.toggle('mostrar');
});








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


var glucosaNormalForm2 = document.getElementById("glucosaNormalForm");
var modal2 = document.getElementById("glucosa-modal2");
var close2 = document.getElementsByClassName("close2")[0];

glucosaNormalForm2.addEventListener("click", function() {
  modal2.style.display = "block";
});

close2.addEventListener("click", function() {
  modal2.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
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




