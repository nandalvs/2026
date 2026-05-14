const fs = require('fs')

fs.writeFileSync(
    "mensagem.txt",
    "Criei um bloco de texto usando o Node.js"
)
console.log("Arquivo criado com sucesso!")
/*Crie um bloco de  notas com seu nome, turma, curso e filme favorito */
const pessoa = {
    nome: "Fernanda",
    turma: "TDS2",
    curso: "Analise e Desenvolvimento de Sistemas",
    filmeFavorito: "Mulan"
}
fs.writeFileSync(
    "pessoa.json",
    JSON.stringify(pessoa)
)
console.log("Json criado com sucesso!")
/*Crie um arquivo JSON chamado "informações" com seu nome, idade, telefone e email */

//npm install docx -> biblioteca do Word

//importar partes especificas da biblioteca word
const {
    Document, //cria um word
    Packer, //transforma o documento em um word
    Paragraph, //criar paragrafos
    TextRun // adiciona texto ao paragrafo
} = require('docx')

//criando um documento do word
const doc = new Document({
    //pagina -> seção -> paragrafo -> texto
    sections: [{
        children: [
            new Paragraph({
                children: [
                    new TextRun("Arquivo Word")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun("Textos importantes")
                ]
            })
        ]
    }]
})

Packer.toBuffer(doc)
.then((buffer) => {
    fs.writeFileSync("relatorio.docx", buffer)
    console.log("Arquivo Word criado com sucesso!")
    
})