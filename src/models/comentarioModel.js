
var database = require("../database/config");

function listar(fkPublicacao) {

    var instrucaoSql = `
        SELECT 
            comentario.idComentario,
            comentario.texto,
            comentario.dataComentario,
            comentario.fkPublicacao,
            usuario.nome
        FROM comentario
        JOIN usuario
            ON comentario.fkUsuario = usuario.id
        WHERE comentario.fkPublicacao = ?
        ORDER BY comentario.dataComentario ASC;
    `;

    return database.executar(instrucaoSql, [fkPublicacao]);
}

function cadastrar(fkUsuario, fkPublicacao, texto) {

    var instrucaoSql = `
        INSERT INTO comentario (fkUsuario, fkPublicacao, texto)
        VALUES (?, ?, ?);
    `;

    return database.executar(instrucaoSql, [
        fkUsuario,
        fkPublicacao,
        texto
    ]);
}

module.exports = {
    listar,
    cadastrar
};
