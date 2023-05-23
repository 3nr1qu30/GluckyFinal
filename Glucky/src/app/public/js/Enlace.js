  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form");
    const serviceID = "default_service";
    const templateID = "template_z6cjnds";
    emailjs.sendForm(serviceID, templateID, form).then(
      () => {
        console.log("¡Enviado!");
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
    form.submit();
  });
  