const getFormLogin = document.querySelector('.facebook-login');
const getFormRegister = document.getElementsByClassName('form-register')[0];
const getInvalid = document.querySelector('.invalid');
const radioBtn = document.getElementsByClassName('radioBtns');

const alertLogin = (value) => alert(value);

function login() {
  getFormLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    alertLogin(getFormLogin.emailPhone.value);
  });
}

const reg = (elements, el) => (elements[el].value === '' && elements[el].type !== 'submit');


const validForm = (elements) => {
  for (let el = 0; el < elements.length; el += 1) {
    if (reg(elements, el)) {
      getInvalid.style.display = 'inline';
      return false;
    }
  }
  getInvalid.style.display = 'none';
  return true;
};

function chekedInput() {
  radioBtn[0].addEventListener('click', (event) => {
    const setInput = document.getElementsByClassName('inputGender');
    if (event.target.id === 'personalizado') {
      setInput[0].classList.remove('genderOpc');
    }
    if (event.target.id === 'masculino' || event.target.id === 'feminino') {
      setInput[0].classList.add('genderOpc');
    }
  });
}

function mainFormRegister() {
  getFormRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    validForm(event.target);
  });
}

function main() {
  login();
  mainFormRegister();
  chekedInput();
}

main();
