//Estrutura Condicional Encadeada
let nota = 10
if (nota >=7) {
    console.log("Aprovado")
} else if (nota >= 5){
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}
console.log("-----------------")
let idade = Number(prompt("Qual sua idade?"))
if(idade <= 12) {
    console.log("Criança")
} else if (idade <= 17) {
    console.log("Adolescente")
}else if (idade <= 55) {
    console.log("Adulto")
} else if (idade <= 100) {
    console.log("Idoso")
} else {
    console.log("Idade inválida")
}
console.log("-----------------")

/* Em uma passeio escolar, os alunos são separados por
categoria, peça a categoria do aluno e:
- Se for categoria "A", diga "Ala leste"
- Se for categoria "B", diga "Ala oeste"
- Se for categoria "C", diga "Ala Sul"
- Se for categoria "D", diga "Ala Norte"
Para qualquer outra categoria, diga "Categoria Inválida"*/

let categoria = prompt("Qual sua categoria?")
if(categoria == "A") {
    console.log("Ala leste")
} else if (categoria == "B") {
    console.log("Ala oeste")
}else if (categoria == "C") {
    console.log("Ala Sul")
} else if (categoria == "D") {
    console.log("Ala Norte")
} else {
    console.log("Categoria Inválida")
}
console.log("-----------------")
/* Peca dois numeros para o usuário e verifique se
- o primeiro é maior que o segundo
- o segundo é maior que o primeiro
- se eles são iguais */

let numero1 = Number(prompt("Informe o primeiro numero:") )
let numero2 = Number(prompt ("Informe o segundo numero:") )

if(numero1 > numero2) {
console.log("O primeiro é maior que o segundo")
} else if (numero2 > numero1 ) {
console.log("O segundo é maior que o primeiro")
} else {
console.log("Eles sao igual")
}