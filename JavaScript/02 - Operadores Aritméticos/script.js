//Operador Aritméticos

let numero1 = 5
let numero2 = 7
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let divisao = numero1 / numero2
let multiplicacao = numero1 * numero2
let modulo = numero1 % numero2 //resto da divisão

console.log("A soma é: " + soma)
console.log("A subtração é: " + subtracao)
console.log("A multiplicação é: " + multiplicacao)
console.log("A Divisão é: " + divisao)
console.log(`O resto da divisão é ${modulo}`)

let contador = 10
contador++ //+1
console.log(contador) //11
contador-- //-1
console.log(contador) //10
contador +=5 //15
contador -= 2 //13
//---------------------------------------------------
/*let salario = Number (prompt("Qual seu salário?"))
let total = salario + 100
console.log(total)*/

/*Um grupo de amigos foi a um restauranrte, no final eles decidiram dividir a conta.
Faça um programa que peça a quantidade de amigos e o valor da conta 
e mostre quanto cada um deve pagar */

/*let amigos = prompt ("Quantos amigos estavam no restaurante com você?")
let conta = prompt ("Qual foi o valor total da conta?")
let amgs = amigos
console.log("A quantidade de pessoas junto com você no jantar foi de: "+amgs)
let pagar = conta / amgs
console.log("O valor da conta para cada um foi de: "+pagar)*/

/*Um grupo de três amigos querem comprar uma pizza juntos, 
cada um irá contrinbuir com uma quantia de valor.
Faça um programa que receba quanto cada amigo
irá contribuir e mostre quanto eles tem juntos*/

/*let friend1 = Number (prompt("Com quanto você irá contribuir?: "))
let friend2 = Number (prompt("Com quanto você irá contribuir?: "))
let friend3 = Number (prompt("Com quanto você irá contribuir?: "))
let pizza = friend1+friend2+friend3
console.log("Vocês tem ao todo: " +pizza)*/

/*Uma loja de doces vende produtos em grande quantidade. 
Faça um programa que peça a quantidade do produto comprado,
o valor unitário e mostre quanto o cliente vai pagar*/
 let  valorUnitario = Number(prompt("Qual o valor?: "))
 let quantidade = Number(prompt("Qual é a quantidade?: "))
 let pagar = valorUnitario  * quantidade
 console.log("O total a ser pago é: " +pagar)