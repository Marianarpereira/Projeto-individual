var dashboardModel = require("../models/dashboardModel");

function buscarQuizzesConcluidos(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarQuizzesConcluidos(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPontosAcumulados(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarPontosAcumulados(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarMelhorPontuacao(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarMelhorPontuacao(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarUltimasPontuacoes(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarUltimasPontuacoes(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarQuizzesConcluidos,
    buscarPontosAcumulados,
    buscarMelhorPontuacao,
    buscarUltimasPontuacoes
};