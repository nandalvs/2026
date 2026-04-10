// Exercício 1 - Comparando Dois Números

let valor1 = 18
let valor2 = 20
console.log(valor1 > valor2) //false
console.log(valor1 < valor2) //true
console.log(valor1 == valor2) //false
console.log("------------------------")
// Exercício 2 - Idade para Votar
let idadeVoto = Number(prompt("Vamos verificar se você tem idade para votar! "))
console.log(idadeVoto >= 16)
console.log("---------------------")
// Exercício 3 - Maioridade

let idade = Number(prompt("Digite sua idade: "))

console.log(idade >= 18) // maior de idade
console.log(idade >= 60) // idoso
console.log("---------------------")
// Exercício 4 - Verificação de Login

let usuario = prompt("Digite o nome de usuário: ")

console.log(usuario == "admin")
console.log("---------------------")
// Exercício 5 - Saldo Bancário

let saldo = Number(prompt("Digite seu saldo: "))
let saque = Number(prompt("Digite o valor do saque: "))

let saldoFinal = saldo - saque

console.log(saldo >= saque)        // saldo suficiente
console.log(saldoFinal > 100)      // saldo maior que 100 após saque
console.log("---------------------")
// Exercício 6 - Média do Aluno

let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))

let media = (nota1 + nota2) / 2

console.log(media >= 6)
console.log("---------------------")
// Exercício 7 - Preço do Produto

let preco = Number(prompt("Digite o preço do produto: "))

console.log(preco > 50)
console.log(preco <= 20)
console.log("---------------------")
// Exercício 8 - Velocidade da Via

let velocidade = Number(prompt("Digite a velocidade do carro: "))

console.log(velocidade > 80)
console.log(velocidade > 120)
console.log("---------------------")
// Exercício 9 - Altura para Brinquedo

let altura = Number(prompt("Digite sua altura em metros: "))

console.log(altura >= 1.40)
console.log("---------------------")
// Exercício 12 - Nome Cadastrado

let nome = prompt("Digite seu nome: ")

console.log(nome == "Maria")
console.log(nome != "João")
console.log("---------------------")
// Exercício 13 - Senha Simples

let senha = prompt("Digite a senha: ")

console.log(senha == "1234")
console.log("---------------------")
// Exercício 14 - Parcelamento

let valorCompra = Number(prompt("Digite o valor da compra: "))
let valorParcela = Number(prompt("Digite o valor da parcela: "))

console.log(valorParcela <= 200)
console.log("---------------------")
// Exercício 15 - Idade em Meses

let idadeAnos = Number(prompt("Digite sua idade em anos: "))

let idadeMeses = idadeAnos * 12

console.log(idadeMeses > 200)
console.log("---------------------")
