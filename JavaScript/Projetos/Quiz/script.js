let perguntas = [
    {
        pergunta: "Qual o nome da nossa Escola?",
        respostas: ["Luis Eulalio de Bueno Vidigal Filho", "Senai Osasco", "Senai São Caetano"],
        correta: 0 //Luis Eulalio de Bueno Vidigal Filho
    },
    {
        pergunta: "Qual é o nome do diretor da nossa escola?",
        respostas: ["Santos", "Moraes", "Sanches", "William"],
        correta: 3 //William
    },
    {
        pergunta: "Em que ano começou o primeiro técnico em Desenvolvimento de Sistemas?",
        respostas: ["2020", "2021", "2022", "2023"],
        correta: 3 //2023
    }
]
// Variáveis para controle do quiz
let perguntaAtual = 0;
//Qual pergunta está sendo exibida
//Começa na posição 0 //Primeira pergunta
let pontuacao = 0; //Quantas perguntas o usuário acertou
// Função para exibir a pergunta atual
function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual];
    //pega a pergunta atual dentro do array

    document.getElementById("pergunta").innerText = pergunta.pergunta;

    let respostasDiv = document.getElementById("respostas");
    respostasDiv.innerHTML = ""; 
    //Limpa a div antes de adicionar as novas respostas
    pergunta.respostas.forEach(function(resposta, index) {
        respostasDiv.innerHTML += `<button onclick="verificarResposta(${index})">${resposta}</button>`;
    });
}
function verificarResposta(index) {
    let pergunta = perguntas[perguntaAtual];

    let resultado = document.getElementById("resultado");

    if (index === pergunta.correta) {
        resultado.innerText = "correto!";
        pontuacao++
    } else {
        resultado.innerText = "incorreto!";
    }}
    function proximaPergunta() {
        perguntaAtual++
        //vai para a proxima pergunta
        if (perguntaAtual < perguntas.length) {
            mostrarPergunta() 
            document.getElementById("resultado").innerText = "";
        } else {
            mostrarResultadoFinal()
        }

}
function mostrarResultadoFinal() {
    document.getElementById("container").innerHTML = `<h2>Quiz Finalizado !</h2>
<p>Sua pontuação foi: ${pontuacao}</p>
<button onclick="location.reload()">Jogar
novamente</button>`
}
mostrarPergunta()