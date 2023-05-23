const formularioCambioContra = document.getElementById('formularioCambioContra');
const inputs = document.querySelectorAll('#formularioCambioContra input');
const expReg = {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()+,-./:;<=>?@^_`{|}~])[A-Za-z\dÑñ!"#$%&'()+,-./:;<=>?@\[\]^_`{|}~]{8,35}$/
}
const campos = {
    password1: false,
    password2: false
}
const validarContrasen = (e) => {
    switch(e.target.name){
        case 'NewPass':
            if(expReg.password.test(e.target.value)){
                campos.password1 = true;
            }else{
                campos.password1 = false;
            }
            break;
        case 'ReNewPass':
            if(expReg.password.test(e.target.value)){
                campos.password2 = true;
            }else{
                campos.password2 = false;
            }
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarContrasen);
    input.addEventListener('blur', validarContrasen);
})

formularioCambioContra.addEventListener("submit", function(e) {
  var newPass = document.getElementsByName("NewPass")[0].value;
  var renewPass = document.getElementsByName("ReNewPass")[0].value;
  e.preventDefault();
  if (newPass === renewPass && campos.password2 && campos.password1) {
    formularioCambioContra.submit()
  } else if (newPass !== renewPass && campos.password2 && campos.password1) {
      swal({
          icon: "error",
          title: "Error",
          text: "Las contraseñas no coinciden"
      })
  }else {
    swal({
        icon: "error",
        title: "Error",
        text: "Tu contraseña es muy debil o no contiene minimo 8 caracteres incluyendo: números, letras en mayúscula y minúscula, carácteres especiales."
    })
  }
});
