// Exercício 1 - Operações Aritméticas

let numero1 = Number(prompt("Digite o primeiro número: "))
let numero2 = Number(prompt("Digite o segundo número1: "))

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2
let resto = numero1 % numero2

console.log("Soma: " + soma)
console.log("Subtração: " + subtracao)
console.log("Multiplicação: " + multiplicacao)
console.log("Divisão: " + divisao)
console.log("Resto da divisão: " + resto)

// Exercício 2 - Área do Retângulo

let largura = Number(prompt("Digite a largura do retângulo: "))
let altura = Number(prompt("Digite a altura do retângulo: "))

let area = largura * altura

console.log("A área do retângulo é: " + area)

// Exercício 3 - Dobro e Metade

let numero = Number(prompt("Digite um número: "))

let dobro = numero * 2
let metade = numero / 2

console.log("O dobro do número é: " + dobro)
console.log("A metade do número é: " + metade)

// Exercício 4 - Média Aritmética

let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))
let nota3 = Number(prompt("Digite a terceira nota: "))

let media = (nota1 + nota2 + nota3) / 3

console.log("A média aritmética é: " + media)

// Exercício 5 - Conversão de Temperatura

let celsius = Number(prompt("Digite a temperatura em Celsius: "))

let fahrenheit = (celsius * 9/5) + 32

console.log("A temperatura em Fahrenheit é: " + fahrenheit)

// Exercício 6 - Valor da Compra

let preco = Number(prompt("Digite o preço do produto: "))
let quantidade = Number(prompt("Digite a quantidade comprada: "))

let total = preco * quantidade

console.log("O valor total da compra é: " + total)

// Exercício 7 - Divisão da Conta

let valorConta = Number(prompt("Digite o valor total da conta: "))
let pessoas = Number(prompt("Digite o número de pessoas: "))

let valorPorPessoa = valorConta / pessoas

console.log("Cada pessoa deve pagar: " + valorPorPessoa)

// Exercício 8 - Idade em Meses

let idadeAnos = Number(prompt("Digite sua idade em anos: "))

let idadeMeses = idadeAnos * 12

console.log("Sua idade em meses é: " + idadeMeses)

// Exercício 9 - Divisão Exata

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))

let resultado = num1 / num2
let restoDivisao = num1 % num2

console.log("Resultado da divisão: " + resultado)
console.log("Resto da divisão: " + restoDivisao)

// Exercício 10 - Horas em Minutos

let horas = Number(prompt("Digite a quantidade de horas: "))

let minutos = horas * 60

console.log("O total em minutos é: " + minutos)
