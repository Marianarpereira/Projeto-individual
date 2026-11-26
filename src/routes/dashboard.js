var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/quizzes-concluidos/:idUsuario", function (req, res) {
    dashboardController.buscarQuizzesConcluidos(req, res);
});

router.get("/pontos-acumulados/:idUsuario", function (req, res) {
    dashboardController.buscarPontosAcumulados(req, res);
});

router.get("/melhor-pontuacao/:idUsuario", function (req, res) {
    dashboardController.buscarMelhorPontuacao(req, res);
});

router.get("/ultimas-pontuacoes/:idUsuario", function (req, res) {
    dashboardController.buscarUltimasPontuacoes(req, res);
});

module.exports = router;