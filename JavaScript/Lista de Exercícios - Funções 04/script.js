//Exercicio 1 - Triplo de um Número
let triplo = function(num){
    return num * 3
}

let num = Number(prompt("Digite um número:"))
console.log(triplo(num))

console.log("----------------")

//Exercicio 2 - Multiplicação de Dois Números
let multiplicar = function(n1,n2){
    return n1 * n2
}

let n1 = Number(prompt("Digite um número:"))
let n2 = Number(prompt("Digite outro número:"))
console.log(multiplicar(n1,n2))

console.log("----------------")

//Exercicio 3 - Metade de um Número
let metade = function(num2){
    return num2 / 2
}

let num2 = Number(prompt("Digite um número:"))
console.log(metade(num2))

console.log("----------------")

//Exercicio 4 - Antecessor e Sucessor
let sucessor = function(num3){
    return num3 + 1
}

let num3 = Number(prompt("Digite um número:"))
console.log(sucessor(num3))

console.log("----------------")

//Exercicio 5 - Verificar Maior Número
let maiorNumero = function(a,b){
    if(a > b){
        return a
    }else{
        return b
    }
}

let a = Number(prompt("Digite um número:"))
let b = Number(prompt("Digite outro número:"))
console.log(maiorNumero(a,b))

console.log("----------------")

//Exercicio 6 - Verificar Número Positivo ou Negativo
let verificarNumero = function(num4){
    if(num4 > 0){
        return "Positivo"
    }else if(num4 < 0){
        return "Negativo"
    }else{
        return "Zero"
    }
}

let num4 = Number(prompt("Digite um número:"))
console.log(verificarNumero(num4))

console.log("----------------")

//Exercicio 7 - Par ou Ímpar
let parImpar = function(num5){
    if(num5 % 2 == 0){
        return "Par"
    }else{
        return "Ímpar"
    }
}

let num5 = Number(prompt("Digite um número:"))
console.log(parImpar(num5))

console.log("----------------")

//Exercicio 8 - Calcular Média
let media = function(n3,n4,n5){
    return (n3 + n4 + n5) / 3
}

let n3 = Number(prompt("Digite a primeira nota:"))
let n4 = Number(prompt("Digite a segunda nota:"))
let n5 = Number(prompt("Digite a terceira nota:"))
console.log(media(n3,n4,n5))

console.log("----------------")

//Exercicio 9 - Calcular Desconto
let calcularDesconto = function(valor){
    return valor * 0.85
}

let valor = Number(prompt("Digite o valor do produto:"))
console.log(calcularDesconto(valor))

console.log("----------------")

//Exercicio 10 - Verificar Aprovação
let verificarAprovacao = function(nota1,nota2){
    let media = (nota1 + nota2) / 2

    if(media >= 7){
        return "Aprovado"
    }else if(media >= 5){
        return "Recuperação"
    }else{
        return "Reprovado"
    }
}

let nota1 = Number(prompt("Digite a primeira nota:"))
let nota2 = Number(prompt("Digite a segunda nota:"))
console.log(verificarAprovacao(nota1,nota2))