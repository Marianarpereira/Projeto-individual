var database = require("../database/config");

function buscarQuizzesConcluidos(idUsuario) {
    var instrucaoSql = `
        SELECT
            COUNT(*) AS quizzesConcluidos
        FROM tentativa
        WHERE fkUsuario = ?;
    `;

    return database.executar(instrucaoSql, [idUsuario]);
}

function buscarPontosAcumulados(idUsuario) {
    var instrucaoSql = `
        SELECT
            COALESCE(SUM(pontuacao), 0) AS pontosAcumulados
        FROM tentativa
        WHERE fkUsuario = ?;
    `;

    return database.executar(instrucaoSql, [idUsuario]);
}

function buscarMelhorPontuacao(idUsuario) {
    var instrucaoSql = `
        SELECT
            q.idQuiz,
            q.titulo,
            COALESCE(MAX(t.pontuacao), 0) AS melhorPontuacao
        FROM quiz q
        LEFT JOIN tentativa t
            ON t.fkQuiz = q.idQuiz
            AND t.fkUsuario = ?
        GROUP BY
            q.idQuiz,
            q.titulo
        ORDER BY q.idQuiz;
    `;

    return database.executar(instrucaoSql, [idUsuario]);
}


function buscarUltimasPontuacoes(idUsuario) {
    var instrucaoSql = `
        SELECT
            q.titulo,
            t.pontuacao,
            t.dataTentativa
        FROM tentativa t
        INNER JOIN quiz q
            ON t.fkQuiz = q.idQuiz
        WHERE t.fkUsuario = ?
        ORDER BY t.dataTentativa DESC
        LIMIT 3;
    `;

    return database.executar(instrucaoSql, [idUsuario]);
}

module.exports = {
    buscarQuizzesConcluidos,
    buscarPontosAcumulados,
    buscarMelhorPontuacao,
    buscarUltimasPontuacoes
};