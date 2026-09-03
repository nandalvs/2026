let agora = new Date()
console.log(agora)

let especifica = new Date(2026,11,10) // sempre ano, mês, dia
console.log(especifica)

//Separa os elementos - usando os getters
console.log(agora.getFullYear()) // ano, 2026
console.log(agora.getMonth()) // mês, 0-11
console.log(agora.getDate()) // dia, 1-31
console.log(agora.getDay()) // dia da semana, 0-6
console.log(agora.getHours()) // hora, 0-23
console.log(agora.getMinutes()) // minutos, 0-59
console.log(agora.getSeconds()) // segundos, 0-59
console.log(agora.getMilliseconds()) // milissegundos, 0-999

console.log("---------------------")
//Formatar uma data
//HH:MM:SS 08:30:00
function relogio() {
    let tempo = document.getElementById("tempo")
    let horario = new Date()
    let horas = horario.getHours()
    let minuto = horario.getMinutes()
    let segundo = horario.getSeconds()
    // console.log(horas + ":" + minuto + ":" + segundo)

    let horaFormatada = String(horas).padStart(2,"0")
    let minutoFormatado = String(minuto).padStart(2,"0")
    let segundoFormatado = String(segundo).padStart(2,"0")
    // console.log(horaFormatada + ":" + minutoFormatado + ":" + segundoFormatado)
    tempo.textContent = horaFormatada + ":" + minutoFormatado + ":" + segundoFormatado
}
setInterval(relogio, 1000)

//--------------
console.log("---------------------")
//simular uma contagem regressiva de 10 minutos
let segundosRestantes = 1 * 60;
let temporizador
let contando = true
console.log(segundosRestantes)

function mostrarTempo() {
    let minutos = Math.floor(segundosRestantes / 60)
    let segundos = segundosRestantes % 60
    let horario = String(minutos).padStart(2,"0") + ":" + String(segundos).padStart(2,"0")
    console.log(horario)
    contagem.innerText = horario
}
function atualizarContagem() {
    if (segundosRestantes <= 0) {
        clearInterval(temporizador)
        contando = false
        let contagem = document.getElementById("contagem")
        contagem.innerText = "Tempo esgotado!"
        return

    }
    mostrarTempo()
    segundosRestantes--
}

let iniciar = document.getElementById("iniciar")
let pausar = document.getElementById("pausar")

iniciar.addEventListener("click", function() {
       if (contando) {return}
        contando = true
        temporizador = setInterval(atualizarContagem, 1000)
       
})
pausar.addEventListener("click", function() {
    contando = false
    clearInterval(temporizador)
})
mostrarTempo()