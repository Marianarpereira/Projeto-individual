var express = require("express");
var router = express.Router();

var publicacaoController = require("../controllers/publicacaoController");

router.post("/publicar", function (req, res) {
    publicacaoController.publicar(req, res);
});

router.get("/listar", function (req, res) {
    publicacaoController.listar(req, res);
});

module.exports = router;