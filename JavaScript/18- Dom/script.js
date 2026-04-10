//Script.js
let titulo = document.getElementById("titulo")
//no HTML.pegue o elemento pelo ID
function mudarTexto() {
    titulo.innerText = "Você clicou no botão"
    titulo.style.color = "blue"
}
//------------------------------------
let mensagem = document.getElementById("mensagem")
let nome = document.getElementById("nome").value
function saudacao() {
    let nome = document.getElementById("nome").value
    mensagem.innerText = "Olá " + nome + "!"
}
// --------------------------------------
let texto = document.getElementById("texto")
function sumir() {
    if (texto.style.display == "none") {
        texto.style.display = "block"
    } else {
        texto.style.display = "none"
    }
}
/* Crie um texto e um botao no HTML, quando clicar
no botão deve mudar a cor do texto para verde e a
cor de fundo do texto para rosa */
const texto2 = document.getElementById("texto2")
function mudar() {
    texto2.style.color = "pink"
    texto2.style.backgroundColor = "blue"
}