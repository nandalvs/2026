let perguntas = [

    {
        pergunta: "Qual é o nome do protagonista de One Piece?",
        respostas: ["Zoro", "Luffy", "Sanji", "Ace"],
        correta: 1
    },

    {
        pergunta: "Qual é o sonho do Luffy?",
        respostas: ["Virar Almirante", "Virar o Rei dos Piratas", "Encontrar um tesouro", "Ser o mais forte"],
        correta: 1
    },

    {
        pergunta: "Quem usa três espadas?",
        respostas: ["Sanji", "Law", "Zoro", "Mihawk"],
        correta: 2
    },

    {
        pergunta: "Qual personagem é o cozinheiro do bando?",
        respostas: ["Usopp", "Franky", "Sanji", "Brook"],
        correta: 2
    },

    {
        pergunta: "Qual é o nome do navio atual dos Chapéus de Palha?",
        respostas: ["Going Merry", "Sunny", "Red Force", "Moby Dick"],
        correta: 1
    },

    {
        pergunta: "Quem é o médico do bando?",
        respostas: ["Chopper", "Jinbe", "Ace", "Buggy"],
        correta: 0
    },

    {
        pergunta: "Qual personagem possui poderes de borracha?",
        respostas: ["Law", "Kid", "Luffy", "Shanks"],
        correta: 2
    },

    {
        pergunta: "Quem é o irmão de Luffy?",
        respostas: ["Zoro", "Ace", "Sanji", "Kaido"],
        correta: 1
    },

    {
        pergunta: "Qual é o nome do tesouro lendário?",
        respostas: ["Red Line", "Grand Line", "One Piece", "Laugh Tale"],
        correta: 2
    },

    {
        pergunta: "Quem é o atirador do bando?",
        respostas: ["Usopp", "Brook", "Franky", "Jinbe"],
        correta: 0
    }

]

let perguntaAtual = 0;
let pontuacao = 0;

function mostrarPergunta(){

    let pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").innerText = pergunta.pergunta;

    let respostasDiv = document.getElementById("respostas");

    respostasDiv.innerHTML = "";

    pergunta.respostas.forEach(function(resposta, index){

        respostasDiv.innerHTML += `
        
        <button onclick="verificarResposta(${index})">
        ${resposta}
        </button>

        `;

    });

}

function verificarResposta(index){

    let pergunta = perguntas[perguntaAtual];

    let resultado = document.getElementById("resultado");

    if(index === pergunta.correta){

        resultado.innerText = "Resposta correta!";
        pontuacao++;

    }else{

        resultado.innerText = "Resposta incorreta!";

    }

}

function proximaPergunta(){

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){

        mostrarPergunta();

        document.getElementById("resultado").innerText = "";

    }else{

        mostrarResultadoFinal();

    }

}

function mostrarResultadoFinal(){

    document.getElementById("container").innerHTML = `

    <h1>Quiz Finalizado!</h1>

    <h2>Sua pontuação foi: ${pontuacao}/10</h2>

    <button onclick="location.reload()">
    Jogar Novamente
    </button>

    `;

}

mostrarPergunta();