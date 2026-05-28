let senha = document.getElementById("senha")
let confirmar = document.getElementById("confirmar")
let mensagem = document.getElementById("mensagem")
let tamanho =  senha.value.length >= 12

confirmar.addEventListener("input", function() {
    let numeros = /[0-9]/.test(senha.value)
    let letras = /[a-zA-Z]/.test(senha.value)
    let especial = /[!@#$%^&*(),.?":{}|<>]/.test(senha.value)

    if(senha.value === confirmar.value && numeros && letras && especial && tamanho) {
        mensagem.innerText = "As senhas são iguais!"
        mensagem.classList.add("certo")
        mensagem.classList.remove("errado")
    } else {
        mensagem.innerText = "A senha precisa ter letras, números, caracter especial, ter no mínimo 12 caracteres e ser igual"
        mensagem.classList.add("errado")
        mensagem.classList.remove("certo")
    }
})