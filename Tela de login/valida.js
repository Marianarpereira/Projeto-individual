const usuarios = [
    {
        login: 'Vitor',
        pass: 'vitor'
    }, 

    {
        login: 'mariana',
        pass: 'mariana'
    },

    {
        login: 'juliana',
        pass: 'juliana'
    }
]

function logar() {
    
    let pegaUsuario = document.getElementById('usuario').value;
    let pegaSenha = document.getElementById('senha').value; 
    let validaLogin = false;

    for (let i in usuarios) {
        
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass) {
            validaLogin = true
            break

        } else {
              validaLogin = false
        }
    }

        if(validaLogin == true) {
           alert('OK')
        
    } else {
         alert('usuário ou senha incorretos')
    }
    
}
