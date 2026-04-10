// Exercicio 1 - Contador simples
let num1 = 1
do {
    console.log(num1)
    num1++
} while (num1 <= 20)
console.log("-----------")

// Exercicio 2 - Resposta do usuário
let resposta
do {
    resposta = prompt("Deseja continuar? (s/n)")
} while (resposta == "s")
console.log("Programa encerrado")
console.log("-----------")

//Exercicio 3 - Sequência numérica definida pelo usuário
let final = Number(prompt("Digite o número final da sequência: "))
let contador1 = 1
do {
    console.log(contador1)
    contador1++
} while (contador1 <= final)
console.log("-----------")

// Exercicio 4 - Contador com salto
let num2 = 1
do {
    console.log(num2)
    num2 += 2
} while (num2 <= 31)
console.log("-----------")

//Exercicio 5 - Classificação numérica
let contador2 = 1
let numero
do {
    numero = Number(prompt("Digite um número: "))
    if (numero > 0) {
        console.log("NÚMERO POSITIVO")
    } else if (numero < 0) {
        console.log("NÚMERO NEGATIVO")
    } else {
        console.log("O NÚMERO É ZERO")
    }
    contador2++
} while (contador2 <= 5)
console.log("-----------")

// Exercicio 6 - Operações matemáticas
let opcao
let n1
let n2
do {
    opcao = prompt("Deseja fazer uma conta? (s/n)")
    if (opcao == "s") {
        n1 = Number(prompt("Digite o primeiro número: "))
        n2 = Number(prompt("Digite o segundo número: "))
        console.log("Soma: ", n1 + n2)
    }
} while (opcao == "s")
console.log("Programa encerrado")
console.log("-----------")

// Exercicio 7 - Repetição de mensagem
let contador3 = 1
do {
    console.log("Estudando JavaScript")
    contador3++
} while (contador3 <= 10)
console.log("-----------")

// Exercicio 8 - Validação de número positivo
let numPositivo
do {
    numPositivo = Number(prompt("Digite um número positivo: "))
} while (numPositivo <= 0)
console.log("Valor válido")
console.log("-----------")

// Exercicio 9 - Controle de tentativas
let senha
do {
    senha = prompt("Digite a senha: ")
} while (senha != "senai2026")
console.log("Acesso liberado")
console.log("-----------")

// Exercicio 10 - Soma de números
let soma = 0
let numeroSoma
let continuar
do {
    numeroSoma = Number(prompt("Digite um número inteiro: "))
    soma = soma + numeroSoma
    continuar = prompt("Deseja continuar? (s/n)")
} while (continuar == "s")
console.log("Total da soma: ", soma)
console.log("-----------")