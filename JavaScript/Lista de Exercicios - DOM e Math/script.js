//Exercicio 1 - Arredondar número
function arredondar(){
    let n = Number(document.getElementById("num1").value)
    console.log(Math.round(n))
}

console.log("-----------------------")

//Exercicio 2 - Arredondar para baixo
function baixo(){
    let n = Number(document.getElementById("num2").value)
    console.log(Math.floor(n))
}

console.log("-----------------------")

//Exercicio 3 - Arredondar para cima
function cima(){
    let n = Number(document.getElementById("num3").value)
    console.log(Math.ceil(n))
}

console.log("-----------------------")

//Exercicio 4 - Raiz quadrada
function raiz(){
    let n = Number(document.getElementById("num4").value)
    console.log(Math.sqrt(n))
}

console.log("-----------------------")

//Exercicio 5 - Potência
function potencia(){
    let b = Number(document.getElementById("base").value)
    let e = Number(document.getElementById("expoente").value)
    console.log(Math.pow(b, e))
}

console.log("-----------------------")

//Exercicio 6 - Maior número
function maior(){
    let a = Number(document.getElementById("n1").value)
    let b = Number(document.getElementById("n2").value)
    let c = Number(document.getElementById("n3").value)
    console.log(Math.max(a,b,c))
}

console.log("-----------------------")

//Exercicio 7 - Menor número
function menor(){
    let a = Number(document.getElementById("m1").value)
    let b = Number(document.getElementById("m2").value)
    let c = Number(document.getElementById("m3").value)
    console.log(Math.min(a,b,c))
}

console.log("-----------------------")

//Exercicio 8 - Sorteio
function sortear(){
    let num = Math.floor(Math.random() * 11)
    console.log(num)
}

console.log("-----------------------")

//Exercicio 9 - Dado
function dado(){
    let num = Math.floor(Math.random() * 6) + 1
    console.log(num)
}