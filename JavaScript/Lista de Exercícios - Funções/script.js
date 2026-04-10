//Exercicio 1 - Primeira Função
function mensagemInicial() {
    console.log("Aprendendo funções com JS")
}
mensagemInicial()

console.log("-------------------")

//Exercicio 2 - Mensagem de Boas-Vindas
function boasVindas() {
    console.log("Desenvolvimento de Sistemas!")
}
boasVindas()
boasVindas()

console.log("-------------------")

//Exercicio 3 - Contador Simples
function contarAteDez() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}
contarAteDez()

console.log("-------------------")

//Exercicio 4 - Contagem Regressiva
function contagemRegressiva() {
    for (let i = 10; i >= 1; i--) {
        console.log(i)
    }
}
contagemRegressiva()

console.log("-------------------")

//Exercicio 5 - Repetindo Mensagem
function mensagemRepetida() {
    for (let i = 1; i <= 5; i++) {
        console.log("Eu gosto de JavaScript")
    }
}
mensagemRepetida()

console.log("-------------------")

//Exercicio 6 - Números Pares
function numerosPares() {
    for (let i = 0; i <= 20; i += 2) {
        console.log(i)
    }
}
numerosPares()

console.log("-------------------")

//Exercicio 7 - Tabuada Fixa
function tabuadaDoDois() {
    for (let i = 1; i <= 10; i++) {
        console.log("18 x", i, "=", 18 * i)
    }
}
tabuadaDoDois()

console.log("-------------------")

//Exercicio 8 - Soma de duas variáveis
function mostrarSoma() {
    let num1 = 10
    let num2 = 5
    console.log("Soma:", num1 + num2)
}
mostrarSoma()

console.log("-------------------")

//Exercicio 9 - Aviso Repetido
function alertaSistema() {
    for (let i = 1; i <= 3; i++) {
        console.log("Atenção! Verifique as informações.")
    }
}
alertaSistema()

console.log("-------------------")

//Exercicio 10 - Organização de Código
function mensagem1() {
    console.log("Bem-vindo ao sistema")
}

function mensagem2() {
    console.log("Carregando informações...")
}

function mensagem3() {
    console.log("Sistema pronto para uso")
}

mensagem1()
mensagem2()
mensagem3()

console.log("-------------------")

//Exercicio 11 - Soma de números
function somaCincoNumeros() {
    let soma = 0
    for (let i = 1; i <= 5; i++) {
        let numero = Number(prompt("Digite um número: "))
        soma = soma + numero
    }
    console.log("A soma dos números é:", soma)
}
somaCincoNumeros()

console.log("-------------------")

//Exercicio 12 - Cálculo de aumento
function aumentoSalario() {
    let salario = Number(prompt("Digite seu salário: "))
    if (salario <= 3500) {
        salario = salario + 500
        console.log("Novo salário:", salario)
    } else {
        console.log("Não terá aumento")
    }
}
aumentoSalario()

console.log("-------------------")

//Exercicio 13 - Aprovação Escolar
function aprovacaoEscolar() {
    let nota1 = Number(prompt("Digite a primeira nota: "))
    let nota2 = Number(prompt("Digite a segunda nota: "))
    let nota3 = Number(prompt("Digite a terceira nota: "))
    
    let media = (nota1 + nota2 + nota3) / 3

    if (media > 6) {
        console.log("Aprovado")
    } else if (media >= 5) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}
aprovacaoEscolar()

console.log("-------------------")

//Exercicio 14 - Avaliação de Atendimento
function avaliacaoAtendimento() {
    let nota = Number(prompt("Dê uma nota para o atendimento: "))

    if (nota == 9 || nota == 10) {
        console.log("Excelente")
    } else if (nota == 8) {
        console.log("Ótimo")
    } else if (nota == 7 || nota == 6) {
        console.log("Bom")
    } else if (nota == 5) {
        console.log("Regular")
    } else {
        console.log("Ruim")
    }
}
avaliacaoAtendimento()