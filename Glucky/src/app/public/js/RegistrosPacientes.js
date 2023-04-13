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
  
  
  
  
  
  
  
  






  





