function contarCarnaval() {
    let hoje = new Date();
    let carnaval = new Date(2027,1,9);
    let diferenca = carnaval - hoje;

    let dias = Math.floor(diferenca /1000/60/60/24);
    let horas = Math.floor(diferenca /1000/60/60) % 24;
    let minutos = Math.floor(diferenca /1000/60) % 60;
    let segundos = Math.floor(diferenca /1000) % 60;

    let carnavalTela = document.getElementById("carnaval");
    carnavalTela.innerText = dias + " dias, " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";
}
setInterval(contarCarnaval, 1000);