
let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let minusculas = "abcdefghijklmnopqrstuvwxyz"
let numeros = "0123456789"
let simbolos = "!@#$%&*()_+-=[]{};:,.<>/?"

let tamanho = document.getElementById("tamanho")
let gerar = document.getElementById("gerar")
let resultado = document.getElementById("resultado")

let checkMaiusculas = document.getElementById("maiusculas")
let checkMinusculas = document.getElementById("minusculas")
let checkNumeros = document.getElementById("numeros")
let checkSimbolos = document.getElementById("simbolos")

function gerarSenha(tamanho, banco) {
    let senha = ""

    for (let i = 0; i < tamanho; i++) {
        let aleatorio = Math.floor(Math.random() * banco.length)
        senha += banco[aleatorio]
    }

    return senha
}

function montarBanco() {
    let banco = ""

    if (checkMaiusculas.checked) {
        banco += maiusculas
    }

    if (checkMinusculas.checked) {
        banco += minusculas
    }

    if (checkNumeros.checked) {
        banco += numeros
    }

    if (checkSimbolos.checked) {
        banco += simbolos
    }

    return banco
}

gerar.addEventListener("click", function() {
    let tamanhoInput = Number(tamanho.value)
    let banco = montarBanco()

    if (tamanhoInput < 4 || tamanhoInput > 32 || tamanhoInput == "") {
        resultado.textContent = "Escolha um tamanho entre 4 e 32."
        return
    }

    if (banco == "") {
        resultado.textContent = "Selecione pelo menos uma opção."
        return
    }

    let senha = gerarSenha(tamanhoInput, banco)

    resultado.textContent = senha
})

let copiar = document.getElementById("copiar")

copiar.addEventListener("click", async function() {
    let senhaAtual = resultado.textContent

    if (senhaAtual == "") {
        alert("Nenhuma senha gerada")
        return
    }

    if (senhaAtual == "Selecione pelo menos uma opção." || senhaAtual == "Escolha um tamanho entre 4 e 32.") {
        alert("Gere uma senha válida primeiro.")
        return
    }

    await navigator.clipboard.writeText(senhaAtual)

    copiar.innerHTML = "Copiado!"

    setTimeout(function() {
        copiar.innerHTML = "Copiar"
    }, 2000)
})
