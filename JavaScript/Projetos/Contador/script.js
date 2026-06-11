let numero = 0
let intervalo = setInterval(function() {
    numero += 100
    document.getElementById('contador').innerText = numero
    
    if (numero >= 1000) {
        clearInterval(intervalo)
    }
}, 100)
setInterval(intervalo, 100) //1000