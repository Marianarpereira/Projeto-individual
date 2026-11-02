const form = document.getElementById ('form')
const username = document.getElementById ('username')
const email = document.getElementById ('email')
const password = document.getElementById ('password')
const confirmPassword = document.getElementById ('confirmPassword')

// serve para tirar o comportamento padrão do navegador em páginas HTML
form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()

})

function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    let maiuscula = 0;
    let minuscula = 0;
    let numero = 0;
    let especial = 0;

   if(usernameValue === '') {
    // mostrar o erro
    // adicionar a classe error
    ErrorValidation(username, 'Preencha esse campo')

   } else {
    // adicionar a classe de sucesso
    successValidation(username)
   }

   if(emailValue === '') {
    ErrorValidation(email, 'Preencha esse campo')

   } else {
    successValidation(email)
    
   } if(passwordValue === '') {
    ErrorValidation(password, 'Preencha esse campo')

   } else if(passwordValue.length < 8){
    ErrorValidation(password, 'A senha deve ter pelo menos 8 caracteres')

   } else {

   for (let i = 0; i < passwordValue.length; i++) {

    if (passwordValue[i] >= 'A' && passwordValue[i] <= 'Z') {
        maiuscula++
    
    } else if (passwordValue[i] >='a' && passwordValue[i] <='z') {
        minuscula++

    } else if (passwordValue[i] >= '0' && passwordValue[i] <= '9'){
        numero++

    } else if (passwordValue[i] == '!' || passwordValue[i] == '#' || passwordValue[i] == '@' || passwordValue[i] == '*' ) {
        especial++} 
    }

        if (maiuscula >= 1 && minuscula >=1 && numero >= 1 && especial>= 1 ) {
           successValidation(password) 
        } else {
            ErrorValidation(password, 'Senha fraca')
        }
    }

        if(confirmPasswordValue === '' ) {
        ErrorValidation(confirmPassword, 'Preencha esse campo')

        } else if (confirmPasswordValue == passwordValue) {
        successValidation(confirmPassword) 
    
    } else {
    ErrorValidation(confirmPassword, 'As senhas não são iguais')
   }

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
