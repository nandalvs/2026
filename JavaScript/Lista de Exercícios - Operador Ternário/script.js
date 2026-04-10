//Exercício 1 - Verificação de Maioridade
let idade = 18
let maioridade = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(maioridade)
console.log("-----------------")

//Exercício 2 - Par ou Ímpar
let numero = 7
let parImpar = numero % 2 == 0 ? "Par" : "Ímpar"
console.log(parImpar)
console.log("-----------------")

//Exercício 3 - Resultado Escolar
let nota = 6
let resultado = nota >= 6 ? "Aprovado" : "Reprovado"
console.log(resultado)
console.log("-----------------")

//Exercício 4 - Saldo Bancário
let saldo = -20
let situacaoSaldo = saldo > 0 ? "Saldo positivo" : "Saldo negativo"
console.log(situacaoSaldo)
console.log("-----------------")

//Exercício 5 - Desconto na Compra
let valorCompra = 150
let desconto = valorCompra >= 100 ? "Você vai receber 10% de desconto" : "Valor normal"
console.log(desconto)
console.log("-----------------")

//Exercício 6 - Entrada em Evento
let idadeEvento = 16
let entrada = idadeEvento >= 18 ? "Entrada permitida" : "Entrada proibida"
console.log(entrada)
console.log("-----------------")

//Exercício 7 - Login Simples
let usuario = "admin"
let acesso = usuario == "admin" ? "Acesso liberado" : "Acesso negado"
console.log(acesso)
console.log("-----------------")

//Exercício 8 - Temperatura
let temperatura = 32
let clima = temperatura > 30 ? "Está quente" : "Temperatura normal"
console.log(clima)
console.log("-----------------")

//Exercício 9 - Número Positivo ou Negativo
let numero2 = -5
let tipoNumero = numero2 > 0 ? "Número positivo" : "Número negativo ou zero"
console.log(tipoNumero)
console.log("-----------------")

//Exercício 10 - Faixa Etária
let idadePessoa = Number(prompt("Digite a idade:"))
let faixa = idadePessoa < 12 ? "Criança" : idadePessoa < 18 ? "Adolescente" : idadePessoa < 60 ? "Adulto" : "Idoso"
console.log(faixa)
console.log("-----------------")

//Exercício 11 - Velocidade do Veículo
let velocidade = 90
let multa = velocidade > 80 ? "Multado" : "Dentro do limite"
console.log(multa)
console.log("-----------------")

//Exercício 12 - Compra Aprovada
let valor = 300
let limite = 500
let compra = valor <= limite ? "Compra aprovada" : "Compra recusada"
console.log(compra)
console.log("-----------------")

//Exercício 13 - Sistema de Pontuação de Jogo
let pontos = Number(prompt("Digite a pontuação:"))
let nivel = pontos < 100 ? "Iniciante" : pontos < 500 ? "Intermediário" : pontos < 1000 ? "Avançado" : "Mestre"
console.log(nivel)
console.log("-----------------")
