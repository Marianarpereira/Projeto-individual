var usuarioModel = require("../models/usuarioModel");
var crypto = require("crypto");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    
                    if (resultadoAutenticar.length == 1) {

                        var usuario = resultadoAutenticar[0];

                        var partesHash = usuario.senha_hash.split(":");

                        if (partesHash.length != 2) {
                            res.status(403).send("Email e/ou senha inválido(s)");
                            return;
                        }

                        var salt = partesHash[0];
                        var hashSalvo = Buffer.from(partesHash[1], "hex");

                        // Gera o hash da senha digitada usando o mesmo salt
                        var hashDigitado = crypto.scryptSync(senha, salt, hashSalvo.length);

                        // Compara os dois hashes
                        if (hashDigitado.length == hashSalvo.length &&
                            crypto.timingSafeEqual(hashDigitado, hashSalvo)) {

                            res.json({
                                id: usuario.id,
                                nome: usuario.nome,
                                email: usuario.email
                            });

                        } else {
                            res.status(403).send("Email e/ou senha inválido(s)");
                        }

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo email!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
  

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        var salt = crypto.randomBytes(16).toString("hex");

        var hash = crypto.scryptSync(senha, salt, 32).toString("hex");

         // Junta o salt e o hash para armazenar no banco
        var senha_hash = salt + ":" + hash;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha_hash)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                         if (erro.code == "ER_DUP_ENTRY") {
                        res.status(409).send("Este email já está cadastrado!");
                    } else {
                        res.status(500).json(erro.sqlMessage);
                    }
                }

            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}