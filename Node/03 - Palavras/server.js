const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

//CRIA O SERVIDOR USANDO O EXPRESS
const app = express()

//ATIVAR O CORS NO PROJETO
app.use(cors())
//permite qe os dados recebam json
// {palavra: "maçã"}
app.use(express.json())

//procura pelo index.html dentro da pasta public
app.use(express.static("public"))

//CONEXÃO MYSQL
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senai",
    database: "palavras"
})

//Testar a conexão
conexao.connect((erro) => {
   if(erro){
    console.log("Erro na conexão MySQL: " + erro)
   } else {
    console.log("Conectado ao MySQL!")
   }
})

app.post("/salvar", (req, res) => {
    let palavra = req.body.palavra


const sql = "INSERT INTO texto (texto) VALUES (?)"
conexao.query(sql, [palavra], (erro) => {
    if(erro){
        res.send("Erro no insert")
    } else {
        res.send("Palavra salva com sucesso!")
    }
})
})
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})