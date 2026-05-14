//JS

//Ati Exercicio 1
let caixas1 = document.querySelectorAll(".caixa1")
let botao1 = document.getElementById("botao1")

botao1.addEventListener("click", function(){

    caixas1.forEach(function(caixa){
        caixa.style.backgroundColor = "lightblue"
    })

})

//Ati Exercicio 2
let textos = document.querySelectorAll(".texto")
let botao2 = document.getElementById("botao2")

botao2.addEventListener("click", function(){

    textos.forEach(function(texto){
        texto.classList.add("ativo")
    })

})

//Ati Exercicio 3
let caixas2 = document.querySelectorAll(".caixa2")

caixas2.forEach(function(caixa){

    caixa.onclick = function(){
        console.log("clicou")
    }

})

//Ati Exercicio 4
let caixas3 = document.querySelectorAll(".caixa3")

caixas3.forEach(function(caixa){

    caixa.addEventListener("click", function(){
        caixa.classList.add("rosa")
    })

})

//Ati Exercicio 5
let caixas4 = document.querySelectorAll(".caixa4")

caixas4.forEach(function(caixa){

    caixa.addEventListener("click", function(){
        caixa.classList.toggle("rosa")
    })

})

//Ati Exercicio 6 e 7
let caixas5 = document.querySelectorAll(".caixa5")

caixas5.forEach(function(caixa){

    caixa.addEventListener("click", function(){
        caixa.classList.toggle("destaque")
    })

})

//Ati Exercicio 8
let caixas6 = document.querySelectorAll(".caixa6")

caixas6.forEach(function(caixa){

    caixa.addEventListener("click", function(){

        caixas6.forEach(function(item){
            item.classList.remove("ativo")
        })

        caixa.classList.add("ativo")

    })

})

//Ati Exercicio 9
let itensMenu = document.querySelectorAll(".itemMenu")

itensMenu.forEach(function(item){

    item.addEventListener("click", function(){

        itensMenu.forEach(function(menu){
            menu.classList.remove("menuAtivo")
        })

        item.classList.add("menuAtivo")

    })

})