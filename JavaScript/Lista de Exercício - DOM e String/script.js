// --------------------------------
// EXERCÍCIO 1 - Minúsculo
function converter() {
    let nome = document.getElementById("nome").value
    let minusculo = document.getElementById("minusculo")

    minusculo.innerText = nome.toLowerCase()
}

// --------------------------------
// EXERCÍCIO 2 - Contar letras
function contar() {
    let nome = document.getElementById("nome").value
    let quantidade = document.getElementById("quantidade")

    quantidade.innerText = "Quantidade de letras: " + nome.length
}

// --------------------------------
// EXERCÍCIO 3 - Última letra
function ultima() {
    let palavra = document.getElementById("palavra").value
    let resp = document.getElementById("resp1")

    resp.innerText = palavra[palavra.length - 1]
}

// --------------------------------
// EXERCÍCIO 4 - Primeiras 4 letras
function primeiras() {
    let palavra = document.getElementById("palavra").value
    let resp = document.getElementById("resp2")

    resp.innerText = palavra.slice(0, 4)
}

// --------------------------------
// EXERCÍCIO 5 - Últimas 3 letras
function ultimas() {
    let palavra = document.getElementById("palavra").value
    let resp = document.getElementById("resp3")

    resp.innerText = palavra.slice(-3)
}

// --------------------------------
// EXERCÍCIO 6 - Nome completo
function completo() {
    let nome = document.getElementById("nome1").value
    let sobrenome = document.getElementById("sobrenome").value
    let resultado = document.getElementById("nomeCompleto")

    resultado.innerText = nome + " " + sobrenome
}

// --------------------------------
// EXERCÍCIO 7 - Primeira letra
function primeiraLetra() {
    let nome = document.getElementById("nome2").value
    let letra = document.getElementById("letra")

    letra.innerText = "A primeira letra do seu nome é: " + nome[0]
}

// --------------------------------
// EXERCÍCIO 8 - Mensagem formatada
function mensagem() {
    let nome = document.getElementById("nome3").value
    let msg = document.getElementById("msg")

    msg.innerText = "Olá, " + nome.toUpperCase() + "! Seja bem-vinda ao sistema."
}

// --------------------------------
// EXERCÍCIO 9 - Nome curto ou longo
function verificar() {
    let nome = document.getElementById("nome4").value
    let tipo = document.getElementById("tipo")

    if (nome.length <= 5) {
        tipo.innerText = "Nome curto"
    } else {
        tipo.innerText = "Nome longo"
    }
}