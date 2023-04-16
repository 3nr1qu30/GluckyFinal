const { doctorNoExiste} = require('../../controllers/PrincipalControllers');
const Swal = require('sweetalert2');

if (doctorNoExiste) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'El doctor no está registrado',
  });
}
