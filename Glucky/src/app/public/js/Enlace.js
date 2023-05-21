  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form");
    const serviceID = "default_service";
    const templateID = "template_z6cjnds";
    emailjs.sendForm(serviceID, templateID, form).then(
      () => {
        alert("¡Enviado!");
      },
      (err) => {
        alert(JSON.stringify(err));
      }
    );
    form.submit();
    console.log("¡Enviado mamacita!");
  });
  