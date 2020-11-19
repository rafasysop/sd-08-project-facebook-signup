function entrar() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}

const btnEntrar = document.getElementById('button-login');
btnEntrar.addEventListener('click', entrar);

//Exibir uma mensagem "Campos inválidos" dentro do formulário caso pelo menos
//um campo não esteja preenchido
const btnSubmit = document.getElementById('facebook-register');
const rightContent = document.querySelector('.right-content');
const formsContent = rightContent.querySelectorAll('input');

btnSubmit.addEventListener('click', function () {
  for (let i = 0; i < formsContent.length; i += 1) {
    if (formsContent[i].value === '') {
      alert('Campo inválido');
      break;
    }
  }
});
