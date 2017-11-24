/*
    Arquivo responsavel pela configuracao do servidor
*/

const bodyParser = require('body-parser')
const express = require('express')

const server = express()
const port = 3003

/* 
    Express utiliza o padrao Chain of responsability
    Ao chegar uma requisicao, mais de um objeto pode
    trata-la, dependendo do seu tipo.
*/

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, () => {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server