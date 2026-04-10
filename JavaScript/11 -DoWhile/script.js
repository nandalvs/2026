// //Laço de repetição - DoWhile
// //Mostrando n° de 1 à 5
// let num1 = 1
// while (num1 <= 5){
//     console.log("While")
//     console.log(num1)
//     num1++
// }

//  let num2 = 6
//  do{
//     console.log("Do while")
//     console.log(num2)
//     num2++
//  }while(num2 <= 5)
//     console.log("-----------")
// let resposta 
// do {
//     resposta = prompt("Deseja continuar?")
// } while (resposta == "sim")
//     console.log("-----------")

// let soma = 0
// let num 
// let contador = 1
// do {
//     num = Number(prompt("Digite um número: "))
//     soma = soma + num
//     console.log(soma)
//     contador++
// } while (contador <= 3)
// console.log("Resulatdo final: ", soma)
//  console.log("-----------")
// let usuario 
// let senha
// do {
//     usuario = prompt("Qual o úsuario?")
//     senha = prompt("Qual a senha?")
// } while (usuario != "admin" || senha != "senha")

// /*Mostre os numeros de 1 a 99 pulando de 2 em 2 */
// let num = 1
// do {
//     num+= 2
//     console.log(num)
// } while (num <= 99)
console.log("-----------")
/* Uma pessoa é selecionada em um grupo dependendo da
escola que estudou, pergunte para o usuário a escola até
que ele responda "Senai" */
let escola
do {
    escola = prompt("Em qual escola você estudou?")
}while (escola != "Senai")
    console.log("Você é Senaiano")