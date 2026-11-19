function logar() {

    let pegaUsuario = document.getElementById('usuario').value;
    let pegaSenha = document.getElementById('senha').value;

    fetch('/usuarios/autenticar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emailServer: pegaUsuario,
            senhaServer: pegaSenha
        })
    })
    .then(function (resposta) {

        if (resposta.ok) {
            return resposta.json();

        } else {
            return resposta.text().then(function (mensagem) {
                throw new Error(mensagem);
            });
        }

    })
    .then(function (usuario) {

        alert('Login realizado com sucesso! Bem-vinda, ' + usuario.nome);

        console.log(usuario);

    })
    .catch(function (erro) {

        alert(erro.message);

    });

}