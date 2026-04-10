// Dom - String
let nome = "    Fernanda"
let maiuscula = nome.toUpperCase()
let minuscula = nome.toLowerCase()

console.log(maiuscula)
console.log(minuscula)

//----------------------------------
function mostrar() {
    let texto = document.getElementById("texto").value
    let mn = document.getElementById("mn")
    let ms = document.getElementById("ms")
    let letras = document.getElementById("letras")

    ms. innerText = texto. toUpperCase()
    mn. innerText = texto. toLowerCase()
    letras. innerText = texto.length
    //Length conta quantas letras tem
    texto.value = "" //Apaga o que esta escrito no input
}
// ------------------------------------
function parte() {
    let palavra = document.getElementById("palavra").value
    let resultado = document.getElementById("resultado")
                // slice(inicio,fim)
    let parte = palavra.slice(1,5)
    // C A N E T A
    // 0 1 2 3 4 5
    resultado.innerText = parte

    let final = document.getElementById("final")
    let letra = texto.length
    // S E N A I
    // 0 1 2 3 4
    // LENGTH = 5
    final.innerText = palavra[palavra.length-1]
}

/* Crie dois inputs cada um pedindo uma palavra para o usuario, crie um botão "juntar" que mostra as duas palavras juntas em um <p> */

function juntar() {
    let palavra1 = document.getElementById("palavra1").value
    let palavra2 = document.getElementById("palavra2").value
    let juntos = document.getElementById("juntos")

    juntos.innerText = palavra1 + " " + palavra2
}