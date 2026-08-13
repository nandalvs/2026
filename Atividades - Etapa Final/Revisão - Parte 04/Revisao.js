// Função Anônima

// 1 - Mensagem

let mensagem = function() {
    console.log("Olá! Esta é uma mensagem.")
}

mensagem()

console.log("----------------------")


// 2 - Dobro

let dobro = function(numero) {
    return numero * 2
}

console.log(dobro(5))

console.log("----------------------")


// 3 - Média

let calcularMedia = function(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
}

console.log(calcularMedia(8, 7, 9))

console.log("----------------------")


// 4 - Média + situação

let calcularMedia2 = function(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
}

let verificarSituacao = function(media) {
    if (media >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

let media = calcularMedia2(8, 7, 9)

console.log("Média: " + media)
console.log("Situação: " + verificarSituacao(media))

console.log("----------------------")


// 5 - Operações

let somar = function(numero1, numero2) {
    return numero1 + numero2
}

let subtrair = function(numero1, numero2) {
    return numero1 - numero2
}

let multiplicar = function(numero1, numero2) {
    return numero1 * numero2
}

let dividir = function(numero1, numero2) {
    return numero1 / numero2
}

console.log(somar(10, 5))
console.log(subtrair(10, 5))
console.log(multiplicar(10, 5))
console.log(dividir(10, 5))

console.log("----------------------")
console.log("----------------------")


// Arrow Function

// 1 - Multiplicação

let multiplicacao = (numero1, numero2) => {
    return numero1 * numero2
}

console.log(multiplicacao(5, 3))

console.log("----------------------")


// 2 - Triplo

let triplo = (numero) => {
    return numero * 3
}

console.log(triplo(5))

console.log("----------------------")


// 3 - Par ou Ímpar

let parOuImpar = (numero) => {
    if (numero % 2 == 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}

console.log(parOuImpar(8))

console.log("----------------------")


// 4 - Maior Número

let maiorNumero = (numero1, numero2) => {
    if (numero1 > numero2) {
        return numero1
    } else {
        return numero2
    }
}

console.log(maiorNumero(10, 5))

console.log("----------------------")


// 5 - Positivo, negativo ou zero

let verificarNumero = (numero) => {
    if (numero > 0) {
        return "Positivo"
    } else if (numero < 0) {
        return "Negativo"
    } else {
        return "Zero"
    }
}

console.log(verificarNumero(-5))

console.log("----------------------")
console.log("----------------------")


// DOM - Manipulação

// 1 - Trocando Textos

function trocarTexto() {
    let texto = document.getElementById("texto")

    texto.innerHTML = "Texto alterado com JS!"
}


// 2 - Personalizando a div

function mudarCor() {
    let div = document.getElementById("divCor")

    div.style.backgroundColor = "blue"
}


// 3 - Personalização

function personalizar() {
    let texto = document.getElementById("textoPersonalizado")
    let titulo = document.getElementById("tituloPersonalizado")

    texto.style.color = "blue"
    texto.style.fontSize = "20px"

    titulo.style.color = "pink"
    titulo.style.fontSize = "35px"
}


// 4 - Escondendo o elemento

function esconderMostrar() {
    let elemento = document.getElementById("elemento")

    if (elemento.style.display == "none") {
        elemento.style.display = "block"
    } else {
        elemento.style.display = "none"
    }
}