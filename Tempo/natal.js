function contarDias() {
    let hoje = new Date();
    console.log(hoje)

    let natal = new Date(2026,11,25)

    let diferenca = natal - hoje
    console.log(diferenca)
    
    let dias = Math.floor(diferenca /1000/60/60/24);
    console.log(dias)

    let dezembro = document.getElementById("dezembro")

    dezembro.innerText = dias

    let horas = Math.floor(diferenca /1000/60/60) % 24;
    console.log(horas)
    let minutos = Math.floor(diferenca /1000/60) % 60;
    console.log(minutos)
    let segundos = Math.floor(diferenca /1000) % 60;
    console.log(segundos)

    //Mostrar resultado final
    dezembro.innerText = dias + " dias, " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos"
}
setInterval(contarDias, 1000)
