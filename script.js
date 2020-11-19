function alertLogin() {
  const button = document.getElementById('button-login');
  const emailPhone = document.getElementById('user-email-phone');
  button.addEventListener('click', function () {
    alert(emailPhone.value);
  });
}
alertLogin();

function validateForm() {
  const button = document.getElementById('facebook-register');
  button.addEventListener('click', function () {
    const input = document.querySelectorAll('.cadastro input');
    for (let index = 0; index < input.length; index +=1){
      input[index].setCustomValidity('Campos inválidos');
    }
  })
}
validateForm();
// setCustomValidity retirada do artigo: https://www.devmedia.com.br/html5-validator-validando-formularios-com-html5/28785