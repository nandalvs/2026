let input = document.getElementById('input')
let salvar = document.getElementById('salvar')
let mensagem = document.getElementById('mensagem')

//Verificar se ja existe um nome salvo no localStorage
//Buscar o nome salvo no localStorage
let nomeSalvo = localStorage.getItem("nome")
//Se existir, mostrar a mensagem de boas vindas
if(nomeSalvo) {
    //mostrar na tela
    mensagem.innerText = "Oi " + nomeSalvo
}
salvar.addEventListener("click", function() {
//     mensagem.innerText = "Oi " + input.value
// localStorage.setItem("nome", "Fernanda")
// let nome = localStorage.getItem("nome")
// console.log(nome)

localStorage.setItem("nome", input.value)
mensagem.innerText = "Oi " + nomeSalvo
})