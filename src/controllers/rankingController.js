var rankingModel = require("../models/rankingModel");

function listar(req, res) {

    rankingModel.listar()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    listar
};