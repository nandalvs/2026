//SERVER.JS
//NPM INIT -Y INICIA O PROJETO DO NODE
//npm install express 

const express = require('express')
const app = express()

app.get("/", function(req, res) {
    res.send("Servidor funcionando")
})

app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000")
})