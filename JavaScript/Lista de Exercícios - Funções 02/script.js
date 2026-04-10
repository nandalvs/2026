// 1 - Dobro do Número
function dobro() {
    let num = Number(prompt("Digite um número: "))
    console.log("O dobro é:", num * 2)
}
dobro()
console.log("----------------")

// 2 - Área do Retângulo
function calcularArea() {
    let base = Number(prompt("Digite a base: "))
    let altura = Number(prompt("Digite a altura: "))
    let area = base * altura
    console.log("A área do retângulo é:", area)
}
calcularArea()
console.log("----------------")

// 3 - Conversão de Temperatura
function converterParaFahrenheit() {
    let celsius = Number(prompt("Digite a temperatura em Celsius: "))
    let fahrenheit = celsius * 1.8 + 32
    console.log("Temperatura em Fahrenheit:", fahrenheit)
}
converterParaFahrenheit()
console.log("----------------")

// 4 - Verificação de Nota
function verificarNota() {
    let nota = Number(prompt("Digite a nota: "))

    if (nota >= 7) {
        console.log("Aprovado")
    } else if (nota >= 5) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}
verificarNota()
console.log("----------------")

// 5 - Número Positivo ou Negativo
function verificarNumero() {
    let num = Number(prompt("Digite um número: "))

    if (num > 0) {
        console.log("Positivo")
    } else if (num < 0) {
        console.log("Negativo")
    } else {
        console.log("Zero")
    }
}
verificarNumero()
console.log("----------------")

// 6 - Contar Pares Até o Número
function contarPares() {
    let num = Number(prompt("Digite um número: "))

    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
contarPares()
console.log("----------------")

// 7 - Soma de Intervalo
function somarIntervalo() {
    let num1 = Number(prompt("Digite o primeiro número: "))
    let num2 = Number(prompt("Digite o segundo número: "))
    let soma = 0

    for (let i = num1; i <= num2; i++) {
        soma = soma + i
    }

    console.log("A soma é:", soma)
}
somarIntervalo()
console.log("----------------")

// 8 - Repetir Nome
function repetirNome() {
    let nome = prompt("Digite um nome: ")
    let vezes = Number(prompt("Quantas vezes repetir?"))

    for (let i = 1; i <= vezes; i++) {
        console.log(nome)
    }
}
repetirNome()
console.log("----------------")

// 9 - Tabuada
function tabuada() {
    let num = Number(prompt("Digite um número para ver a tabuada: "))

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i))
    }
}
tabuada()
console.log("----------------")

// 10 - Contagem Decrescente Personalizada
function contagemPersonalizada() {
    let num = Number(prompt("Digite um número: "))

    for (let i = num; i >= 0; i--) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
contagemPersonalizada()
console.log("----------------")

// 11 - Média de Três Notas
function mediaAluno() {
    let nota1 = Number(prompt("Digite a primeira nota: "))
    let nota2 = Number(prompt("Digite a segunda nota: "))
    let nota3 = Number(prompt("Digite a terceira nota: "))

    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        console.log("Aprovado")
    } else if (media > 5 && media < 7) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}
mediaAluno()
console.log("----------------")
