
// ==========================================
// IDENTIFICAR ELEMENTOS DA TELA
// ==========================================

var campoPublicacao = document.getElementById("textoPublicacao");
var botaoPublicar = document.getElementById("btnPublicar");
var listaPublicacoes = document.getElementById("listaPublicacoes");


// ==========================================
// FUNÇÕES AUXILIARES
// ==========================================

function gerarIniciais(nome) {
    return nome
        .trim()
        .split(" ")
        .map(function (parte) {
            return parte[0];
        })
        .join("")
        .substring(0, 2)
        .toUpperCase();
}

function formatarData(data) {
    return new Date(data).toLocaleString("pt-BR");
}


// ==========================================
// CARREGAR RANKING
// ==========================================

function carregarRanking() {

    fetch("/ranking")
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error("Erro ao buscar ranking!");
            }

            return resposta.json();
        })
        .then(function (ranking) {

            for (var i = 0; i < ranking.length; i++) {

                var nome = document.getElementById(`nome${i + 1}`);
                var pontos = document.getElementById(`pontos${i + 1}`);
                var avatar = document.getElementById(`avatar${i + 1}`);

                if (nome) {
                    nome.textContent = ranking[i].nome;
                }

                if (pontos) {
                    pontos.textContent = ranking[i].pontos + " pontos";
                }

                if (avatar) {
                    avatar.textContent = gerarIniciais(ranking[i].nome);
                }
            }
        })
        .catch(function (erro) {
            console.log("Erro ao carregar ranking:", erro);
        });
}

carregarRanking();


// ==========================================
// PUBLICAR UMA NOVA PUBLICAÇÃO
// ==========================================

function publicar() {

    var texto = campoPublicacao.value.trim();
    var idUsuario = sessionStorage.getItem("idUsuario");

    if (idUsuario == null) {
        alert("Faça login para publicar!");
        return;
    }

    if (texto === "") {
        alert("Digite algo antes de publicar!");
        return;
    }

    fetch("/publicacao/publicar", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            idUsuario: idUsuario,
            texto: texto
        })

    })
        .then(function (resposta) {

            if (!resposta.ok) {
                throw new Error("Erro ao realizar publicação!");
            }

            return resposta.json();

        })
        .then(function (resultado) {

            console.log("Publicação cadastrada:", resultado);

            alert("Publicação realizada com sucesso!");

            campoPublicacao.value = "";

            // Atualizar o feed com a nova publicação
            carregarPublicacoes();

        })
        .catch(function (erro) {

            console.log("Erro ao publicar:", erro);

            alert("Não foi possível realizar a publicação!");

        });
}

botaoPublicar.addEventListener("click", publicar);


// ==========================================
// CARREGAR COMENTÁRIOS DE UMA PUBLICAÇÃO
// ==========================================

function carregarComentarios(idPublicacao, listaComentarios, contadorComentarios) {

    fetch(`/comentarios?fkPublicacao=${idPublicacao}`)
        .then(function (resposta) {

            if (!resposta.ok) {
                throw new Error("Erro ao buscar comentários!");
            }

            return resposta.json();

        })
        .then(function (comentarios) {

            // Limpar a lista antes de atualizar
            listaComentarios.innerHTML = "";

            comentarios.forEach(function (comentario) {

                var item = document.createElement("div");
                item.className = "comentario";

                var avatar = document.createElement("div");
                avatar.className = "avatar";
                avatar.textContent = gerarIniciais(comentario.nome);

                var informacoes = document.createElement("div");

                var nome = document.createElement("h5");
                nome.textContent = comentario.nome;

                var texto = document.createElement("p");
                texto.textContent = comentario.texto;

                var data = document.createElement("span");
                data.textContent = formatarData(comentario.dataComentario);

                informacoes.appendChild(nome);
                informacoes.appendChild(texto);
                informacoes.appendChild(data);

                item.appendChild(avatar);
                item.appendChild(informacoes);

                listaComentarios.appendChild(item);

            });

            contadorComentarios.textContent =
                comentarios.length + " comentários";

        })
        .catch(function (erro) {

            console.log("Erro ao carregar comentários:", erro);

        });
}


// ==========================================
// ENVIAR COMENTÁRIO PARA UMA PUBLICAÇÃO
// ==========================================

function enviarComentario(idPublicacao, inputComentario, listaComentarios, contadorComentarios) {

    var texto = inputComentario.value.trim();
    var idUsuario = sessionStorage.getItem("idUsuario");

    if (idUsuario == null) {
        alert("Faça login para comentar!");
        return;
    }

    if (texto === "") {
        alert("Digite um comentário!");
        return;
    }

    fetch("/comentarios", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            fkUsuario: Number(idUsuario),
            fkPublicacao: Number(idPublicacao),
            texto: texto

        })

    })
        .then(function (resposta) {

            if (!resposta.ok) {
                throw new Error("Não foi possível publicar o comentário!");
            }

            return resposta.json();

        })
        .then(function (resultado) {

            console.log("Comentário publicado:", resultado);

            inputComentario.value = "";

            // Buscar novamente os comentários daquela publicação
            carregarComentarios(
                idPublicacao,
                listaComentarios,
                contadorComentarios
            );

        })
        .catch(function (erro) {

            console.log("Erro ao publicar comentário:", erro);

            alert("Não foi possível publicar seu comentário!");

        });
}


// ==========================================
// MONTAR OS CARDS DE PUBLICAÇÃO
// ==========================================

function carregarPublicacoes() {

    fetch("/publicacao/listar")
        .then(function (resposta) {

            if (!resposta.ok) {
                throw new Error("Erro ao buscar publicações!");
            }

            return resposta.json();

        })
        .then(function (publicacoes) {

            // Remover os cards antigos sem apagar o formulário
            var cardsAntigos = listaPublicacoes.querySelectorAll(".publicacao");

            cardsAntigos.forEach(function (card) {
                card.remove();
            });

            publicacoes.forEach(function (publicacao) {

                // CARD
                var card = document.createElement("article");
                card.className = "card-comunidade publicacao";
                card.dataset.idPublicacao = publicacao.idPublicacao;


                // CABEÇALHO DO USUÁRIO
                var usuario = document.createElement("div");
                usuario.className = "usuario-publicacao";

                var avatar = document.createElement("div");
                avatar.className = "avatar";
                avatar.textContent = gerarIniciais(publicacao.nome);

                var informacoes = document.createElement("div");

                var nome = document.createElement("h3");
                nome.textContent = publicacao.nome;

                var data = document.createElement("span");
                data.textContent = formatarData(publicacao.dataPublicacao);

                informacoes.appendChild(nome);
                informacoes.appendChild(data);

                usuario.appendChild(avatar);
                usuario.appendChild(informacoes);

                var opcoes = document.createElement("button");
                opcoes.className = "opcoes";
                opcoes.textContent = "•••";

                usuario.appendChild(opcoes);


                // CONTEÚDO DA PUBLICAÇÃO
                var conteudo = document.createElement("div");
                conteudo.className = "conteudo-publicacao";

                var textoPublicacao = document.createElement("p");
                textoPublicacao.textContent = publicacao.texto;

                conteudo.appendChild(textoPublicacao);


                // INTERAÇÕES
                var interacoes = document.createElement("div");
                interacoes.className = "interacoes-publicacao";

                var botaoComentarios = document.createElement("button");
                botaoComentarios.textContent = "▤ ";

                var contadorComentarios = document.createElement("span");
                contadorComentarios.textContent = "0 comentários";

                botaoComentarios.appendChild(contadorComentarios);
                interacoes.appendChild(botaoComentarios);


                // ÁREA DE COMENTÁRIOS
                var areaComentarios = document.createElement("div");
                areaComentarios.className = "comentarios-publicacao";

                var tituloComentarios = document.createElement("h4");
                tituloComentarios.textContent = "Comentários";

                var listaComentarios = document.createElement("div");
                listaComentarios.className = "lista-comentarios";

                var campoComentario = document.createElement("div");
                campoComentario.className = "campo-comentario";

                var inputComentario = document.createElement("input");
                inputComentario.type = "text";
                inputComentario.placeholder = "Escreva um comentário...";

                var botaoEnviar = document.createElement("button");
                botaoEnviar.textContent = "ENVIAR";

                campoComentario.appendChild(inputComentario);
                campoComentario.appendChild(botaoEnviar);

                areaComentarios.appendChild(tituloComentarios);
                areaComentarios.appendChild(listaComentarios);
                areaComentarios.appendChild(campoComentario);


                // ORGANIZAR O CARD
                card.appendChild(usuario);
                card.appendChild(conteudo);
                card.appendChild(interacoes);
                card.appendChild(areaComentarios);

                // Inserir publicação na tela
                listaPublicacoes.appendChild(card);


                // EVENTO DO BOTÃO ENVIAR
                botaoEnviar.addEventListener("click", function () {

                    enviarComentario(
                        publicacao.idPublicacao,
                        inputComentario,
                        listaComentarios,
                        contadorComentarios
                    );

                });

                // Permitir enviar comentário pressionando Enter
                inputComentario.addEventListener("keydown", function (evento) {

                    if (evento.key === "Enter") {

                        enviarComentario(
                            publicacao.idPublicacao,
                            inputComentario,
                            listaComentarios,
                            contadorComentarios
                        );

                    }

                });


                // BUSCAR COMENTÁRIOS DESTA PUBLICAÇÃO
                carregarComentarios(
                    publicacao.idPublicacao,
                    listaComentarios,
                    contadorComentarios
                );

            });

        })
        .catch(function (erro) {

            console.log("Erro ao carregar publicações:", erro);

        });
}

carregarPublicacoes();


// ==========================================
// CURTIDAS
// ==========================================

document.addEventListener("click", function (evento) {

    var botao = evento.target.closest(
        ".interacoes-publicacao button:first-child"
    );

    if (!botao) {
        return;
    }

    if (botao.classList.contains("curtido")) {

        botao.classList.remove("curtido");
        botao.style.color = "";

    } else {

        botao.classList.add("curtido");
        botao.style.color = "#b3263e";

    }

});

