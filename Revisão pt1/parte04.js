// function saudacao(nome) {
//     console.log("Olá, " + nome + "!")
// }
// saudacao("Fernanda")

//Função anonima e Arrow function
let saudacao = function() {
    console.log("Olá")
}
//let saudacao = console.log("OI")
console.log(saudacao())

//Pedir dois números e somar eles
let soma = function(n1, n2) {
    return n1 + n2
}
console.log(soma(3, 9))

//Perguntar quantos anos tem e mostrar quantos dias viveu
let viveu = function(anos) {
    return anos * 365
}
// let idade = Number(prompt("Quantos anos você tem?"))
// console.log(viveu(idade))

//Arrow function
// => function
let saudacao2 = (nome) => {
    console.log("Oii, " + nome + "!")
}
saudacao2("Fernanda")

//Multiplicar
let mult = (n1, n2) => {
    return n1 * n2
}
console.log(mult(6, 4))

/* Crie uma função de calculo de hora extra, pergunte quantas horas extras o funcionário fez, se ele fez menos que 10 horas extras ele deve ganhar R$20 reais por hora extra, se ele fez mais , deve ganhar R$15 reais por hora extra */

let extra = (horas) => {
    if (horas <= 10) {
        return horas * 20
    } else {
        return horas * 15
    }
}
// let horas = Number(prompt("Quantas horas extras você fez?"))
// console.log("Você vai receber R$" + extra(horas) + " pelas horas extras.")

//DOM - Manipulação

let texto = document.getElementById("texto")
function troca() {
    texto.innerHTML = "<B>Hoje é quinta-feira</B>"
}
function cor() {
   if (texto.style.backgroundColor == "orange") {
    texto.style.backgroundColor = "white"
    texto.style.color = "black"
    texto.style.display = "none"
   } else {
    texto.style.backgroundColor = "orange"
    texto.style.color = "red"
    texto.style.display = "block"
   }
}
function aumentar() {
    texto.style.fontSize = "50px"
}
function diminuir() {
    texto.style.fontSize = "10px"
}
let zero = document.getElementById("zero")
let numero0 = 0

function mais() {
numero0++ //+1
zero.innerText = numero0
}
function menos(){
numero0 -- //-1
zero.innerText = numero0
}
function zerar() {
numero0 = 0
zero.innerText = numero0
}

