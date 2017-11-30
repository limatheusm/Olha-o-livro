/*
    Formatação do schema para os dados de materiais
*/
/*
        "name" : "Vini",
        "password" : "1234",
        "mail" : "vini@mail.com",
        "phone" : "1234-4567",
        "imageURL" : "asdasdasd.jpg",
        "from" : "JP",
        "tokenAuth" : "oolivro"
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: {type: String, required: true},
    mail: { type: String, required: true },
    phone: { type: String, required: true },
    imageURL: { type: String, required: true },
    from: { type: String, required: true },
    tokenAuth: { type: String, required: true },
    materials: [{ type: mongoose.Schema.Types.ObjectId, required: false }]
});

module.exports = mongoose.model('User', userSchema);