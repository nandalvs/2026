let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");

function semaforo() {
    contexto.fillStyle = "black"
    contexto.fillRect(150, 50, 100, 280)

    contexto.beginPath()
    contexto.arc(200, 100, 30, 0, Math.PI * 2)
        contexto. fillStyle = "darkred"

contexto.fill()

    contexto.beginPath()
    contexto.arc(200, 180, 30, 0, Math.PI * 2)
        contexto. fillStyle = "olive"

contexto.fill()

    contexto.beginPath()
    contexto.arc(200, 260, 30, 0, Math.PI * 2)
        contexto. fillStyle = "darkgreen"

contexto.fill()
}
let aceso = "vermelho"
function novoSemaforo() {
    contexto.clearRect(0, 0, canvas.width, canvas.height)
    contexto.fillStyle = "black"
    contexto.fillRect(150, 50, 100, 280)

    contexto.beginPath()
    contexto.arc(200, 100, 30, 0, Math.PI * 2)
    if (aceso == "vermelho") {
        contexto. fillStyle = "red"
    } else {
        contexto. fillStyle = "darkred"
}
contexto.fill()

    contexto.beginPath()
    contexto.arc(200, 180, 30, 0, Math.PI * 2)
    if (aceso == "amarelo") {
        contexto. fillStyle = "yellow"
    } else {
        contexto. fillStyle = "olive"
}
contexto.fill()

    contexto.beginPath()
    contexto.arc(200, 260, 30, 0, Math.PI * 2)
    if (aceso == "verde") {
        contexto. fillStyle = "lightgreen"
    } else {
        contexto. fillStyle = "darkgreen"
}
contexto.fill()
}

function proximaLuz() {
    if (aceso == "vermelho") {
        aceso = "verde"
    } else if (aceso == "verde") {
        aceso = "amarelo"
    } else if (aceso == "amarelo") {
        aceso = "vermelho"
    }
    novoSemaforo()
}
setInterval(proximaLuz, 2000)

let troca = document.getElementById("troca")
troca.addEventListener("click", proximaLuz)

