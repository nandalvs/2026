// 1 - Trocar texto
function trocarTexto(){
    document.getElementById("texto1").innerText = "Você clicou no botão!"
}

console.log("-----------------------")

// 2 - Mudar cor
function mudarCor(){
    document.body.style.backgroundColor = "lightblue"
}

console.log("-----------------------")

// 3 - Contador
let numero = 0
function aumentar(){
    numero++
    document.getElementById("contador").innerText = numero
}

console.log("-----------------------")

// 4 - Esconder texto
function esconder(){
    document.getElementById("texto4").style.display = "none"
}

console.log("-----------------------")

// 5, 6, 7, 8 - Espelho + Maiúsculo + Contador + Validação
function espelho(){
    let texto = document.getElementById("inputTexto").value

    // 5 e 6
    document.getElementById("saida").innerText = texto.toUpperCase()

    // 7
    document.getElementById("contadorCaracter").innerText =
    "Você digitou " + texto.length + " caracteres"

    // 8
    if(texto.length < 5){
        document.getElementById("validacao").innerText = "Texto muito curto"
    } else {
        document.getElementById("validacao").innerText = "Texto válido"
    }
}

console.log("-----------------------")

// 9 - Mudar cor ao passar mouse
function mudarCorDiv(){
    document.getElementById("caixa").style.backgroundColor = "red"
}

function voltarCor(){
    document.getElementById("caixa").style.backgroundColor = "gray"
}

console.log("-----------------------")

// 10 - Mostrar mensagem
function mostrarMensagem(){
    document.getElementById("mensagem").style.display = "block"
}

console.log("-----------------------")

// 11 - Efeito surpresa
function trocarFrase(){
    document.getElementById("texto11").innerText = "Surpresa!"
}

console.log("-----------------------")

// 12 - Desafio final
function mostrarFinal(){
    let texto = document.getElementById("campoFinal").value
    let saida = document.getElementById("saidaFinal")

    saida.innerText = texto
    saida.onmouseover = function(){
        saida.style.color = "blue"
    }
}

function limpar(){
    document.getElementById("campoFinal").value = ""
    document.getElementById("saidaFinal").innerText = ""
}