// sessão

function validarSessao() {

    var idUsuario = sessionStorage.getItem("idUsuario");
    var nomeUsuario = sessionStorage.getItem("nomeUsuario");
    var elementoBoasVindas = document.getElementById("nomeJogador");

    if (elementoBoasVindas) {
        elementoBoasVindas.textContent = nomeUsuario;
    }

    // Verifica se existe um usuário identificado
    if (idUsuario == null || nomeUsuario == null) {
        window.location.href = "./login.html";
        return;
    }

    // Recupera o elemento que mostra o nome na side-bar
    var elementoNome = document.getElementById("nomeUsuario");

    // Preenche o nome do usuário
    if (elementoNome) {
        elementoNome.textContent = nomeUsuario;
    }
}

function limparSessao() {
    sessionStorage.clear();

}


