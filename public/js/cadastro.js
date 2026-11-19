const form = document.getElementById ('form')
const username = document.getElementById ('username')
const email = document.getElementById ('email')
const password = document.getElementById ('password')
const regraTamanho = document.getElementById('ruleLength')
const regraMaiuscula = document.getElementById('uppercase')
const regraMinuscula = document.getElementById('lowercase')
const regraNumero = document.getElementById('numbers')
const regraEspecial = document.getElementById('special')
const confirmPassword = document.getElementById ('confirmPassword')

// serve para tirar o comportamento padrão do navegador em páginas HTML
form.addEventListener('submit', (e) => {
    e.preventDefault()

    
    if (checkInputs()) {
        cadastrar()
    }
})

function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    let nomeValido = true;
    let emailValido = true;

 
   if(usernameValue === '') {
    // mostrar o erro  
    // adicionar a classe error
    ErrorValidation(username, 'Preencha esse campo')
    nomeValido = false;

   } else {
    // adicionar a classe de sucesso
    successValidation(username)
   }

   if(emailValue === '') {
    ErrorValidation(email, 'Preencha esse campo')
    emailValido = false;

   } else {
    successValidation(email) 
}

const senhaValida= ChkSenha();

return nomeValido && emailValido && senhaValida;

}


function ChkSenha() {
    
    const confirmPasswordValue = confirmPassword.value.trim();
    const passwordValue = password.value.trim();

    let maiuscula = false;
    let minuscula = false;
    let numero = false;
    let especial = false;

  if(passwordValue === 0) {
    mudarCorSenha(password, false)

   } else if(passwordValue.length < 8){
    mudarCor(regraTamanho, false)

   } else {
    mudarCor(regraTamanho, true)
   }
   

   for (let i = 0; i < passwordValue.length; i++) {

    if (passwordValue[i] >= 'A' && passwordValue[i] <= 'Z') {
        maiuscula = true;
    
    } else if (passwordValue[i] >='a' && passwordValue[i] <='z') {
        minuscula = true;

    } else if (passwordValue[i] >= '0' && passwordValue[i] <= '9'){
        numero = true;

    } else if (passwordValue[i] == '!' || passwordValue[i] == '#' || passwordValue[i] == '@' || passwordValue[i] == '*' ) {
        especial= true;
    } 
   }

    // validações da senha

    if (maiuscula === true) {
        mudarCor(regraMaiuscula, true)
    } else {
        mudarCor(regraMaiuscula, false)  
    }

    if (minuscula === true) {
        mudarCor(regraMinuscula, true)
    } else {
        mudarCor(regraMinuscula, false)  
    }

    if (numero === true) {
        mudarCor(regraNumero, true)
    } else {
        mudarCor(regraNumero, false)  
    }

    if (especial === true) {
        mudarCor(regraEspecial, true)
    } else {
        mudarCor(regraEspecial, false)  
    }

    if (passwordValue.length < 8 || maiuscula === false || minuscula === false || numero === false
    || especial === false) {
    mudarCorSenha(password, false)

   } else {
    mudarCorSenha(password, true)
   }


    if(confirmPasswordValue === '' ) {
        ErrorValidation(confirmPassword, 'Preencha esse campo')

        } else if (confirmPasswordValue == passwordValue) {
        successValidation(confirmPassword) 
    
    } else {
    ErrorValidation(confirmPassword, 'As senhas não são iguais')
   }

   return passwordValue.length >= 8 &&
    maiuscula &&
    minuscula &&
    numero &&
    especial &&
    confirmPasswordValue !== '' &&
    confirmPasswordValue === passwordValue;

}

function cadastrar() {

    var nomeServer = username.value.trim();
    var emailServer = email.value.trim();
    var senhaServer = password.value;

    fetch('/usuarios/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nomeServer: nomeServer,
            emailServer: emailServer,
            senhaServer: senhaServer
        })
    })
    .then(function (resposta) {

        if (!resposta.ok) {
            return resposta.text().then(function (mensagem) {
                throw new Error(mensagem);
            });
        }

        return resposta.text();
    })
    .then(function () {
        alert('Cadastro realizado com sucesso!');
        form.reset();
    })
    .catch(function (erro) {
        alert(erro.message);
    });
}


function ErrorValidation(input, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
    
}


function successValidation (input) {
    const formControl = input.parentElement; 
   
    formControl.className = 'form-control success'
}

function mudarCor(input, valido) {

    if (valido) {
        input.className = 'valid'

    } else {
        input.className = 'invalid'
    }

}

function mudarCorSenha(input, valido) {

    const formControl = input.parentElement;

    if (valido) {
        formControl.className = 'form-control success';

    } else {
        formControl.className = 'form-control error';
    }

}


