/*
    Mapear objeto para o MongoDB
*/

const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mail: { type: String, required: true },
    phone: { type: String, required: true },
    imgURL: { type: String, required: true },
    from: { type: String, required: true },
    isAdm: { type: Boolean, required: true },
    materials: [{ type: mongoose.Schema.Types.ObjectId, required: false }]
})

module.exports = restful.model('User', userSchema)