//JS
function arredondar(){
    let numero = document.getElementById("numero").value
    let round = document.getElementById("round")
    let ceil = document.getElementById("ceil")
    let floor = document.getElementById("floor")

    round.innerText = "justo:" +Math.round(numero)
    ceil.innerText = "cima:" +Math.ceil(numero)
    floor.innerText = "baixo:" +Math.floor(numero)
}
function calcular() {
    let valor = document.getElementById("valor").value
    let potencia = document.getElementById ("potencia").value
    let resultado = document.getElementById ("resultado")
    resultado. innerText = Math.pow(valor, potencia)
} 
function raizQuadrada() {
    let raiz = document.getElementById("raiz").value
    let resposta = document.getElementById("resposta")
    resposta.innerText = Math.sqrt(raiz)
}
// ---------------------------------------------
// Max e Min - Maior e Menor numero
console.log(Math.max(5, 12, 9, 30, 7)) // 30
console.log(Math.min(5, 12, 9, 30, 7)) // 5
//Numero Aleatorio
console.log(Math.random()) //0 e 1
console.log(Math.random() * 10) //0 a 10
console.log(Math.round(Math.random() * 10))
// 1
console.log(Math.round(Math,random() * 10) + 1)