//Exercicio 1 - Dobro de um Número
let dobro = (numero) => {
    return numero * 2
}
let n1 = Number(prompt("Informe um número:"))
console.log(dobro(n1))
console.log("----------------")

//Exercicio 2 - Soma de Dois Números
let somar = (a, b) => {
    return a + b
}
let n2 = Number(prompt("Informe o primeiro número:"))
let n3 = Number(prompt("Informe o segundo número:"))
console.log(somar(n2, n3))
console.log("----------------")

//Exercicio 3 - Quadrado de um Número
let quadrado = (numero) => {
    return numero * numero
}
let n4 = Number(prompt("Informe um número:"))
console.log(quadrado(n4))
console.log("----------------")

//Exercicio 4 - Sucessor de um Número
let sucessor = (numero) => {
    return numero + 1
}
let n5 = Number(prompt("Informe um número:"))
console.log(sucessor(n5))
console.log("----------------")

//Exercicio 5 - Maior Número
let maiorNumero = (a, b) => {
    if (a > b) {
        return a
    } else {
        return b
    }
}
let n6 = Number(prompt("Informe o primeiro número:"))
let n7 = Number(prompt("Informe o segundo número:"))
console.log(maiorNumero(n6, n7))
console.log("----------------")

//Exercicio 6 - Verificar Par ou Ímpar
let parOuImpar = (numero) => {
    if (numero % 2 === 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}
let n8 = Number(prompt("Informe um número:"))
console.log(parOuImpar(n8))
console.log("----------------")

//Exercicio 7 - Verificar Número Positivo ou Negativo
let verificarNumero = (numero) => {
    if (numero > 0) {
        return "Positivo"
    } else if (numero < 0) {
        return "Negativo"
    } else {
        return "Zero"
    }
}
let n9 = Number(prompt("Informe um número:"))
console.log(verificarNumero(n9))
console.log("----------------")

//Exercicio 8 - Calcular Média
let media = (a, b, c) => {
    return (a + b + c) / 3
}
let n10 = Number(prompt("Informe o primeiro número:"))
let n11 = Number(prompt("Informe o segundo número:"))
let n12 = Number(prompt("Informe o terceiro número:"))
console.log(media(n10, n11, n12))
console.log("----------------")

//Exercicio 9 - Calcular Desconto
let calcularDesconto = (preco) => {
    return preco * 0.8
}
let n13 = Number(prompt("Informe o preço:"))
console.log(calcularDesconto(n13))
console.log("----------------")

//Exercicio 10 - Verificar Aprovação
let verificarAprovacao = (nota1, nota2) => {
    let media = (nota1 + nota2) / 2

    if (media >= 7) {
        return "Aprovado"
    } else if (media >= 5) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}
let n14 = Number(prompt("Informe a primeira nota:"))
let n15 = Number(prompt("Informe a segunda nota:"))
console.log(verificarAprovacao(n14, n15))
console.log("----------------")