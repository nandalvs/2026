//1 - Classificação de Nota
let nota1 = Number(prompt("Digite a nota:"))

if(nota1 >= 9){
    console.log("Excelente")
}else if(nota1 >= 7){
    console.log("Bom")
}else if(nota1 >= 5){
    console.log("Regular")
}else{
    console.log("Insuficiente")
}

console.log("-----------------")

//2 - Sistema de Aprovação Escolar
let nota2 = Number(prompt("Digite a nota do aluno:"))
let faltas = Number(prompt("Digite as faltas:"))

if(nota2 >= 7 && faltas <= 10){
    console.log("Aprovado")
}else if(nota2 >= 5 && faltas <= 10){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}

console.log("-----------------")

//3 - Verificação de Idade
let idade1 = Number(prompt("Digite a idade:"))

if(idade1 < 12){
    console.log("Criança")
}else if(idade1 <= 17){
    console.log("Adolescente")
}else if(idade1 <= 59){
    console.log("Adulto")
}else{
    console.log("Idoso")
}

console.log("-----------------")

//4 - Classificação de Temperatura
let temperatura = Number(prompt("Digite a temperatura:"))

if(temperatura >= 35){
    console.log("Muito quente")
}else if(temperatura >= 25){
    console.log("Quente")
}else if(temperatura >= 15){
    console.log("Agradável")
}else{
    console.log("Frio")
}

console.log("-----------------")

//5 - Sistema de Descontos
let valor = Number(prompt("Digite o valor da compra:"))

if(valor >= 500){
    console.log("20% de desconto")
}else if(valor >= 300){
    console.log("15% de desconto")
}else if(valor >= 100){
    console.log("10% de desconto")
}else{
    console.log("Sem desconto")
}

console.log("-----------------")

//6 - Classificação de Velocidade
let velocidade = Number(prompt("Digite a velocidade:"))

if(velocidade <= 60){
    console.log("Dentro do limite")
}else if(velocidade <= 80){
    console.log("Atenção")
}else if(velocidade <= 100){
    console.log("Multa leve")
}else{
    console.log("Multa grave")
}

console.log("-----------------")

//7 - Turno de Estudo
let turno = prompt("Digite o turno (M/V/N):")

if(turno == "M"){
    console.log("Matutino")
}else if(turno == "V"){
    console.log("Vespertino")
}else if(turno == "N"){
    console.log("Noturno")
}else{
    console.log("Turno inválido")
}

console.log("-----------------")

//8 - Avaliação de IMC
let imc = Number(prompt("Digite o IMC:"))

if(imc < 18.5){
    console.log("Abaixo do peso")
}else if(imc < 25){
    console.log("Peso normal")
}else if(imc < 30){
    console.log("Sobrepeso")
}else{
    console.log("Obesidade")
}

console.log("-----------------")

//9 - Classificação de Pontuação em Jogo
let pontos = Number(prompt("Digite a pontuação:"))

if(pontos >= 1000){
    console.log("Nível Mestre")
}else if(pontos >= 700){
    console.log("Nível Avançado")
}else if(pontos >= 400){
    console.log("Nível Intermediário")
}else{
    console.log("Iniciante")
}

console.log("-----------------")

//10 - Verificação de Horário
let hora = Number(prompt("Digite a hora (0 a 23):"))

if(hora >= 6 && hora <= 11){
    console.log("Bom dia")
}else if(hora >= 12 && hora <= 17){
    console.log("Boa tarde")
}else if(hora >= 18 && hora <= 23){
    console.log("Boa noite")
}else{
    console.log("Boa madrugada")
}

console.log("-----------------")

//11 - Categoria de Produto
let codigo = Number(prompt("Digite o código do produto:"))

if(codigo == 1){
    console.log("Alimento")
}else if(codigo == 2){
    console.log("Eletrônico")
}else if(codigo == 3){
    console.log("Roupas")
}else if(codigo == 4){
    console.log("Livros")
}else{
    console.log("Categoria inválida")
}

console.log("-----------------")

//12 - Situação Financeira
let saldo = Number(prompt("Digite o saldo:"))

if(saldo >= 2000){
    console.log("Ótima")
}else if(saldo >= 1000){
    console.log("Boa")
}else if(saldo >= 0){
    console.log("Regular")
}else{
    console.log("Endividado")
}

console.log("-----------------")

//13 - Classificação de Idade para CNH
let idade2 = Number(prompt("Digite a idade para CNH:"))

if(idade2 < 18){
    console.log("Não pode dirigir")
}else if(idade2 < 65){
    console.log("Pode dirigir")
}else{
    console.log("Renovação especial")
}

console.log("-----------------")

//14 - Avaliação de Atendimento
let nota3 = Number(prompt("Digite a nota de atendimento:"))

if(nota3 >= 9){
    console.log("Excelente")
}else if(nota3 >= 7){
    console.log("Bom")
}else if(nota3 >= 5){
    console.log("Regular")
}else{
    console.log("Ruim")
}
