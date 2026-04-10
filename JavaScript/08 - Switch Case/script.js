// Switch Case

/* Pergunte para o usuário que dia da semana é hoje, se
for quinta ou sexta, mostre "Dia de ir para o SENAI",
para qualquer outro valor, mostre "Não é dia de ir para o
SENAI" */

let dia = prompt("Que dia é hoje?")
switch(dia) {
    case "quinta" : 
    case "sexta" :
        console.log("É dia de ir para o SENAI")
        break
        default:
            console.log("Não é dia de ir para o SENAI")
}
console.log("--------------------------")
/* Um cardápio organiza os itens por número
- 1 = Pizza
- 2 = Salada
- 3 = Macarrão
- 4 = Bebida*/
let item = Number (prompt("Esolha um item: ") )
switch (item) {
case 1:
console.log("Pizza")
break
case 2:
console.log("Salada")
break
case 3:
console.log("Macarrão")
break
case 4:
console.log("Bebida")
break
default:
console.log("Opção Inválida")
}