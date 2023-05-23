const formulario69 = document.getElementById("formulario69");
const inputs = document.querySelectorAll("#formulario69 input");
const expReg = { email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ };
const campos = { email: false };
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "correo":
      expReg.email.test(e.target.value)
        ? campos.email = true
        : campos.email = false
      break;
  }
};
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});
formulario69.addEventListener("submit", (e) => {
  e.preventDefault();
  campos.email === true
    ? formulario69.submit()
    : swal({
        icon: "error",
        title: "Datos incorrectos",
        text: "Por favor, introduzca su correo correctamente",
      });
});
