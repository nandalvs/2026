// Operador Ternário
/*
if (condição) {
    se verdadeiro
} else {
    se falso
}
*/
let idade = 18
let resultado = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade  "
// condição                      verdadeiro                        falso
console.log(resultado)
console.log("--------------------------------")

let nota = 5
let situacao = nota >= 9 ? "Aprovado" : nota > 7 ? "Em Recuperação" : nota <= 7 ? "Reprovado" : "Nota inválida"
console.log(situacao)
console.log("--------------------------------")

//Laços de repetição
// While - Enquanto
let numero = 1
while (numero <= 5) {
    console.log(numero)
    numero++ //+1
}
let numero2 = 10
while (numero2 >=  0) {
    console.log(numero2)
    numero2 -=2 //-2
}
console.log("--------------------------------")
// let palavra = "Senai"
// while (palavra == "Senai") {
// console.log("Acertou! A palavra é: " +palavra)
// palavra = prompt("Digite uma nova palavra: ")
// }
// Do while - Faça enquanto
let num = 1
do {
    console.log(num)
    num += 1
} while (num <= 5)
console.log("--------------------------------")

let dobro = 2
do {
    console.log(dobro)
    dobro *= 2 //dobro = dobro * 2
} while (dobro <= 100)
console.log("--------------------------------")
// For - Para
for (let i = 1; i <= 5; i++) {
    console.log(i)
}
console.log("--------------------------------")
//tabuada
let num1 = 5
for (let i = 1; i <= 10; i++) {
    let tabuada = num1 * i
    console.log(num1 + " x " + i + " = " + tabuada)
}