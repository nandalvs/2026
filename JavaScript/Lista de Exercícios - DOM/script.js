// Exercicio 1 - Alterando Texto
function mudarTexto() {
    document.getElementById("titulo").innerText =
        "Aprendendo DOM com JavaScript"
}


// Exercicio 2 - Mensagem de Boas-Vindas
function boasVindas() {
    let nome = document.getElementById("nome").value

    if (nome == "") {
        document.getElementById("msg1").innerText = "Digite seu nome"
    } else {
        document.getElementById("msg1").innerText =
            "Bem-vindo, " + nome
    }
}


// Exercicio 3 - Alterar Frase
function mudarFrase() {
    document.getElementById("frase").innerText =
        "Manipulando HTML com JavaScript"
}


// Exercicio 4 - Campo Vazio
function verificarNome() {
    let nome = document.getElementById("nome2").value

    if (nome == "") {
        document.getElementById("msg2").innerText =
            "Digite um nome primeiro!"
    } else {
        document.getElementById("msg2").innerText =
            "Olá, " + nome
    }
}


// Exercicio 5 - Modo Escuro 
let escuro = false

function modoEscuro() {

    if (escuro == false) {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        escuro = true
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        escuro = false
    }

}


// Exercicio 6 - Verificar Nota
function verificarNota() {
    let nota = document.getElementById("nota").value

    if (nota == "") {
        document.getElementById("msg3").innerText =
            "Digite uma nota"
    } else if (nota >= 7) {
        document.getElementById("msg3").innerText =
            "Aluno aprovado"
    } else {
        document.getElementById("msg3").innerText =
            "Aluno reprovado"
    }
}


// Exercicio 7 - Surpresa
function surpresa() {
    document.getElementById("msg4").innerText =
        "Você encontrou a mensagem secreta!"
}


// Exercicio 8 - Destacar Texto
function destacar() {
    let t = document.getElementById("texto")

    t.style.color = "red"
    t.style.fontWeight = "bold"
}


// Exercicio 9 - Contar Caracteres
function contar() {
    let texto = document.getElementById("texto2").value

    document.getElementById("msg5").innerText =
        "Você digitou " + texto.length + " caracteres"
}


// Exercicio 10 - Mudar Cor
function mudarCor() {
    document.getElementById("texto3").style.color = "blue"
}


// Exercicio 12 - Esconder Texto
function sumir() {
    let t = document.getElementById("texto4")

    if (t.style.display == "none") {
        t.style.display = "block"
    } else {
        t.style.display = "none"
    }
}


// Exercicio 13 - Meses Vividos
function meses() {
    let idade = document.getElementById("idade").value

    if (idade == "") {
        document.getElementById("msg6").innerText =
            "Digite sua idade"
    } else {
        document.getElementById("msg6").innerText =
            "Você viveu " + (idade * 12) + " meses"
    }
}


// Exercicio 14 - Maioridade
function maioridade() {
    let idade = document.getElementById("idade2").value

    if (idade == "") {
        document.getElementById("msg7").innerText =
            "Digite sua idade"
    } else if (idade >= 18) {
        document.getElementById("msg7").innerText =
            "Maior de idade"
    } else {
        document.getElementById("msg7").innerText =
            "Menor de idade"
    }
}