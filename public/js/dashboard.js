function carregarQuizzesConcluidos() {

    var idUsuario = sessionStorage.getItem("idUsuario");

    fetch(`http://localhost:3333/dashboard/quizzes-concluidos/${idUsuario}`)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {

            document.getElementById("quizzesConcluidos").innerHTML =
                dados[0].quizzesConcluidos;

        })
        .catch(function (erro) {
            console.log("Erro ao buscar quizzes concluídos:", erro);
        });
}

carregarQuizzesConcluidos();

function carregarPontosAcumulados() {

    var idUsuario = sessionStorage.getItem("idUsuario");

    fetch(`http://localhost:3333/dashboard/pontos-acumulados/${idUsuario}`)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {

            document.getElementById("pontosAcumulados").innerHTML =
                dados[0].pontosAcumulados;

        })
        .catch(function (erro) {
            console.log("Erro ao buscar pontos acumulados:", erro);
        });
}

carregarPontosAcumulados();

function carregarMediaDesempenho() {

    var idUsuario = sessionStorage.getItem("idUsuario");

    fetch(`http://localhost:3333/dashboard/melhor-pontuacao/${idUsuario}`)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {

            var somaPontuacoes = 0;

            for (var i = 0; i < dados.length; i++) {
                somaPontuacoes += dados[i].melhorPontuacao;
            }

            console.log("Soma das pontuações:", somaPontuacoes);
            console.log("Quantidade de quizzes:", dados.length);
            console.log("Dados recebidos:", dados);

            var media = (somaPontuacoes / dados.length) * 20;

            document.getElementById("mediaDesempenho").innerHTML =
                media.toFixed(0) + "%";

        })
        .catch(function (erro) {
            console.log("Erro ao buscar média de desempenho:", erro);
        });
}

carregarMediaDesempenho();

function carregarMelhorPontuacao() {

    var idUsuario = sessionStorage.getItem("idUsuario");

    fetch(`http://localhost:3333/dashboard/melhor-pontuacao/${idUsuario}`)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {

            var maiorPontuacao = 0;

            for (var i = 0; i < dados.length; i++) {

                if (dados[i].melhorPontuacao > maiorPontuacao) {
                    maiorPontuacao = dados[i].melhorPontuacao;
                }

            }

            document.getElementById("melhorPontuacao").innerHTML =
                maiorPontuacao ;

        })
        .catch(function (erro) {
            console.log("Erro ao buscar melhor pontuação:", erro);
        });
}

carregarMelhorPontuacao();

function carregarGraficoDesempenho() {

    var idUsuario = sessionStorage.getItem("idUsuario");

    fetch(`http://localhost:3333/dashboard/melhor-pontuacao/${idUsuario}`)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {


            var titulos = [];
            var pontuacoes = [];


            for (var i = 0; i < dados.length; i++) {

                titulos.push(dados[i].titulo);

                pontuacoes.push(dados[i].melhorPontuacao * 20);

            }


            var grafico = document.getElementById("graficoDesempenho");

            new Chart(grafico, {
                type: "bar",

                data: {
                    labels: titulos,

                    datasets: [{
                        label: "Melhor desempenho (%)",
                        data: pontuacoes,
                        backgroundColor: "#426B50",
                        borderColor: "#426B50",
                        borderWidth: 1,
                        borderRadius: 6
                    }]
                },

                options: {
                    responsive: true,
                    maintainAspectRatio: false,

                    scales: {
                        y: {
                            beginAtZero: true,
                            min: 0,
                            max: 100,
                            ticks: {
                                callback: function (valor) {
                                    return valor + "%";
                                }
                            }
                        }
                    }
                }
            });

        })
        .catch(function (erro) {
            console.log("Erro ao carregar gráfico:", erro);
        });
}

carregarGraficoDesempenho();

function carregarUltimasPontuacoes() {
    var idUsuario = sessionStorage.getItem("idUsuario");

    fetch(`http://localhost:3333/dashboard/ultimas-pontuacoes/${idUsuario}`)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {
            var lista = document.getElementById("listaPontuacoes");

            lista.innerHTML = "";

            for (var i = 0; i < dados.length; i++) {
                var titulo = dados[i].titulo;
                var pontuacao = dados[i].pontuacao;
                var porcentagem = pontuacao * 20;

                var data = new Date(dados[i].dataTentativa);
                var dataFormatada = data.toLocaleDateString("pt-BR", {
                    timeZone: "UTC"
                });

                lista.innerHTML += `
        <div class="pontuacao-card">
            <span>${titulo}</span>
            <h3>${porcentagem}<small>%</small></h3>
            <span>${dataFormatada}</span>
        </div>
    `;
            }
        })
        .catch(function (erro) {
            console.log("Erro ao buscar últimas pontuações:", erro);
        });
}

carregarUltimasPontuacoes();

