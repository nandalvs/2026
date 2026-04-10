//Exercicio 1 – Contador 
for(let i = 1; i <= 30; i++)
    console.log(i)
   console.log("-----------------")

//Exercicio 2 – Contagem Regressiva
for(let i = 30; i >= 1; i--) {
    console.log(i)
}
   console.log("-----------------")

//Exercicio 3 – Classificação de Números
for(let i = 1; i <= 5; i++) {
    let numero = Number(prompt("Digite um número"))
    if(numero >= 50) {
        console.log("ACIMA DA MÉDIA")
    } else {
        console.log("ABAIXO DA MÉDIA")
    }
}
   console.log("-----------------")

//Exercicio 4 – Tabuada
let valor = Number(prompt("Informe um número"))
for(let i = 1; i <= 10; i++) {
    let resultado = valor * i
    console.log(valor, " X ", i, " = ", resultado)
}
   console.log("-----------------")


//Exercicio 5 – Canção dos Patinhos
let patinhos = Number(prompt("Digite a quantidade de patinhos"))

for(let i = patinhos; i >= 1; i--) {
    console.log(i, "patinhos foram passear")
    console.log("Além das montanhas para brincar")
    console.log("A mamãe gritou:")
    console.log("Quá, quá, quá, quá")
    console.log("Mas só", i - 1, "patinhos voltaram de lá.")
    console.log("-----------------")
}


//Exercicio 6 – Classificação de Idades
for(let i = 1; i <= 10; i++) {
    let idade = Number(prompt("Digite uma idade"))
    if(idade >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}
console.log("-----------------")


//Exercicio 7 – Eleição
for(let i = 1; i <= 5; i++) {
    let voto = Number(prompt("Digite seu voto"))

    if(voto >= 1 && voto <= 4) {
        console.log("Voto para candidato")
    } else if(voto == 5) {
        console.log("Voto nulo")
    } else if(voto == 6) {
        console.log("Voto em branco")
    } else {
        console.log("Voto inválido")
    }
}
console.log("-----------------")


//Exercicio 8 – Soma dos Números
let soma = 0

for(let i = 1; i <= 5; i++) {
    let numero = Number(prompt("Digite um número"))
    soma = soma + numero
}

console.log("A soma final é:", soma)
console.log("-----------------")


//Exercicio 9 – Números Pares
for(let i = 1; i <= 50; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}
console.log("-----------------")

//Exercicio 10 – Contador Personalizado
let inicio = Number(prompt("Digite o número inicial"))
let fim = Number(prompt("Digite o número final"))

for(let i = inicio; i <= fim; i++) {
    console.log(i)
}
console.log("---------------------------")
