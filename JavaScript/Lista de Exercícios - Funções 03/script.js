//1 - Dobro do Número
console.log("1 - Dobro do Número")

function dobro(numero){
    let resultado = numero * 2
    return resultado
}

let numero = Number(prompt("Digite um número"))
console.log(dobro(numero))
console.log("----------------")

//2 - Somar dois números
console.log("2 - Somar dois números")

function somar(n1, n2){
    let soma = n1 + n2
    return soma
}

let n1 = Number(prompt("Digite o primeiro número"))
let n2 = Number(prompt("Digite o segundo número"))
console.log(somar(n1,n2))
console.log("----------------")

//3 - Área de um Quadrado
console.log("3 - Área de um Quadrado")

function areaQuadrado(lado){
    let area = lado * lado
    return area
}

let lado = Number(prompt("Digite o lado do quadrado"))
console.log(areaQuadrado(lado))
console.log("----------------")

//4 - Antecessor de um Número
console.log("4 - Antecessor de um Número")

function antecessor(num){
    let ant = num - 1
    return ant
}

let num = Number(prompt("Digite um número"))
console.log(antecessor(num))
console.log("----------------")

//5 - Tamanho do Texto
console.log("5 - Tamanho do Texto")

function tamanhoTexto(texto){
    return texto.length
}

let texto = prompt("Digite um texto")
console.log(tamanhoTexto(texto))
console.log("----------------")

//6 - Verificar Maior Número
console.log("6 - Verificar Maior Número")

function maiorNumero(a,b){
    if(a > b){
        return a + " é maior"
    }else if(b > a){
        return b + " é maior"
    }else{
        return "Os dois são iguais"
    }
}

let a = Number(prompt("Digite o primeiro número"))
let b = Number(prompt("Digite o segundo número"))
console.log(maiorNumero(a,b))
console.log("----------------")

//7 - Verificar Idade
console.log("7 - Verificar Idade")

function verificarIdade(idade){
    if(idade >= 18){
        return "Maior de idade"
    }else{
        return "Menor de idade"
    }
}

let idade = Number(prompt("Digite sua idade"))
console.log(verificarIdade(idade))
console.log("----------------")

//8 - Número Par ou Ímpar
console.log("8 - Número Par ou Ímpar")

function parOuImpar(numero){
    if(numero % 2 == 0){
        return "Par"
    }else{
        return "Ímpar"
    }
}

let numero2 = Number(prompt("Digite um número"))
console.log(parOuImpar(numero2))
console.log("----------------")

//9 - Calcular Média
console.log("9 - Calcular Média")

function media(n1,n2,n3){
    let resultado = (n1 + n2 + n3) / 3
    return resultado
}

let m1 = Number(prompt("Digite a primeira nota"))
let m2 = Number(prompt("Digite a segunda nota"))
let m3 = Number(prompt("Digite a terceira nota"))
console.log(media(m1,m2,m3))
console.log("----------------")

//10 - Desconto em Produto
console.log("10 - Desconto em Produto")

function calcularDesconto(preco){
    let desconto = preco * 0.10
    let valorFinal = preco - desconto
    return valorFinal
}

let preco = Number(prompt("Digite o preço do produto"))
console.log(calcularDesconto(preco))
console.log("----------------")