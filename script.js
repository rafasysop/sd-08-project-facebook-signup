const entrar = document.getElementById('button-login');

entrar.addEventListener('click', function () {
  const email = document.getElementById('user-email-phone');
  alert(email.value);
});

// const cadastre = document.getElementById('facebook-register');

// const form = document.querySelectorAll('.form input');

// cadastre.addEventListener('click', function () {
//   for (let index = 0; index < form.length ; index +=1 ) {
//     var contadorBranco = 0
//     if (form[index].value == 0) {
//       contadorBranco = contadorBranco + 1;

//     }
//   }
//   if(contadorBranco != 0){
//     alert('Cadastro Efetuado')
//   } else {
//     alert('Cadastro inválido')
//   }
// })

// cadastre.addEventListener('click', function (){
//   if(form[0].length < 0 ){
//     alert('Cadastro inválido');
//   }else{
//     alert('Cadastro efetuado');
//   }
// })
