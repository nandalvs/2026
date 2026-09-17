let tarefa = document.getElementById("tarefa")
let adicionar = document.getElementById("adicionar")
let lista = document.getElementById("lista")
let tarefas = []

let tarefasSalvas = localStorage.getItem("tarefas")
if(tarefasSalvas) {
    tarefas = JSON.parse(tarefasSalvas)
} else {
    tarefas = []
}


function mostrarTarefas() {
    lista.innerText = ""
    tarefas.forEach(function(tarefaAtual, indice) {
        let item = document.createElement("li")
        item.innerText = tarefaAtual
        let apagar = document.createElement("button")
        apagar.innerText = "Apagar"
        apagar.addEventListener("click", function() {
            tarefas.splice(indice, 1)
            localStorage.setItem("tarefas", JSON.stringify(tarefas))
            mostrarTarefas()
        })
        item.appendChild(apagar)
        lista.appendChild(item)
    })
}
adicionar.addEventListener("click", function() {
    let novaTarefa = tarefa.value
    if(novaTarefa != "") {
        tarefas.push(novaTarefa)

        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        //Limpar o input
        tarefa.value = ""
        mostrarTarefas()
    }
})
mostrarTarefas()