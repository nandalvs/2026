//Exercício 01 - Pode Dirigir
let idade = Number(prompt("Qual sua idade?"))
let CNH = prompt("Você tem CNH?")
console.log( idade >= 18 || CNH == "sim" )

//Exercício 02 - Aprovação Escolar
console.log("--------------")
let nota = Number(prompt("Qual sua nota?"))
let faltas = Number(prompt("Quantas faltas você teve?"))
console.log(nota >= 6 && faltas <= 10)

//Exercício 03 - Acesso ao Evento
console.log("--------------")
let idd = Number(prompt("Quantos anos você tem?"))
let convite = prompt("Tem convite?")
console.log(idd >= 18 && convite == "sim")

//Exercício 04 - Empréstimo Bancário
let salario = Number(prompt("Qual seu salário?"))
let limpo = prompt("Seu nome está limpo?")
console.log(salario >= 2500 && limpo == "sim")

//Exercício 05 - Entrada
console.log("--------------")
let convit = prompt("Você tem convite?")
let lista = prompt("Seu nome está na lista?")
console.log(lista == "sim" && convit == "sim")


//Exercício 06 - Desconto na Barbearia
console.log("--------------")
let compra = prompt("Qual foi o valor da compra?")
let vip = prompt("Você é cliente VIP?")
console.log(compra > 80 || vip == "sim")

//Exercício 07 - Recuperação Escolar
console.log("--------------")
let maior = prompt("Qual foi a sua nota?")
let extra =  prompt("Você fez algum trabalho extra?")
console.log(maior > 5 && extra == "sim")

//Exercício 08 - Liberação de Sistema
console.log("--------------")
let senha = prompt("Digite a sua senha:")
let digital = prompt("A sua digital é reconhecida?")
console.log(senha == "1234" && digital == "true")

//Exercício 09 - Conta Bloqueada
console.log("--------------")
let bloqueado = true
console.log(!bloqueado)

//Exercício 10 - Cadastro Incompleto
console.log("--------------")
let temCadastro = false
console.log(!temCadastro)

//Exercício 11 - Acesso Completo
console.log("--------------")
let login = prompt("Coloque seu Login:")
let senhas = prompt ("Senha: ")
console.log(login == "ADMIN" && senhas == "senai2026")

//Exercício 12 - Compra Parcelada
console.log("--------------")
let compras = Number(prompt("Qual foi o valor da sua compra?"))
let cartao = prompt("Você possui cartão da loja?")
let nome = prompt("Seu nome está limpo?")
console.log(compras >= 300 && cartao =="sim" && nome == "sim")
//Exercício 13 - Matrícula
console.log("--------------")
let idade1 = Number(prompt("Qual sua idade?"))
let documentos = prompt("Entregou os documentos?")
let pagamento = prompt("Pagou a matrícula?")
console.log(idade1 >= 17 && documentos == "sim" && pagamento == "sim")

//Exercício 14 - Entrada no Clube
console.log("--------------")
let idade2 = Number(prompt("Qual sua idade?"))
let socio = prompt("Você é sócio?")
let convidado = prompt("Você é convidado?")
console.log(idade2 >= 15 && (socio == "sim" || convidado == "sim"))