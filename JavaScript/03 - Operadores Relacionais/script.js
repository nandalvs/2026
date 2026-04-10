let idade = 10
console.log(idade >= 18)
console.log("---------------------")
let numero = Number(prompt("Informe um número: "))
let resultado = numero > 10
console.log(resultado)
console.log("---------------------")
let valor1 = 5
let valor2 = 7
console.log(valor1 > valor2) //false
console.log(valor1 < valor2) //true
console.log(valor1 == valor2) //false
/* >Maior >= Maior ou igual ==Igual */
/* <menor <= Menor ou igual !=Diferente */
console.log("---------------------")
// == compara apenas o valor
//== compara o valor e o tipo
console.log(5 == "5") //true
console.log(5 === "5") //false
let nome = prompt("Qual o nome do usuário?")
console.log(nome == "TDS2")
console.log("---------------------")
let preco = Number(prompt("Qual o valor do produto? "))
console.log(preco >= 100)
console.log(preco <= 50)
console.log("---------------------")
/*Uma loja da desconto nos produtos direto no caixa.
Faça um programa que receba o valor pago pelo usuário,
 dê R$20 reais de desconto para ele e mostre se o valor que será pago 
 é maior ou igual a R$50*/
let val = Number(prompt("Qual valor do seu produto? "))
let valorTotal = val - 205
console.log(val >= 50)
console.log("---------------------")
/*Pergunte ao usuário o NIF de um funcionarfio e verifique se ele: 
- é igual a FLOR
- é diferente de SAPO*/
let nif = prompt("Qual seu NIF?")
console.log(nif == "FLOR")
console.log(nif != "SAPO")
