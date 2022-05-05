// * Ao preencher o formulário e clicar no botão, será validado que:
//   * Caso o email seja **"tryber@teste.com"** e a senha seja **"123456"** será emitido um alerta contendo o texto **"Olá, Tryber!"** 
//   * Em todos os outro casos deverá ser emitido um alerta contendo o texto **"Email ou senha inválidos."**



//Requisito 3
function verificandoInputs(){
    const getButton = document.querySelector('#button-submit');
    
    getButton.addEventListener('click', function(){
        let getEmail = document.querySelector('#email').value;
        let getPassword = document.querySelector('#password').value;
        if(getEmail === 'tryber@teste.com' && getPassword === '123456'){
            alert('Olá, Tryber!');
        } else{
            alert('Email ou senha inválidos.')
        }
    })
}
verificandoInputs();
