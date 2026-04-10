//Exercicio 1 - Filmes Favoritos
let filmes = []

filmes[0] = "Panico"
filmes[1] = "Como treinar seu dragao"
filmes[2] = "Mulan"

console.log(filmes[0])
console.log("-------------")

//Exercicio 2 - Criando e Acessando Array
let frutas = []

frutas[0] = "Maçã"
frutas[1] = "Banana"
frutas[2] = "Laranja"
frutas[3] = "Uva"
frutas[4] = "Manga"

console.log(frutas[2])
console.log("-------------")

//Exercicio 3 - Adicionando Elementos
let cores = []

cores[0] = "Azul"
cores[1] = "Rosa"
cores[2] = "Vermelho"

cores.push("Amarelo")

for(let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}
console.log("-------------")

// Exercicio 4 - Re4movendo elementos
//Exercicio 4 - Removendo Elementos
let numeros = []

numeros[0] = 10
numeros[1] = 20
numeros[2] = 30
numeros[3] = 40

numeros.pop()

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}
console.log("-------------")

//Exercicio 5 - Adicionando no Inicio
let cidades = []

cidades[0] = "Sao Paulo"
cidades[1] = "Rio de Janeiro"

cidades.unshift("Curitiba")

for(let i = 0; i < cidades.length; i++) {
    console.log(cidades[i])
}
console.log("-------------")

//Exercicio 6 - Removendo do Inicio
let animais = []

animais[0] = "Cachorro"
animais[1] = "Gato"
animais[2] = "Coelho"

animais.shift()

for(let i = 0; i < animais.length; i++) {
    console.log(animais[i])
}
console.log("-------------")

//Exercicio 7 - Verificando o Tamanho
let carros = []

carros[0] = "Fusca"
carros[1] = "Civic"
carros[2] = "Corolla"
carros[3] = "HB20"

console.log("Quantidade de carros: " + carros.length)
console.log("-------------")

//Exercicio 8 - Operacoes Combinadas
let lista = []

lista.push(1)
lista.push(2)
lista.push(3)

lista.unshift(0)

lista.pop()

lista.shift()

console.log(lista)
console.log("Tamanho final: " + lista.length)
console.log("-------------")

//Exercicio 9 - Vetor Vazio
let vetor = []

for(let i = 0; i < 6; i++) {
    vetor[i] = prompt("Digite um valor:")
}

for(let i = 0; i < vetor.length; i++) {
    console.log(vetor[i])
}
console.log("-------------")

