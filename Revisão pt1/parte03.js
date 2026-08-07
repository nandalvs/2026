//revisão parte 03 - parte03.js

//Funções de textos
let nome = "Fernanda";
console.log(nome.length); //Length - quantidade de caracteres

console.log("---------------------")
//Maiúsculas e minúsculas
let frase = "   Hoje é Sexta-feira   "
console.log(frase)
console.log(frase.toUpperCase()) //Maiúsculas
console.log(frase.toLowerCase()) //Minúsculas
console.log(frase.trim()) //Remove espaços em branco no início e no final da string

console.log("---------------------")
//Substituir palavras
let frase2 = "Hoje o dia está bonito"
let palavraAntiga = "bonito"
let palavraNova = "lindo"
console.log(frase2.replace(palavraAntiga, palavraNova)) //Substitui a palavra antiga pela nova

console.log("---------------------")
//Verificar se a palavra existe
let busca = "dia"
console.log(frase2.includes(busca)) //Verifica se a palavra existe na frase, retorna true ou false

console.log("---------------------")
let palavra = "senai"
//             01234
console.log(palavra.charAt(1)) //que letra está nessa posição, no caso a letra "e" que está na posição 1

let texto = "Eu gosto de Jujutsu Kaisen"
console.log(texto.split(" ")) //Separa a frase em palavras, criando um array com cada palavra
console.log("---------------------")
console.log("---------------------")

//Math
//Números aleatórios
console.log(Math.random())
//número aleatório entre 0 e 1
let n1 = Math.random() + 1 //número aleatório entre 1 e 2
console.log(n1)
let n2 = Math.random() * 5 //número aleatório entre 0 e 5
console.log(n2)
console.log("---------------------")

//Arredondar números
let n3 = 3.14
console.log(Math.round(n3)) //Arredonda para o número inteiro mais próximo
console.log(Math.floor(n3)) //Arredonda para baixo
console.log(Math.ceil(n3)) //Arredonda para cima
console.log("---------------------")

//Números aleatórios entre 1 e 5
let n4 = Math.floor(Math.random() * 5) + 1 //número aleatório entre 1 e 5
console.log(n4)
console.log("---------------------")

//Numero aleatório entre 10 e 20
let n5 = Math.floor(Math.random() * 11) + 10 //número aleatório entre 10 e 20
console.log(n5)
console.log("---------------------")

//Funcões Matematicas
let valores = [10, 5, 9, 3, 1, 65, 13]

console. log(Math.max(valores)) //maior número
console.log(Math.min(valores)) //menor número
console.log("---------------------")

//Raiz quadrada
console.log(Math.sqrt(121)) //raiz quadrada de 121
console.log(Math.sqrt(20)) //raiz quadrada de 20
console.log("---------------------")

// Potência
console.log(Math.pow(2, 4)) // 2 * 2 * 2 * 2 = 16
console.log("---------------------")

//Valor Absoluto
console. log(Math. abs(-4))

console.log("---------------------")
console.log("---------------------")

//Função Declarativa
function escola() {
    console.log("Senai")
}
function soma(){
    let num1 = 5
    let num2 = 7
    console.log(num1 + num2)
}

escola() //chamando a função
soma() //chamando a função
function idade(nascimento) {
    let idade = 2026 - nascimento
    console.log("Você tem " + idade + " anos")
}
let valor = Number(prompt("Digite o ano do seu nascimento:"))
idade(2008) //chamando a função e passando o valor do prompt como parâmetro
idade(valor) 

function banco(saldo, saque) {
let sobrou = saldo - saque
console. log("Saldo restante: ", sobrou)
}
banco(3000, 500)