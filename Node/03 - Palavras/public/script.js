// script. js
//async e await - usamos quando trabalhamos com coisas ou processo que podem demorar

async function salvar() {
let palavra = document.getElementById("palavra").value

await fetch("/salvar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({palavra: palavra})
    })
    alert("Palavra salva com sucesso!")
}
