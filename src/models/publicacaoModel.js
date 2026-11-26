var database = require("../database/config");

function publicar(idUsuario, texto) {

    var instrucaoSql = `
        INSERT INTO publicacao (fkUsuario, texto)
        VALUES (?, ?);
    `;

    return database.executar(instrucaoSql, [idUsuario, texto]);
}

function listar() {

    var instrucaoSql = `
        SELECT
            publicacao.idPublicacao,
            publicacao.fkUsuario,
            publicacao.texto,
            publicacao.dataPublicacao,
            usuario.nome
        FROM publicacao
        JOIN usuario
            ON publicacao.fkUsuario = usuario.id
        ORDER BY publicacao.dataPublicacao DESC;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    publicar,
    listar
};