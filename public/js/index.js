let imagens = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKsT64SyrQ95DMMTVLugP-m9FxNan6xyeW0ReUDf7aayMus-MU51JGBQ&s=10',
    'https://evilhazard.com.br/wp-content/uploads/2021/01/re4532361.jpg',
    'https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/03/16/resident-evil-4-remake-jogo-e1678975680521-qeffi8m0d202.jpg',

];

let imagemAtual = 0;

function trocarImagem() {

    imagemAtual++;

    if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }

    document.getElementById('header').style.backgroundImage =
        `url('${imagens[imagemAtual]}')`;
}

setInterval(trocarImagem, 3000);