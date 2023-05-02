const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll('#formulario input');
const expReg = {
    valorGlucosa: /saas/,
    valorPresionSistolica: /saas/,
    valorPresionDiastolica: /saas/
}
const campos = {
    valorGlucosa: false,
    valorPresionSistolica: false,
    valorPresionDiastolica: false
}

const validarFormulario = (e) => {
    console.log(e.target.name);
    switch(e.target.name){
        case "glucosa":
          if(expReg.valorGlucosa.test(e.target.value)){
            campos.valorGlucosa = true;
          }
          else if(e.target.value === ""){
            campos.valorGlucosa = false;
          }
          else{
            campos.valorGlucosa = false;
          }
          break;
        case "sistolica":
          if(expReg.valorPresionSistolica.test(e.target.value)){
            campos.valorPresionSistolica = true;
          }
          else if(e.target.value === ""){
            campos.valorPresionSistolica = false;
          }
          else{
            campos.valorPresionSistolica = false;
          }
          break;
        case "diastolica":
          if(expReg.valorPresionDiastolica.test(e.target.value)){
            campos.valorPresionDiastolica = true;
          }
          else if(e.target.value === ""){
            campos.valorPresionDiastolica = false;
          }
          else{
            campos.valorPresionDiastolica = false;
          }
          break;
      }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});