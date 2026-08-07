// --------------------------------
// Operador Ternário
// --------------------------------

// 1 - Maior de idade
let idade = Number(prompt("1 - Digite sua idade:"))

let maiorIdade = idade >= 18 ? "Maior de idade" : "Menor de idade"

console.log(maiorIdade)
console.log("--------------------------------")

// 2 - Número par ou ímpar
let numero = Number(prompt("2 - Digite um número:"))

let parImpar = numero % 2 == 0 ? "Par" : "Ímpar"

console.log(parImpar)
console.log("--------------------------------")

// 3 - Aprovado ou Reprovado
let nota = Number(prompt("3 - Digite a nota do aluno:"))

let situacao = nota >= 7 ? "Aprovado" : "Reprovado"

console.log(situacao)
console.log("--------------------------------")

// 4 - Maior número
let numero1 = Number(prompt("4 - Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))

let maiorNumero = numero1 > numero2 ? numero1 : numero2

console.log("Maior número: " + maiorNumero)
console.log("--------------------------------")

// 5 - Desconto
let valorCompra = Number(prompt("5 - Digite o valor da compra:"))

let valorFinal = valorCompra >= 100 ? valorCompra * 0.90 : valorCompra

console.log("Valor final: R$ " + valorFinal)
console.log("--------------------------------")

// 6 - Positivo, Negativo ou Zero
let valor = Number(prompt("6 - Digite um número:"))

let resultado = valor > 0 ? "Positivo" : valor < 0 ? "Negativo" : "Zero"

console.log(resultado)
console.log("--------------------------------")

// --------------------------------
// While
// --------------------------------

// 1 - Contador
let contador = 1

while (contador <= 10) {
    console.log(contador)
    contador++
}

console.log("--------------------------------")

// 2 - Contagem Regressiva
let regressiva = 10

while (regressiva >= 1) {
    console.log(regressiva)
    regressiva--
}

console.log("--------------------------------")

// 3 - Verificação de senha
let senha = prompt("Digite a senha:")

while (senha != "12345") {
    senha = prompt("Senha incorreta. Digite novamente:")
}

console.log("Senha correta!")
console.log("--------------------------------")

// 4 - Sequência numérica
let cinco = 0

while (cinco <= 100) {
    console.log(cinco)
    cinco += 5
}

console.log("--------------------------------")

// 5 - Mostrando mensagem
let mensagem = 1

while (mensagem <= 5) {
    console.log("Eu gosto de JavaScript")
    mensagem++
}

console.log("--------------------------------")

// --------------------------------
// Do While
// --------------------------------

// 1 - Contador
let cont = 1

do {
    console.log(cont)
    cont++
} while (cont <= 20)

console.log("--------------------------------")

// 2 - Resposta do usuário
let resposta

do {
    resposta = prompt("Deseja continuar? (s/n)")
} while (resposta == "s")

console.log("Programa encerrado.")
console.log("--------------------------------")

// 3 - Sequência numérica
let final = Number(prompt("Digite o número final:"))
let inicio = 1

do {
    console.log(inicio)
    inicio++
} while (inicio <= final)

console.log("--------------------------------")

// 4 - Contador
let impar = 1

do {
    console.log(impar)
    impar += 2
} while (impar <= 31)

console.log("--------------------------------")

// --------------------------------
// For
// --------------------------------

// 1 - Contador
for (let i = 1; i <= 30; i++) {
    console.log(i)
}

console.log("--------------------------------")

// 2 - Contagem Regressiva
for (let i = 30; i >= 1; i--) {
    console.log(i)
}

console.log("--------------------------------")

// 3 - Contagem Personalizada
let inicioContagem = Number(prompt("Digite o número inicial:"))
let fimContagem = Number(prompt("Digite o número final:"))

for (let i = inicioContagem; i <= fimContagem; i++) {
    console.log(i)
}

console.log("--------------------------------")

// 4 - Sequência
for (let i = 50; i >= 30; i--) {
    console.log(i)
}

console.log("--------------------------------")

// 5 - Números Alternados
for (let i = 1; i <= 50; i += 2) {
    console.log(i)
}

console.log("--------------------------------")

// --------------------------------
// Array
// --------------------------------

// 1 - Filmes favoritos
let filmes = ["Divertida Mente", "Barbie", "Enrolados"]

console.log(filmes[0])
console.log("--------------------------------")

// 2 - Frutas
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Morango"]

console.log(frutas[2])
console.log("--------------------------------")

// 3 - Adicionando elementos
let cores = ["Azul", "Rosa", "Verde"]

cores.push("Preto")

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}

console.log("--------------------------------")

// 4 - Removendo elementos
let numeros = [10, 20, 30, 40]

numeros.pop()

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

console.log("--------------------------------")

// 5 - Adicionando no início
let cidades = ["São Paulo", "Suzano"]

cidades.unshift("Mogi das Cruzes")

for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i])
}

console.log("--------------------------------")