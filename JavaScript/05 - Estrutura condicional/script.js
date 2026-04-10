//Estrutura Condicional

let nota = 5
if(nota >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
console.log("-----------------------")
let idade = Number(prompt("Qual sua idade?"))
if (idade >= 18) {
    console.log("Pode tirar a habilitação")
}else {
    console.log("Idade insuficiente")
}
console.log("-----------------------")
let salario = Number(prompt("Qual seu salário?"))
let anos = Number(prompt("Você trabalha na empresa a quantos anos?"))

if(salario <= 3000 && anos >= 2){
    console.log("Você terá um aumento")
}else {
    console.log("Ainda não")
}
console.log("-----------------------")
let chuva = true
if (chuva) {
console. log("Leva guarda-chuva")
} else {
console.log("nao precisa levar guarda-chuva")
}
console.log("-----------------------")
/*Peça dois numeros para o usuário e veja se o primeiro é menor que o segundo, se sim, mostre "o primeiro é menor", senão, mostre "o segundo é menor ou eles são iguais" */
let n1 = Number(prompt("Informe um número"))
let n2 = Number(prompt("Informe outro número"))
if(n1 < n2) {
    console.log("O primeiro é Maior")
} else {
    console.log("O segundo é menor")
}
console.log("-----------------------")
/* Peça um numero para o usuário e diga se o número é impar ou par */
let numero = Number(prompt("Digite um número!"))
let aux =  numero % 2
if(aux == 0) {
    console.log("Par")
} else{
    console.log("Impar")
}
console.log("-----------------------")
/* Uma loja da descontos para clientes com base no valor
da compra, peça o valor da compra, se ele for maior ou
igual a R$250, de R$50 de desconto, e mostre o novo
valor que sera pago, senao, mostre apenas "sem desconto"*/
let compra = Number(prompt("Qual valor da compra?"))
if(compra >= 250) {
    let desconto = compra - 50
    console.log("Valor total: ", desconto)
} else {
    console,log("Sem Desconto")
}