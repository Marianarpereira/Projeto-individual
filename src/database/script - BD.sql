CREATE DATABASE res4;

USE res4;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(120) NOT NULL,
email VARCHAR(120) NOT NULL UNIQUE,
senha_hash VARCHAR (150) NOT NULL,
dt_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE quiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(10) NOT NULL UNIQUE,
    titulo VARCHAR(100) NOT NULL,
    dificuldade VARCHAR(20) NOT NULL,
    descricao VARCHAR(255)
);

CREATE TABLE pergunta (
    idPergunta INT PRIMARY KEY AUTO_INCREMENT,
    fkQuiz INT NOT NULL,
    numeroPergunta INT NOT NULL,
    enunciado VARCHAR(500) NOT NULL,
    versaoJogo VARCHAR(20) DEFAULT 'Ambas',
    FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz),
    UNIQUE (fkQuiz, numeroPergunta)
);

CREATE TABLE alternativa (
    idAlternativa INT PRIMARY KEY AUTO_INCREMENT,
    fkPergunta INT NOT NULL,
    numeroAlternativa INT NOT NULL,
    texto VARCHAR(500) NOT NULL,
    correta BOOLEAN NOT NULL,
    FOREIGN KEY (fkPergunta) REFERENCES pergunta(idPergunta),
    UNIQUE (fkPergunta, numeroAlternativa)
);

CREATE TABLE tentativa (
    idTentativa INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT NOT NULL,
    fkQuiz INT NOT NULL,
    pontuacao INT NOT NULL DEFAULT 0,
    dataTentativa DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
    FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);

CREATE TABLE resposta (
    idResposta INT PRIMARY KEY AUTO_INCREMENT,
    fkTentativa INT NOT NULL,
    fkPergunta INT NOT NULL,
    fkAlternativa INT NOT NULL,
    FOREIGN KEY (fkTentativa) REFERENCES tentativa(idTentativa),
    FOREIGN KEY (fkPergunta) REFERENCES pergunta(idPergunta),
    FOREIGN KEY (fkAlternativa) REFERENCES alternativa(idAlternativa),
    UNIQUE (fkTentativa, fkPergunta)
);



