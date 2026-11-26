var database = require("../database/config");

function listar() {

    var instrucaoSql = `
        SELECT usuario.nome, SUM(tentativa.pontuacao) AS pontos
        FROM usuario
        JOIN tentativa ON usuario.id = tentativa.fkUsuario
        GROUP BY usuario.id, usuario.nome
        ORDER BY pontos DESC
        LIMIT 3;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    listar
};