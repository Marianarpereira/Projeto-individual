window.onload = function () {

    const parametros = new URLSearchParams(window.location.search);

    const cadastro = parametros.get('cadastro');

    if (cadastro === 'sucesso') {

        const mensagem = document.getElementById('mensagemCadastro');

      mensagem.innerHTML = `
    <strong>Cadastro concluído</strong>
    Sua conta foi criada com sucesso. Agora, entre com seu e-mail e sua senha para acessar a comunidade.
`;
        mensagem.hidden = false;
    }

}


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