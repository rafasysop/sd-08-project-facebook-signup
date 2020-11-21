const button = document.querySelector('#button-login');

button.addEventListener('click', function () {
  const emailTel = document.querySelector('#user-email-phone').value;
  alert(emailTel);
});
function validaCamposVazios() {
  const bntRegister = document.getElementById('facebook-register');
  bntRegister.addEventListener('click', (event) => {
    const inputs = document.querySelectorAll('.valida');
    const formulario = document.querySelector('.right-content form');
    for (let index = 0; index < inputs.length; index += 1) {
      if(inputs[index].value === '' || inputs[index].value === ' ') {
        event.preventDefault();// para o button nao dar reload na pagina
        const camposInvalidos = document.createElement('p');
        camposInvalidos.innerText = 'Campos inválidos';
        formulario.appendChild(camposInvalidos);
        break
      }
    }
  });
}validaCamposVazios();
// const divErro = document.querySelector('.erro');
// // let div = document.createElement('div');

// const dados = document.querySelectorAll('.form');
// const button2 = document.querySelector('#facebook-register');

// button2.addEventListener('click', function (event) {
//   for (let index = 0; index < dados.length; index += 1) {
//     if (dados[index].value === '') {
//       event.preventDefault();
//       divErro.innerText = 'Campos inválidos';
//     }
//   }
// });

