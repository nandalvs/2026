// Exercicio 1 - Contador
let i = 1
while (i <= 10) {
    console.log(i)
    i++
}
console.log("-----------")

// Exercicio 2 - Tabuada
let numero = Number(prompt("Digite um número para ver a tabuada:"))
let contador = 1
while (contador <= 10) {
    console.log(numero + " x " + contador + " = " + (numero * contador))
    contador++
}
console.log("-----------")

// Exercicio 3 - Contagem Regressiva
let reg = 10
while (reg >= 1) {
    console.log(reg)
    reg--
}
console.log("-----------")

// Exercicio 4 - Verificação de senha
let senha = prompt("Digite a senha:")
while (senha != "12345") {
    senha = prompt("Senha incorreta. Digite novamente:")
}
console.log("Acesso liberado")
console.log("-----------")

// Exercicio 5 - Contador
let num50 = 50
while (num50 <= 100) {
    console.log(num50)
    num50++
}
console.log("-----------")

// Exercicio 6 - Sequência numérica
let cinco = 0
while (cinco <= 100) {
    console.log(cinco)
    cinco = cinco + 5
}
console.log("-----------")

// Exercicio 7 - Mostrando mensagem
let msg = 1
while (msg <= 5) {
    console.log("Eu gosto de JavaScript")
    msg++
}
console.log("-----------")

// Exercicio 8 - Exibindo o nome
let nome = prompt("Digite seu nome:")
let vezes = Number(prompt("Digite um número:"))
let aux = 1
while (aux <= vezes) {
    console.log(nome)
    aux++
}
console.log("-----------")


// Exercicio 9 - Validação de Nota
let nota = Number(prompt("Digite uma nota de 0 a 10:"))
while (nota < 0 || nota > 10) {
    nota = Number(prompt("Valor inválido. Digite novamente:"))
}
console.log("Nota registrada com sucesso")
console.log("-----------")

// Exercicio 10 - Soma de Números
let soma = 0
let valor = Number(prompt("Digite um número positivo:"))
while (valor >= 0) {
    soma = soma + valor
    valor = Number(prompt("Digite outro número (negativo para parar):"))
}
console.log("A soma é:", soma)
console.log("-----------")

// Exercicio 11 - Menu Simples
let opcao = 0
while (opcao != 3) {
    console.log("1 - Cadastrar")
    console.log("2 - Consultar")
    console.log("3 - Sair")
    opcao = Number(prompt("Escolha uma opção:"))
}
console.log("Sistema encerrado")
console.log("-----------")

// Exercicio 12 - Contador de Pares
let par = 2
while (par <= 50) {
    console.log(par)
    par = par + 2
}
console.log("-----------")

// Exercicio 13 - Login
let usuario = prompt("Digite o usuário:")
let senhaLogin = prompt("Digite a senha:")
while (usuario != "admin" || senhaLogin != "123") {
    usuario = prompt("Usuário incorreto. Digite novamente:")
    senhaLogin = prompt("Senha incorreta. Digite novamente:")
}
console.log("Bem-vindo ao sistema!")
console.log("-----------")


// Exercicio 14 - Jogo do Número
let secreto = 7
let tentativa = Number(prompt("Tente adivinhar o número:"))
while (tentativa != secreto) {
    tentativa = Number(prompt("Errou! Tente novamente:"))
}
console.log("Você acertou!")
console.log("-----------")