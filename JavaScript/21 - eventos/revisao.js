let texto = document.getElementById("texto")
function troca() {
    texto.innerText= "Outro texto"
}
//----------------------------------------------------
let texto2 = document.getElementById("texto2")
let botao= document.getElementById("botao")

botao.addEventListener("click", function() {
//texto2.innerText= "Outro texto 2"
if(texto2.innerText == "Texto do site") {
    texto2.innerText = "Outro texto 2"
} else {
    texto2.innerText = "Texto do site"
}
})
//-------------------------------------------------------
let clique = document.getElementById("clique")
let contrador = document.getElementById("contador")
let contagem = 0
clique.addEventListener("click", function() {
 contagem++ //1
 contrador.innerText = contagem
})
//------------------------------------------------------
let espelho = document.getElementById("espelho")
let nome = document.getElementById("nome")
nome.addEventListener("input", function(){
    espelho.innerText = nome.value
})
let input = document.getElementById("input")
input.addEventListener("focus", function(){
    input.style.outline= "none"
    input.style.border = "2px solid pink"
})
input.addEventListener("blur", function(){
    input.style.border = "2px solid black"
})
//------------------------------------------------------
let titulo = document.getElementById("titulo")
titulo.addEventListener("mouseover", function() {
    titulo.innerText= "Voce achou o texto segreto"
})
titulo.addEventListener("mouseput", function(){
    titulo.innerText = "Texto inicial"
})
//-----------------------------------------------------
let imagem = document.getElementById("imagem")
imagem.addEventListener("mouseover", function() {
    imagem.src = "cachorro.jpg"
})
imagem.addEventListener("mouseout", function() {
    imagem.src= "gato.avif"
})
//-----------------------------------------------------
/* Crie um texto que muda a cor de fundo para laranja 
e a do texto para verde quanto passa o mouse e quanto 
o mousa sai, destroca */
let mudar = document.getElementById("mudar")
mudar.addEventListener("mouseover", function() {
    mudar.style.color = "green"
    mudar.style.backgroundColor  = "orange"
})
mudar.addEventListener("mouseout", function() {
    mudar.style.color = "black"
    mudar.style.backgroundColor = " white"
})