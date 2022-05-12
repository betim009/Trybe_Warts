function logInVerifier() {
  const getButton = document.querySelector('#button-submit');

  getButton.addEventListener('click', () => {
    const getEmail = document.querySelector('#log-email').value;
    const getPassword = document.querySelector('#password').value;

    if (getEmail === 'tryber@teste.com' && getPassword === '123456') alert('Olá, Tryber!');
    else alert('Email ou senha inválidos.');
  });
} logInVerifier();

function charactersCount() {
  const textArea = document.querySelector('#textarea');
  const count = document.querySelector('#counter');

  let tamanhoTextArea = textArea.value.length;

  textArea.addEventListener('input', () => {
    tamanhoTextArea = textArea.value.length;
    count.innerHTML = `Restam ${500 - tamanhoTextArea} caracteres`;
  });
} charactersCount();

function submitBtnDesactive() {
  const agreement = document.querySelector('#agreement');
  const submit = document.querySelector('#submit-btn');

  submit.disabled = true;

  agreement.addEventListener('change', () => {
    if (submit.disabled === true) submit.disabled = false;
    else submit.disabled = true;
  });
<<<<<<< HEAD
} submitBtnDesactive();
=======
}

desactiveSubmit();
>>>>>>> c85b537981103c9e37d88f40859fe7136ac8e88d
