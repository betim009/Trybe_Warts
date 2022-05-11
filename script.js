function verificandoInputs() {
  const getButton = document.querySelector('#button-submit');
  getButton.addEventListener('click', () => {
    const getEmail = document.querySelector('#log-email').value;
    const getPassword = document.querySelector('#password').value;
    if (getEmail === 'tryber@teste.com' && getPassword === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
verificandoInputs();

function contadorCaractere() {
  const textArea = document.querySelector('#textarea');
  const count = document.querySelector('#counter');
  let tamanhoTextArea = textArea.value.length;

  textArea.addEventListener('input', () => {
    tamanhoTextArea = textArea.value.length;
    count.innerHTML = `Restam ${500 - tamanhoTextArea} caracteres`;
  });
}
contadorCaractere();

// function verificaLabelInfos (){
//   const labelInfo = document.querySelector('#agreement');
//   const btnEnviar = document.querySelector('#submit-btn');

//   btnEnviar.disabled = true;
  
//   labelInfo.addEventListener('click',  () => {
//     if (labelInfo.checked === true){
//       btnEnviar.disabled = false;
//     } else{
//       btnEnviar.disabled = true;
//     }
//   })
// }
// verificaLabelInfos();
// select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));

// function verificaLabelInfos (){
//   const labelInfo = document.querySelector('#agreement');
//   const btnEnviar = document.querySelector('#submit-btn');

//   btnEnviar.disabled = true;
  
//   labelInfo.addEventListener('click',  () => labelInfo.checked === true ? btnEnviar.disabled = false :  btnEnviar.disabled = true)
// }
// verificaLabelInfos();

function verificaLabelInfos (){
  const labelInfo = document.querySelector('#agreement');
  const btnEnviar = document.querySelector('#submit-btn');
  const trueExpression = labelInfo.checked === true ? btnEnviar.disabled = false :  btnEnviar.disabled = true;
  labelInfo.addEventListener('click', trueExpression())
}
verificaLabelInfos()