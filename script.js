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
