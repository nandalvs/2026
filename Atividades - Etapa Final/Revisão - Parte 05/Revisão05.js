// 1 - Digitação

let mensagem = document.getElementById("mensagem")
let input = document.getElementById("input")

input.addEventListener("input", function(){
    mensagem.innerHTML = input.value
})

console.log("----------------------")


// 2 - Troca de texto

let botao = document.getElementById("botao")

botao.addEventListener("mouseover", function(){
    botao.innerHTML = "Você passou o mouse!"
})

console.log("----------------------")


// 3 - Escondendo elementos

let texto = document.getElementById("texto")
let esconder = document.getElementById("esconder")

esconder.addEventListener("dblclick", function(){
    texto.style.display = "none"
})

console.log("----------------------")


// 4 - Alterando a fonte

let textoFonte = document.getElementById("textoFonte")
let fonte = document.getElementById("fonte")

fonte.addEventListener("click", function(){
    let tamanho = Math.floor(Math.random() * 31) + 10
    textoFonte.style.fontSize = tamanho + "px"
})

console.log("----------------------")


// 5 - Mostrar e esconder

let mostrar = document.getElementById("mostrar")
let esconder2 = document.getElementById("esconder2")
let paragrafo = document.getElementById("paragrafo")

mostrar.addEventListener("click", function(){
    paragrafo.style.display = "block"
})

esconder2.addEventListener("click", function(){
    paragrafo.style.display = "none"
})

console.log("----------------------")


// 6 - Troca de cor

let caixa = document.getElementById("caixa")
let cor = document.getElementById("cor")

cor.addEventListener("click", function(){
    let numero1 = Math.floor(Math.random() * 256)
    let numero2 = Math.floor(Math.random() * 256)
    let numero3 = Math.floor(Math.random() * 256)

    caixa.style.backgroundColor = "rgb(" + numero1 + "," + numero2 + "," + numero3 + ")"
})

console.log("----------------------")


// 7 - Alternando destaque

let classes = document.getElementById("classes")
let troca = document.getElementById("troca")

troca.addEventListener("click", function(){
    classes.classList.toggle("destaque")
})

console.log("----------------------")


// 8 - Troca de imagem

let img = document.getElementById("img")
let leon = document.getElementById("leon")
let ada = document.getElementById("ada")

leon.addEventListener("click", function(){
    img.src = "Leon.jpg"
})

ada.addEventListener("click", function(){
    img.src = "Ada.jpg"
})

console.log("----------------------")


// 9 - Contador de caracteres

let caracteres = document.getElementById("caracteres")
let contador = document.getElementById("contador")

caracteres.addEventListener("input", function(){
    contador.innerHTML = "Quantidade de caracteres: " + caracteres.value.length
})

console.log("----------------------")


// 10 - Verificação de idade

let idade = document.getElementById("idade")
let verificar = document.getElementById("verificar")
let resultadoIdade = document.getElementById("resultadoIdade")

verificar.addEventListener("click", function(){
    if (Number(idade.value) >= 18) {
        resultadoIdade.innerHTML = "Você é maior de idade"
    } else {
        resultadoIdade.innerHTML = "Você é menor de idade"
    }
})

console.log("----------------------")


// 11 - Par ou ímpar

let numero = document.getElementById("numero")
let parImpar = document.getElementById("parImpar")
let resultadoNumero = document.getElementById("resultadoNumero")

parImpar.addEventListener("click", function(){
    if (Number(numero.value) % 2 == 0) {
        resultadoNumero.innerHTML = "O número é par"
    } else {
        resultadoNumero.innerHTML = "O número é ímpar"
    }
})

console.log("----------------------")


// 12 - Média do aluno

let nota1 = document.getElementById("nota1")
let nota2 = document.getElementById("nota2")
let nota3 = document.getElementById("nota3")
let calcular = document.getElementById("calcular")
let resultadoMedia = document.getElementById("resultadoMedia")

calcular.addEventListener("click", function(){

    let media = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3

    if (media >= 7) {
        resultadoMedia.innerHTML = "Média: " + media.toFixed(1) + " - Aprovado"
    } else if (media >= 5) {
        resultadoMedia.innerHTML = "Média: " + media.toFixed(1) + " - Recuperação"
    } else {
        resultadoMedia.innerHTML = "Média: " + media.toFixed(1) + " - Reprovado"
    }
})

console.log("----------------------")