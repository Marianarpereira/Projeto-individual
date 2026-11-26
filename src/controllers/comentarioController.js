
var comentarioModel = require("../models/comentarioModel");

function listar(req, res) {

    var fkPublicacao = Number(req.query.fkPublicacao);

    if (!Number.isInteger(fkPublicacao) || fkPublicacao <= 0) {
        return res.status(400).send("Publicação inválida!");
    }

    comentarioModel.listar(fkPublicacao)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {

    var fkUsuario = Number(req.body.fkUsuario);
    var fkPublicacao = Number(req.body.fkPublicacao);
    var texto = req.body.texto;

    if (!Number.isInteger(fkUsuario) || fkUsuario <= 0) {
        return res.status(400).send("Usuário inválido!");
    }

    if (!Number.isInteger(fkPublicacao) || fkPublicacao <= 0) {
        return res.status(400).send("Publicação inválida!");
    }

    if (texto == undefined || texto.trim() == "") {
        return res.status(400).send("Digite um comentário!");
    }

    if (texto.length > 500) {
        return res.status(400).send("O comentário deve ter até 500 caracteres!");
    }

    comentarioModel.cadastrar(fkUsuario, fkPublicacao, texto.trim())
        .then(function (resultado) {
            res.status(201).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listar,
    cadastrar
};
