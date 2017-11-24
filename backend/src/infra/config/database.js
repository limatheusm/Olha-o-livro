/*
    Arquivo responsavel pela configuracao com o MongoDB
*/

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const URL = 'mongodb://localhost/oolivro'
module.exports = mongoose.connect(URL)