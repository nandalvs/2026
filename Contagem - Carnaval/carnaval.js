function contarCarnaval() {

    let hoje = new Date();

    let carnaval = new Date(2027,1,9);

    let anos = carnaval.getFullYear() - hoje.getFullYear();

    let dataTemporaria = new Date(hoje);

    dataTemporaria.setFullYear(hoje.getFullYear() + anos);

    if (dataTemporaria > carnaval) {
        anos--;
        dataTemporaria.setFullYear(hoje.getFullYear() + anos);
    }

    let meses = carnaval.getMonth() - dataTemporaria.getMonth();

    if (meses < 0) {
        meses = meses + 12;
    }

    dataTemporaria.setMonth(dataTemporaria.getMonth() + meses);

    if (dataTemporaria > carnaval) {
        meses--;
        dataTemporaria.setMonth(dataTemporaria.getMonth() - 1);
    }

    let diferenca = carnaval - dataTemporaria;

    let dias = Math.floor(diferenca /1000/60/60/24);

    let horas = Math.floor(diferenca /1000/60/60) % 24;

    let minutos = Math.floor(diferenca /1000/60) % 60;

    let segundos = Math.floor(diferenca /1000) % 60;

    let carnavalTela = document.getElementById("carnaval");

    carnavalTela.innerText = anos + " anos, " + meses + " meses, " + dias + " dias, " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";
}

setInterval(contarCarnaval, 1000);