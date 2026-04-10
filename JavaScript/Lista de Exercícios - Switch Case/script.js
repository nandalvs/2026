//Exercicio 1 - Dias da Semana
let diaSemana = Number(prompt("Digite um número de 1 a 7"))
switch(diaSemana){
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("Terça-feira")
        break
    case 4:
        console.log("Quarta-feira")
        break
    case 5:
        console.log("Quinta-feira")
        break
    case 6:
        console.log("Sexta-feira")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Número inválido. Insira um valor entre 1 e 7.")
}

//Exercicio 2 - Classificação de Idade
let idade = Number(prompt("Digite a idade específica"))
switch(idade){
    case 5:
        console.log("Infantil A")
        break
    case 10:
        console.log("Infantil B")
        break
    case 15:
        console.log("Juvenil A")
        break
    case 20:
        console.log("Juvenil B")
        break
    case 30:
        console.log("Adulto")
        break
    default:
        console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30.")
}

//Exercicio 3 - Turno de Trabalho
let turno = prompt("Informe seu turno (M, V ou N)")
switch(turno){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Turno inválido. Insira M, V ou N.")
}

//Exercicio 4 - Números e Mensagens
let numero = Number(prompt("Digite um número de 1 a 5"))
switch(numero){
    case 1:
        console.log("Mensagem 1")
        break
    case 2:
        console.log("Mensagem 2")
        break
    case 3:
        console.log("Mensagem 3")
        break
    case 4:
        console.log("Mensagem 4")
        break
    case 5:
        console.log("Mensagem 5")
        break
    default:
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5.")
}

//Exercicio 5 - Estações do Ano
let estacao = Number(prompt("Digite um número de 1 a 4"))
switch(estacao){
    case 1:
        console.log("Primavera")
        break
    case 2:
        console.log("Verão")
        break
    case 3:
        console.log("Outono")
        break
    case 4:
        console.log("Inverno")
        break
    default:
        console.log("Estação inválida. Insira um número de 1 a 4.")
}

//Exercicio 6 - Menu de Operações Matemáticas
let operacao = Number(prompt("1-Somar 2-Subtrair 3-Multiplicar 4-Dividir"))
let n1 = Number(prompt("Digite o primeiro número"))
let n2 = Number(prompt("Digite o segundo número"))

switch(operacao){
    case 1:
        console.log(n1 + n2)
        break
    case 2:
        console.log(n1 - n2)
        break
    case 3:
        console.log(n1 * n2)
        break
    case 4:
        console.log(n1 / n2)
        break
    default:
        console.log("Operação inválida.")
}

//Exercicio 7 - Código de Produto
let codigo = Number(prompt("Digite o código do produto"))
switch(codigo){
    case 100:
        console.log("Caneta")
        break
    case 200:
        console.log("Lápis")
        break
    case 300:
        console.log("Borracha")
        break
    case 400:
        console.log("Caderno")
        break
    default:
        console.log("Produto não encontrado.")
}

//Exercicio 8 - Nota por Conceito
let conceito = prompt("Digite o conceito (A,B,C,D,F)")
switch(conceito){
    case "A":
        console.log("Excelente")
        break
    case "B":
        console.log("Bom")
        break
    case "C":
        console.log("Regular")
        break
    case "D":
        console.log("Ruim")
        break
    case "F":
        console.log("Reprovado")
        break
    default:
        console.log("Conceito inválido.")
}

//Exercicio 9 - Jogo: Escolha sua Ação
let acao = Number(prompt("1-Atacar 2-Defender 3-Curar 4-Fugir"))
switch(acao){
    case 1:
        console.log("Atacar")
        break
    case 2:
        console.log("Defender")
        break
    case 3:
        console.log("Curar")
        break
    case 4:
        console.log("Fugir")
        break
    default:
        console.log("Opção inválida. Você perdeu a vez.")
}

//Exercicio 10 - Conversor Simples de Moeda
let opcaoMoeda = Number(prompt("1-Real para Dólar 2-Dólar para Real 3-Real para Euro"))
let valor = Number(prompt("Digite o valor"))

switch(opcaoMoeda){
    case 1:
        console.log(valor * 0.20)
        break
    case 2:
        console.log(valor * 5)
        break
    case 3:
        console.log(valor * 0.18)
        break
    default:
        console.log("Opção inválida.")
}

//Exercicio 11 - Tipo de Atendimento
let atendimento = Number(prompt("1-Suporte Técnico 2-Financeiro 3-Comercial 4-Cancelamento"))
switch(atendimento){
    case 1:
        console.log("Suporte Técnico")
        break
    case 2:
        console.log("Financeiro")
        break
    case 3:
        console.log("Comercial")
        break
    case 4:
        console.log("Cancelamento")
        break
    default:
        console.log("Setor inválido.")
}

//Exercicio 12 - Cardápio de Lanchonete
let lanche = Number(prompt("1-Hambúrguer 2-Pizza 3-Suco 4-Sorvete"))
switch(lanche){
    case 1:
        console.log("Hambúrguer")
        break
    case 2:
        console.log("Pizza")
        break
    case 3:
        console.log("Suco")
        break
    case 4:
        console.log("Sorvete")
        break
    default:
        console.log("Pedido inválido.")
}

//Exercicio 13 - Avaliação do Atendimento
let nota = Number(prompt("Digite uma nota de 1 a 5"))
switch(nota){
    case 1:
        console.log("Péssimo")
        break
    case 2:
        console.log("Ruim")
        break
    case 3:
        console.log("Regular")
        break
    case 4:
        console.log("Bom")
        break
    case 5:
        console.log("Excelente")
        break
    default:
        console.log("Nota inválida.")
}

//Exercicio 14 - Tipo de Usuário
let usuario = Number(prompt("1-Administrador 2-Professor 3-Aluno 4-Visitante"))
switch(usuario){
    case 1:
        console.log("Administrador")
        break
    case 2:
        console.log("Professor")
        break
    case 3:
        console.log("Aluno")
        break
    case 4:
        console.log("Visitante")
        break
    default:
        console.log("Usuário inválido.")
}

//Exercicio 15 - Categoria de Filme
let filme = Number(prompt("1-Ação 2-Comédia 3-Drama 4-Terror 5-Animação"))
switch(filme){
    case 1:
        console.log("Ação")
        break
    case 2:
        console.log("Comédia")
        break
    case 3:
        console.log("Drama")
        break
    case 4:
        console.log("Terror")
        break
    case 5:
        console.log("Animação")
        break
    default:
        console.log("Categoria inválida.")
}
