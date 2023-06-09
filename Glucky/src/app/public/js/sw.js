const STATIC_CACHE = 'static';

const APP_SHELL =[
    "/Glucky/",
    "../css/almacenDoctorIngredientes.css",
    "../css/almacenDoctorMedicamentos.css",
    "../css/animate.css",
    "../css/asignacionesCitasPacientes.css",
    "../css/bootstrap.min.css",
    "../css/chatCSS.css",
    "../css/chatDoctor.css",
    "../css/chatDoctor.txt",
    "../css/chatPaciente.css",
    "../css/citasDoctor.css",
    "../css/dashboardDoctor.css",
    "../css/dashboardPacientes.css",
    "../css/editarAsignacionCita.css",
    "../css/editarAsignacionDieta.css",
    "../css/lineicons.css",
    "../css/pacienteDoctor.css",
    "../css/pacienteDoctor2.css",
    "../css/perfilDoctor.css",
    "../css/perfilPaciente.css",
    "../css/peticionesDoctor.css",
    "../css/registro.css",
    "../css/registroNivelesPacientes.css",
    "../css/RegistroPaciente.css",
    "../css/slider.css",
    "../css/solicitudesDoctor.css",
    "../css/solicitudesPaciente.css",
    "../css/swiper-bundle.min.css",
    "../css/ud-styles.css",
    "../css/ud-styles.css.map",
    "../fonts/LineIcons.eot",
    "../fonts/LineIcons.svg",
    "../fonts/LineIcons.ttf",
    "../fonts/LineIcons.woff",
    "../fonts/LineIcons.woff2",
    "../images/404/dotted-shape.svg",
    "../images/404/shape-1.svg",
    "../images/404/shape-2.svg",
    "../images/about/about-image.svg",
    "../images/banner/banner-bg.svg",
    "../images/blog/article-author-01.png",
    "../images/blog/article-author-02.png",
    "../images/blog/article-author-03.png",
    "../images/blog/article-author-04.png",
    "../images/blog/author-01.png",
    "../images/blog/bannder-ad.png",
    "../images/blog/blog-01.jpg",
    "../images/blog/blog-02.jpg",
    "../images/blog/blog-03.jpg",
    "../images/blog/blog-details-01.jpg",
    "../images/blog/dotted-shape.svg",
    "../images/blog/quote-bg.svg",
    //js porque ya me aburri jeje
    "../js/almacenesIngMed.js",
    "../js/asignacionesCitasPacientes.js",
    "../js/bootstrap.bundle.min.js",
    "../js/chatDoctor.js",
    "../js/citasDoctor.js",
    "../js/crudCitasDoctor.js",
    "../js/dashboardDoctor.js",
    "../js/editarAsignacionDieta.js",
    "../js/editarAsignacionTratamiento.js",
    "../js/loginValidacion.js",
    "../js/main.js",
    "../js/pacienteDoctor.js",
    "../js/perfilDoctor.js",
    "../js/peticionesDoctor.js",
    "../js/plantillaAlertas.js",
    "../js/RegistrosPacientes.js",
    "../js/slider.js",
    "../js/swiper-bundle.min.js",
    "../js/verModifcarDatosPaciente.js",
    "../js/verModificarDatosDoctor.js",
    "../js/wow.min.js",
    "../scss/_404.scss",
    "../scss/_about.scss",
    "../scss/_banner.scss",
    "../scss/_blog-details.scss",
    "../scss/_blog.scss",
    "../scss/_common.scss",
    "../scss/_contact.scss",
    "../scss/_default.scss",
    "../scss/_faq.scss",
    "../scss/_features.scss",
    "../scss/_footer.scss",
    "../scss/_header.scss",
    "../scss/_hero.scss",
    "../scss/_login.scss",
    "../scss/_mixin.scss",
    "../scss/_pricing.scss",
    "../scss/_team.scss",
    "../scss/_testimonials.scss",
    "../scss/_variables.scss",
    "../scss/ud-styles.scss",


];

self.addEventListener('install', e=>{
    const cache_static=caches.open('STATIC_CACHE').then(cache=>cache.addAll(APP_SHELL));
    e.waitUntil(cache_static);
});

self.addEventListener('fetch', e=>{
    console.log(e);
})