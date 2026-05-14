// Exercicio 1 - Criar e aplicar classe
let div1 = document.getElementById("div1")
let btn1 = document.getElementById("btn1")

btn1.addEventListener("click", function(){
    div1.classList.add("ativo")
})

// Exercicio 2 - Remover classe
let btn2 = document.getElementById("btn2")

btn2.addEventListener("click", function(){
    div1.classList.remove("ativo")
})

// Exercicio 3 - Alternar classe
let btn3 = document.getElementById("btn3")

btn3.addEventListener("click", function(){
    div1.classList.toggle("ativo")
})

// Exercicio 4 - Classe de destaque
let div4 = document.getElementById("div4")
let btn4 = document.getElementById("btn4")

btn4.addEventListener("click", function(){
    div4.classList.add("destaque")
})

// Exercicio 5 - Classe de tamanho
let div5 = document.getElementById("div5")
let btn5 = document.getElementById("btn5")

btn5.addEventListener("click", function(){
    div5.classList.toggle("grande")
})

// Exercicio 6 - Esconder elemento
let div6 = document.getElementById("div6")
let btn6 = document.getElementById("btn6")

btn6.addEventListener("click", function(){
    div6.classList.toggle("escondido")
})

// Exercicio 7 - Hover
let div7 = document.getElementById("div7")

div7.addEventListener("mouseover", function(){
    div7.classList.add("hover")
})

div7.addEventListener("mouseout", function(){
    div7.classList.remove("hover")
})

// Exercicio 8 - Botão ativo
let btn8 = document.getElementById("btn8")

btn8.addEventListener("click", function(){
    btn8.classList.toggle("botao")
})

// Exercicio 9 - Seleção de item
let itens = document.querySelectorAll(".item")

itens.forEach(function(item){
    item.addEventListener("click", function(){
        itens.forEach(function(i){
            i.classList.remove("selecionado")
        })
        item.classList.add("selecionado")
    })
})

// Exercicio 10 - Modo escuro
let body = document.getElementById("body")
let btn10 = document.getElementById("btn10")

btn10.addEventListener("click", function(){
    body.classList.toggle("dark")
})

// Exercicio 11 - Menu escondido
let menu = document.getElementById("menu")
let btn11 = document.getElementById("btn11")

btn11.addEventListener("click", function(){
    if(menu.style.display === "block"){
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
})

// Exercicio 12 - Caixa interativa
let div12 = document.getElementById("div12")

div12.addEventListener("click", function(){
    div12.classList.toggle("cores")
})

div12.addEventListener("mouseover", function(){
    div12.classList.add("borda")
})

div12.addEventListener("mouseout", function(){
    div12.classList.remove("borda")
})

// Exercicio 13 - Botões de cores
let div13 = document.getElementById("div13")
let vermelho = document.getElementById("vermelho")
let azul = document.getElementById("azul")
let verde = document.getElementById("verde")

vermelho.addEventListener("click", function(){
    div13.classList.remove("azul","verde")
    div13.classList.add("vermelho")
})

azul.addEventListener("click", function(){
    div13.classList.remove("vermelho","verde")
    div13.classList.add("azul")
})

verde.addEventListener("click", function(){
    div13.classList.remove("vermelho","azul")
    div13.classList.add("verde")
})