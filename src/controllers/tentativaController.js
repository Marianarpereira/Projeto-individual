var tentativaModel = require("../models/tentativaModel");

function registrar(req, res) {

    var idUsuario = req.body.idUsuario;
    var codigoQuiz = req.body.codigoQuiz;
    var pontuacao = req.body.pontuacao;

    tentativaModel.registrarTentativa(idUsuario, codigoQuiz, pontuacao)
        .then(function (resultado) {
            res.status(201).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    registrar
};