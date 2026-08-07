// revisão parte 03 - Revisao.js

// 1 - Manipulando Texto

let frase = prompt("Digite uma frase:")

console.log("Quantidade de caracteres:", frase.length)
console.log("Maiúsculas:", frase.toUpperCase())
console.log("Minúsculas:", frase.toLowerCase())

let palavraAntiga = prompt("Digite a palavra que deseja substituir:")
let palavraNova = prompt("Digite a nova palavra:")

console.log("Frase modificada:", frase.replace(palavraAntiga, palavraNova))

let busca = prompt("Digite uma palavra para verificar se existe:")

console.log("A palavra existe?", frase.includes(busca))

console.log("Caractere na posição 5:", frase.charAt(5))

console.log("----------------------")

// 2 - Adivinhar o número

let numeroSorteado = Math.floor(Math.random() * 10) + 1
let tentativa = Number(prompt("Adivinhe um número entre 1 e 10:"))

if (tentativa == numeroSorteado) {
console.log("Você acertou!")
} else {
console.log("Você errou!")
console.log("O número era:", numeroSorteado)
}

console.log("----------------------")

// 3 - Arredondando valores

let numeroDecimal = Number(prompt("Digite um número decimal:"))

console.log("Arredondado para cima:", Math.ceil(numeroDecimal))
console.log("Arredondado para baixo:", Math.floor(numeroDecimal))
console.log("Arredondado normalmente:", Math.round(numeroDecimal))

console.log("----------------------")

// 4 - Manipulando números

let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))
let numero3 = Number(prompt("Digite o terceiro número:"))
let numero4 = Number(prompt("Digite o quarto número:"))
let numero5 = Number(prompt("Digite o quinto número:"))
let numero6 = Number(prompt("Digite o sexto número:"))
let numero7 = Number(prompt("Digite o sétimo número:"))
let numero8 = Number(prompt("Digite o oitavo número:"))
let numero9 = Number(prompt("Digite o nono número:"))
let numero10 = Number(prompt("Digite o décimo número:"))

console.log("Maior número:", Math.max(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10))

console.log("Menor número:", Math.min(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10))

console.log("----------------------")

// 5 - Novos valores

let numero = Number(prompt("Digite um número:"))

console.log("Valor absoluto:", Math.abs(numero))
console.log("Elevado a 6:", Math.pow(numero, 6))
console.log("Raiz quadrada:", Math.sqrt(numero))

console.log("----------------------")

// 1 - Saudação

function saudacao() {
console.log("Olá! Seja bem-vindo(a)!")
}

saudacao()

console.log("----------------------")

// 2 - Contar Caracteres

function contarCaracteres() {
let palavra = prompt("Digite uma palavra:")
return palavra.length
}

let quantidade = contarCaracteres()

console.log("Quantidade de caracteres:", quantidade)

console.log("----------------------")

// 3 - Maior Número

function maiorNumero() {
let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))

if (num1 > num2) {
    return num1
} else {
    return num2
}

}

let maior = maiorNumero()

console.log("Maior número:", maior)

console.log("----------------------")

// 4 - Potência

function potencia() {
let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))

return Math.pow(numero1, numero2)

}

let resultadoPotencia = potencia()

console.log("Resultado:", resultadoPotencia)

console.log("----------------------")

// 5 - Contagem

function contagem() {
let inicio = Number(prompt("Digite o primeiro número:"))
let fim = Number(prompt("Digite o segundo número:"))

for (let numero = inicio; numero <= fim; numero++) {
    console.log(numero)
}

}

contagem()

console.log("----------------------")

// 1 - Saudação

function cumprimentar(nome) {
console.log("Olá, " + nome + "!")
}

let nome = prompt("Digite seu nome:")

cumprimentar(nome)

console.log("----------------------")

// 2 - Soma de Dois Números

function soma(numero1, numero2) {
return numero1 + numero2
}

let valor1 = Number(prompt("Digite o primeiro número:"))
let valor2 = Number(prompt("Digite o segundo número:"))

console.log("Resultado da soma:", soma(valor1, valor2))

console.log("----------------------")

// 3 - Número Par ou Ímpar

function parOuImpar(numero) {

if (numero % 2 == 0) {
    return "Par"
} else {
    return "Ímpar"
}

}

let numeroPar = Number(prompt("Digite um número:"))

console.log(parOuImpar(numeroPar))

console.log("----------------------")

// 4 - Média de Três Notas

function media(nota1, nota2, nota3) {
return (nota1 + nota2 + nota3) / 3
}

let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
let nota3 = Number(prompt("Digite a terceira nota:"))

console.log("Média:", media(nota1, nota2, nota3))

console.log("----------------------")

// 5 - Dobro de um Número

function dobro(numero) {
return numero * 2
}

let numeroDobro = Number(prompt("Digite um número:"))

console.log("Dobro:", dobro(numeroDobro))

console.log("----------------------")

// 6 - Aprovação

function aprovacao(media) {

if (media >= 7) {
    return "Aprovado"
} else {
    return "Reprovado"
}

}

let mediaAluno = Number(prompt("Digite a média do aluno:"))

console.log(aprovacao(mediaAluno))

console.log("----------------------")

// 7 - Calculadora

function calculadora(numero1, numero2, operacao) {

if (operacao == "+") {
    return numero1 + numero2
} else if (operacao == "-") {
    return numero1 - numero2
} else if (operacao == "*") {
    return numero1 * numero2
} else if (operacao == "/") {
    return numero1 / numero2
} else {
    return "Operação inválida"
}

}

let primeiroNumero = Number(prompt("Digite o primeiro número:"))
let segundoNumero = Number(prompt("Digite o segundo número:"))
let operacao = prompt("Digite a operação (+, -, * ou /):")

console.log("Resultado:", calculadora(primeiroNumero, segundoNumero, operacao))

console.log("----------------------")

// Desafio - Fatorial

function fatorial(numero) {

let resultado = 1

for (let contador = 1; contador <= numero; contador++) {
    resultado = resultado * contador
}

return resultado

}

let numeroFatorial = Number(prompt("Digite um número inteiro positivo:"))

console.log("Fatorial:", fatorial(numeroFatorial))
