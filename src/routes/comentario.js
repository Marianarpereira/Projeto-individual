
var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.get("/", function (req, res) {
    comentarioController.listar(req, res);
});

router.post("/", function (req, res) {
    comentarioController.cadastrar(req, res);
});

module.exports = router;
