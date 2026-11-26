var publicacaoModel = require("../models/publicacaoModel");

function publicar(req, res) {

    var idUsuario = req.body.idUsuario;
    var texto = req.body.texto;

    publicacaoModel.publicar(idUsuario, texto)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function listar(req, res) {

    publicacaoModel.listar()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    publicar,
    listar
};