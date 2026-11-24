
const quizzes = {

    quiz1: [
        {
            question: "Qual é a missão principal de Leon S. Kennedy em Resident Evil 4?",
            answers: [
                { id: 1, text: "Investigar o desaparecimento de Chris Redfield.", correct: false },
                { id: 2, text: "Resgatar Ashley Graham, filha do presidente dos Estados Unidos.", correct: true },
                { id: 3, text: "Destruir uma instalação da Umbrella Corporation.", correct: false },
                { id: 4, text: "Encontrar uma cura para o vírus T.", correct: false }
            ]
        },
        {
            question: "Quem é responsável pelo sequestro de Ashley Graham?",
            answers: [
                { id: 1, text: "Los Illuminados.", correct: true },
                { id: 2, text: "Umbrella Corporation.", correct: false },
                { id: 3, text: "Tricell.", correct: false },
                { id: 4, text: "S.T.A.R.S.", correct: false }
            ]
        },
        {
            question: "Em qual país se passa a maior parte da história de Resident Evil 4?",
            answers: [
                { id: 1, text: "Alemanha.", correct: false },
                { id: 2, text: "Itália.", correct: false },
                { id: 3, text: "Espanha.", correct: true },
                { id: 4, text: "França.", correct: false }
            ]
        },
        {
            question: "Qual é o nome da organização religiosa antagonista da história?",
            answers: [
                { id: 1, text: "TerraSave.", correct: false },
                { id: 2, text: "Los Illuminados.", correct: true },
                { id: 3, text: "Umbrella.", correct: false },
                { id: 4, text: "Neo-Umbrella.", correct: false }
            ]
        },
        {
            question: "Qual personagem é o protagonista jogável da campanha principal?",
            answers: [
                { id: 1, text: "Luis Serra.", correct: false },
                { id: 2, text: "Jack Krauser.", correct: false },
                { id: 3, text: "Leon S. Kennedy.", correct: true },
                { id: 4, text: "Albert Wesker.", correct: false }
            ]
        }
    ],

    quiz2: [
        {
            question: "Qual é a relação de Ashley Graham com o presidente dos Estados Unidos?",
            answers: [
                { id: 1, text: "É sua filha.", correct: true },
                { id: 2, text: "É sua irmã.", correct: false },
                { id: 3, text: "É sua assessora.", correct: false },
                { id: 4, text: "É sua guarda-costas.", correct: false }
            ]
        },
        {
            question: "Qual personagem é conhecido por auxiliar Leon durante sua jornada, oferecendo armas e equipamentos?",
            answers: [
                { id: 1, text: "Osmund Saddler.", correct: false },
                { id: 2, text: "Ramon Salazar.", correct: false },
                { id: 3, text: "O Mercador (Merchant).", correct: true },
                { id: 4, text: "Bitores Méndez.", correct: false }
            ]
        },
        {
            question: "Qual é a identidade da personagem conhecida como Ada Wong?",
            answers: [
                { id: 1, text: "Uma cientista da Umbrella.", correct: false },
                { id: 2, text: "Uma agente que trabalha em missões secretas e possui objetivos próprios.", correct: true },
                { id: 3, text: "Uma integrante da família Salazar.", correct: false },
                { id: 4, text: "Uma sobrevivente da vila.", correct: false }
            ]
        },
        {
            question: "No Resident Evil 4 original (2005), qual era a ocupação anterior de Luis Serra?",
            answers: [
                { id: 1, text: "Um antigo policial espanhol.", correct: true },
                { id: 2, text: "Um pesquisador da Umbrella.", correct: false },
                { id: 3, text: "Um comandante militar.", correct: false },
                { id: 4, text: "Um agente do governo americano.", correct: false }
            ]
        },
        {
            question: "Qual é o papel de Osmund Saddler na organização Los Illuminados?",
            answers: [
                { id: 1, text: "Ele é responsável pelo comércio de armas.", correct: false },
                { id: 2, text: "Ele é o líder da organização.", correct: true },
                { id: 3, text: "Ele é um agente enviado pelo governo.", correct: false },
                { id: 4, text: "Ele é o responsável por resgatar Ashley.", correct: false }
            ]
        }
    ],

    quiz3: [
        {
            question: "Qual é o nome do parasita responsável por controlar os hospedeiros em Resident Evil 4?",
            answers: [
                { id: 1, text: "T-Virus.", correct: false },
                { id: 2, text: "G-Virus.", correct: false },
                { id: 3, text: "Las Plagas.", correct: true },
                { id: 4, text: "C-Virus.", correct: false }
            ]
        },
        {
            question: "Como são chamados os habitantes infectados que atacam Leon na vila?",
            answers: [
                { id: 1, text: "Ganados.", correct: true },
                { id: 2, text: "Lickers.", correct: false },
                { id: 3, text: "Hunters.", correct: false },
                { id: 4, text: "Tyrants.", correct: false }
            ]
        },
        {
            question: "Qual criatura é conhecida por seu tamanho gigantesco e força física, aparecendo como um dos grandes desafios da campanha?",
            answers: [
                { id: 1, text: "Verdugo.", correct: false },
                { id: 2, text: "El Gigante.", correct: true },
                { id: 3, text: "Regenerador.", correct: false },
                { id: 4, text: "Garrador.", correct: false }
            ]
        },
        {
            question: "Qual inimigo é conhecido por sua capacidade de regenerar partes do corpo?",
            answers: [
                { id: 1, text: "Dr. Salvador.", correct: false },
                { id: 2, text: "Colmillos.", correct: false },
                { id: 3, text: "Regenerador.", correct: true },
                { id: 4, text: "Novistador.", correct: false }
            ]
        },
        {
            question: "Qual é a relação entre Las Plagas e os Ganados?",
            answers: [
                { id: 1, text: "Las Plagas é uma organização que recruta os Ganados.", correct: false },
                { id: 2, text: "Las Plagas é um parasita que infecta hospedeiros, originando os Ganados.", correct: true },
                { id: 3, text: "Las Plagas é uma arma desenvolvida pelo governo.", correct: false },
                { id: 4, text: "Las Plagas é uma espécie de criatura exclusiva da ilha.", correct: false }
            ]
        }
    ],

    quiz4: [
        {
            question: "Qual é o primeiro grande ambiente explorado por Leon durante sua missão?",
            answers: [
                { id: 1, text: "O castelo de Salazar.", correct: false },
                { id: 2, text: "A ilha militar.", correct: false },
                { id: 3, text: "A vila espanhola.", correct: true },
                { id: 4, text: "O laboratório subterrâneo.", correct: false }
            ]
        },
        {
            question: "Quem é o governante do castelo explorado por Leon?",
            answers: [
                { id: 1, text: "Bitores Méndez.", correct: false },
                { id: 2, text: "Ramon Salazar.", correct: true },
                { id: 3, text: "Osmund Saddler.", correct: false },
                { id: 4, text: "Jack Krauser.", correct: false }
            ]
        },
        {
            question: "Qual é a principal função do Mercador encontrado em diferentes regiões do jogo?",
            answers: [
                { id: 1, text: "Fornecer informações sobre a localização de Ashley.", correct: false },
                { id: 2, text: "Vender armas, equipamentos e oferecer melhorias.", correct: true },
                { id: 3, text: "Controlar os inimigos da região.", correct: false },
                { id: 4, text: "Transportar Leon entre os cenários.", correct: false }
            ]
        },
        {
            question: "Qual das alternativas apresenta a sequência geral dos principais ambientes da campanha?",
            answers: [
                { id: 1, text: "Ilha, vila e castelo.", correct: false },
                { id: 2, text: "Castelo, ilha e vila.", correct: false },
                { id: 3, text: "Vila, castelo e ilha.", correct: true },
                { id: 4, text: "Vila, ilha e castelo.", correct: false }
            ]
        },
        {
            question: "No Resident Evil 4 original e no remake, qual é a importância do castelo de Salazar para a narrativa?",
            answers: [
                { id: 1, text: "É o local onde Leon recebe sua missão inicial.", correct: false },
                { id: 2, text: "É uma das principais áreas controladas por integrantes de Los Illuminados.", correct: true },
                { id: 3, text: "É a sede da organização S.T.A.R.S.", correct: false },
                { id: 4, text: "É o esconderijo da Umbrella Corporation.", correct: false }
            ]
        }
    ],

    quiz5: [
        {
            question: "No Resident Evil 4 original e no remake, qual é a principal finalidade da maleta de Leon?",
            answers: [
                { id: 1, text: "Armazenar e organizar armas, munições e itens.", correct: true },
                { id: 2, text: "Guardar exclusivamente documentos da missão.", correct: false },
                { id: 3, text: "Armazenar somente itens de cura.", correct: false },
                { id: 4, text: "Transportar personagens resgatados.", correct: false }
            ]
        },
        {
            question: "Qual é a principal vantagem de melhorar uma arma com o Mercador?",
            answers: [
                { id: 1, text: "Transformar a arma em um equipamento exclusivo de combate corpo a corpo.", correct: false },
                { id: 2, text: "Aprimorar atributos como poder de fogo, capacidade e velocidade de recarga.", correct: true },
                { id: 3, text: "Eliminar a necessidade de encontrar munições.", correct: false },
                { id: 4, text: "Tornar Leon imune aos ataques dos inimigos.", correct: false }
            ]
        },
        {
            question: "No remake de 2023, qual mecânica permite que Leon se defenda de determinados ataques utilizando sua faca?",
            answers: [
                { id: 1, text: "Sistema de esquiva automática.", correct: false },
                { id: 2, text: "Sistema de bloqueio e aparagem (parry).", correct: true },
                { id: 3, text: "Sistema de regeneração de vida.", correct: false },
                { id: 4, text: "Sistema de camuflagem.", correct: false }
            ]
        },
        {
            question: "Qual alternativa representa uma diferença importante entre o Resident Evil 4 original e o remake de 2023?",
            answers: [
                { id: 1, text: "O original apresenta Leon como protagonista, enquanto o remake apresenta Ashley.", correct: false },
                { id: 2, text: "O remake introduz a mecânica de aparagem com faca e reformula diversas mecânicas de combate.", correct: true },
                { id: 3, text: "O original não possui o Mercador, enquanto o remake o adiciona.", correct: false },
                { id: 4, text: "O remake remove completamente a exploração de cenários.", correct: false }
            ]
        },
        {
            question: "No remake de 2023, qual é a função do sistema de criação de itens (crafting)?",
            answers: [
                { id: 1, text: "Permitir a fabricação de determinados recursos, como munições e itens de suporte, utilizando materiais.", correct: true },
                { id: 2, text: "Permitir que Leon construa novas áreas para explorar.", correct: false },
                { id: 3, text: "Transformar armas comuns em personagens jogáveis.", correct: false },
                { id: 4, text: "Substituir completamente o sistema de compras do Mercador.", correct: false }
            ]
        }
    ]

};


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("next-btn");

let questionIndex = 0;
let score = 0;
let questions = [];

function selecionarQuiz(numeroQuiz) {

    questions = quizzes[numeroQuiz];

    document.getElementById('telaQuizzes').style.display = 'none';
    document.getElementById('telaPerguntas').style.display = 'block';

    startQuiz();

}

function voltarQuizzes() {
    document.getElementById('telaPerguntas').style.display = 'none';
    document.getElementById('telaQuizzes').style.display = 'block';

    resetState();

    questionElement.innerHTML = "";
}

function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    document.getElementById('voltar-btn').style.display = "none";
    showQuestion()
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function showQuestion() {

    resetState();

    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
        document.querySelector(".app").classList.remove("resultado");
    });
}

function selectAnswer(e) {

    const answers = questions[questionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++

    } else {
        selectedBtn.classList.add("incorrect");
    }


    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.id == correctAnswer.id) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} / ${questions.length}!`;
    nextButton.innerHTML = 'Nova tentativa';
    nextButton.style.display = "block";
    document.getElementById('voltar-btn').style.display = "block";
    document.querySelector(".app").classList.add("resultado");

}

function handleNextButton() {
    questionIndex++;
    if (questionIndex < questions.length) {
        showQuestion();

    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (questionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})





