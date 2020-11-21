const button = document.querySelector('#button-login');

button.addEventListener('click', function () {
  const emailTel = document.querySelector('#user-email-phone').value;
  alert(emailTel);
});

const divErro = document.querySelector('.erro');
// let div = document.createElement('div');

const dados = document.querySelectorAll('.form');
const button2 = document.querySelector('#facebook-register');

button2.addEventListener('click', function (event) {
  for (let index = 0; index < dados.length; index += 1) {
    if (dados[index].value === '') {
      event.preventDefault();
      divErro.innerText = 'erro';
    }
  }
});
