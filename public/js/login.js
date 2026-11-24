function logar() {

    let pegaUsuario = document.getElementById('usuario').value;
    let pegaSenha = document.getElementById('senha').value;

    console.log('Antes do fetch');

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

        console.log('Fetch recebeu resposta:', resposta.status);

        return resposta.json();

    })
    .then(function (usuario) {

        console.log('Dados recebidos:', usuario);

        sessionStorage.setItem('nomeUsuario', usuario.nome);
        sessionStorage.setItem('idUsuario', usuario.id);

        window.location.href = './comunidade.html';

    })
    .catch(function (erro) {

        console.log('ERRO NO FETCH:', erro);
        alert('Erro na requisição: ' + erro.message);

    });

}