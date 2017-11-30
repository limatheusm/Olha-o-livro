/*
    Formatação do schema para os dados de materiais
*/
/*
{
	"title": "PyTOP",
    "type": "Emprestimo",
    "description": "Livro de Python eh muito bom",
    "imgURL": "https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575224083.jpg",
    "local" : "UFPB",
    "date" : "24/12/2017",
    "ownerID":  "5a1b3a7a36c7b026f805b2d9",
	"heart" : 0,
	"isbn" : "11111111",
	"category" : ["python", "programação"]
}
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialSchema = new Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    sharingType : {type: String, required: true},
    description: { type: String, required: true },
    isbn: { type: String, required: false },
    link: { trype: String, required: false},
    heart: { type: Number, default: 0 },
    imageURL: { type: String, required: false },
    local: { type: String, required: true },
    date: { type: String, required: true },
    donator: { type: mongoose.Schema.Types.ObjectId, required: true },
    category: [{ type: String, required: true}],
    available:{ type : Boolean, required: true} 
});

module.exports = mongoose.model('Material', materialSchema);