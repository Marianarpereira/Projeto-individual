var database = require("../database/config");

function registrarTentativa(idUsuario, codigoQuiz, pontuacao) {

    var instrucaoSql = `
        INSERT INTO tentativa (fkUsuario, fkQuiz, pontuacao)
        SELECT ?, idQuiz, ?
        FROM quiz
        WHERE codigo = ?;
    `;

    return database.executar(instrucaoSql, [
        idUsuario,
        pontuacao,
        codigoQuiz
    ]);
}

module.exports = {
    registrarTentativa
};