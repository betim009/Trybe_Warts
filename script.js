
// * Ao preencher o formulário e clicar no botão, será validado que:
//   * Caso o email seja **"tryber@teste.com"** e a senha seja **"123456"** será emitido um alerta contendo o texto **"Olá, Tryber!"** 
//   * Em todos os outro casos deverá ser emitido um alerta contendo o texto **"Email ou senha inválidos."**



function verificandoInputs(){
    const getButton = document.querySelector('#button-submit');
    getButton.addEventListener('click', function(event){
        let getEmail = document.querySelector('#email').value;
        let getPassword = document.querySelector('#password').value;
        if(getEmail === 'tryber@teste.com' && getPassword === '123456'){
            alert('Olá, Tryber!')
        } else{
            alert('Email ou senha inválidos.');
        }
    })
}
verificandoInputs();

// 4. Crie um título com o texto Trybewarts centralizado dentro do Header
// Observações técnicas:
// Deve existir um elemento <h1> com o id trybewarts-header-title e com o texto "Trybewarts"
// O título deverá estar centralizado na barra verde
// O header deve ter exatamente três elementos filhos
// O filho do meio deve ser o título
// O que será verificado:
// Existe um elemento h1 com o id trybewarts-header-title e com o texto Trybewarts
// O elemento com a classe header deve possuir exatos 3 elementos filhos
// O filho do meio do elemento com a classe header deve ser o título h1 Trybewarts
