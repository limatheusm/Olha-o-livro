const restful = require('node-restful')
const mongoose = restful.mongoose

const materialSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    isbn: { type: String, required: false },
    heart: { type: Number, default: 0 },
    imgURL: { type: String, required: false },
    local: { type: String, required: true },
    date: { type: String, required: true },
    ownerID: { type: mongoose.Schema.Types.ObjectId, required: true } 
})

module.exports = restful.model('Material', materialSchema)

/*
    title: Livro de Python
    type: Emprestimo
    description:Livro de Python eh muito bom
    imgURL:https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575224083.jpg
    local:UFPB
    date:24/11/2017
    ownerID: 
*/